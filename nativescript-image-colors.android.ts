import { IColorPalette} from './nativescript-image-colors.common';
import { Image } from 'ui/image';
import { Color } from 'color';

declare const android: any;

export class ImageColors {

	public static getColorPalette(image: Image): IColorPalette {

		let drawable = image.android.getDrawable();
		let bmp = drawable.getBitmap();
		let returnPalette: IColorPalette = {
			color1 :new Color('black'),
			color2 :new Color('black'),
			color3 :new Color('black'),
		};

		let Palette = new android.support.v7.graphics.Palette.from(bmp).generate();
		if (Palette != null) {
			let vibrantSwatch = Palette.getVibrantSwatch();
			let darkVibrantSwatch = Palette.getDarkVibrantSwatch();
			let lightVibrantSwatch = Palette.getLightVibrantSwatch();
			let mutedSwatch = Palette.getMutedSwatch();
			let darkMutedSwatch = Palette.getLightMutedSwatch();
			let lightMutedSwatch = Palette.getDarkMutedSwatch();

			if (vibrantSwatch) {
				returnPalette.color1 = new Color(vibrantSwatch.getRgb());
			} else {
				if(mutedSwatch)
					returnPalette.color1 = new Color(mutedSwatch.getRgb());
			}

			if (darkVibrantSwatch) {
				returnPalette.color2 = new Color(darkVibrantSwatch.getRgb());
			} else {
				if(darkMutedSwatch)
					returnPalette.color2 = new Color(darkMutedSwatch.getRgb());
			}

			if (lightVibrantSwatch) {
				returnPalette.color3 = new Color(lightVibrantSwatch.getRgb());
			} else {
				if (lightMutedSwatch) {
					returnPalette.color3 = new Color(lightVibrantSwatch.getRgb());
				}
			}
		}

		return returnPalette;
	}

}