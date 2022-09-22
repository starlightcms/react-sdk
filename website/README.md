# React SDK Documentation

This folder contains the React SDK documentation website. It's built using Docusaurus 2.

You can check out the latest built documentation at
[https://react.sdk.starlight.sh](https://react.sdk.starlight.sh/), which follows the `main` branch.

## Suggestions

If you find any typos or confusing sections in our docs, feel free to 
[open an issue](https://github.com/starlightcms/react-sdk/issues) pointing out the issue. 

You can also use the "Edit this page" button found in all our guide pages. API pages don't have this button, since
they are auto-generated from code, but feel free to [open an issue](https://github.com/starlightcms/react-sdk/issues)
and link the relevant API page instead.

## Why not use Starlight for the content?

Great question!

With our documentation websites, we strive to always provide up-to-date content. Since documentation content is tightly
coupled with code implementation, it makes more sense to keep both in a single place, which makes it easier to update
documentation as part of the development process.

This way, when we commit new code to the repository, we can make sure that we've updated the docs accordingly before
merging any changes into release branches.
