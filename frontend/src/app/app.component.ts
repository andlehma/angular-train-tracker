import { Component } from '@angular/core';
import { TrainDataService } from './train-data.service';
import { Stop } from "./model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-train-tracker';
  etas = [];
  currentStop: Stop = {
    "stop_id": "30050",
    "map_id": "40260",
    "direction_id": "E",
    "stop_name": "State/Lake (Inner Loop)",
    "station_name": "State/Lake",
    "station_descriptive_name": "State/Lake (Brown, Green, Orange, Pink & Purple Lines)",
    "station_lines": [
      "G",
      "Pink",
      "Org"
    ]
  }

  changeStop(stop) {
    this.currentStop = stop;
    this.queryApi();
  }

  queryApi() {
    this.etas = [];
    this.dataService.sendGetRequest(this.currentStop.stop_id).subscribe((data: any) => {
      console.log(data.ctatt);
      if (data.ctatt.eta)
        this.etas = data.ctatt.eta;
    });
  }

  constructor(private dataService: TrainDataService) { }

  ngOnInit() {
    this.queryApi();
  }
}
