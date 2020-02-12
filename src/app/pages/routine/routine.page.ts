import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { ProgramatorPage } from '../../components/programator/programator.page';
import { RoutineService } from 'src/app/services/routine.service';
import * as moment from 'moment';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.page.html',
  styleUrls: ['./routine.page.scss'],
})
export class RoutinePage implements OnInit {

  public categories: any = [];
  public loading: any;
  public customerId: any = null;
  public currDate: string = moment().format('DD/MM/YYYY');

  constructor(private modalCtrl: ModalController, 
              private routineService: RoutineService,
              private loadingCtrl: LoadingController) { 
    //this.currDate = moment(this.currDate, 'DD/MM/YYYY').format('YYYY-MM-DD');
    this.customerId = sessionStorage.getItem('c');
    //this.loadRoutines();
  }

  ngOnInit() {
  }

  loadRoutines() {
    this.loadingOn()
    .then(() => {
      this.routineService.getRoutines(this.currDate)
      .subscribe(data => {
        this.categories = data;
        this.loadingOff();
      }, error => {
        this.loadingOff();
      });
    });
  }

  dateChange() {
    this.loadRoutines();
  }

  async loadingOn() {
    this.loading = await this.loadingCtrl.create({
      message: null,
      spinner: 'dots'
    });

    return this.loading.present();
  }

  async loadingOff() {
    return await this.loadingCtrl.dismiss();
  }

  async presentModal(routine) {
    const modal = await this.modalCtrl.create({
      component: ProgramatorPage,
      componentProps: {
        '_routine': routine.routine_id,
        '_routine_name': routine.routine_name,
        '_customer_id': this.customerId,
        '_curr_date': this.currDate
      }
    });

    return await modal.present();
  }

}
