import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { LangchainService } from 'src/langchain/langchain.service';

@Module({
  controllers: [ChatController],
  providers: [ChatService, LangchainService],
})
export class ChatModule {}
