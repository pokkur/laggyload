/* global document */
class Laggyload {
    constructor(target = '.async', delay = 100) {
        this.Items = document.querySelectorAll(target)
        this.delay = delay
    }

    main(callback = null) {
        if (this.Items.length > 0) {
            Array.prototype.forEach.call(this.Items, (_) => {
                const img = new Image() // eslint-disable-line no-undef
                img.src = _.getAttribute('data-src')
                img.onload = () => {
                    setTimeout(() => {
                        _.setAttribute('src', img.src)

                        if (callback != null) callback(_)
                    }, this.delay)
                }
            })
        } else {
            console.log('Laggyload target-elements missing.') // eslint-disable-line no-console
        }
    }
}

export default Laggyload
