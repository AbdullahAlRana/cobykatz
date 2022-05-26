import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehindTheCanvasComponent } from './behind-the-canvas.component';

describe('BehindTheCanvasComponent', () => {
  let component: BehindTheCanvasComponent;
  let fixture: ComponentFixture<BehindTheCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehindTheCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehindTheCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
