import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from 'src/assets/person';

@Injectable({
  providedIn: 'root'
})
export class CubeService implements IEmployee {
  title: string;
  url: string;
  created_at: string;
  author: string;

  constructor(private http:HttpClient) { }

  data():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>("https://hn.algolia.com/api/v1/search_by_date?tags=story")
  }
}
