import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntriesPrizesComponent } from './entries-prizes.component';

describe('EntriesPrizesComponent', () => {
  let component: EntriesPrizesComponent;
  let fixture: ComponentFixture<EntriesPrizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntriesPrizesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntriesPrizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
