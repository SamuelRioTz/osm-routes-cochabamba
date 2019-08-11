import { Component, OnInit } from '@angular/core';
export interface Transaction {
  item: string;
  cost: number;
}
export interface OSMRoute {
  id: string;
  name: string;
  ref: string;
  from: string;
  to: string;
}
@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
  displayedColumns: string[] = ['item', 'name', 'ref', 'from', 'to'];
  routes: OSMRoute[] = [
    {
      id: "id",
      name: "namenamenamenamenamenamenamenamenamenamenamename",
      ref: "ref",
      from: "from",
      to: "to",
    },
  ];
  ngOnInit() {
  }

}
