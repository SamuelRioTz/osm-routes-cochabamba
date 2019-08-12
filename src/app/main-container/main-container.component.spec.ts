import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContainerComponent } from './main-container.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

describe('MainContainerComponent', () => {
  let component: MainContainerComponent;
  let fixture: ComponentFixture<MainContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        MatButtonModule
      ],
      declarations: [ MainContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
