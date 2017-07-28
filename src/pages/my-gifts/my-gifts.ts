import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Gift } from '../../models/Gift';
import { Geolocation } from '@ionic-native/geolocation';
import { GiftService } from '../../service/gift.service';

import { AlertController } from 'ionic-angular';

/**
 * Generated class for the MyGiftsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-my-gifts',
  templateUrl: 'my-gifts.html',
  styleUrls: ['/my-gifts.scss']
})
export class MyGiftsPage implements OnInit {
  ngOnInit(): void {
    
  }
  public gift: Gift = new Gift();
  public sports: Array<string> = ["Cykling", "Løb", "Svømning", "Kajak"]
  public gendars: Array<string> = ["Mand", "Kvinde"]
  public numberOfGifts = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public giftService: GiftService, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyGiftsPage');
  }

  save() {
    this.giftService.add(this.gift);
    this.numberOfGifts = this.giftService.numberOfGifts();

    this.gift = new Gift();
    let alert = this.alertCtrl.create({
      title: 'Ønske oprettet',
      subTitle: 'Dit gaveønske er oprettet og andre kan nu byde på det',
      buttons: ['OK']
    }); 
    alert.present();
  }

}
