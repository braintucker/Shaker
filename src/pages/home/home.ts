import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {ArtistDetail} from '../artist-detail/artist-detail'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [ 'Artist1', 'Artist2', 'Artist3', 'Artist4'];

  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController) {

  }

  selectItem(item) {
    this.modalCtrl.create(ArtistDetail, { item: item }).present();
  }

}
