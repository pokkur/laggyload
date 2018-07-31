Fork me :D

## Usage

```javascript
const Async = new Laggyload('.async', 1000)

const CallbackSample = (_) => {
    _.classList.add('is-loaded')
    console.log('that\'s all')
}

Async.main(CallbackSample)
```

## Setup

```
yarn add laggyload
```

## Next

- [ ] add attributes option
- [ ] placehold backgroundColor

# License

MIT © Pokkur
