/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { 404PageComponent } from './404-page.component';

describe('404PageComponent', () => {
  let component: 404PageComponent;
  let fixture: ComponentFixture<404PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 404PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(404PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
