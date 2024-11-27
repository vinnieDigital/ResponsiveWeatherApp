import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = 'https://api.openai.com/v1/images/generations';
  constructor(private http: HttpClient) {}

  generateImage(condition: string, location: string) {
    const apiKey = '222';
    const prompt = `A ${condition} view of ${location}, cityscape with landmarks`;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + apiKey);
    const response = {
        'model': "dall-e-3",
        'prompt': prompt,
        'num_images': 1,
        'size': '512x512',
        'response_format': 'url'
    };
    return this.http.post(this.apiUrl, response, { headers: headers });
  }
}