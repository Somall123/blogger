import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofpostsComponent } from './listofposts.component';

describe('ListofpostsComponent', () => {
  let component: ListofpostsComponent;
  let fixture: ComponentFixture<ListofpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListofpostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListofpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
