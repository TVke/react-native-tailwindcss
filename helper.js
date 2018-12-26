export default {
  translateValues (content) {
    let translatedValue = content

    if (translatedValue === 'transparent') {
      return 'rgba(0,0,0,0)'
    }

    if (typeof translatedValue !== 'string') {
      return translatedValue
    }

    if (content.search(/^-?[0-9]*(\.[0-9]+)?px$/) !== -1) {
      translatedValue = content.replace('px', '')

      return parseInt(translatedValue)
    }

    if (content.search(/^-?[0-9]*(\.[0-9]+)?rem$/) !== -1) {
      translatedValue = content.replace('rem', '')

      translatedValue = parseFloat(translatedValue) * 16

      return Math.round(translatedValue)
    }

    if (content.search(/^-?[0-9]*(\.[0-9]+)?em$/) !== -1) {
      translatedValue = content.replace('em', '')

      translatedValue = parseFloat(translatedValue) * 16

      return Math.round(translatedValue)
    }

    if (content.search(/^-?[0-9]+$/) !== -1) {
      return parseInt(translatedValue)
    }

    if (content.search(/-?\.[0-9]+$/) !== -1) {
      return parseFloat(translatedValue)
    }

    return translatedValue
  },

  translateKeys (name, prefix = '') {
    let translatedKey = name

    if (typeof name !== 'string') {
      return translatedKey
    }

    if (name.search(/\//) !== -1) {
      translatedKey = `${prefix}${translatedKey.replace('/', '_')}`
    }

    if (name.search('-') !== -1) {
      translatedKey = name.replace(/-([a-z])/g, (result) => {return result[1].toUpperCase()})
    }

    if (name.search(/^[0-9]+$/g) !== -1) {
      translatedKey = `${prefix}${name}`
    }

    if (name.search(/^-[0-9]/) !== -1) {
      translatedKey = `${prefix}${name.replace('-', '_')}`
    }

    if (name === 'default') {
      translatedKey = prefix
    }

    if (prefix !== '' && translatedKey.search(prefix) === -1) {
      translatedKey = translatedKey.replace(/^([a-z])/g, (result) => {return result.toUpperCase()})

      translatedKey = `${prefix}${translatedKey}`
    }

    return translatedKey
  },

  getShadowValues (content) {
    let results, color, elevation

    if (content === 'none' || content.search(/inset/) !== -1) {
      return {
        color: 'rgba(0,0,0,0)',
        offset: {width: 0, height: 0},
        radius: 0,
        opacity: 0,
        elevation: 0,
      }
    }

    results = content.match(/^([0-9]+)p?x?\s([0-9]+)p?x?\s([0-9]+)p?x?\s([0-9]+)?p?x?\s?(rgba?\(.+?\))?(#[a-zA-Z0-9]{3,8})?/)

    elevation = content.match(/,(?:\s+)?(-?[0-9]+)$/)

    color = results[5]

    elevation = elevation ? this.translateValues(elevation[1]) : this.translateValues(results[3]) / 2

    if (typeof color === 'undefined') {
      color = results[6]
    }

    return {
      color: color,
      offset: {
        width: this.translateValues(results[1]),
        height: this.translateValues(results[2])
      },
      radius: this.translateValues(results[3]),
      opacity: 1,
      elevation: elevation,
    }
  }
}
