import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainDataService {
  private ENDPOINT = "https://andrewlehman.me/traintracker/api/";
  constructor(private httpClient: HttpClient) { }
  public sendGetRequest(stop) {
    return this.httpClient.get(this.ENDPOINT + stop);
  }
}
