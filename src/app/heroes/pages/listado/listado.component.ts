import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeoresService } from '../../services/heores.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  heroes:Heroe[] =[];

  superhero: string[]=[];

  constructor( private heroesService:HeoresService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
        .subscribe( heroes => this.heroes=heroes);
        // .subscribe(console.log)
  }

}
