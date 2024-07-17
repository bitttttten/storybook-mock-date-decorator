import { makeDecorator } from "@storybook/addons";
import { decorator } from "./decorator";

export const mockDateDecorator = decorator(makeDecorator);
