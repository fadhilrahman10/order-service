export class CreateOrderDto {
  readonly items: { name: string, price: number }[];
  readonly customerEmail: string;
}
