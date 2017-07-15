import * as observable from 'data/observable';
import * as pages from 'ui/page';
import { SelectedIndexChangedEventData, TabView, TabViewItem } from 'ui/tab-view';
import { Image } from 'ui/image';
import { ImageColors } from 'nativescript-image-colors';


let page: pages.Page;
// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    var page = <pages.Page>args.object;
    page.actionBar.title = "NativeScript Image colors"
    page.bindingContext = new mainvm(page,
        page.getViewById<Image>(`image0`),
        page.getViewById<Image>(`image1`),
        page.getViewById<Image>(`image2`),
        page.getViewById<TabView>(`tabView`));

}



export class mainvm extends observable.Observable {

    constructor(private page: pages.Page, private image0: Image, private image1: Image, private image2: Image, private tabView: TabView) {
        super();

        // Initialize default values.
        setTimeout(() => {
            this.setColors(0);
        },200)

    }
    tabChange(args: SelectedIndexChangedEventData): void {
        setTimeout(() => {
            this.setColors(args.newIndex);
        })
    }

    private setColors(index: number) {
        let colors;
        switch (index) {
            case 0:
                colors = ImageColors.getColorPalette(this.image0);
                break;
            case 1:
                colors = ImageColors.getColorPalette(this.image1);
                break;
            case 2:
                colors = ImageColors.getColorPalette(this.image2);
                break;
        }

        console.log(JSON.stringify(colors.color1));

        this.tabView.backgroundColor = colors.color1;
        this.tabView.color = colors.color2;
        this.tabView.backgroundColor = colors.color2;
        this.page.actionBar.backgroundColor = colors.color1;
        this.page.actionBar.color = colors.color2;
    }
}
