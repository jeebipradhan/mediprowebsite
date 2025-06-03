import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Contact {
  RegionName: string;
  Address: string | null;
  Phone1: string;
  Phone2?: string;
  Email: string;
  ContactPerson?: string;
}

interface ContactData {
  contacts: Contact[];
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contacts: Contact[] = [];
  loading = true;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadContacts();
  }

  private loadContacts() {
    this.http.get<ContactData>('assets/contact.json').subscribe({
      next: (data) => {
        this.contacts = data.contacts;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load contact information';
        this.loading = false;
        console.error('Error loading contacts:', error);
      }
    });
  }
}
