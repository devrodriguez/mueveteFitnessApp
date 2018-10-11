import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HttpClientModule } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Pages
import { TrainerPage } from '../pages/trainer/trainer';
import { ContactoPage } from '../pages/contacto/contacto';
import { TrainersPage } from  '../pages/trainers/trainers';
import { ProductsPage } from '../pages/products/products';

// Providers
import { TrainerProvider } from '../providers/trainer/trainer';

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
    HttpClientModule,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TrainerProvider
  ]
})
export class AppModule {}
