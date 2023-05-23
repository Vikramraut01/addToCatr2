import { Component, ViewChild } from '@angular/core';
import { CartComponent } from 'src/app/cart/cart.component';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private server: ProductService) {
    this.getAllPro();
    this.getCart();
  }

  allPro: any = [];
  allCart: any;
  count: number = 0;
  getAllPro() {
    this.server.getProducts().subscribe((res) => {
      this.allPro = res;
    });
  }
  addToCart(data: any) {
    this.server.addCart(data).subscribe((res) => {
      location.reload();
    });
  }
  getCart() {
    this.server.getCart().subscribe((res) => {
      this.allCart = res;
      this.count = this.allCart.length;
    });
  }

  search: any;
  sendData(event: any) {
    this.search = event.target.value;
  }

  @ViewChild(CartComponent) child: any;
}
