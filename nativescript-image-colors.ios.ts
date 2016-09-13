import { IColorPalette} from './nativescript-image-colors.common';
import { Image } from 'ui/image';
import { Color } from 'color';

declare const SLColorArt: any;

export class ImageColors {
	public static getColorPalette(image: Image): IColorPalette {
		let returnPalette: IColorPalette = {
			color1: new Color('black'),
			color2: new Color('black'),
			color3: new Color('black'),
		};

		let colors = SLColorArt.alloc().initWithImage(image.ios.image);

		returnPalette.color1 = this.UIDeviceRGBColoSpace(colors.backgroundColor.toString());
		returnPalette.color2 = this.UIDeviceRGBColoSpace(colors.primaryColor.toString());
		returnPalette.color3 = this.UIDeviceRGBColoSpace(colors.secondaryColor.toString());
		return returnPalette;
	}

	private static UIDeviceRGBColoSpace(uicolor: any): Color {
		let rgbStrings: string[] = (<string>uicolor).replace('UIDeviceRGBColorSpace ', '').split(' ');
		let rgbNumbers: number[] = <any>rgbStrings.map(value => parseFloat(value) * 255);
		return new Color(rgbNumbers[0], rgbNumbers[1], rgbNumbers[2], 1);
	}
}

