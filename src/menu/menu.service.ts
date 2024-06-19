import { Injectable } from '@nestjs/common';

@Injectable()
export class MenuService {
  private readonly menu = [
    { name: 'Pizza', price: 10 },
    { name: 'Pasta', price: 8 },
    { name: 'Salad', price: 5 },
  ];

  findAll() {
    return this.menu;
  }
}
