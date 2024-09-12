import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatModule } from './chat/chat.module';
import { ConfigModule as CustomConfigModule } from './config/config.module';

@Module({
  imports: [
    ConfigModule.forRoot(),  // Loads .env variables
    MongooseModule.forRoot(process.env.MONGO_URI),
    ChatModule,
    CustomConfigModule,
  ],
})
export class AppModule {}
