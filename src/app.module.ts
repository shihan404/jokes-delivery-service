import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JokesModule } from './jokes/jokes.module';
import { Joke } from './jokes/jokes.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 3306),
        username: configService.get('DB_USERNAME', 'root'),
        password: configService.get('DB_PASSWORD', 'root'),
        database: configService.get('DB_NAME', 'jokes_db'),
        entities: [Joke],
        synchronize: true, // Set to false in production
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
    JokesModule,
  ],
})
export class AppModule { }
