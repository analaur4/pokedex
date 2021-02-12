import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

import { PokeapiService } from 'src/app/core/services/pokeapi.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit, OnDestroy, OnChanges {
  
  isAlive: boolean = true;
  @Input() pokemonNumber: number = null;
  pokemon: any = {};

  isLoading: boolean = false;

  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit(): void {
  }
  
  ngOnChanges() {
    this.getPokemon();
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  getPokemon() {
    this.isLoading = true;
    this.pokeapiService.getPokemonInfo(this.pokemonNumber)
    .pipe(takeWhile(() => this.isAlive))
    .subscribe((response => {
      this.pokemon = response;
      this.isLoading = false;
    }));
  }

}
