import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastController } from '@ionic/angular';

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
    private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  login(form){
    this.user.email = form.value.email;
    this.user.password = form.value.password;

    this.loginService.login(this.user).subscribe(response => {
      if(response["status"] == 200) {
        sessionStorage.setItem('jwt', response['data']['token']);
        sessionStorage.setItem('c', response['data']['c']);
        form.reset();
        this.router.navigateByUrl('home');
      }
      else 
      {
        console.log('Wrong login');
        this.toastPresent();
      }
    });
  }

  async toastPresent() {
    const toast = await this.toastCtrl.create({
      message: 'El usuario o contrasena son incorrectos',
      duration: 3000
    });

    toast.present();
  }

}
