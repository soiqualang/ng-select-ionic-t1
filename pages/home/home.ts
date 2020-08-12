import { Component, ViewEncapsulation } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  styleUrls: ['./home.scss'],
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
