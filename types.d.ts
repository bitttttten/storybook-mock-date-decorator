/**
 * This module is for Storybook v9
 * @module storybook-mock-date-decorator
 */
declare module "storybook-mock-date-decorator" {
  import { makeDecorator } from "storybook/preview-api";
  
  /**
   * Mock Date Decorator for Storybook v9
   * @type {ReturnType<typeof makeDecorator>}
   */
  export const mockDateDecorator: ReturnType<typeof makeDecorator>;
}