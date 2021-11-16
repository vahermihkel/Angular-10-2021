export class Item {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public imgSrc: string,
    public category: string,
    public isActive: boolean
  ) {}
}