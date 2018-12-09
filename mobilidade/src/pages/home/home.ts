import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Rota } from '../../model/rota';

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
    var rota1 : Rota = new Rota();
    rota1.localPartida= "fuasd";
    rota1.localDestino = "asd";
    var rota2 : Rota = new Rota();
    rota2.localPartida= "kkk";
    rota2.localDestino = "LoL";
    this.rotas.push(rota1);
    this.rotas.push(rota2);
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
}
