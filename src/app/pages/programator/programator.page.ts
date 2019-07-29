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
  @Input() _routine_name: string;
  @Input() _customer_id: string;

  private morning: any = [];
  private afternoon: any = [];
  private currDate: string = moment().format('DD/MM/YYYY');
  private routine: string = '';
  private routine_name: string;
  private customer_id: string;

  constructor(private modalCtrl: ModalController, 
    private toastCtrl: ToastController,
    private sessionService: SessionService,
    private navParams: NavParams) { 
      this.routine = navParams.get('_routine');
      this.routine_name = navParams.get('_routine_name');
      this.customer_id = navParams.get('_customer_id');
      this.currDate = moment(this.currDate, 'DD/MM/YYYY').format('YYYY-MM-DD');
      this.getScheduled(this.currDate);
    }

  ngOnInit() {
  }

  getScheduled(date) {
    this.sessionService.getScheduled(date, this.routine, this.customer_id).subscribe((data: Array<object>) => {
      this.morning = data.filter(dat => dat['period'] == "am");
      this.afternoon = data.filter(dat => dat['period'] == "pm");
    });
  }

  schedule(item) {
    var schedule = {
      customer: sessionStorage.getItem('c'),
      calendar: item.calendar_id
    };

    this.sessionService.scheduleSession(schedule).subscribe(data => {
      item.customer_id = 0
      this.presentToast(`Clase agendada ${item.name} ${item.period}`);
    }, error => {
      this.presentToast(`No fue posible agendar en horario ${item.name}`);
    });
  }

  dateChange(event) {
    this.getScheduled(moment(event.detail.value).format('YYYY-MM-DD'));
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
