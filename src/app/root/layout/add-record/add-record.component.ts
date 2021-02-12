import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  // @ts-ignore
  date: string;
  // @ts-ignore
  dist: string;
  // @ts-ignore
  time: string;
  // @ts-ignore
  results;
  currentval1 = '';
  currentval2 = '';
  currentval3 = '';
  constructor() { }

  ngOnInit(): void {
    this.results = [{
      date: '2020-02-02', dist: '6,900.000', time: '15:00'
    }];
  }
  // tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:typedef
  onsubmit(val1, val2, val3){
    this.currentval1 = val1;
    this.currentval2 = val2;
    this.currentval3 = val3;
    this.results.push({date: this.currentval1, dist: this.currentval2, time: this.currentval3});
    console.log(this.results);
  }


}
