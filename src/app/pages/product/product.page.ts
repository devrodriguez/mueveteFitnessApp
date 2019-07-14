import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  public products: any = new Array();

  constructor() { 
    this.products.push({ name: 'EAS', description: 'Proteina hipercalorica', image: 'product-1.jpg' });
    this.products.push({ name: 'Syntha-6', description: 'Proteina hipercalorica', image: 'product-2.jpg' });
  }

  ngOnInit() {
  }

}
