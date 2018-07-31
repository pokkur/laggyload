/* eslint-disable no-console */
const Laggyload = require('../lib').default
const Async = new Laggyload('.async', 1000)

const CallbackSample = (_) => {
    _.classList.add('is-loaded')
    console.log('that\'s all')
}

Async.main(CallbackSample)
