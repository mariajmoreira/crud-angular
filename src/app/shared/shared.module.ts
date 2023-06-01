import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CategoryPipe } from './pipes/category.pipe';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [ErrorDialogComponent, CategoryPipe, ConfirmationDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [ErrorDialogComponent, CategoryPipe,MatFormFieldModule,MatInputModule,MatSelectModule,MatSnackBarModule]
})
export class SharedModule { }
