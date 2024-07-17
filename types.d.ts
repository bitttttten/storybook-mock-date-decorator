/**
 * This module is for Storybook v8
 * @module storybook-mock-date-decorator
 */
declare module "storybook-mock-date-decorator" {
  import { makeDecorator } from "@storybook/preview-api";
  
  /**
   * Mock Date Decorator for Storybook v8
   * @type {ReturnType<typeof makeDecorator>}
   */
  export const mockDateDecorator: ReturnType<typeof makeDecorator>;
}

/**
 * This module is for Storybook v6 and v7
 * @module storybook-mock-date-decorator/legacy
 */
declare module "storybook-mock-date-decorator/legacy" {
  import { MakeDecoratorResult } from "@storybook/addons";
  
  /**
   * Mock Date Decorator for Storybook v6 and v7
   * @type {MakeDecoratorResult}
   */
  export const mockDateDecorator: MakeDecoratorResult;
}