import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  public products: any = new Array();

  constructor(private productService: ProductService) { 
    // this.products.push({ name: 'EAS', description: 'Proteina hipercalorica', image: 'product-1.jpg' });
    // this.products.push({ name: 'Syntha-6', description: 'Proteina hipercalorica', image: 'product-2.jpg' });
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      console.log(res)
      this.products = res["products"]
    }, err => {
      console.log(err)
    });
  }

}
