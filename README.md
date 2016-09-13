### NativeScript Image Colors
[![npm](https://img.shields.io/npm/v/nativescript-image-colors.svg)](https://www.npmjs.com/package/nativescript-image-colors)
[![npm](https://img.shields.io/npm/dt/nativescript-image-colors.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-image-colors)


![NativeScript image colors](https://raw.githubusercontent.com/TheOriginalJosh/nativescript-image-colors/master/screenshot.png)


## Example

```typescript
import { ImageColors  } from 'nativescript-image-colors/nativescript-image-colors';



let image = page.getViewById<Image>(`image`);
colors = ImageColors.getColorPalette(image);

colors.color1;
colors.color2;
colors.color3;

```

## Usage
	returns a `ColorPalette` that has 3 color properties `color1`, `color2`, and `color3`. the Color Palette also contains a `AndroidPalette` and `IosPalette` object properties. The `AndroidPalette` has properties that correspond with https://developer.android.com/reference/android/support/v7/graphics/Palette.html. The `IosPalette` object corresponds with the `SLColorArt` obeject from the https://cocoapods.org/?q=ColorArt object. `ColorPalette` is a composite of these two so you don't have to do null and platform checks. please note the colors will not be consistent between platforms since the algorithms used are different.

### Libraries used:

Android: https://developer.android.com/reference/android/support/v7/graphics/Palette.html
iOS: https://github.com/panicinc/ColorArt
