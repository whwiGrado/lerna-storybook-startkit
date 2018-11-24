import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';
import { withViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addDecorator(
  withOptions({
    name: 'UI & Biz Components',
    url: '#',
    showStoriesPanel: true,
    showAddonPanel: true,
    addonPanelInRight: true,
    selectedAddonPanel: undefined,
  })
);
addDecorator(withInfo({
  propTables: []
}));

const customViewports = {
  '1440 x 900': {
    name: '1440 x 900',
    styles: {
      width: '1440px',
      height: '900px'
    }
  }
};

addDecorator(withViewport({
  viewports: {
    ...INITIAL_VIEWPORTS,
    ...customViewports
  }
}));

function loadStories() {
  require('ui/lib/index.story')
}



configure(loadStories, module);