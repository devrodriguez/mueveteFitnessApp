import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private user = {
    name: '',
    email: '',
    password: '',
    age: 0
  };

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  register(form) {
    this.user.name = form.value.name;
    this.user.email = form.value.email;
    this.user.password = form.value.password;

    this.loginService.register(this.user).subscribe(response => {
      form.reset();
      this.router.navigateByUrl('login');
    }, error => {
      console.log(error);
    });
  }

}
