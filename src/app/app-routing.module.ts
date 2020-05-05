import { NgModule } from '@angular/core';
import { Routes, RouterModule,ExtraOptions } from '@angular/router';
import { DeploymentComponent } from './deployment/deployment.component';
import { MessagestatisticsComponent } from './messagestatistics/messagestatistics.component';
import { MessagetracingComponent } from './messagetracing/messagetracing.component';
import { SolutionsComponent } from './solutions/solutions.component';
import {useHash} from './app.flags';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'deployment',
    pathMatch: 'full'
  },
  { 
    path:'deployment',
    component:DeploymentComponent 
  },
  {
    path: 'tracing',
    component: MessagetracingComponent
  },
//   Lazy loading module{
//     path: 'flight-booking',
//     loadChildren: () =>
//       import('./flight-booking/flight-booking.module').then(
//         mod => mod.FlightBookingModule
//       )
//   },
  {
    path: 'statistics',
    component: MessagestatisticsComponent,
    
  },
  {
    path: 'solutions',
    component: SolutionsComponent,
    
  },
  {
    path: '**',
    redirectTo: 'deployment'
  }
];
const ROUTING_OPTIONS: ExtraOptions = {
  // preloadingStrategy: CustomPreloadingStrategy,
  useHash:useHash,
  initialNavigation: !useHash
};

@NgModule({
  imports: [RouterModule.forRoot(routes,ROUTING_OPTIONS)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
