import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { tap } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {
  public heroes : Hero[]= [];
  public searchInput = new FormControl("");

constructor( private  heroesService: HeroesService){

}


searchHero(){
  const value:string = this.searchInput.value || "";
  console.log("value", {value });

  this.heroesService.getSuggestions( value ).pipe(
    tap(info=> console.log("info",info),
    )
  )
    .subscribe( heroes =>{
        this.heroes = heroes
        console.log("heroes",this.heroes);
        
      } );
  
}

}
