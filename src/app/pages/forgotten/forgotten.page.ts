import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgotten',
  templateUrl: './forgotten.page.html',
  styleUrls: ['./forgotten.page.scss'],
})
export class ForgottenPage implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  send(form: NgForm) {
    let user: UserModel = {
      email: form.value.email,
      password: null
    };

    this.loginService.passwordForgotten(user)
    .subscribe(res => {
      this.toastPresent("Tu nueva contraseña se ha enviado al correo inscrito");
      
      
      this.router.navigateByUrl('login', {queryParams: { email: user.email }});
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
