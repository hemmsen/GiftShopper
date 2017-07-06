import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyGiftsPage } from './my-gifts';

@NgModule({
  declarations: [
    MyGiftsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyGiftsPage),
  ],
  exports: [
    MyGiftsPage
  ]
})
export class MyGiftsPageModule {}
