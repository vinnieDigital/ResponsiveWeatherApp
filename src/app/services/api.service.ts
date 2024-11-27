import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConfig } from '../models/api-config.model';

@Injectable()
export abstract class BaseApiService {
  protected constructor(
    protected http: HttpClient,
    protected config: ApiConfig
  ) {}

  protected getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.config.key}`,
      'Content-Type': 'application/json'
    });
  }

  protected buildUrl(endpoint: string): string {
    console.log("apistring",`${this.config.baseUrl}/${endpoint}`);
    return `${this.config.baseUrl}/${endpoint}`;
  }
}