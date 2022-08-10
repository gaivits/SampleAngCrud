
import { TestsComponent } from './tests.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [TestsComponent],
  imports: [
    CommonModule,
    NgModule,
    NgForm,
    HttpClient,
  ]
})
export class TestsModule { }
