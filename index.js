import { makeDecorator } from "storybook/preview-api";
import { decorator } from "./decorator.js";

export const mockDateDecorator = decorator(makeDecorator);
