import { Injectable } from '@angular/core';
import webdata from '../../assets/webdata.json'; // adjust path if needed

@Injectable({
  providedIn: 'root'
})
export class WebdataService {
  constructor() {}

  getDescriptionByName(pageName: string): string {
    const match = webdata.websites.find(item => item.name === pageName);
    return match ? match.description : 'Description not found';
  }
}
