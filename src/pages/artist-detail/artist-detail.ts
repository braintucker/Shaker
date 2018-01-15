import { Component } from '@angular/core';
import { NavParams, ViewController  } from 'ionic-angular';

@Component({
  templateUrl: 'artist-detail.html'
})
export class ArtistDetail {

  artist;

  constructor(
    navParams: NavParams,
    private viewCtrl: ViewController) {

    this.artist = navParams.get('artist');
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  done() {
    this.viewCtrl.dismiss();
  }



}
