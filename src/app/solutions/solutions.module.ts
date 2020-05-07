import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionsComponent } from './solutions.component';

@NgModule({
  declarations: [SolutionsComponent],
  imports: [
    CommonModule
  ],
  exports:[SolutionsComponent]
})
export class SolutionsModule { }
