import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';
import { SmartphonePage } from '../smartphone/smartphone';
import { LamparaPage } from '../lampara/lampara';
import { TvPage } from '../tv/tv';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  bocina = BocinaPage;
  phone = SmartphonePage;
  lamp = LamparaPage;
  tv = TvPage;

  constructor(public navCtrl: NavController) {

  }

  tele(){
    this.navCtrl.push(this.tv);
  }

  boci(){
    this.navCtrl.push(this.bocina);
  }

  lampa(){
    this.navCtrl.push(this.lamp);
  }

  sphone(){
    this.navCtrl.push(this.phone);
  }
  

}
