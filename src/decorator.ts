import MockDate from 'mockdate';
import type { DecoratorFunction } from 'storybook/internal/types';
import { makeDecorator } from 'storybook/preview-api';

export const mockDateDecorator: DecoratorFunction = makeDecorator({
  name: 'withDate',
  parameterName: 'date',
  wrapper: (storyFn, context, { parameters: date }) => {
    MockDate.reset();
    if (date instanceof Date) {
      MockDate.set(date);
    }
    return storyFn(context);
  },
});
