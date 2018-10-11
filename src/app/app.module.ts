import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { TrainersPage } from  '../pages/trainers/trainers';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TrainerPage } from '../pages/trainer/trainer';
import { ContactoPage } from '../pages/contacto/contacto';
import { ProductsPage } from '../pages/products/products';

@NgModule({
  declarations: [
    MyApp,
    ContactoPage,
    HomePage,
    ProductsPage,
    TrainerPage,
    TrainersPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ContactoPage,
    MyApp,
    HomePage,
    ProductsPage,
    TrainerPage,
    TrainersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
