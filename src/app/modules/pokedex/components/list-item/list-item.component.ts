import { Component, Input, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/core/services/pokeapi.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() pokemon: any;
  backgroundColor: String;

  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit(): void {
    this.getPokemonInfo(this.pokemon.number);
  }

  getPokemonInfo(number: number) {
    this.pokeapiService.getPokemonInfo(number).subscribe((response => {
      this.getTypePokemon(response.types[0].name);
    }))
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
