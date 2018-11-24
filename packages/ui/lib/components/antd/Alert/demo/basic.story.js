import React, { Fragment } from 'react';
import {
	Alert
} from 'ui';
import { Container } from './style';

const messages = {
	info: '消息提示文案',
	success: '成功提示文案',
	error: '错误提示文案',
	warning: '警告提示文案',
};

const Basic = ({ logger }) => (
	<Container>
		<Alert message={messages.info} />
		<br />
		<br />
		<Alert message={messages.success} type="success" />
		<br />
		<Alert message={messages.info} type="info" />
		<br />
		<Alert message={messages.error} type="error" />
		<br />
		<Alert message={messages.warning} type="warning" />
		<br />
		<br />
		<Alert message={messages.success} type="success" closable />
		<br />
		<Alert message={messages.info} type="info" closable />
		<br />
		<Alert message={messages.error} type="error" closable />
		<br />
		<Alert message={messages.warning} type="warning" closable />
		<br />
		<Alert message="some message with additional description and informations about copywriting, which cannot be display in one line" type="info" closable />
	</Container>
);

export default Basic;
