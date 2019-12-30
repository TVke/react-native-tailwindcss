---
layout: post
title: "Flexible styling"
description: "A reference for the way you can style components when they use a different styling system."
---

## Style plugin components

`react-native-tailwindcss` was made as flexible as possible so styling components from someone else is possible in a way that is familiar.

### color values

As the color values are sometimes needed as a string there is a simple way to get the colors specified in your config file.

Use the `color` or `colors` object to get the color values. (e.g.: `color.red500` gives `'#f56565'`)

{% highlight JSX %}
import { TouchableHighlight } from 'react-native'
import { color, t } from 'react-native-tailwindcss'

render () {
  return (
    <TouchableHighlight style={[t.rounded, t.p4, t.bgRed500]} onPress={onPress} underlayColor={color.red400}>
      <Text style={[t.textCenter]}>button</Text>
    </TouchableHighlight>
  )
}
{% endhighlight %}

### access to styles

When there is access to the styles prop it is as usual.

{% highlight JSX %}
import { TextInputMask } from 'react-native-masked-text'
import { t } from 'react-native-tailwindcss'

render () {
  return (
    <TextInputMask
      type='datetime'
      options={{format: 'DD/MM/YYYY'}}
      keyboardType={numpad}
      value={value}
      onChangeText={onChangeText}
      style={[t.flex1, t.textSm, t.bgGray500, t.textGray900]}
    />
  )
}
{% endhighlight %}

### access to styles by name

When you can access the styles by specified names, you can use the `...` operator ([spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)) to add styles in a familiar way.
It's a bit like the `@apply` of tailwind CSS.

{% highlight JSX %}
import RNPickerSelect from 'react-native-picker-select'
import { t } from 'react-native-tailwindcss'

render () {
  return (
    <RNPickerSelect
      useNativeAndroidPickerStyle={false}
      onValueChange={onValueChange}
      items={items}
      style={style}
    />
  )
}

const style = StyleSheet.create({
  inputIOS: {
    ...t.flex1,
    ...t.textSm,
    ...t.textGray900,
    ...t.bgGray500,
    ...t.rounded,
  },
  inputAndroid: {
    ...t.pB0,
    ...t.pT0,
    ...t.textSm,
    ...t.textGray900,
    ...t.bgGray500,
  },
})
{% endhighlight %}
