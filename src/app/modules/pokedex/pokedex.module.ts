import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { ListComponent } from './views/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { MyNumberPipe } from '../../shared/pipes/my-number.pipe';
import { InformationComponent } from './components/information/information.component';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { NotFoundComponent } from 'src/app/shared/components/not-found/not-found.component';

const components = [
  ListComponent,
  ListItemComponent,
  InformationComponent
]

@NgModule({
  declarations: [
    ...components,
    MyNumberPipe,
    LoadingComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    FormsModule,
  ],
  exports: components
})
export class PokedexModule { }
