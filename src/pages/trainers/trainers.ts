import { Component } from '@angular/core';
import { Nav, NavController, NavParams } from 'ionic-angular';
import { TrainerPage } from '../trainer/trainer';

/**
 * Generated class for the TrainersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-trainers',
  templateUrl: 'trainers.html',
})
export class TrainersPage {
  
  public trainers: any = new Array();
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.trainers.push({name: 'John Rodriguez', profession: 'Personal Trainer'})
    this.trainers.push({name: 'Lili Sanabria', profession: 'Personal Trainer'})
    this.trainers.push({name: 'John Galvis', profession: 'Personal Trainer'})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainersPage');
  }

  viewTrainerInfo() {
    this.navCtrl.push(TrainerPage);
  }

}
