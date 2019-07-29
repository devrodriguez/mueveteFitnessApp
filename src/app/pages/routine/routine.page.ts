import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { ProgramatorPage } from '../../pages/programator/programator.page';
import { RoutineService } from 'src/app/services/routine.service';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.page.html',
  styleUrls: ['./routine.page.scss'],
})
export class RoutinePage implements OnInit {

  public categories: any = [];
  public loading: any;
  public customer_id: any = null;

  constructor(private modalCtrl: ModalController, 
              private routineService: RoutineService,
              private loadingCtrl: LoadingController) { 
    this.customer_id = sessionStorage.getItem('c');
    this.loadRoutines();
  }

  ngOnInit() {
  }

  loadRoutines() {
    this.loadingOn()
    .then(() => {
      this.routineService.getRoutines().subscribe(data => {
        this.categories = data;
        this.loadingOff();
      }, error => {
        this.loadingOff();
      });
    });
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
        '_routine': routine.id,
        '_routine_name': routine.name,
        '_customer_id': this.customer_id
      }
    });

    return await modal.present();
  }

}
