import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  role: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  title = 'Our Team';
  
  teamMembers: TeamMember[] = [
    {
      name: 'Gyanendra Pradhan',
      role: 'Founder'
    },
    {
      name: 'Shashi Sagar Shrestha',
      role: 'VP of Software Development'
    },
    {
      name: 'Sachin Ranjitkar',
      role: 'Director of Sales and Support'
    },
    {
      name: 'Ashish Gurung',
      role: 'Regional Partner'
    },
    {
      name: 'Kishan Pandey',
      role: 'Regional Partner'
    },
    {
      name: 'Kumar Khatiwada',
      role: 'Regional Partner'
    },
    {
      name: 'Shekhar Dulal',
      role: 'Regional Partner'
    }
  ];
}
