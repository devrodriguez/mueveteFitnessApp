import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private user = {
    name: '',
    last_name: '',
    email: '',
    password: '',
    age: 0
  };

  constructor(private loginService: LoginService, 
              private router: Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  register(form: NgForm) {
    this.user.name = form.value.name;
    this.user.last_name = form.value.last_name;
    this.user.email = form.value.email;
    this.user.password = form.value.password;

    this.loginService.register(this.user).subscribe(response => {
      if(response['status'] == 201) {
        this.router.navigateByUrl('login');
        form.reset();
      } else {
        this.alertPresent('Error al registrar usuario');
      }
    }, error => {
      this.alertPresent('Error al registrar usuario');
    });
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
