import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { GiftShopper } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MyGiftsPage } from '../pages/my-gifts/my-gifts'
import {GiftDetailsPage} from '../pages/gift-details/gift-details'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation'
import { GiftService } from '../service/gift.service';
import {ChooseGenderPage} from '../pages/choose-gender/choose-gender';


@NgModule({
  declarations: [
    GiftShopper,
    HomePage,
    ListPage,
    MyGiftsPage,
    GiftDetailsPage,
    ChooseGenderPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(GiftShopper)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    GiftShopper,
    HomePage,
    ListPage,
    MyGiftsPage,
    GiftDetailsPage,
    ChooseGenderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GiftService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
