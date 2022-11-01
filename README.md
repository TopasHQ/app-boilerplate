# Topas App Boilerplate

A boilerplate project to kickstart your own custom Topas City app.

For inspiration and reference, see [Octa Blaster](https://github.com/TopasHQ/octa-blaster).

# Table of Contents

- [General guidelines](#general-guidelines)
- [Adding your own models](#adding-your-own-models)
- [List of mocks](#list-of-mocks)
  - [Tipper](#tipper)
  - [getAssetPath](#getassetpath)
  - [postScore](#postscore)
  - [useErrorStore](#useerrorstore)
  - [useUserStore](#useuserstore)
  - [useSceneStore](#usescenestore)
- [License](#license)

## General guidelines

Rename `my-app` located in the `src` folder to the name of your app and start expanding on the code inside of it.

Helpful packages that will speed up development, such as [React Three Drei](https://www.npmjs.com/package/@react-three/drei) and the [Topas Toolkit](https://www.npmjs.com/package/@topashq/toolkit), are preinstalled. See if any helper or tool already exists in there before developing your own.

Keep all of your **code** inside the folder of your game, including any custom tools, types, assets, etc.

Mock functionality, such as `ErrorContext` and `UserContext` are present in the boilerplate, in case you want to hook into the functionality of the Topas City VR application. See [list of mocks](#list-of-mocks) for more info.

Avoid adding new dependencies where possible.

## Adding your own models

If you want to add your own models, please follow these steps:

> There is an example model loaded in the boilerplate for reference.

1. Create a model in the software of your preference and export it to GLTF.
2. Convert the GLTF to a React component with [gltfjsx](https://github.com/pmndrs/gltfjsx). Example command: `npx gltfjsx --types my-model.tsx`
3. Copy the GLTF to the public folder. Make sure to adhere to the folder structure. Eg: only place assets for your game in its own folder (`./public/games/my-app/`).
4. Edit the React component so that the path of the GLTF is loaded with the `getAssetPath` helper. This ensures proper functionality when the application is pushed to production.
5. Use the React component in your project (don't forget to place it inside the folder of your game).

## List of mocks

Below is a list of mock functionality that you can use in your app. With these mocks you can hook into the functionality of the Topas City VR application. All mocks are included in the example `MyApp` app as reference.

### Tipper

Brings up the Tipper in the VR app. This allows users to tip the creator of the app.

### getAssetPath

Ensures your asset is loaded from the correct location in all environments (development, production, etc). Use in combination with `useGLTF` in your `gltfjsx` files (see `PlantModel.tsx` as an example).

### postScore

A utility that posts a score to the leaderboard of your app (only applicable for _games_).

### useErrorStore

Returns a `handleError` function that allows you to display error messages in the VR application.

### useUserStore

Returns the `user` and `credentials` objects, required for the `postScore` utility.

### useSceneStore

Returns a function that allows you to change the scene (eg: to exit your app).

## License

[MIT](./LICENSE)
