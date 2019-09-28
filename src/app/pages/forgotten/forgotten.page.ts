import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgotten',
  templateUrl: './forgotten.page.html',
  styleUrls: ['./forgotten.page.scss'],
})
export class ForgottenPage implements OnInit {

  private user: UserModel = {} as UserModel;

  constructor(private loginService: LoginService, private router: Router, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  send() {

    this.loginService.passwordForgotten(this.user)
    .subscribe(res => {
      let navExtras: NavigationExtras = {
        state: {
          email: this.user.email
        },
        replaceUrl: true
      };
      
      if(res['status'] != 200) {
        this.toastPresent('Esta cuenta de correo no existe');
        return;
      }

      this.toastPresent("Tu nueva contraseña se ha enviado al correo inscrito");
      this.router.navigateByUrl('login', navExtras);
    }, error => {
      this.toastPresent("Error al restableces tu contraseña");
    })
  }

  //Util
  async toastPresent(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000
    });

    toast.present();
  }

}
