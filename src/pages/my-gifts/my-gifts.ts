import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Gift} from '../../models/Gift';

/**
 * Generated class for the MyGiftsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-gifts',
  templateUrl: 'my-gifts.html',
})
export class MyGiftsPage {
  public gift:Gift = new Gift();
  public name:string = "";
  public sports:Array<string> = ["Cykling", "Løb", "Svømning", "Kajak"]
  public gendars:Array<string> = ["Mand", "Kvinde"]
  public selectedGendar:string;
  public selectedSport:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyGiftsPage');
  }

}
