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
    this.trainers.push({ name: 'John Edisson Rodriguez', profession: 'Personal Trainer', image: 'john-rodriguez.jpg' })
    //this.trainers.push({ name: 'Mayra Liliana Sanabria', profession: 'Personal Trainer', image: 'lili.png' });
    this.trainers.push({ name: 'Irina Whatson', profession: 'Personal Trainer', image: 'irina.jpg' });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainersPage');
  }

  viewTrainerInfo(trainer:any) {
    this.navCtrl.push(TrainerPage, {
      trainer: trainer
    });
  }

}
