import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuModule } from './menu/menu.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'example',
      database: 'restaurant',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    MenuModule,
    OrderModule,
  ],
})
export class AppModule {}
