import { Component } from '@angular/core';
import { TrainDataService } from './train-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-train-tracker';
  etas = [];
  constructor(private dataService: TrainDataService) { }

  ngOnInit() {
    this.dataService.sendGetRequest(30050).subscribe((data: any) => {
      console.log(data.ctatt);
      if (data.ctatt.eta)
        this.etas = data.ctatt.eta;
    })
  }
}
