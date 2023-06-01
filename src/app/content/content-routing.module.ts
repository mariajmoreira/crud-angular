import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ContentFormComponent } from './content-form/content-form.component';
import { alimentoResolver } from './guards/alimento.resolver';

const routes: Routes = [
  {path : '' ,component : ContentComponent},
  {path : 'new' ,component : ContentFormComponent, resolve: { alimento : alimentoResolver}},
  {path : 'edit/:id' ,component : ContentFormComponent, resolve: { alimento : alimentoResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
