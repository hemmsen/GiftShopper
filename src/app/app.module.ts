import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { GiftShopper } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MyGiftsPage } from '../pages/my-gifts/my-gifts'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    GiftShopper,
    HomePage,
    ListPage,
    MyGiftsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(GiftShopper),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    GiftShopper,
    HomePage,
    ListPage,
    MyGiftsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
