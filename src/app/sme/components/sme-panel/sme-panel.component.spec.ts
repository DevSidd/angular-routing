import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmePanelComponent } from './sme-panel.component';

describe('SmePanelComponent', () => {
  let component: SmePanelComponent;
  let fixture: ComponentFixture<SmePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
