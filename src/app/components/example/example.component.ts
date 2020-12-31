import { Input, ViewChild, ElementRef, AfterViewInit, Component } from '@angular/core';
import * as jexcel from 'jexcel';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {
  title = 'Angular Elements';
  table: jexcel = {}
  @Input() name: string;
  @Input() surname: string;
  data = [
    ['Prj1', 'ERPL', '2019-02-12', '', true, '2.000,00'],
    ['Prj2', 'SRPL', '2018-07-11', '', true, '4.000,01'],
  ];
  constructor() { }


  ngAfterViewInit() {
    this.table = jexcel(document.getElementById('spreadsheet'), {
      data: this.data,
      columns: [
          { type: 'text', title: 'Project', width: 120 },
          { type: 'dropdown', title: 'Select', width: 200, source: [ 'S1', 'S2', 'S3' ], autocomplete: true, multiple: true },
          { type: 'calendar', title: 'Available', width: 200 },
          { type: 'image', title: 'img', width: 120 },
          { type: 'checkbox', title: 'Check', width: 80 },
          { type: 'numeric', title: 'Cost', width: 100, decimal: ',' },
          { type: 'calendar', title: 'Completion Date', width: 250}
      ],
      style: {
        A1: 'background-color: blue;'
      }
    });
  }

  onClick(event:any){
    console.log(event);
    console.log(event.target.outerText);
    console.log(event.target.value);
    if(event.target.value == 0) {
      this.table.insertRow();
    }
    else {
      this.table.insertColumn();
    }
  }
}
