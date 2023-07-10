import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';



@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectsComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule { }
