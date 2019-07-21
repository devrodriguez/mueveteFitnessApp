import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProgramatorPage } from '../../pages/programator/programator.page';
import { RoutineService } from 'src/app/services/routine.service';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.page.html',
  styleUrls: ['./routine.page.scss'],
})
export class RoutinePage implements OnInit {

  public categories: any = [];

  constructor(private modalCtrl: ModalController, private routineService: RoutineService) { 

    this.routineService.getRoutines().subscribe(data => {
      this.categories = data;
    });
  }

  ngOnInit() {
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
