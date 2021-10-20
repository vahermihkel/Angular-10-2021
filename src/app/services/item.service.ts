import { Injectable } from '@angular/core';

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

  itemsInService: any[] = [
    {pealkiri: 'ese100', hind: 100},  // index - 0
    {pealkiri: 'ese2', hind: 200},   // index - 1
    {pealkiri: "ese3", hind: 300}   // index - 2
  ];

  // et Componenti kasutusele võtta, pean ta panema kas app-routingusse või võtma ta kasutusele
  // app-COMPONENT_NIMI selectori abil (<app-NIMI></app-NIMI>)

  constructor() { }
}
