import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../../core/services/categories.service";
import {ICategory} from "../../../sahred/interfaces/category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: ICategory[] = [];

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(item => {
      console.log(item);
      this.categories = item;
    })
  }
}
