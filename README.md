Laggyload is simply asynchronus image loader it features throw away viewport (scroll) trigger.  
Laggyload（ラギーロード）は、スクロールトリガー式でない単純な非同期画像ローダーです。

> [demo](https://pokkur.github.io/laggyload/)

## Setup

```bash
yarn add laggyload
```

```js
import Laggyload from 'laggyload'
```

## Usage

First of all, look and read [here(original)](https://github.com/tuupola/jquery_lazyload).

### Most simple case

```js
const Laggy = new Laggyload()
Laggy.load()
```

### Optional case

```js
const Laggy = new Laggyload('.async', 1000)

// Do something at after load
const AfterLoadedFunction = (_) => {
    _.classList.add('is-loaded')
    console.log('that\'s all')
}

Laggy.load(AfterLoadedFunction)
```

- 1st augment: Target querySelector (default: _.async_)
- 2nd augment: Delay time until display image (millisecond, default: _100_)

```html
<img class="async" src="loading.gif" data-src="authentic_image.png">
```

- Add your laggyload querySelector to target elements (default: _async_ class)
- Placehold image for `src` attribute
- Authentic image for `data-src` attribute

## Next

- [ ] add attributes option
- [ ] placehold backgroundColor
- [ ] seo

Fork me :D

# License

MIT © Pokkur
