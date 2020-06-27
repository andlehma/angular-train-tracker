import { Component, OnInit, Input } from '@angular/core';
import { Eta } from "../model";
import colorsTable from "../../colors.json";

@Component({
  selector: 'app-eta-card',
  templateUrl: './eta-card.component.html',
  styleUrls: ['./eta-card.component.css']
})
export class EtaCardComponent implements OnInit {
  @Input() eta: Eta;
  @Input() number: number;

  trainName = "";
  colorsTable = colorsTable;

  constructor() { }

  ngOnInit(): void {
    switch (this.eta.rt) {
      case "Pink":
        this.trainName += "Pink Line #"
        break;
      case "G":
        this.trainName += "Green Line #"
        break;
      case "Org":
        this.trainName += "Orange Line #"
        break;
      case "Red":
        this.trainName += "Red Line #"
        break;
      case "Brn":
        this.trainName += "Brown Line #"
        break;
      case "Blue":
        this.trainName += "Blue Line #"
        break;
      case "P":
        this.trainName += "Purple Line #"
        break;
      case "Y":
        this.trainName += "Yellow Line #"
        break;
    }
    this.trainName += this.eta.rn + " to";
  }

}
