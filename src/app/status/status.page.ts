import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {

  myStatus:string;
  constructor(private storage:Storage,
    private navCtrl:NavController) { }

  ngOnInit() {
    this.storage.get("status")
    .then((data)=>{
      this.myStatus = data;
    })
    .catch();
  }

  saveStatus(){
    console.log(this.myStatus);

    //save status
    this.storage.set("status", this.myStatus)
    .then(()=>{
      // once saved then go back to home of project using nav controller
      this.navCtrl.navigateBack('/home');
    })
    .catch();
  }
}
