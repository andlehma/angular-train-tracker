import { Component } from '@angular/core';
import { TrainDataService } from './train-data.service';
import { Stop, Eta } from "./model";
import { TimeDataService } from './time-data.service';
import { timer, Subscription } from 'rxjs';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-train-tracker';
  etas = [];
  time: number;
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
  };
  timeSubscription: Subscription;
  trainSubscription: Subscription;

  changeStop(stop) {
    this.currentStop = stop;
    this.trainService.sendGetRequest(this.currentStop.stop_id).subscribe((data: any) => {
      this.handleCtatt(data.ctatt);
    });
  }

  handleCtatt(ctatt) {
    console.log(ctatt);
    if (ctatt.eta) {
      this.etas = ctatt.eta;
      this.calculateMinsUntilArrival();
      this.deleteOldTrains();
    }
  }

  queryTimeApi() {
    this.time = null;
    this.timeService.sendGetRequest().subscribe((data: any) => {
      const chicagoTime = Date.parse(data.datetime.substring(0, 26));
      this.time = chicagoTime;
      this.calculateMinsUntilArrival();
      this.deleteOldTrains();
    });
  }

  calculateMinsUntilArrival() {
    if (this.time && this.etas.length > 0) {
      for (let i = 0; i < this.etas.length; i++) {
        const msUntilArrival = Date.parse(this.etas[i].arrT) - this.time;
        const msToMins = 1 / 60000;
        const minsUntilArrival = Math.ceil(msUntilArrival * msToMins);
        this.etas[i] = {
          ...this.etas[i],
          msUntilArrival: msUntilArrival,
          minsUntilArrival: minsUntilArrival
        };
      }
    }
  }

  deleteOldTrains() {
    let newEtas: Eta[] = [];
    for (let i = 0; i < this.etas.length; i++) {
      if (this.etas[i].msUntilArrival > -10000)
        newEtas.push(this.etas[i]);
    }
    this.etas = newEtas;
  }

  constructor(private trainService: TrainDataService,
    private timeService: TimeDataService) { }

  ngOnInit() {
    this.timeSubscription = timer(0, 5 * 1000).pipe(
      switchMap(() => this.timeService.sendGetRequest())
    ).subscribe((result: any) => {
      const chicagoTime = Date.parse(result.datetime.substring(0, 26));
      this.time = chicagoTime;
      this.calculateMinsUntilArrival();
      this.deleteOldTrains();
    });
    this.trainSubscription = timer(0, 5 * 60 * 1000).pipe(
      switchMap(() => this.trainService.sendGetRequest(this.currentStop.stop_id))
    ).subscribe((result: any) => {
      this.handleCtatt(result.ctatt);
    });
  }
}
