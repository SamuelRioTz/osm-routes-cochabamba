import { TestBed } from '@angular/core/testing';

import { OsmRoutesService } from './osm-routes.service';

describe('OsmRoutesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OsmRoutesService = TestBed.get(OsmRoutesService);
    expect(service).toBeTruthy();
  });
});
