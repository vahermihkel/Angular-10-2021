import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenTitle'
})
export class ShortenTitlePipe implements PipeTransform {

  transform(value: string, wordCount: number): string {
    return value.split(" ").slice(0,wordCount).join(" ");
  }
  // selgita mis on erinevus
  // .split()  .slice()   .splice()

  // Elas metsas mutionu, keset kuuski
  // .split("a")
  // ["El", "s mets", "s mutionu, keset kuuski"]
  // .split(" ")
  // ["Elas", "metsas", "mutionu,", "keset", "kuuski"]
  
  // slice(2,4)
  // ["mutionu,", "keset"]

  // join("::")
  // mutionu,::keset

}
