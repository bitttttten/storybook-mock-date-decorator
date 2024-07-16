import { MakeDecoratorResult } from "@storybook/addons";

// This module is for Storybook v8
declare module "storybook-mock-date-decorator" {
  export const mockDateDecorator: MakeDecoratorResult;
}

// This module is for Storybook v6 and v7
declare module "storybook-mock-date-decorator/legacy" {
  export const mockDateDecorator: MakeDecoratorResult;
}
