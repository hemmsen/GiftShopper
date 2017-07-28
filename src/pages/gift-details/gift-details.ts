import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Gift} from '../../models/Gift';

/**
 * Generated class for the GiftDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gift-details',
  templateUrl: 'gift-details.html',
})
export class GiftDetailsPage {
  gift: Gift;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.gift = this.navParams.get("gift");
    console.log(this.gift.name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GiftDetailsPage');
  }

}
