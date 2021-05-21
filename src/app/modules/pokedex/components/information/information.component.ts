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

  backgroundColor: String = '';
  backgroundColorStats: String = '';

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
      this.getTypePokemon(this.pokemon.types[0].name);
      this.backgroundColorStats = this.backgroundColor + '47';
      this.isLoading = false;
    }));
  }

  getTypePokemon(type: String) {
    switch (type) {
      case 'normal':
        this.backgroundColor = '#b2bec3';
        break;
      
      case 'fighting':
        this.backgroundColor = '#d63031';
        break;

      case 'flying':
        this.backgroundColor = '#00cec9';
        break;

      case 'poison':
        this.backgroundColor = '#a29bfe';
        break;

      case 'ground':
        this.backgroundColor = '#cc8e35';
        break;
      
      case 'rock':
        this.backgroundColor = '#636e72';
        break;

      case 'bug':
        this.backgroundColor = '#55efc4';
        break;

      case 'ghost':
        this.backgroundColor = '#bdc3c7';
        break;

      case 'steel':
        this.backgroundColor = '#7f8c8d';
        break;

      case 'fire':
        this.backgroundColor = '#EE5A24';
        break;

      case 'water':
        this.backgroundColor = '#0984e3';
        break;

      case 'grass':
        this.backgroundColor = '#00b894';
        break;

      case 'electric':
        this.backgroundColor = '#fdcb6e';
        break;

      case 'psychic':
        this.backgroundColor = '#5758BB';
        break;

      case 'ice':
        this.backgroundColor = '#12CBC4';
        break;

      case 'dragon':
        this.backgroundColor = '#833471';
        break;

      case 'dark':
        this.backgroundColor = '#2c2c54';
        break;

      case 'fairy':
        this.backgroundColor = '#fd79a8';
        break;

      case 'unknown':
        this.backgroundColor = '#aaa69d';
        break;

      case 'shadow':
        this.backgroundColor = '#84817a';
        break;

      default:
        this.backgroundColor = '#000';
        break;
    }
  }

}
