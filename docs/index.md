---
layout: post
title: "Why?"
---
## The need for speed and simplicity

The way I got to develop `react-native-tailwindcss` as it was a missing part of styling in `react-native`

## Styling files (a lot of clutter) 

My document tree used to look like this:

```
- Components
    - Bottons
        - PrimaryButton
            - PrimaryButton.js
            - PrimaryButtonStyles.js
        - SecondaryButton
            - SecondaryButton.js
            - SecondaryButtonStyles.js
        - LinkButton
            - LinkButton.js
            - LinkButtonStyles.js
```

The amount of components we create increases as we add more component and a stylesheet for every component becomes more and more work. 

Then you try and group the styles in e.g.: `ButtonStyles.js`.

You can adjust the styles from one file that's better but you need to name everything. 
Picking names can be hard and you need to remember what name you need to adjust.

Definitely if you have not worked in the Component for a long time you will need to jump files more then you like.🤬

How good would it look and feel if your document tree looks like this:

``` 
- Components
    - Bottons
        - PrimaryButton.js
        - SecondaryButton.js
        - LinkButton.js
```

You can see in one instance which Buttons are available and where everything belonging to that button lives.

## In-file styling

Maybe some of you already adjust the styles in the file like so:

{% highlight JSX %}
import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'
import React from 'react'

class PrimaryButton extends React.Component {
  static propTypes = {
      children: PropTypes.string,
  }

  render () {
    const { children } = this.props

    return (
      <TouchableHighlight 
        onPress={() => {}} 
        style={styles.buttonContainer} 
        underlayColor={'#dafcf7'}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 4,
    backgroundColor: '#a8f7ed',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
{% endhighlight %}

This makes the file long, so a lot of scrolling needs to be done when you want to change something small.

In my experience This can be difficult to manage defiantly if there are new things added or removed.

As a good developer you want to delete the styles that are not used and after removing it you realize, some styles where also used by another `View`.

## Style element by element

I started doing inline styling this:

{% highlight JSX %}
render() {
    return (
        <View style={[{justifyContent: 'center'}, {alignItems: 'center'}, {padding: 12}]}>
            <Text style={[{textAlign: 'center'}, {fontWeight: 'bold'}]}>
                description of the product
            </Text>
        </View>
    )
}
{% endhighlight %}

My development speed increased a lot because:

 - I did not need to think of a name for the style
 - Changes where quickly done 
 - Removing part was clean, I never left possibly unused code behind.

The only problem was that I was sick of writing all these styles in full...

## TailwindCSS as example

The huge collection of structurally named utility classes in tailwindCSS was great for my use case. (Rising popularity helped as well 😁)

TailwindCSS classes needed converting and after that it was a breeze.

{% highlight JSX %}
render() {
    return (
        <View style={[t.justifyCenter, t.itemsCenter, t.p3]}>
            <Text style={[t.textCenter, t.fontBold]}>
                description of the product
            </Text>
        </View>
    )
}
{% endhighlight %}

[Learn more about classname translations &rarr;](https://tvke.github.io/react-native-tailwindcss/docs/translations)

## Customizing in an instance

Because TailwindCSS relies heavily on the customization of the `tailwind.config.js` file.
 
 
`react-native-tailwindcss` also adjusts to the settings in the `tailwind.config.js` file.
The changes made in the config file will be applied as soon as the `react-native` app is reloaded.


There are a few things in `react-native` that are not supported of different for default css.


These differences are handled as graceful as possible and mostly also adjustable. 


[Learn more about the special cases &rarr;](https://tvke.github.io/react-native-tailwindcss/docs/special-cases)

