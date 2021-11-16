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

  itemsInService: Item[] = [{"id":98287280,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/1-oAAOSwGY5fbLqv/s-l225.webp","title":"UPGRADED Nintendo 64 N64 console with 1 2 3 or 4 Official OEM remotes + Cables  ","price":1399.99,"category":"electronics","isActive":true},{"id":93761426,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/IYEAAOSwt4xaWQTm/s-l225.webp","title":"Sony PlayStation 4 (PS4) - 500 GB Black Console w/ accessories--6 month warranty","price":32999.99,"category":"electronics","isActive":true},{"id":9587563,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/jbQAAOSwpE5frvvj/s-l225.webp","title":"NEW Microsoft Xbox Series S 512GB All-Digital Console Disc-free Gaming White","price":389.99,"category":"electronics","isActive":true},{"id":57260196,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/55MAAOSwHQ1hhOG4/s-l225.webp","title":"Nintendo 64 N64 Console Black controller set  jumper pack Japan Tested Working","price":74.99,"category":"electronics","isActive":true},{"id":75176671,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Dw0AAOSwiyRheB3t/s-l225.webp","title":"Game & Watch: the Legend of Zelda [Station]","price":63.71,"category":"electronics","isActive":true},{"id":33920085,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/SYMAAOSw2EBhenQO/s-l225.webp","title":"Nintendo Wii Console Fitness Training 🏋 ♀ 💪 Sports Balance Board Wii Fit Plus","price":185.29,"category":"electronics","isActive":true},{"id":98719290,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Z2cAAOSwKgRg0-oq/s-l225.webp","title":"Sony PlayStation 5 Digital Edition Console PS5 - NEW - IN HAND FAST SHIPPING! ✅","price":898,"category":"electronics","isActive":true},{"id":14028949,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/-K4AAOSwzoZdAngl/s-l225.webp","title":"PS Vita PCH-2000 Sony Playstation Console only Various colors Used【Excellent】","price":199.99,"category":"electronics","isActive":true},{"id":92357327,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/-igAAOSwGzRhiskE/s-l225.webp","title":"New ListingNintendo Wii Bundle - Console + Over 10 Games - Unboxed","price":13.54,"category":"electronics","isActive":true},{"id":70253437,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/NNsAAOSwl8Rf0p25/s-l225.webp","title":"Sony PS5 DISC EDITION NEW/OVP PS5 with invoice available now Playstation 5","price":914.02,"category":"electronics","isActive":true},{"id":35452962,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/jkUAAOSw1ZxhgEBa/s-l225.webp","title":"SNES Super Nintendo Console with Controllers Games Selection Mario Kart Zelda etc","price":167.96,"category":"electronics","isActive":true},{"id":24377642,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/wG4AAOSwxJhhH0~Z/s-l225.webp","title":"PS5 Sony PlayStation 5 Console Disc Version!","price":899.99,"category":"electronics","isActive":true},{"id":3054684,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/VP4AAOSwRmphetK2/s-l225.webp","title":"New Nintendo 3DS Black Console with Stylus Japenese ver [H]","price":118.97,"category":"electronics","isActive":true},{"id":56796081,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/TzEAAOSwhdRgJZlj/s-l225.webp","title":"Nintendo new 3DS LL XL Console only Various colors Used Japanese only","price":204.99,"category":"electronics","isActive":true},{"id":24818404,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/q4kAAOSw-otc~TNW/s-l225.webp","title":"PS Vita PCH-2000 Sony Playstation Accessory complete Console Used【Excellent】","price":294.99,"category":"electronics","isActive":true},{"id":22521217,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/sIsAAOSw0gJggHMN/s-l225.webp","title":"Nintendo Game Boy Advance SP Choose color Black Blue Silver Refurbish KIT DIY","price":124.99,"category":"electronics","isActive":true},{"id":96342287,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/mOwAAOSwXtthi6v4/s-l225.webp","title":"New ListingNintendo Switch 5 Game Bundle","price":178.89,"category":"electronics","isActive":true},{"id":8560298,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/eakAAOSw~uJbN81o/s-l225.webp","title":"Authentic Nintendo Classic Edition NES Mini Game Console USA Brand New in stock","price":176.95,"category":"electronics","isActive":true},{"id":74039022,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/eXwAAOSwl19himt3/s-l225.webp","title":"New Listingxbox series s Bundle","price":112.48,"category":"electronics","isActive":true},{"id":43188974,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Z48AAOSwLpNgXfzp/s-l225.webp","title":"Nintendo Console Switch Lite Pink Coral","price":231.68,"category":"electronics","isActive":true},{"id":53527407,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/~7YAAOSwv1FhiP6m/s-l225.webp","title":"Microsoft Xbox One S 1TB Console - White","price":135.52,"category":"electronics","isActive":true},{"id":28962024,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Jn0AAOSwg-9hGHGy/s-l225.webp","title":"Nintendo GameCube Console DOL-001 XENO REGION FREE MOD English Menu choose Color","price":74.99,"category":"electronics","isActive":true},{"id":38877482,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/dHkAAOSwnwpfZNX9/s-l225.webp","title":"Microsoft Xbox Series x 1TB Games Console-Black","price":740.25,"category":"electronics","isActive":true},{"id":61225863,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/4qcAAOSw1pJhciu0/s-l225.webp","title":"Nintendo 3DS Console only Various colors Select a charger Used Japanese only","price":69.99,"category":"electronics","isActive":true},{"id":65006683,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/uQAAAOSwFQthi6n3/s-l225.webp","title":"New ListingMicrosoft Xbox One S 1TB Console - White","price":124.67,"category":"electronics","isActive":true},{"id":41147830,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/qCUAAOSwrrhhisXS/s-l225.webp","title":"New ListingLook!! Nice Clean Microsoft Xbox One Console Controller Games Kinect Bundle","price":196.5,"category":"electronics","isActive":true},{"id":4409728,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/IkEAAOSweilhirEa/s-l225.webp","title":"New Listing500GB PS4 bundle. Console, 2 Sony controllers, 9 games inc 4 COD, all leads","price":269.67,"category":"electronics","isActive":true},{"id":21596913,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/3-cAAOSw5x9hipuG/s-l225.webp","title":"New Listingturbo grafx 16 console Complete","price":250,"category":"electronics","isActive":true},{"id":59063394,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ueIAAOSwpyhhHdTO/s-l225.webp","title":"NEW POWKIDDY Open Source 2.4 Inch OCA Full Fit IPS Screen Handheld Game Console！","price":42.54,"category":"electronics","isActive":true},{"id":37286162,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/z1EAAOSwV21azqBD/s-l225.webp","title":"Sony PlayStation 4 (PS4) Slim 1tb Black Console & accessories! 6 Month Warranty!","price":359.99,"category":"electronics","isActive":true},{"id":98401321,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/EwAAAOSwnAdhXUTy/s-l225.webp","title":"New Nintendo 2DS XL Black Turquoise Console with Stylus [H]","price":135.3,"category":"electronics","isActive":true},{"id":80341426,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/tnwAAOSwefBgQbeg/s-l225.webp","title":"Nintendo Nes System Console Super Mario Bros 1 2 3 Original OEM Polished 72 Pin ","price":299.95,"category":"electronics","isActive":true},{"id":43078367,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/KYEAAOSwlklhipsM/s-l225.webp","title":"New ListingSony PlayStation Classic mini console – boxed, very good condition","price":67.76,"category":"electronics","isActive":true},{"id":59142806,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/dAAAAOSwGWdhisVE/s-l225.webp","title":"New ListingSony PlayStation 4 Slim 500 GB 2 controllers 4 games","price":237.15,"category":"electronics","isActive":true},{"id":43084783,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/0cEAAOSwksZhiOwe/s-l225.webp","title":"New ListingMicrosoft Xbox One X 1TB Black Console & Game Bundle","price":542.06,"category":"electronics","isActive":true},{"id":80010940,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/u1EAAOSwjfdhi5CH/s-l225.webp","title":"New ListingNintendo Mini Nes Classic Edition","price":74.53,"category":"electronics","isActive":true},{"id":44276414,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/eyAAAOSwl19himxM/s-l225.webp","title":"New ListingPlaystation 4 Limited Edition Spider-Man Console With 6Games & Box, 1 Controller","price":174.81,"category":"electronics","isActive":true},{"id":26414144,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/jVQAAOSw72phiXfz/s-l225.webp","title":"New ListingMicrosoft Xbox One S 500GB Video Game Console - White ","price":250,"category":"electronics","isActive":true},{"id":28344649,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/yi8AAOSwvRlhiwz8/s-l225.webp","title":"NEW Nintendo Switch Console, Animal Crossing New Horizons Edition - Free Ship","price":349.95,"category":"electronics","isActive":true},{"id":71745523,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/3zoAAOSwojRgM9Vj/s-l225.webp","title":"SONY PLAYSTATION 5 (PS5) CONSOLE  (DISC)- BRAND NEW - IN HAND - FAST SHIPPING!","price":999.99,"category":"electronics","isActive":true},{"id":88061166,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/hIMAAOSwL4dhiftz/s-l225.webp","title":"Brand New - Nintendo Wii - Skylanders Swapforce Edition blue console bundle","price":350,"category":"electronics","isActive":true},{"id":7712260,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/sQMAAOSwHM9e~Vfb/s-l225.webp","title":"Nintendo new 2DS LL XL Console Only Used Select charger and memory Japanese only","price":155.99,"category":"electronics","isActive":true},{"id":95316910,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ZzQAAOSwz59hisHd/s-l225.webp","title":"New ListingNintendo Game Cube Black Console With Original Box","price":150,"category":"electronics","isActive":true},{"id":20266436,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/PvsAAOSwOflhh9Yn/s-l225.webp","title":"White Xbox One S 1tb Woth 11 Games, A Controller And In The Original Box","price":271.03,"category":"electronics","isActive":true},{"id":58166734,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/U5UAAOSwix5hMtD6/s-l225.webp","title":"New ListingVintage Super Nintendo SNES Game Console w/ Games and Extras *WORKS*","price":149.99,"category":"electronics","isActive":true},{"id":41725430,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/8kEAAOSw3DNhigwB/s-l225.webp","title":"NINTENDO DS LITE CONSOLE IN PINK - AU STOCK !","price":58.21,"category":"electronics","isActive":true},{"id":66485825,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/YzcAAOSwhyNgiMtj/s-l225.webp","title":"New 17000+ IN 1 RETRORANGEPI 128G Game Station Retro Arcade Console Orangepi PC","price":88.99,"category":"electronics","isActive":true},{"id":74388795,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/pXEAAOSwJMlhWLP-/s-l225.webp","title":"New ListingSony PlayStation 2 PS2 Fat Console bundle - Free McBoot Drive Packed with Games","price":195,"category":"electronics","isActive":true},{"id":33546725,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/RbEAAOSwbSRhi5DQ/s-l225.webp","title":"New ListingMicrosoft Xbox One S 1TB Console - White","price":162.6,"category":"electronics","isActive":true},{"id":95877528,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/r2QAAOSwzlBhiUf~/s-l225.webp","title":"New ListingXbox One S 500gb Console Only","price":128.74,"category":"electronics","isActive":true},{"id":92796113,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/yzYAAOSwuR9g8ODA/s-l225.webp","title":"Super Famicom Nintendo Classic Mini Console Japan SFC SNES Used Game Gray Boxed","price":74,"category":"electronics","isActive":true},{"id":11403215,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/5WQAAOSwYCRhiyLn/s-l225.webp","title":"New ListingNintendo Wii bundle with 10 games","price":89.4,"category":"electronics","isActive":true},{"id":54936235,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/7dYAAOSw-A1hi4Vl/s-l225.webp","title":"New ListingNintendo Wii Console White & Controller #544","price":7.37,"category":"electronics","isActive":true},{"id":90783887,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/t00AAOSwKohhfx3o/s-l225.webp","title":"Nintendo GameBoy Micro 20th Anniversary Edition Famicom Color Japan Used","price":184,"category":"electronics","isActive":true},{"id":65433582,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/KeIAAOSwNaFhi8Tw/s-l225.webp","title":"New ListingGood SONY PlayStation PS Vita console PCHJ-10007 PCH-1000 Ice Silver 8GB 636758","price":129.98,"category":"electronics","isActive":true},{"id":40396787,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/53gAAOSw0WBhWv69/s-l225.webp","title":"New ListingNintendo Switch hdh-001","price":150,"category":"electronics","isActive":true},{"id":80147707,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/L6MAAOSw3llhi4PA/s-l225.webp","title":"New ListingSuper Nintendo Entertainment System-Nintendo Classic Mini with 20+1 Games  #645","price":7.74,"category":"electronics","isActive":true},{"id":28785943,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/oOsAAOSwnXhhi8QG/s-l225.webp","title":"New ListingGame Boy Pocket + 8 games","price":92.68,"category":"electronics","isActive":true},{"id":65798785,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/oEMAAOSwKmZhiw1y/s-l225.webp","title":"New ListingXbox 360 S Slim 1439 4gb Console Bundle W/ 2 OEM Controllers Kinect Box Tested","price":119.99,"category":"electronics","isActive":true},{"id":13306579,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/eEQAAOSwvmNhi7ko/s-l225.webp","title":"New ListingXbox one s 1tb console 2 controllers","price":135.52,"category":"electronics","isActive":true},{"id":15751477,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Ph8AAOSwKiRe-Tt7/s-l225.webp","title":"Dsi Console KINGDOM HEARTS EDITION 358/2 Days Square Enix Game Software Set New","price":222.98,"category":"electronics","isActive":true},{"id":43377928,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/18EAAOSwKYNgaHQe/s-l225.webp","title":"Game Boy Classic Grey Backlit Screen IPS Nintendo Pokémon NEW ❤ 🔥 😄","price":266.33,"category":"electronics","isActive":true},{"id":87271398,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/H-sAAOSwyGhhimpz/s-l225.webp","title":"PSP Go Piano Black PSP N1000 Box Console Charger Playstation Portable Go japan","price":215.99,"category":"electronics","isActive":true},{"id":40723739,"imgSrc":"https://i.ebayimg.com/thumbs/images/g/fA8AAOSwuwlhFEws/s-l225.webp","title":"Sony PlayStation 3 Console PS3 Slim Bundle With Controller & Cords Tested","price":144.95,"category":"electronics","isActive":true}];

  // muutuja2 = "adsad";
  // muutuja3 = true;
  // et Componenti kasutusele võtta, pean ta panema kas app-routingusse või võtma ta kasutusele
  // app-COMPONENT_NIMI selectori abil (<app-NIMI></app-NIMI>)

  constructor() { }

  // funktsioon1() {

  // }

  // funktsioon2() {

  // }
}
