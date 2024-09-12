import { Injectable } from '@nestjs/common';
import { LangchainService } from 'src/langchain/langchain.service';
import { ChatDto } from './chat.dto';

@Injectable()
export class ChatService {
  constructor(private readonly langchainService: LangchainService) {}

  async processMessage(chatDto: ChatDto) {
    const { message } = chatDto;
    const response = await this.langchainService.generateResponse(message);
    return { message: response };
  }
}
