import MockDate from "mockdate";

export const decorator = makeDecorator => makeDecorator({
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
