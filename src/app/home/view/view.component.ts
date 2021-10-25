import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  item: any;

  constructor(private route: ActivatedRoute,
    private itemService: ItemService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("itemId");
    console.log(id);
    this.item = this.itemService.itemsInService.find(item => item.title == id);
    console.log(this.item);
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
