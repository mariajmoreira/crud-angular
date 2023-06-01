import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component } from '@angular/core';
import { Alimento } from '../models/alimento';
import { AlimentosService } from '../services/alimentos.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  content$ : Observable<Alimento[]> | null= null;

  constructor(private alimentosService : AlimentosService,
    private dialog: MatDialog,
    private router : Router,
    private route: ActivatedRoute,
    private _snackBar : MatSnackBar) {
    this.refresh()

  }

  onError(errorMsg:string){
  //  alert(errorMsg)
    this.dialog.open(ErrorDialogComponent,
      {
        data:errorMsg
      })
  }

  onAdd(){
   this.router.navigate(['new'],{relativeTo: this.route})
   .catch(err => console.log('Error:' + err));
  }


  onEdit(alimento : Alimento){
    this.router.navigate(['edit', alimento.id],{relativeTo: this.route})
   .catch(err => console.log('Error:' + err));
  }

  onDelete(alimento : Alimento){


      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: 'Tem certeza que deseja remover este alimento?',
      });

      dialogRef.afterClosed().subscribe((result:boolean) => {
        if(result){
          this.alimentosService.remove(alimento.id).subscribe({
            next : () =>  {this._snackBar.open('Alimento apagado','',
                                              {duration:5000,
                                              verticalPosition:'top',
                                              horizontalPosition: 'center'});
                          this.refresh()},
            error : error =>  this.onError("Erro ao apagar alimento")
          });
        }
      });
  }


  refresh(){
    this.content$ = this.alimentosService.list()
    .pipe(
      catchError(error => {
       this.onError("Erro ao recarregar alimentos")
        return of([])
      })
    );
  }

  ngOnInit() :void{}



}
