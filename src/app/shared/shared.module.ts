import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { CollapseButtonComponent } from './components/buttons/collapse-button/collapse-button.component';
import { AuthDirective } from './directives/auth.directive';
import { CapitalPipe } from './pipes/capital.pipe';



@NgModule({
  declarations: [LoaderComponent, CollapseButtonComponent, AuthDirective, CapitalPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
