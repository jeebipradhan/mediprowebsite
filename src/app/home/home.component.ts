import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebdataService } from '../services/webdata.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Empowering Healthcare Business Since 1991';
  description: string = '';
  constructor(private webdataService: WebdataService) {}
  ngOnInit(): void {
    this.description = this.webdataService.getDescriptionByName('Home');
  }
}
  // INSERT_YOUR_REWRITE_HERE
