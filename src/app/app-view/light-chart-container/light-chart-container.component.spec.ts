import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightChartContainerComponent } from './light-chart-container.component';

describe('LightChartContainerComponent', () => {
  let component: LightChartContainerComponent;
  let fixture: ComponentFixture<LightChartContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightChartContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightChartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
