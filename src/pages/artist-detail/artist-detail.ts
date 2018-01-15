import { Component } from '@angular/core';
import { NavParams  } from 'ionic-angular';

@Component({
  templateUrl: 'artist-detail.html'
})
export class ArtistDetail {

  item;

  constructor(navParams: NavParams) {
    this.item = navParams.get('item');
  }



}
