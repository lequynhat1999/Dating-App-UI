/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { 500PageComponent } from './500-page.component';

describe('500PageComponent', () => {
  let component: 500PageComponent;
  let fixture: ComponentFixture<500PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 500PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(500PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
