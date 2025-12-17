import { definePreviewAddon } from 'storybook/internal/csf';

import addonAnnotations from './preview';

// Support importing the addon via CSF factories
export default () =>
  definePreviewAddon<{
    parameters: {
      date?: Date;
    };
  }>(addonAnnotations);

// For legacy usage
export { mockDateDecorator } from './decorator';
