<h1 align="center">✨⏰🥶 storybook-mock-date-decorator 🥶⏰✨</h1>

<div align="center">
  <strong>to help freeze time or mock dates in your stories</strong>
</div>
<br />
<br />
<div align="center">

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Github release version](https://img.shields.io/github/tag/bitttttten/storybook-mock-date-decorator.svg)](https://github.com/bitttttten/storybook-mock-date-decorator/releases)
[![Commits since release](https://img.shields.io/github/commits-since/bitttttten/storybook-mock-date-decorator/v2.0.2.svg)](https://github.com/bitttttten/storybook-mock-date-decorator/compare/v2.0.2...main)
[![npm release version](https://img.shields.io/npm/v/storybook-mock-date-decorator.svg)](https://www.npmjs.com/package/storybook-mock-date-decorator)

</div>

## Install

```sh
npm i storybook-mock-date-decorator
```

## API

Once the decorator has been added to your storybook, you can configure the date with the parameter name `date` inside your stories.

## Usage

The syntax here is valid for each respective Storybook version. You may want to check the [official docs](https://storybook.js.org/basics/writing-stories/) if you are on a different version or a new one has come out since the last update.

### Storybook 8

```js
// .storybook/preview.js
import { mockDateDecorator } from "storybook-mock-date-decorator";

export let decorators = [mockDateDecorator];
```

### Storybook 7

```js
// .storybook/preview.js
import { mockDateDecorator } from "storybook-mock-date-decorator/legacy";

export let decorators = [mockDateDecorator];
```

### Storybook 6

```js
// .storybook/preview.js
import { addDecorator } from "@storybook/react";
import { mockDateDecorator } from "storybook-mock-date-decorator/legacy";

addDecorator(mockDateDecorator);
```

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
