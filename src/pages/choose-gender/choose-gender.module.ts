import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseGenderPage } from './choose-gender';

@NgModule({
  declarations: [
    ChooseGenderPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseGenderPage),
  ],
  exports: [
    ChooseGenderPage
  ]
})
export class ChooseGenderPageModule {}
