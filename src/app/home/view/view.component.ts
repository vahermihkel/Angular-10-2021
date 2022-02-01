import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  item!: Item; // HTML-s näitamiseks

  // erinevate failidega ühendused
  constructor(private route: ActivatedRoute, // Angulari kirjutatud Service, mille sees on funktsionaalsus URL-st parameetrite kättesaamine
    private itemService: ItemService,
    private router: Router) { } // mul on ItemService-s kõige täpsem esemete seis - seal asuvad täpselt need tooted, mida välja kuvatakse, kust kustutatakse jne

  ngOnInit(): void {
    // BRAND%20NEW%20Sony%20PlayStation%202%20Slim%20Console%20Black%20PS2%20System%20Game%20%28NTSC%29
    let id = Number(this.route.snapshot.paramMap.get("itemId"));
    console.log(id); // neid pannakse alati arenduses koguaeg, kontrollimaks mis toimub
    // {imgSrc: 'https://i.ebayimg.com/thumbs/images/g/ySYAAOSwlmxdXMXw/s-l225.webp', title: 'BRAND NEW Sony PlayStation 2 Slim Console Black PS2 System Game (NTSC)', price: 398.99, category: 'sony', isActive: true}
    let itemFound = this.itemService.findItem(id);
    if (itemFound) { //itemFound != undefined
      this.item = itemFound;
    }
    console.log(this.item); // neid pannakse alati arenduses koguaeg, kontrollimaks mis toimub
    
  }
  // let id = "Ese2";
     // [{title: "Ese1", price: 100},{title: "Ese2", price: 200},{title: "Ese2", price: 200} ].find()
  // itemsInService.find({title: "Ese1", price: 100} => item.title == id)
  // itemsInService.find({title: "Ese2", price: 200} => item.title == id)
  // itemsInService.find({title: "Ese2", price: 200} => item.title == id)

  //itemsInService.find({title: "Ese1", price: 100} => "Ese1" == "Ese2"  ) // VÄÄR
  //itemsInService.find({title: "Ese2", price: 200} => "Ese2" == "Ese2"  ) // TÕENE
  //itemsInService.find({title: "Ese2", price: 200} =>   ) // SIIA TA ENAM EI JÕUA


}
