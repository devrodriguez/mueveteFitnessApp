import { Component } from '@angular/core';
import { Nav, NavController, NavParams } from 'ionic-angular';
import { TrainerPage } from '../trainer/trainer';
import { TrainerProvider } from '../../providers/trainer/trainer';

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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private trainerProvider: TrainerProvider) {
    this.getTrainerList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainersPage');
  }

  getTrainerList() {
    this.trainerProvider.getTrainers().subscribe(trainers => {
      this.trainers = trainers;
    });
  }

  viewTrainerInfo(trainer:any) {
    this.navCtrl.push(TrainerPage, {
      trainer: trainer
    });
  }

}
