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
  public currDate: string = new Date().toISOString();

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

  schedule(item) {
    var schedule = {
      customer: 1,
      routine: 1,
      session: item.id,
      date: this.currDate
    };

    this.sessionService.scheduleSession(schedule).subscribe(data => {
      this.presentToast(`Clase agendada ${item.name} ${item.period}`);
    }, error => {
      this.presentToast(`No fue posible agendar en horario ${item.name}`);
    });
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000
    });

    toast.present();
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

}
