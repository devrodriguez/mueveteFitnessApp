import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  public products: any = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.products.push({ name: 'EAS', description: 'Proteina hipercalorica', image: 'product-1.jpg' });
    this.products.push({ name: 'Syntha-6', description: 'Proteina hipercalorica', image: 'product-2.jpg' });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

}
