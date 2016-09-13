### NativeScript Image Colors
[![npm](https://img.shields.io/npm/v/nativescript-image-colors.svg)](https://www.npmjs.com/package/nativescript-image-colors)
[![npm](https://img.shields.io/npm/dt/nativescript-image-colors.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-image-colors)


![NativeScript image colors](https://raw.githubusercontent.com/TheOriginalJosh/nativescript-image-colors/master/screenshot.png)


```typescript
import { ImageColors  } from 'nativescript-image-colors/nativescript-image-colors';



let image = page.getViewById<Image>(`image`);
colors = ImageColors.getColorPalette(image);

colors.color1;
colors.color2;
colors.color3;

```

returns a `IColorPalette` that has 3 color properties `color1`, `color2`, and `color3`

### Libraries used:

iOS based on: https://github.com/panicinc/ColorArt
