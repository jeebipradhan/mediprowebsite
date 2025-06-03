import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import webdata from '../../assets/webdata.json'; // adjust path if needed

@Injectable({
  providedIn: 'root'
})
export class WebdataService {
  constructor(private http: HttpClient) {}

  getDescriptionByName(pageName: string): string {
    const match = webdata.websites.find(item => item.name === pageName);
    return match ? match.description : 'Description not found';
  }

  getServicesData(): Observable<any> {
    return this.http.get('assets/ourservices.json');
  }
}
