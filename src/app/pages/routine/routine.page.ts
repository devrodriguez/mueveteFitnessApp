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

  constructor(private modalCtrl: ModalController, 
              private routineService: RoutineService,
              private loadingCtrl: LoadingController) { 

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
        '_routine_name': routine.name
      }
    });

    return await modal.present();
  }

}
