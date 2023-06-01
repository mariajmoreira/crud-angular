import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, UntypedFormBuilder, Validators } from '@angular/forms';
import { Alimento } from '../models/alimento';
import { AlimentosService } from '../services/alimentos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.css']
})
export class ContentFormComponent implements OnInit{

  form = this.formBuilder.group({
    id : [''],
    name: ['', [Validators.required,
                Validators.minLength(5),
                Validators.maxLength(100)]],
    category : ['', [Validators.required]]
  });;

  constructor(private formBuilder:NonNullableFormBuilder,
    private service:AlimentosService,
    private _snackBar :MatSnackBar,
    private location : Location,
    private route:ActivatedRoute){

  }

  ngOnInit(): void {
    const alimento : Alimento = this.route.snapshot.data['alimento']
    console.log(JSON.stringify(alimento))
    this.form.setValue({
      id : alimento.id,
      name: alimento.name,
      category : alimento.category
    })
  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe({
      next : result => this.onSuccess(),
      error : error => this.onError()
    });
  }

  onCancel(){
    this.location.back();
  }

  private onSuccess(){
    this._snackBar.open('Alimento salvo com sucesso','', {duration:5000})
    this.onCancel();
  }

  private onError(){
    this._snackBar.open('Erro ao salvar alimento','', {duration:5000})
  }

  getErrorMessage(fieldName:string){
    const field = this.form.get(fieldName)
    if(field?.hasError('required')){
      return 'Campo Obrigatório';
    }

    if(field?.hasError('minlength')){
      const requiredLength : number = field.errors ? field.errors['minlength']['requiredLength'] : 5;
      return 'Campo deve ter o tamanho mínimo de ' + requiredLength;
    }

    if(field?.hasError('maxlength')){
      const requiredLength : number = field.errors ? field.errors['maxlength']['requiredLength'] : 200;
      return 'Campo deve ter o tamanho maximo de ' + requiredLength;

    }
    return 'Campo Invalido'
  }


}
