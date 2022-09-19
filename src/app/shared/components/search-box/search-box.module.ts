import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBoxComponent } from './search-box.component';



@NgModule({
  declarations: [
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    SearchBoxComponent
  ]
})
export class SearchBoxModule { }
