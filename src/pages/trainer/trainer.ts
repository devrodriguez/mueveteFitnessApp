import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrainerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-trainer',
  templateUrl: 'trainer.html',
})
export class TrainerPage {
  public trainer: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.trainer = this.navParams.get('trainer');
  }

  ngOnInit(): void {
    console.log(this.navParams);
  }

  ionViewDidLoad() {
    
  }

}
