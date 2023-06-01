import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alimento } from '../models/alimento';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() content : Alimento[] = [];
  @Output() add = new EventEmitter(false)
  @Output() edit = new EventEmitter(false)
  @Output() delete = new EventEmitter(false)


  readonly displayedColumns = ['id','name','category','actions'];

  constructor(){

    }

    onAdd(){
      this.add.emit(true);
     }

     onEdit(alimento : Alimento){
      this.edit.emit(alimento);
     }

     onDelete(alimento : Alimento){
      this.delete.emit(alimento);
     }
}
