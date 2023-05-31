import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesComponent} from './components/categories/categories.component';
import {MenuRoutingModule} from "./menu-routing.module";
import { MenuComponent } from './menu.component';
import {CoreModule} from "../core/core.module";
import { DishesComponent } from './components/dishes/dishes.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    MenuComponent,
    DishesComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    CoreModule
  ]
})
export class MenuModule {
}
