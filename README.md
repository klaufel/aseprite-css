<h1 align="center">
  <img src="https://user-images.githubusercontent.com/1427623/104043023-7d7d8d80-51db-11eb-9b13-bdfd0318af90.png"  alt="Aseprite logo" width="60" height="64">
  <br/>
  Aseprite CSS
  <br/><br/>
</h1>

<h4 align="center">
  Generated pixel art with CSS box shadow property based a svg image exported by <a href="https://www.aseprite.org/">Aseprite</a>
</h4>

<p align="center">
  <a href="#fire-overview">Overview</a> •
  <a href="#rocket-getting-started">Usage</a>
</p>

<p align="center">
  <br/>
  <img src="https://user-images.githubusercontent.com/1427623/104041446-5625c100-51d9-11eb-85e1-349feab1d787.gif" width="656" height="410">
  <br/>
</p>

## :fire: Overview

CSS is awesome! Dot!

## :rocket: Usage

### 1. Export Aseprite SVG image

Save as "SVG" image file in your aseprite.

### 2. Install `aseprite-css` globally

```sh
npm install aseprite-css -g
```

### 3. Generate CSS pixel art

```sh
aseprite-css [source] <size>
```

#### Example

_Default:_

```sh
aseprite-css my-pixelart.svg
```

_With custom pixel size:_

```sh
aseprite-css my-pixelart.svg 10
```

#### Ouput

```css
html {
  width: 1px;
  height: 1px;
  box-shadow: 5px 1px 0 #000000, 6px 1px 0 #000000, 4px 2px 0 #000000, 5px 2px 0
      #ffffff, 6px 2px 0 #ffffff, 7px 2px 0 #000000, 3px 3px 0 #000000, 4px 3px
      0 #5b6ee1, 5px 3px 0 #ffffff, 6px 3px 0 #ffffff, 7px 3px 0 #ffffff, 8px
      3px 0 #000000, 3px 4px 0 #000000, 4px 4px 0 #5b6ee1, 5px 4px 0 #ffffff, 6px
      4px 0 #bd9f81, 7px 4px 0 #ffffff, 8px 4px 0 #ffffff, 9px 4px 0 #000000, 3px
      5px 0 #000000, 4px 5px 0 #5b6ee1, 5px 5px 0 #ffffff, 6px 5px 0 #bd9f81, 7px
      5px 0 #bd9f81, 8px 5px 0 #ffffff, 9px 5px 0 #ffffff, 10px 5px 0 #000000, 3px
      6px 0 #000000, 4px 6px 0 #5b6ee1, 5px 6px 0 #ffffff, 6px 6px 0 #bd9f81, 7px
      6px 0 #e5bd94, 8px 6px 0 #bd9f81, 9px 6px 0 #ffffff, 10px 6px 0 #ffffff, 11px
      6px 0 #000000, 3px 7px 0 #000000, 4px 7px 0 #5b6ee1, 5px 7px 0 #ffffff, 6px
      7px 0 #e5bd94, 7px 7px 0 #ffffff, 8px 7px 0 #ffffff, 9px 7px 0 #bd9f81, 10px
      7px 0 #ffffff, 11px 7px 0 #ffffff, 12px 7px 0 #000000, 3px 8px 0 #000000, 4px
      8px 0 #5b6ee1, 5px 8px 0 #ffffff, 6px 8px 0 #e5bd94, 7px 8px 0 #ffffff, 8px
      8px 0 #ffffff, 9px 8px 0 #ffffff, 10px 8px 0 #bd9f81, 11px 8px 0 #ffffff, 12px
      8px 0 #ffffff, 13px 8px 0 #000000, 3px 9px 0 #000000, 4px 9px 0 #5b6ee1;
}
```

## License

MIT © [klaufel](https://github.com/klaufel)
