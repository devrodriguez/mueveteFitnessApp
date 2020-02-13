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
  public currDate: string = moment().format('YYYY-MM-DD');
  private isLoading: boolean = false;

  constructor(private modalCtrl: ModalController, 
              private routineService: RoutineService,
              private loadingCtrl: LoadingController) { 
    //this.currDate = moment(this.currDate, 'DD/MM/YYYY').format('YYYY-MM-DD');
    this.loadRoutines();
  }
  
  ngOnInit() {
    this.customerId = sessionStorage.getItem('c');
  }
  
  ngAfterViewInit() {
    this.currDate = moment().format('YYYY-MM-DD')
  }

  async loadRoutines() {
    if (!this.isLoading)
      await this.loadingOn()
    
    this.routineService
    .getRoutines(this.currDate)
    .subscribe(async data => {
      this.categories = data;
      await this.loadingOff();
    }, async () => {
      await this.loadingOff();
    });
  }

  dateChange(eve) {
    console.log('Date change')
    this.loadRoutines();
  }

  async loadingOn() {
    this.isLoading = true;
    this.loading = await this.loadingCtrl.create({
      message: null,
      spinner: 'dots'
    });

    return this.loading.present();
  }

  async loadingOff() {
    if(this.isLoading) {
      await this.loadingCtrl.dismiss();
      this.isLoading = false;
    }
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
