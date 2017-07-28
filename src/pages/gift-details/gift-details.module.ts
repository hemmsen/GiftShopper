import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GiftDetailsPage } from './gift-details';

@NgModule({
  declarations: [
    GiftDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(GiftDetailsPage),
  ],
  exports: [
    GiftDetailsPage
  ]
})
export class GiftDetailsPageModule {}
