import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class LangchainService {
  private readonly apiKey = process.env.OPENAI_API_KEY;
  private readonly apiUrl = 'https://api.openai.com/v1/engines/gpt-3.5-turbo/completions';

  async generateResponse(message: string): Promise<string> {
    const response = await axios.post(this.apiUrl, {
      prompt: message,
      max_tokens: 50,
    }, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data.choices[0].text.trim();
  }
}
