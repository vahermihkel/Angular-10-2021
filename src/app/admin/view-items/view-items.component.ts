import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  // tüüp on {title: string, price: number}[]
  items: Item[] = [];
  searchedItem = "";

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    // this.items = this.itemService.itemsInService;
    // categoriesInService = ['philips','sony','dell','lg','electronics'];
    this.itemService.getItemsFromDatabase().subscribe(itemsFromDb => {
      this.items = itemsFromDb;
      this.itemService.updateItems(itemsFromDb);
    })
  }

  onSearch() {
    this.items.forEach((item,i) => {
      let itemDiv = document.getElementsByClassName("item")[i] as HTMLElement;
      if (item.title.toString().toLowerCase().indexOf(this.searchedItem.toLowerCase()) > -1 ||
          item.id.toString().indexOf(this.searchedItem) > -1) {
        itemDiv.style.display = "";
      } else {
        itemDiv.style.display = "none";
      }
    });
  }

  onDeleteItem(item: Item) {
    this.itemService.deleteItem(item);
    this.itemService.addItemsToDatabase().subscribe(() => {
      alert("kustutatud!");
    });
  }

  onAddItemsToDatabase() {
    this.itemService.addItemsToDatabase().subscribe();
  }

  onChangeActive(item: Item) {
    // let index = this.itemService.itemsInService.indexOf(item);
    // let itemChange =  this.itemService.itemsInService[index];
    // itemChange.isActive = !itemChange.isActive;
    item.isActive = !item.isActive;
    this.itemService.addItemsToDatabase().subscribe();

    // let serviceItems = this.itemService.itemsInService;
    // let index = serviceItems.indexOf(item);
    // let itemChange =  serviceItems[index];
    // itemChange.isActive = !itemChange.isActive;
    // this.itemService.addItemsToDatabase().subscribe();

    // let index2 = this.itemService.itemsInService.indexOf(item);
    // this.itemService.itemsInService[index2].isActive = !this.itemService.itemsInService[index2].isActive;
    // this.itemService.addItemsToDatabase().subscribe();

    // // kõigepealt leian järjekorranumbri ja siis muudan eseme aktiivsust keerates selle eseme aktiivsuse tagurpidi
    // this.itemService.itemsInService[this.itemService.itemsInService.indexOf(item)].isActive = !this.itemService.itemsInService[this.itemService.itemsInService.indexOf(item)].isActive;
    // this.itemService.addItemsToDatabase().subscribe();
  }

}