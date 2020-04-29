import {Injectable} from "@angular/core";
import {Product} from "./product";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class ProductService {

  private productUrl = 'api/products/products.json'
  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl)
      .pipe(tap(data => console.log ("All:" + JSON.stringify(data))),catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    return throwError("Something went wrong")
  }
}
