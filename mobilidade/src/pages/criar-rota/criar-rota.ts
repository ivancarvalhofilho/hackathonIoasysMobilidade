import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';

/**
 * Generated class for the CriarRotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-rota',
  templateUrl: 'criar-rota.html',
})
export class CriarRotaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarRotaPage');
  }

  trocaQuantidade (param) {
      $(".quantidade-vagas > div > div").removeClass("backpink");
      $(".quantidade-vagas > div > div:nth-child("+param+")").addClass("backpink");
  }
}
