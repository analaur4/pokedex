import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { ListComponent } from './views/list/list.component';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    FormsModule
  ],
  exports: [
    ListComponent
  ]
})
export class PokedexModule { }
