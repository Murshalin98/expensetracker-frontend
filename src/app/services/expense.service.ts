import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private apiUrl: string = "http://127.0.0.1:1007/api/v1/expenses";

  constructor(private _httpClient: HttpClient) { }

  getExpenses(): Observable<Expense[]>{
    return this._httpClient.get<Expense[]>(this.apiUrl).pipe(
      map(response => response)
    )
  }

  saveExpense(expense: Expense): Observable<Expense> {
    return this._httpClient.post<Expense>(this.apiUrl, expense);
  }

  getExpense(id: number): Observable<Expense> {
    return this._httpClient.get<Expense>(`${this.apiUrl}/${id}`).pipe(
      map(response => response)
    )
  }
}
