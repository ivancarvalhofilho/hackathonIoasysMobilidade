import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeEstabPage } from './home-estab';

@NgModule({
  declarations: [
    HomeEstabPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeEstabPage),
  ],
})
export class HomeEstabPageModule {}
