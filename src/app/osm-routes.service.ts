import { Injectable } from '@angular/core';
import osm_log from 'src/assets/routes/log.json';

@Injectable({
  providedIn: 'root'
})
export class OsmRoutesService {
  osm_log: any[] = osm_log;
  constructor() { }
}
