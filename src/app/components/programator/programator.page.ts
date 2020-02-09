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
  @Input() _date: string;

  public morning: any = [];
  public afternoon: any = [];
  public currDate: string;
  public routine: string = '';
  public routine_name: string;
  public customer_id: string;
  public showProgress: boolean = false;

  constructor(private modalCtrl: ModalController, 
    private toastCtrl: ToastController,
    private sessionService: SessionService,
    private navParams: NavParams) { 
      this.routine = navParams.get('_routine');
      this.routine_name = navParams.get('_routine_name');
      this.customer_id = navParams.get('_customer_id');
      this.currDate = navParams.get('_curr_date');;
      this.getScheduled();
    }

  ngOnInit() {
  }

  getScheduled() {
    this.sessionService.getScheduled(this.currDate, this.routine, this.customer_id)
    .subscribe((data: Array<object>) => {
      this.morning = data.filter(dat => dat['period'] == "am");
      this.afternoon = data.filter(dat => dat['period'] == "pm");
    });
  }

  schedule(item) {
    this.showProgress = true;
    var schedule = {
      weekly: item.weekly_id,
      customer: sessionStorage.getItem('c'),
      date: this.currDate
    };

    this.sessionService.scheduleSession(schedule)
    .subscribe(data => {
      item.customer_id = 0
      this.showProgress = false;
      this.presentToast(`Clase agendada ${item.name} ${item.period}`);
    }, error => {
      this.showProgress = false;
      this.presentToast(`No fue posible agendar en horario ${item.name}`);
    });
  }

  cancel(item) {
    this.showProgress = true;
    var schedule = {
      weekly: item.weekly_id,
      customer: sessionStorage.getItem('c'),
      date: this.currDate
    };

    this.sessionService.cancelScheduled(schedule)
    .subscribe(data => {
      item.customer_id = null;
      this.showProgress = false;
      this.presentToast(`Clase ${item.name} ${item.period} cancelada`);
    }, error => {
      this.showProgress = false;
      this.presentToast(`No fue posible cancelar en horario ${item.name}`);
    });
  }

  dateChange() {
    this.getScheduled();
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
