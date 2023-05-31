import {Component, OnInit} from '@angular/core';
import {DishesService} from "../core/services/dishes.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  constructor(private dishesService: DishesService) {
  }

  ngOnInit(): void {
    this.dishesService.getDishes('pizza').subscribe(item => {
      this.dishesService.dishes$.next(item);
    })
  }

}
