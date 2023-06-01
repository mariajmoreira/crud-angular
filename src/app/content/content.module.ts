import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content/content.component';

import {MatTableModule} from '@angular/material/table'
import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';

import { SharedModule } from '../shared/shared.module';

import {FaIconLibrary,FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { faWheatAwn,faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import { ContentFormComponent } from './content-form/content-form.component'
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    ContentComponent,
    ContentFormComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class ContentModule {
  constructor(library : FaIconLibrary){
    library.addIcons(faWheatAwn,faAppleWhole)
  }
 }
