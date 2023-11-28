import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Hero } from '../interfaces/hero.interface';


@Injectable({providedIn: 'root'})
export class HeroesService {

private baseUrl:string = environments.baserUrl

constructor(private http: HttpClient) { }

  getHeroes():Observable<Hero[]>{
    return this.http.get<Hero[]>( `${ this.baseUrl}/heroes`);
  }

  getHeroById( id:string ):Observable<Hero | undefined> {

    return this.http.get<Hero>( `${ this.baseUrl}/heroes/${ id }`)
    .pipe(
      catchError( error =>of( undefined ) )
    )
  }

  getSuggestions(query:string ):Observable<Hero[]>{
    return this.http.get<Hero[]>(`${ this.baseUrl}/heroes?q=${query}&_limit=6`)

  }

  addHero( hero:Hero ):Observable<Hero>{
    return this.http.post<Hero>(`${ this.baseUrl}/heroes`,hero)
  }

  updateHero( hero:Hero ):Observable<Hero>{
    if( !hero.id) throw Error(" hero id is requerid ");
    return this.http.patch<Hero>(`${ this.baseUrl}/heroes/${ hero.id}`,hero)
  }

  deleteteHeroById( id:string ):Observable<Boolean>{

    return this.http.delete(`${ this.baseUrl}/heroes/${ id}`)
    .pipe(
      catchError(err => of(false)),
      map( resp => true)
    );
  }


}


 