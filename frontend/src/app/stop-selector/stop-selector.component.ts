import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stop } from "../model";
import stopsList from "../../stops.json";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-stop-selector',
  templateUrl: './stop-selector.component.html',
  styleUrls: ['./stop-selector.component.css']
})
export class StopSelectorComponent implements OnInit {
  stops: Stop[] = stopsList;
  showDropdown = false;
  faCaretDown = faCaretDown;
  @Input() currentStop: Stop;
  @Output() currentStopChange = new EventEmitter<Stop>();

  constructor() { }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  searchStops(e) {
    this.stops = [];
    const filter = e.target.value.toUpperCase();
    stopsList.forEach(stop => {
      const stopName = stop.stop_name.toUpperCase();
      if (stopName.substring(0, filter.length) === filter) {
        this.stops.push(stop);
      }
    });
  }

  ngOnInit(): void {
  }

}
