import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeploymentComponent } from './deployment/deployment.component';


const routes: Routes = [
  {path:'deployment',component:DeploymentComponent},
  {  path:'**',component:DeploymentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
