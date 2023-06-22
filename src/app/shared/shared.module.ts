import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FeatherIconModule } from '../core/feather-icon/feather-icon.module';
import { RouterModule } from '@angular/router';



@NgModule({
declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    FeatherIconModule
  ],
  exports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    FeatherIconModule
  ]
})
export class SharedModule { }
