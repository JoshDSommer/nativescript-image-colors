import { ColorPalette, AndroidPalette } from './nativescript-image-colors.common';
import { Image } from 'tns-core-modules/ui/image';
import { Color } from 'tns-core-modules/color';

declare const android: any;
export class ImageColors {

	public static getColorPalette(image: Image): ColorPalette {
		let returnPalette: ColorPalette = {
			color1: new Color('black'),
			color2: new Color('black'),
			color3: new Color('black'),
			AndroidPalette: <any>{},
			IosPalette: null
		};
		let drawable = image.android.getDrawable();

		if (!drawable) {
			return returnPalette;
		}

		let bmp = drawable.getBitmap();
		if (!bmp) {
			return returnPalette;
		}

		let Palette = new android.support.v7.graphics.Palette.from(bmp).generate();
		if (Palette != null) {
			let vibrantSwatch = Palette.getVibrantSwatch();
			let darkVibrantSwatch = Palette.getDarkVibrantSwatch();
			let lightVibrantSwatch = Palette.getLightVibrantSwatch();
			let mutedSwatch = Palette.getMutedSwatch();
			let darkMutedSwatch = Palette.getLightMutedSwatch();
			let lightMutedSwatch = Palette.getDarkMutedSwatch();

			returnPalette.AndroidPalette = <AndroidPalette>{
				vibrant: this.getColor(vibrantSwatch),
				vibrantDark: this.getColor(darkVibrantSwatch),
				vibrantLight: this.getColor(lightVibrantSwatch),
				muted: this.getColor(mutedSwatch),
				mutedDark: this.getColor(darkMutedSwatch),
				mutedLight: this.getColor(lightMutedSwatch),
			}

			if (vibrantSwatch) {
				returnPalette.color1 = returnPalette.AndroidPalette.vibrant;
			} else {
				if (mutedSwatch)
					returnPalette.color1 = returnPalette.AndroidPalette.muted
			}

			if (darkVibrantSwatch) {
				returnPalette.color2 = returnPalette.AndroidPalette.vibrantDark
			} else {
				if (darkMutedSwatch)
					returnPalette.color2 = returnPalette.AndroidPalette.mutedDark
			}

			if (lightVibrantSwatch) {
				returnPalette.color3 = returnPalette.AndroidPalette.vibrantLight
			} else {
				if (lightMutedSwatch) {
					returnPalette.color3 = returnPalette.AndroidPalette.mutedLight
				}
			}
		}

		return returnPalette;
	}

	private static getColor(color: any): Color {
		if (color && color.getRgb()) {
			return new Color(color.getRgb());
		}
		return null;
	}

}