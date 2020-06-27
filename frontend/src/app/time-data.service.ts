import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimeDataService {
  private ENDPOINT = "http://worldtimeapi.org/api/timezone/America/Chicago";
  constructor(private httpClient: HttpClient) { }
  public sendGetRequest() {
    return this.httpClient.get(this.ENDPOINT);
  }
}
