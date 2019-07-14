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

  public routines: any = [];

  constructor(private modalCtrl: ModalController, private routineService: RoutineService) { 
    /*
    this.routines.push({name:'Baile Arabe'});
    this.routines.push({name:'Zumba'});
    this.routines.push({name:'Fit Combat'});
    */

    this.routineService.getRoutines().subscribe(data => {
      this.routines = data;
    });
  }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ProgramatorPage
    });

    return await modal.present();
  }

}
