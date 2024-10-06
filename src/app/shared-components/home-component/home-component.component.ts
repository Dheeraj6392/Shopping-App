import { Component } from '@angular/core';

// import { NgbCarouselModule } from 'ng-bootstrap';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css',
})


export class HomeComponentComponent {
  itemAdded : any;
  cartItems = [
    {
      "itemName": "Wireless Bluetooth Headphones",
      "price": 49.99,
      "details": "Noise-cancelling, 20-hour battery life, available in black",
       "Image": "assets/images/headphone.jpg",
       "Id": 1
      
    },
    {
      "itemName": "Stainless Steel Water Bottle",
      "price": 19.95,
      "details": "32 oz, vacuum insulated, keeps drinks cold for 24 hours",
      "Image": "assets/images/bottle.avif",
       "Id": 2
      
    },
    {
      "itemName": "Laptop Stand",
      "price": 25.00,
      "details": "Adjustable height, aluminum alloy material, fits most laptops",
      "Image": "assets/images/laptop_stand.jpg",
       "Id": 3
      
    },
    {
      "itemName": "Fitness Tracker Watch",
      "price": 39.99,
      "details": "Heart rate monitor, sleep tracking, water-resistant",
      "Image": "assets/images/watch.webp",
      "Id": 4
    },
    {
      "itemName": "Organic Cotton T-Shirt",
      "price": 14.99,
      "details": "Medium size, color: blue, 100% organic cotton",
      "Image": "assets/images/t-shirt.jpeg",
      "Id": 5
    },
    {
      "itemName": "Organic Cotton T-Shirt",
      "price": 14.99,
      "details": "Medium size, color: blue, 100% organic cotton",
      "Image": "assets/images/t-shirt.jpeg",
      "Id": 6
    },
    {
      "itemName": "Organic Cotton T-Shirt",
      "price": 14.99,
      "details": "Medium size, color: blue, 100% organic cotton",
      "Image": "assets/images/t-shirt.jpeg",
       "Id": 7
    },
    {
      "itemName": "Organic Cotton T-Shirt",
      "price": 14.99,
      "details": "Medium size, color: blue, 100% organic cotton",
      "Image": "assets/images/t-shirt.jpeg",
       "Id": 8
    }
    ,
    {
      "itemName": "Organic Cotton T-Shirt",
      "price": 14.99,
      "details": "Medium size, color: blue, 100% organic cotton",
      "Image": "assets/images/t-shirt.jpeg", 
       "Id": 9
    }
    ,
    {
      "itemName": "Organic Cotton T-Shirt",
      "price": 14.99,
      "details": "Medium size, color: blue, 100% organic cotton",
      "Image": "assets/images/t-shirt.jpeg", 
       "Id": 10
    }
  ];
  
  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
        this.itemAdded = Number(localStorage.getItem("itemAdded")) || 0;
    } else {
        this.itemAdded = 0;
    }
  }


}
