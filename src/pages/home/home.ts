import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {ArtistDetail} from '../artist-detail/artist-detail'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  artists = [
    { description: 'Artist1'},
    { description: 'Artist2'},
    { description: 'Artist3'},
    { description: 'Artist4'}
    ];

  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController) {

  }

  selectArtist(artist) {
    this.modalCtrl.create(ArtistDetail, { artist: artist }).present();
  }

}
