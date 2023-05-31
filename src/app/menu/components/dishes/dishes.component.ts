import {Component, OnInit} from '@angular/core';
import {DishesService} from "../../../core/services/dishes.service";
import {Observable} from "rxjs";
import {IDish} from "../../../sahred/interfaces/dish";

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {

  dishes$: Observable<IDish[]>;

  constructor(private dishesService: DishesService) {
  }

  ngOnInit(): void {
    this.dishes$ = this.dishesService.dishes$
    console.log(this.dishes$)
  }

}
