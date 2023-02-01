<picture>
  <source media="(prefers-color-scheme: dark)" srcset="/website/static/img/sdk-header-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="/website/static/img/sdk-header.svg">
  <img alt="Starlight React SDK logo" src="/website/static/img/sdk-header.svg">
</picture>

# Starlight React SDK

This is the official Starlight SDK for React applications, which makes integrating Starlight
content into your apps a real breeze.

You can read the usage guide and the API reference in [its documentation page](https://react.sdk.starlight.sh).

## Quick Start

To quickly start using the React SDK, install it into your project:

```shell
npm install @starlightcms/react-sdk
```

Then, import the SDK and configure which Starlight workspace it should request data from:

```js
import Starlight from '@starlightcms/react-sdk'

Starlight.configure({
  workspace: '1234567890'
})
```

And, finally, start requesting data and rendering content:

```jsx
import Starlight, { VisualContent } from '@starlightcms/react-sdk'

// Listing all entries from the 'posts' model.
const response = Starlight.posts.entries.list()

// Getting content from the 'hello-world' entry.
const response = Starlight.posts.entries.get('hello-world')

// Rendering visual editor content:
<VisualContent content={response.data.data.content} />
```

The SDK is capable of requesting a myriad of different content from your workspaces. Check out 
[the documentation](https://react.sdk.starlight.sh/docs/intro) to learn more.

## JavaScript SDK

If you don't use React, take a look at [the Starlight JavaScript SDK](https://github.com/starlightcms/js-sdk). It
provides most of React SDK's functionality, and you can use it with vanilla JavaScript or any JS framework.

## Issues

If you have any questions or you're facing any issues with the SDK, feel free to [open an issue](https://github.com/starlightcms/react-sdk/issues).
