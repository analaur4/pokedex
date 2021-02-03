import { Component, OnInit } from '@angular/core';

import { PokeapiService } from 'src/app/core/services/pokeapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  nameFilter: string = '';
  selectedPokemon: any = null;

  get pokemonList() {
    return this.pokeapiService.pokelist.filter(pokemon => {
      return pokemon.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1;
    })
  }
  
  get pkmSprite() {
    const number = ('000' + this.selectedPokemon.number).slice(-3);
    return `//serebii.net/sunmoon/pokemon/${number}.png`;
  }

  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit(): void {
  }

  selectPokemon(pkm) {
    this.selectedPokemon = pkm;
  }

}
