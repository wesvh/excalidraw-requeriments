# Excalidraw

**Excalidraw** is exported as a component to directly embed in your projects.

## Fork Information

This is a fork of the original Excalidraw project, modified to meet specific needs. It is open to any suggestions or improvements.

## New Features

We have exposed the function `addElementsFromPasteOrLibrary` in `<Excalidraw excalidrawAPI={(api) => setExcalidrawAPI(api)} />`. This allows you to add elements from outside the context of Excalidraw, making integration easier.

Additionally, we have exposed the function `convertMermaidToExcalidraw`, which allows you to provide a Mermaid diagram and returns the necessary elements to be injected and edited in Excalidraw with the `addElementsFromPasteOrLibrary` API.

## Installation

You can use `npm`

```bash
npm install react react-dom excalidrawbasic
```

or via `yarn`

```bash
yarn add react react-dom excalidrawbasic
```

After installation you will see a folder `excalidraw-assets` and `excalidraw-assets-dev` in `dist` directory which contains the assets needed for this app in prod and dev mode respectively.

Move the folder `excalidraw-assets` and `excalidraw-assets-dev` to the path where your assets are served.

By default it will try to load the files from [`https://unpkg.com/excalidrawbasic/dist/`](https://unpkg.com/excalidrawbasic/dist)

If you want to load assets from a different path you can set a variable `window.EXCALIDRAW_ASSET_PATH` depending on environment (for example if you have different URL's for dev and prod) to the url from where you want to load the assets.

### Note

**If you don't want to wait for the next stable release and try out the unreleased changes you can use `excalidrawbasic@next`.**
