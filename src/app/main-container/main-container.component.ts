import { Component, OnInit } from '@angular/core';
import { OsmRoutesService } from '../osm-routes.service';
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
  displayedColumns: string[] = ['id', 'name', 'ref', 'from', 'to', 'state'];
  routes: OSMRoute[] = [
    {
      id: "id",
      name: "namenamenamenamenamenamenamenamenamenamenamename",
      ref: "ref",
      from: "from",
      to: "to",
    },
  ];

  constructor(service: OsmRoutesService) {
    console.log(service.osm_log)
    this.routes = service.osm_log
  }
  ngOnInit() {
  }
  openPage(id: string) {
    window.open(`https://www.openstreetmap.org/relation/${id}`, '_blank');
  }
}
