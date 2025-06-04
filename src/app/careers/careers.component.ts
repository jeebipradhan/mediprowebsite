import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ResumeDialogComponent } from '../resume-dialog/resume-dialog.component';

interface JobListing {
  title: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

interface CareersData {
  title: string;
  subtitle: string;
  jobListings: JobListing[];
  generalApplication: {
    title: string;
    description: string;
    buttonText: string;
  };
}

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent implements OnInit {
  title = '';
  subtitle = '';
  jobListings: JobListing[] = [];
  generalApplication = {
    title: '',
    description: '',
    buttonText: ''
  };

  constructor(
    private http: HttpClient,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadCareersData();
  }

  private loadCareersData() {
    this.http.get<CareersData>('assets/Careers.json').subscribe({
      next: (data) => {
        this.title = data.title;
        this.subtitle = data.subtitle;
        this.jobListings = data.jobListings;
        this.generalApplication = data.generalApplication;
      },
      error: (error) => {
        console.error('Error loading careers data:', error);
      }
    });
  }

  showResumeMessage(): void {
    this.dialog.open(ResumeDialogComponent);
  }
}
