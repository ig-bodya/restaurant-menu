import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, of} from "rxjs";
import {environment} from "../../../environments/environment";
import {IDish} from "../../sahred/interfaces/dish";

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  dishes$: BehaviorSubject<IDish[]> = new BehaviorSubject<IDish[]>([]);

  constructor(private httpClient: HttpClient) {
  }

  getDishes(category: string): Observable<IDish[]> {
    return this.httpClient.get<IDish[]>(environment.api + `/${category}`).pipe(catchError((error) => {
      console.log('Something went wrong. Please try again later.')
      return of(error.message);
    }))
  }
}
