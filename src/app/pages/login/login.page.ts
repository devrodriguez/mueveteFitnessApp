import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastController, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private user = {
    email: '',
    password: ''
  };

  constructor(private router: Router, 
    private loginService: LoginService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  login(form: NgForm){
    console.log(form.controls);
    this.user.email = form.value.email;
    this.user.password = form.value.password;

    this.loginService.login(this.user).subscribe(response => {
      sessionStorage.setItem('jwt', response['data']['token']);
      sessionStorage.setItem('c', response['data']['c']);
      form.reset();
      this.router.navigateByUrl('home');
    }, error => {
      console.log('Error on connection');
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
