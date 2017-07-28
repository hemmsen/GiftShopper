import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GiftService } from '../../service/gift.service';
import { Gift } from '../../models/Gift';
import {GiftDetailsPage} from '../../pages/gift-details/gift-details';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  styleUrls: ['/list.scss'],
})
export class ListPage implements OnInit {
  selectedItem: any;
  icons: string[];
  // items: Array<{ title: string, note: string, icon: string }>;
  public MyGifts: Array<Gift> = new Array<Gift>();


  constructor(public navCtrl: NavController, public navParams: NavParams, private giftService: GiftService) {
    // // If we navigated to this page, we will have an item available as a nav param
    // this.selectedItem = navParams.get('item');

    // // Let's populate this page with some filler content for funzies
    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    //   'american-football', 'boat', 'bluetooth', 'build'];

    // this.items = [];
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }

  itemTapped(event, gift) {
    // That's right, we're pushing to ourselves!
    // this.navCtrl.push(GiftDetailsPage, {
    //   gift: gift
    // });
    this.navCtrl.push(GiftDetailsPage, {
      gift: gift
    })
  }

  async ngOnInit() {
    this.MyGifts = this.giftService.list();
  }
}
