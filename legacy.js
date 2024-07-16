import { makeDecorator } from "@storybook/addons";
import { generator } from "./decorator";

export const mockDateDecorator = generator(makeDecorator);
