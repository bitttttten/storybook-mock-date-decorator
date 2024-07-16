import { makeDecorator } from "@storybook/preview-api";
import { decorator } from "./decorator";

export const mockDateDecorator = decorator(makeDecorator);
