import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    MyServicesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    AngularTypewriterEffectModule
  ]
})
export class PagesModule { }
