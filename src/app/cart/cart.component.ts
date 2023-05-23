import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private server: ProductService) {
    this.getCart();
  }

  ngOnInit() {}
  total: number = 0;
  allCart: any;

  getCart() {
    this.server.getCart().subscribe((res) => {
      this.allCart = res;
      for (let i of res) {
        this.total = this.total + i.totalPrice;
      }
    });
  }

  delet(pro: any) {
    this.server.deleteCart(pro.id).subscribe((res) => {
      this.getCart();
      console.log(this.total);
    });
  }

  increase(pro: any) {
    pro.quantity = pro.quantity + 1;
    pro.totalPrice = pro.price * pro.quantity;
    this.server.updateCart(pro).subscribe((res) => {
      this.total = this.total + pro.price;
    });
  }

  decrease(pro: any) {
    if (pro.quantity > 1) {
      pro.quantity = pro.quantity - 1;
      pro.totalPrice = pro.price * pro.quantity;
      this.server.updateCart(pro).subscribe((res) => {
        this.total = this.total - pro.price;
      });
    }
  }
}
