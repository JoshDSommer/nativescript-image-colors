import {Observable} from 'data/observable';
import {nativescript-image-colors} from 'nativescript-nativescript-image-colors';

export class HelloWorldModel extends Observable {
  public message: string;
  private nativescript-image-colors: nativescript-image-colors;

  constructor() {
    super();

    this.nativescript-image-colors = new nativescript-image-colors();
    this.message = this.nativescript-image-colors.message;
  }
}