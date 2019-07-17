import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController, NavParams } from '@ionic/angular';
import { SessionService } from 'src/app/services/session.service';
import * as moment from 'moment';

@Component({
  selector: 'app-programator',
  templateUrl: './programator.page.html',
  styleUrls: ['./programator.page.scss'],
})
export class ProgramatorPage implements OnInit {

  @Input() _routine: string;

  private morning: any = [];
  private afternoon: any = [];
  private currDate: string = moment().format('DD/MM/YYYY');
  private routine: string = '';

  constructor(private modalCtrl: ModalController, 
    private toastCtrl: ToastController,
    private sessionService: SessionService,
    private navParams: NavParams) { 
      this.routine = navParams.get('_routine');
      this.currDate = moment(this.currDate, 'DD/MM/YYYY').format('YYYY-MM-DD');
      this.getSessions(this.currDate);
    }

  ngOnInit() {
  }

  getSessions(date) {
    this.sessionService.getSessions(date, this.routine).subscribe((data: Array<object>) => {
      this.morning = data.filter(dat => dat['period'] == "am");
      this.afternoon = data.filter(dat => dat['period'] == "pm");
    });
  }

  schedule(item) {
    var schedule = {
      customer: 1,
      routine: this.routine,
      session: item.id,
      date: this.currDate
    };

    this.sessionService.scheduleSession(schedule).subscribe(data => {
      item.session_id = 0
      this.presentToast(`Clase agendada ${item.name} ${item.period}`);
    }, error => {
      this.presentToast(`No fue posible agendar en horario ${item.name}`);
    });
  }

  dateChange(event) {
    this.getSessions(moment(event.detail.value).format('YYYY-MM-DD'));
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
