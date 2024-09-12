import { Controller, Post, Body } from '@nestjs/common';
import { ChatService } from './chat.service'; 
import { ChatDto } from './chat.dto'; 

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async sendMessage(@Body() chatDto: ChatDto) {
    return this.chatService.processMessage(chatDto);
  }
}
