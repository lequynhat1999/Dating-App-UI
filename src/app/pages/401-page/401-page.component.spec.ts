/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { 401PageComponent } from './401-page.component';

describe('401PageComponent', () => {
  let component: 401PageComponent;
  let fixture: ComponentFixture<401PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 401PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(401PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
