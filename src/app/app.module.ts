import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeploymentModule } from './deployment/deployment.module';
import { MessagestatisticsModule } from './messagestatistics/messagestatistics.module';
import { MessagetracingModule } from './messagetracing/messagetracing.module';
import { SolutionsModule } from './solutions/solutions.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeploymentModule,
    MessagestatisticsModule,
    MessagetracingModule,
    SolutionsModule,
    SharedModule,
    CoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
