import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Rota } from '../../model/rota';
import * as $ from 'jquery';
import { HistoricoSaldo } from '../../model/historico';

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
  private _historicoSaldos: Array<HistoricoSaldo>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this._rotas = new Array<Rota>();
    for(var i = 0; i < 10; i++){
      var rota1 : Rota = new Rota();
      rota1.localPartida= "Praça dos bancos";
      rota1.localDestino = "UFLA";
      this.rotas.push(rota1);
    }

    this._historicoSaldos = new Array<HistoricoSaldo>();
    for(var i = 0; i < 10; i++){
      var historico: HistoricoSaldo = new HistoricoSaldo();
      historico.titulo= "Desconto ";
      historico.valor = "R$" + (i+1) + ",00";
      this._historicoSaldos.push(historico);
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
  public get historicoSaldos(): Array<HistoricoSaldo> {
    return this._historicoSaldos;
  }
  public set historicoSaldos(value: Array<HistoricoSaldo>) {
    this._historicoSaldos = value;
  }

  trocaMenu(codLista) {
    $(".botoesRodape > div > ion-icon").removeClass("bottom-icon-color-ativo");
    $(".botoesRodape > div:nth-child(" + codLista + ") > ion-icon").addClass("bottom-icon-color-ativo");
    $(".home-body").hide(); 
    $(".home-body-" + codLista ).show();
  }

  trocaMenuSaldo(codSaldo) {
    $(".saldo-resumo").toggle();
    $(".saldo-historico").toggle();
    $(".paginacao-1").toggleClass("paginacao-1-inativo");
    $(".paginacao-2").toggleClass("paginacao-2-inativo");
  } 

}
