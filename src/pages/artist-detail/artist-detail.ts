import { Component } from '@angular/core';
import { NavParams, ViewController  } from 'ionic-angular';

@Component({
  templateUrl: 'artist-detail.html'
})
export class ArtistDetail {

  item;

  constructor(
    navParams: NavParams,
    private viewCtrl: ViewController) {

    this.item = navParams.get('item');
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  done() {
    this.viewCtrl.dismiss();
  }



}
