import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  // Service-t läheb vaja:
  // 1. Oleks üks koht, kus hoian andmeid (esemeid, ostukorvi sisu jne)
  // 2. Mitu Componenti saab siit andmeid võtta
  // 3. Component ei saa teisest Componendist andmeid kätte,
  //  seega kui kasutan samu andmeid mitmes kohas, pean tegema Service-i

  // Service-i kasutusele võtmiseks pean selle Constructorisse panema
  // Kui Service mille tegin pole üheski Constructoris, see tähendab,
  // et see on kasutu Service (teda ei kasutata kusagil)

  // Service-l ei ole HTML faili, seega teda ei kuvata välja, tema ülesanne
  // on Componentide vahel andmeid liigutada

private itemsInService: Item[] = [];
  // eelmised esemed hard-coded

  // muutuja2 = "adsad";
  // muutuja3 = true;
  // et Componenti kasutusele võtta, pean ta panema kas app-routingusse või võtma ta kasutusele
  // app-COMPONENT_NIMI selectori abil (<app-NIMI></app-NIMI>)

  constructor(private http: HttpClient) { }

  addItemsToDatabase() {
    return this.http.put("https://webshop-10-2021-e7e86-default-rtdb.europe-west1.firebasedatabase.app/items.json", this.itemsInService);
  }

  getItemsFromDatabase() {
    return this.http.get<Item[]>("https://webshop-10-2021-e7e86-default-rtdb.europe-west1.firebasedatabase.app/items.json");
  }

  updateItems(itemsFromDb: Item[]) {
    this.itemsInService = itemsFromDb;
  }

  findItem(id: number) {
    // return rääkida
    return this.itemsInService.find(item => item.id == id);
  }

  deleteItem(item: Item) {
    let index = this.itemsInService.indexOf(item);
    this.itemsInService.splice(index,1);
  }

  editItem(previousItem: Item, newItem: Item) {
    let index = this.itemsInService.indexOf(previousItem);
    this.itemsInService[index] = newItem;
  }

  // {title: string, price: number, ..., isActive: boolean}
  addItem(item: Item) {
    this.itemsInService.push(item);
  }


  // deleteAllItems() { EBALOOGILINE
  //   this.itemsInService = [];
  // }

  // checkPersonCodeValidity(personCode: string) { TAASKASUTADA LIHTSALT
  //   /*











  //   */
  //   return true;
  // }

  // funktsioon1() {

  // }

  // funktsioon2() {

  // }
}
