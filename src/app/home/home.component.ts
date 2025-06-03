import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebdataService } from '../services/webdata.service';

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface ServicesData {
  title: string;
  description: string;
  services: Service[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  title = 'Empowering Healthcare Business Since 1991';
  description: string = '';
  servicesData: ServicesData | null = null;
  loading = true;
  error: string | null = null;

  constructor(private webdataService: WebdataService) {}

  ngOnInit(): void {
    this.description = this.webdataService.getDescriptionByName('Home');
    this.loadServices();
  }

  private loadServices(): void {
    this.webdataService.getServicesData().subscribe({
      next: (data) => {
        this.servicesData = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load services data';
        this.loading = false;
        console.error('Error loading services:', err);
      }
    });
  }
}
  // INSERT_YOUR_REWRITE_HERE
