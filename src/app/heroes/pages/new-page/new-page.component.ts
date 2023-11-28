import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent  implements OnInit{

  public heroForm = new FormGroup({
    id: new FormControl<string>(""),
    superhero: new FormControl<String>("",{ nonNullable:true}),
    publisher: new FormControl(""),
    alter_ego: new FormControl(""),
    first_appearance: new FormControl(""),
    characters: new FormControl(""),
    alt_img: new FormControl(""),
  });

  public publishers = [
    { id: "DC Comics", value: "DC-Comics" },
    { id: "Marvel Comics", value: "Marvel-Comics" }
  ]

  constructor(
    private heroesService: HeroesService,
    private activatedRoute:ActivatedRoute,
    private router: Router
    ){

  }

  ngOnInit(): void {

    if( !this.router.url.includes("edit")) return;

    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.getHeroById( id) )
    ).subscribe(hero => {
      if ( !hero ) return this.router.navigateByUrl('/');

      this.heroForm.reset( hero);
      return;
    })


  }


  get currentHero():Hero{
    const hero = this.heroForm.value as  Hero;
    console.log({hero});

    return hero;
  }

  onSubmit():void{
    if( this.heroForm.invalid) return;

    if ( this.currentHero.id){
      this.heroesService.updateHero( this.currentHero)
        .subscribe( hero =>{
          // Todo:mostrar snackbar
        })
    }
    this.heroesService.addHero( this.currentHero)
      .subscribe( hero => {
        // Todo:mostrar snackbar y navegar a /heroes/edit hero.id
      })
  }

}


