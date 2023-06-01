import { Inject, Injectable, Injector, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { AlimentosService } from '../services/alimentos.service';
import { Alimento } from '../models/alimento';
import { HttpClient } from '@angular/common/http';



export const alimentoResolver: ResolveFn<Alimento> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<any> | Promise<any> | any => {

  if(route.params && route.params['id']){
   // const myService = injector.get(AlimentosService); // Get an instance of MyService
   // alert(route.params['id'])
   return inject(AlimentosService).loadById(route.params['id']); // Call the desired method on the service
  }
  return of({id:'',name:'',category:''});
};



