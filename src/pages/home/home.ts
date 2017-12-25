import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [ 'Artist1', 'Artist2', 'Artist3', 'Artist4'];

  constructor(public navCtrl: NavController) {

  }

  selectItem(item) {
    console.log("button was clicked!");
  }

}
