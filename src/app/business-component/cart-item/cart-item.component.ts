import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  cartList = [];
  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.cartList = JSON.parse(localStorage.getItem("items") || "[]");
    } 
  }
  
}
