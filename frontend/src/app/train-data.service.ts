import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainDataService {
  private ENDPOINT = "http://localhost:3000/api/";
  constructor(private httpClient: HttpClient) { }
  public sendGetRequest(stop) {
    return this.httpClient.get(this.ENDPOINT + stop);
  }
}
