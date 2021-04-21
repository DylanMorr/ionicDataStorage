import { Component } from '@angular/core';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myStatus: string;
  constructor(private storage: Storage) { }

  ionViewDidEnter() {
    this.storage.get('status')
      .then((data) => {
        this.myStatus = data;
      })
      .catch();
  }
}
