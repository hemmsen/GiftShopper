import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChooseGenderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-choose-gender',
  templateUrl: 'choose-gender.html',
})
export class ChooseGenderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public age: number;
  public gender: number;

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseGenderPage');
  }

}
