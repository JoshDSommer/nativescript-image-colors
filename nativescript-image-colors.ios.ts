import { ColorPalette, IosPalette} from './nativescript-image-colors.common';
import { Image } from 'tns-core-modules/ui/image';
import { Color } from 'tns-core-modules/color';

declare const SLColorArt: any;

export class ImageColors {
	public static getColorPalette(image: Image): ColorPalette {
		let returnPalette: ColorPalette = {
			color1: new Color('black'),
			color2: new Color('black'),
			color3: new Color('black'),
			AndroidPalette: null,
			IosPalette: <any>{}
		};

		let colors = SLColorArt.alloc().initWithImage(image.ios.image);

		returnPalette.color1 = this.UIDeviceRGBColoSpace(colors.backgroundColor.toString());
		returnPalette.color2 = this.UIDeviceRGBColoSpace(colors.primaryColor.toString());
		returnPalette.color3 = this.UIDeviceRGBColoSpace(colors.secondaryColor.toString());

		returnPalette.IosPalette = <IosPalette>{
			backgroundColor: this.UIDeviceRGBColoSpace(colors.backgroundColor.toString()),
			primaryColor: this.UIDeviceRGBColoSpace(colors.primaryColor.toString()),
			secondaryColor: this.UIDeviceRGBColoSpace(colors.secondaryColor.toString()),
			detailColor: this.UIDeviceRGBColoSpace(colors.detailColor.toString())
		}
		return returnPalette;
	}

	private static UIDeviceRGBColoSpace(uicolor: any): Color {
		let rgbStrings: string[] = (<string>uicolor).replace('UIDeviceRGBColorSpace ', '').split(' ');
		let rgbNumbers: number[] = <any>rgbStrings.map(value => parseFloat(value) * 255);
		return new Color(rgbNumbers[0], rgbNumbers[1], rgbNumbers[2], 1);
	}
}

