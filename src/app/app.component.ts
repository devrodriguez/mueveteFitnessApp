import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Productos',
      url: '/product',
      icon: 'basket'
    },
    {
      title: 'Contacto',
      url: '/contact',
      icon: 'book'
    },
    {
      title: 'Rutinas',
      url: '/routine',
      icon: 'time'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout(){
    sessionStorage.removeItem('jwt');
    sessionStorage.removeItem('c');
    this.router.navigateByUrl('login', { replaceUrl:true });
    this.menuCtrl.close();
  }
}
