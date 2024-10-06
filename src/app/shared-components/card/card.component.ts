import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() item : any;
  @Input() disableAddtoCart : any = true;
   itemAdded : any = 0;



//    addToCart(id: any) {
//     let items = [];
//     items = localStorage.getItem("items") || [];
//     items.push(id);
//     localStorage.setItem("items" , items);
//     console.log("Id" , id);
//     let itemAdded = parseInt(localStorage.getItem("itemAdded") || "0");

    
//     if (!itemAdded) {
//         itemAdded = 1; 
//     } else {
//         itemAdded += 1; 
//     }

//     localStorage.setItem("itemAdded", itemAdded.toString());

//     this.itemAdded = itemAdded;
//     console.log(`Item with id: ${id} added to cart. Total items: ${this.itemAdded}`);
// }

addToCart(id: any) {
  // Retrieve items from localStorage, parse them as an array, or start with an empty array
  let items = JSON.parse(localStorage.getItem("items") || "[]");

  // Add the new item (id) to the array
  items.push(id);

  // Save the updated items array back to localStorage
  localStorage.setItem("items", JSON.stringify(items));

  // Logging the added item ID
  console.log("Id", id);

  // Retrieve the count of items added, or default to 0 if not present
  let itemAdded = parseInt(localStorage.getItem("itemAdded") || "0");

  // Increment the item count
  itemAdded += 1;

  // Save the updated item count back to localStorage
  localStorage.setItem("itemAdded", itemAdded.toString());

  // Update the component's itemAdded variable
  this.itemAdded = itemAdded;

  // Log the confirmation message
  console.log(`Item with id: ${id} added to cart. Total items: ${this.itemAdded}`);
}


}
