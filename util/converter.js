/**
 * Convert class names to style object
 *
 * 'px-10 -mt-20 h-1/2'
 * is equivalent to [t.px10, t._mt20, h1_2]
 *
 * Returns an object instead of array
 * Later styles can override previous and that's what you expect
 * 'px-10 px-16' is equal to 'px-16'
 */
import t from '../tailwind';

const cnToStyleWithCache = () => {
  // save cache object to make the function little bit faster
  const styleCache = {};

  return (classes = '') => {
    let style = {};
    if (styleCache[classes]) return styleCache[classes];

    classes.split(' ').map((className) => {
      if (styleCache[className]) return style = { ...style, ...styleCache[className] };

      let cn = className;
      const isNegative = cn.startsWith('-');
      if (isNegative) cn = cn.replace('-', '');

      cn = cn.replace(/(-\w)/g, m =>  m[1].toUpperCase());
      cn = cn.replace(/\//g, '_');
      cn = (isNegative? '_' : '') + cn;
      if (t[cn]) {
       styleCache[className] = t[cn];
      return style = { ...style, ...styleCache[className] };
      } else {

        console.log(`Unsupported style ${className}`, cn, t[cn]);
      }
    });

    styleCache[classes] = style;
    return style;
  };
};

export default cnToStyleWithCache();
