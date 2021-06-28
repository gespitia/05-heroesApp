import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeoresService } from '../../services/heores.service';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  termino:string="";
  heroes:Heroe[]=[];
  heroeSeleccionado:Heroe | undefined;

  constructor( private heoresService:HeoresService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.heoresService.getSugerencias(this.termino).subscribe(heroes=>this.heroes=heroes);
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent){
    if (!event.option.value){
      this.heroeSeleccionado=undefined;
      return;
    }
    const heroe:Heroe = event.option.value;
    this.termino=heroe.superhero;
    this.heoresService.getHeroe(heroe.id!).subscribe(heroe=>this.heroeSeleccionado=heroe);

  }
}
