import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { action } from '@storybook/addon-actions';
import * as knobs from '@storybook/addon-knobs';

addDecorator(knobs.withKnobs);
const demoReq = require.context('../lib/components', true, /^\.\/.*\/demo\/.*\.story\.js$/);
const readmeReq = require.context('../lib/components', true, /README.md$/);

demoReq.keys().forEach(filename => {
	const match = filename.match(/^\.\/(.*)\/demo\/(.*)\.story\.js$/);
	const Comp = demoReq(filename).default;
	const readme = readmeReq.keys().includes(`./${match[1]}/README.md`)
		? readmeReq(`./${match[1]}/README.md`)
		: 'PLEASE ADD README';

	const helperProps = {
		logger: action,
		propsMapping: {
			text: knobs.text,
			boolean: knobs.boolean,
			number: knobs.number,
			color: knobs.color,
			object: knobs.object,
			array: knobs.array,
			date: knobs.date,
			select: knobs.selectV2,
			button: knobs.button
		}
	};

	storiesOf(match[1], module)
		.addDecorator(withReadme(readme))
		.add(match[2], () => <Comp {...helperProps} />);
});
