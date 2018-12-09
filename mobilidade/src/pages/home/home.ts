import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Rota } from '../../model/rota';
import * as $ from 'jquery';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  private _rotas: Array<Rota>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this._rotas = new Array<Rota>();
    for(var i = 0; i < 10; i++){
      var rota1 : Rota = new Rota();
      rota1.localPartida= "fuasd" + i;
      rota1.localDestino = "asd" + i;
      this.rotas.push(rota1);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  public get rotas(): Array<Rota> {
    return this._rotas;
  }
  public set rotas(value: Array<Rota>) {
    this._rotas = value;
  }


  trocaMenu(codLista) {
    $(".botoesRodape > div > ion-icon").removeClass("bottom-icon-color-ativo");
    $(".botoesRodape > div:nth-child(" + codLista + ") > ion-icon").addClass("bottom-icon-color-ativo");
    $(".home-body").hide();
    $(".home-body-" + codLista ).show();
  }

}
