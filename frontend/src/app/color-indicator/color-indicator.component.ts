import { Component, OnInit, Input } from '@angular/core';
import colorsTable from "../../colors.json";

@Component({
  selector: 'app-color-indicator',
  template: `
    <div class="color-indicator">
      <span *ngFor="let color of colors" [ngStyle]="{'background-color': colorsTable[color]}"></span>
    </div>
  `,
  styles: [
    `.color-indicator {
        width: 34px;
        height: 34px;
        display: inline-flex;
        vertical-align: middle;
        margin-left: 2px;
      }

      .color-indicator span {
        width: 100%;
      }
  `]
})
export class ColorIndicatorComponent implements OnInit {
  @Input() colors: string[];
  colorsTable = colorsTable;

  constructor() { }

  ngOnInit(): void {
  }

}
