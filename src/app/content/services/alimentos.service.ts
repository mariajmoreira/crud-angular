import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Alimento } from '../models/alimento';
import { delay,first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlimentosService {

  private readonly API = "api/alimentos";

  constructor(private httpClient : HttpClient) { }

  list(){
    return this.httpClient.get<Alimento[]>(this.API)
    .pipe(
      first(),
     //delay(5000),
      tap(alimentos => console.log(alimentos))
    );
  }

  loadById(id : string){
    return this.httpClient.get<Alimento>(`${this.API}/${id}`);
  }

  save(record : Partial<Alimento>){
    if(record.id){
      console.log('update ' + record)
      return this.update(record);
    }
    else{
      console.log('create ' + record)
      return this.create(record);
    }
  }

  private create(record : Partial<Alimento>){
    return this.httpClient.post<Alimento>(this.API, record)
    .pipe(first());
   }

   private update(record : Partial<Alimento>){
    return this.httpClient.put<Alimento>(`${this.API}/${record.id}`, record)
    .pipe(first());
   }

   remove(id : string){
    return this.httpClient.delete(`${this.API}/${id}`)
    .pipe(first());
   }


}
