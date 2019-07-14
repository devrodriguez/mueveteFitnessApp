import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-programator',
  templateUrl: './programator.page.html',
  styleUrls: ['./programator.page.scss'],
})
export class ProgramatorPage implements OnInit {

  private morning: any = [];
  private afternoon: any = [];

  constructor(private modalCtrl: ModalController, 
    private toastCtrl: ToastController,
    private sessionService: SessionService) { 

    this.sessionService.getSessions().subscribe((data: Array<object>) => {
      this.morning = data.filter(dat => dat['period'] == "am");
      this.afternoon = data.filter(dat => dat['period'] == "pm");
    });
  }

  ngOnInit() {
  }

  async presentToast(item) {
    const toast = await this.toastCtrl.create({
      message: `Clase agendada ${item.name} ${item.period}`,
      duration: 3000
    });

    toast.present();
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

}
