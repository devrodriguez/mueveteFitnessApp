import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastController, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: UserModel = {} as UserModel;

  constructor(private router: Router, 
    private loginService: LoginService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    if(this.router.getCurrentNavigation().extras.state) {
      this.user.email = this.router.getCurrentNavigation().extras.state.email;
    }
  }

  login(){

    this.loginService.login(this.user)
    .subscribe(response => {
      sessionStorage.setItem('jwt', response['data']['token']);
      sessionStorage.setItem('c', response['data']['c']);
      this.router.navigateByUrl('home', { replaceUrl: true });
    }, error => {
      this.alertPresent('Usuario o contraseña incorrectos');
    });
  }

  async toastPresent() {
    const toast = await this.toastCtrl.create({
      message: 'El usuario o contrasena son incorrectos',
      duration: 3000
    });

    toast.present();
  }

  async alertPresent(message: string) {
    const alert = await this.alertCtrl.create({
      message: message,
      buttons: [{
        text: 'Entendido',
        role: 'cancel'
      }]
    });

    await alert.present();
  }

}
