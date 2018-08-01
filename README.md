Laggyload is simply asynchronus lazyloader.
It features thhrow away viewport (scroll) trigger.

## Usage

First of all, look and read [here(original)](https://github.com/tuupola/jquery_lazyload).

```javascript
const Async = new Laggyload('.async', 1000)

// Callback example
const CallbackSample = (_) => {
    _.classList.add('is-loaded')
    console.log('that\'s all')
}

Async.main(CallbackSample)
```

- 1st augument: Target querySelector (default: _.async_)
- 2nd augument: Delay time until display image (millisecond, default: _100_)

```html
<img class="async" src="loading.gif" data-src="authentic_image.png">
```

- Add your laggyload querySelector to target elements (default: _async_ class)
- Placehold image for `src` attribute
- Authentic image for `data-src` attribute

## Setup

```
yarn add laggyload
```

## Next

- [ ] add attributes option
- [ ] placehold backgroundColor

Fork me :D

# License

MIT © Pokkur
