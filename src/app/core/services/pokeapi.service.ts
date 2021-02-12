import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PokeListResponse } from '../../shared/models/pokelist-response.model';
@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private url = 'https://dev.treinaweb.com.br/pokeapi';
  pokelist = [];

  constructor(private http: HttpClient) { }

  listAll() {
    return this.http.get<PokeListResponse>(`${this.url}/pokedex/1`).subscribe( resp => {
      resp.pokemon.forEach(pokemon => {
        pokemon.number = this.getNumberFromUrl(pokemon.resource_uri);
      })
      this.pokelist = this.sortPokemon(resp.pokemon).filter(pokemon => pokemon.number < 1000);
    })
  }

  getPokemonInfo(number: number): Observable<any> {
    return this.http.get(`${this.url}/pokemon/${number}`);
  }

  private getNumberFromUrl(url) {
    return parseInt(url.replace(/.*\/(\d+)\/$/, '$1'));
  }

  private sortPokemon(pokemonList) {
    return pokemonList.sort((a, b) => {
      return (a.number > b.number ? 1 : -1);
    })
  }
  
}
