<h1 align="center">
 🎸 Instant Guitar Chord Positions Search, powered by Typesense - React Native
</h1>
<div align="center">
  <div><h3>Other versions</h3></div>
  <a href="https://github.com/typesense/showcase-guitar-chords-search-nuxt-js">NuxtJS</a> |
  <a href="https://github.com/typesense/showcase-guitar-chords-search-next-js">NextJS</a> |
  <a href="https://github.com/typesense/showcase-guitar-chords-search-angular">Angular 15</a> |
  <a href="https://github.com/typesense/showcase-guitar-chords-search-vanilla-js">Vanilla JS</a> |
  <a href="https://github.com/typesense/showcase-guitar-chords-search-astro">Astro</a> |
  <a href="https://github.com/typesense/showcase-guitar-chords-search-solid-js">SolidJS</a> |
  <a href="https://github.com/typesense/showcase-guitar-chords-search-remix">Remix</a> |
  <a href="https://github.com/typesense/showcase-guitar-chords-search-svelte-kit">Sveltekit</a> |
  <a href="https://github.com/typesense/showcase-guitar-chords-search-qwik">Qwik</a> |
  <a href="https://github.com/typesense/showcase-guitar-chords-search-react-native">React Native</a>
</div>

## Tech Stack

- <a href="https://github.com/typesense/typesense" target="_blank">Typesense</a>
- React Native + Expo Go
- Typescript
- [typesense-instantsearch-adapter](https://github.com/typesense/typesense-instantsearch-adapter) + react-instantsearch-core

All make for a blazingly fast search experience 🔥🔥🔥

The guitar chord dataset & chord svg generation is from <a href="https://github.com/tombatossals/chords-db" target="_blank">tombatossals</a> which contains 2141 chord shapes of 552 chords.

## Project Structure

```bash
/
├── scripts/
│   ├── data/
│   │   ├── guitar.json
│   │   └── schema.json
│   └── indexTypesense.ts # script that index data from guitar.json into typesense server
├── src/
│    ├── components/
│    │   └── UI components...
│    └── utils/
│        ├── reactChords.ts # draw guitar chord svg
│        └── typesense.ts # typesense-instantsearch-adapter config
└── App.tsx # guitar chords search
```

## Development

To run this project locally, make sure you have docker and nodejs, install the dependencies and start the local server:

Installation

```shell
git clone https://github.com/typesense/showcase-guitar-chords-search-react-native.git

cd showcase-guitar-chords-search-react-native

npm i
```

Start typesense server

```shell
npm run start:typesense # or: docker compose up
```

Index data into typesense

```shell
npm run index:typesense
```

Start the dev web app

```shell
npm run start
# or
npm run android
npm run ios
npm run web
```

## Deployment

Set env variables to point the app to the Typesense Cluster

```env
EXPO_PUBLIC_TYPESENSE_SEARCH_ONLY_API_KEY=xxx
EXPO_PUBLIC_TYPESENSE_HOST=xxx.typesense.net
EXPO_PUBLIC_TYPESENSE_PORT=443
EXPO_PUBLIC_TYPESENSE_PROTOCOL=https
```
