<h1 align="center">✨⏰🥶 storybook-mock-date-decorator 🥶⏰✨</h1>

<div align="center">
  <strong>to help freeze time or mock dates in your stories</strong>
</div>
<br />
<br />
<div align="center">

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Github release version](https://img.shields.io/github/tag/bitttttten/storybook-mock-date-decorator.svg)](https://github.com/bitttttten/storybook-mock-date-decorator/releases)
[![Commits since release](https://img.shields.io/github/commits-since/bitttttten/storybook-mock-date-decorator/v3.0.0.svg)](https://github.com/bitttttten/storybook-mock-date-decorator/compare/v3.0.0...main)
[![npm release version](https://img.shields.io/npm/v/storybook-mock-date-decorator.svg)](https://www.npmjs.com/package/storybook-mock-date-decorator)

</div>

## Install

### For Storybook 9.0+

```sh
npm i storybook-mock-date-decorator@3 -D
```

### For Storybook 6, 7, or 8

```sh
npm i storybook-mock-date-decorator@2 -D
```

**Note:** If you're using Storybook 6, 7, or 8, you must use the `/legacy` import path. Please refer to the [v2.x README](https://github.com/bitttttten/storybook-mock-date-decorator/blob/v2.0.6/README.md) for complete usage instructions.

## API

Once the decorator has been added to your storybook, you can configure the date with the parameter name `date` inside your stories.

## Usage

### Storybook 9

```js
import { mockDateDecorator } from "storybook-mock-date-decorator";

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [mockDateDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
      },
    },
  },
};

export default preview;
```

```js
// stories/Button.stories.js

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    date: new Date(1999, 10, 24),
  },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
  parameters: {
    date: new Date(2021, 1, 1),
  }
};
```

## Story Examples

Then inside your storybook, you can use the following code to mock/freeze the date for all stories of a component:

```js
import { Meta } from "@storybook/react"
import { YourComponent } from "./your-component"

export default {
	title: "YourComponent",
	component: YourComponent,
	parameters: {
		date: new Date("March 10, 2021 10:00:00"),
	},
} as Meta

```

Or you can mock/freeze the date for a specific story:

```js
import { Meta } from "@storybook/react"
import { YourComponent } from "./your-component"

export default {
	title: "YourComponent",
	component: YourComponent,
} as Meta

export function Default() {
    return <div>hello world at {new Date().toLocaleString()}</div>
}

export function WithMockedDate() {
    return <div>hello world! with mocked date of March 10th at {new Date().toLocaleString()}</div>
}
WithMockedDate.parameters = {
    date: new Date("March 10, 2021 10:00:00"),
}

```

## Version Compatibility

| Storybook Version | Package Version | Import Path | Documentation |
|-------------------|-----------------|-------------|---------------|
| 9.0+ | `@3` | `storybook-mock-date-decorator` | This README |
| 8.x | `@2` | `storybook-mock-date-decorator/legacy` | [v2.x README](https://github.com/bitttttten/storybook-mock-date-decorator/blob/v2.0.6/README.md) |
| 6.x, 7.x | `@2` | `storybook-mock-date-decorator/legacy` | [v2.x README](https://github.com/bitttttten/storybook-mock-date-decorator/blob/v2.0.6/README.md) |

**Important:** For Storybook 6, 7, and 8, you must use the `/legacy` import path and follow the setup instructions in the [v2.x documentation](https://github.com/bitttttten/storybook-mock-date-decorator/blob/v2.0.6/README.md).
