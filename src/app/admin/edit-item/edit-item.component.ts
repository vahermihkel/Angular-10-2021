import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  item: any;

  // view.component.ts järgi
  // 1. ühendus ActivatedRoute Service-ga (! import)
  // 2. ühendus ItemService-ga
  constructor(private route: ActivatedRoute,
    private itemService: ItemService) { }

  // 3. otsige üles id
  // 4. andke see väärtus sellele ülemisele item muutujale
  // 5. console.log jätke kõige lõppu ja vaadake kas tuleb õige ese
  ngOnInit(): void {
    let itemId = this.route.snapshot.paramMap.get("itemId");
    this.item = this.itemService.itemsInService.find(toode => toode.title == itemId);
    console.log(this.item);
  }

}
