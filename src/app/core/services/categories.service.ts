import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {ICategory} from "../../sahred/interfaces/category";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories: string = environment.api + '/categories';

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(this.categories).pipe(catchError((error) => {
      console.log('Something went wrong. Please try again later.')
      return of(error.message);
    }))
  }

}
