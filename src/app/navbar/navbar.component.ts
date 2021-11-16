import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sumOfCart = 0;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    console.log("siin tahan arvutada ostukorvi kogusummat")
    // subject -- asünkroonne funktsioon
    let language = localStorage.getItem("language");
    if (language) { // if (language != null)
      this.translate.use(language);
    }
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem("language", language);
  }

}
