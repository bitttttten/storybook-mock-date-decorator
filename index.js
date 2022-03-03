import { makeDecorator } from "@storybook/addons";
import MockDate from "mockdate";

export const mockDateDecorator = makeDecorator({
  name: "withDate",
  parameterName: "date",
  wrapper: (storyFn, context, { parameters: date }) => {
    MockDate.reset();
    if (date instanceof Date) {
      MockDate.set(date);
    }
    return storyFn(context);
  },
});
