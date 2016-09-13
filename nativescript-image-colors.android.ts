import { ColorPalette, AndroidPalette} from './nativescript-image-colors.common';
import { Image } from 'ui/image';
import { Color } from 'color';

declare const android: any;

export class ImageColors {

	public static getColorPalette(image: Image): ColorPalette {

		let drawable = image.android.getDrawable();
		let bmp = drawable.getBitmap();
		let returnPalette: ColorPalette = {
			color1: new Color('black'),
			color2: new Color('black'),
			color3: new Color('black'),
			AndroidPalette: <any>{},
			IosPalette: null
		};

		let Palette = new android.support.v7.graphics.Palette.from(bmp).generate();
		if (Palette != null) {
			let vibrantSwatch = Palette.getVibrantSwatch();
			let darkVibrantSwatch = Palette.getDarkVibrantSwatch();
			let lightVibrantSwatch = Palette.getLightVibrantSwatch();
			let mutedSwatch = Palette.getMutedSwatch();
			let darkMutedSwatch = Palette.getLightMutedSwatch();
			let lightMutedSwatch = Palette.getDarkMutedSwatch();

			returnPalette.AndroidPalette = <AndroidPalette>{
				vibrant: this.getColor(vibrantSwatch.getRgb()),
				vibrantDark: this.getColor(darkVibrantSwatch.getRgb()),
				vibrantLight: this.getColor(lightVibrantSwatch.getRgb()),
				muted: this.getColor(mutedSwatch.getRgb()),
				mutedDark: this.getColor(darkMutedSwatch.getRgb()),
				mutedLight: this.getColor(lightMutedSwatch.getRgb()),
			}

			if (vibrantSwatch) {
				returnPalette.color1 = returnPalette.AndroidPalette.vibrant;
			} else {
				if (mutedSwatch)
					returnPalette.color1 = returnPalette.AndroidPalette.muted
			}

			if (darkVibrantSwatch) {
				returnPalette.color2 =returnPalette.AndroidPalette.vibrantDark
			} else {
				if (darkMutedSwatch)
					returnPalette.color2 =returnPalette.AndroidPalette.mutedDark
			}

			if (lightVibrantSwatch) {
				returnPalette.color3 =returnPalette.AndroidPalette.vibrantLight
			} else {
				if (lightMutedSwatch) {
					returnPalette.color3 =returnPalette.AndroidPalette.mutedLight
				}
			}
		}

		return returnPalette;
	}

	private static getColor(rgb: any): Color {
		if (rgb) {
			return new Color(rgb);
		}
		return null;
	}

}