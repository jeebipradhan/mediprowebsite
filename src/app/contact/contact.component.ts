import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface RegionalContact {
  name: string;
  region: string;
  phones: string[];
  email: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  headOffice = {
    title: 'Head Office',
    location: 'Kathmandu Head Office',
    address: 'Komal Complex, Putalisadak, 1588 Ramshah Path, Kathmandu.',
    phone: '01-5970-396',
    email: 'medipro@mediprocomputers.com'
  };

  regionalContacts: RegionalContact[] = [
    {
      name: 'Kishan Pandey',
      region: 'Western, Mid-Western, Far-Western',
      phones: ['980-202-0240', '985-802-0240'],
      email: 'hrishavpandey@gmail.com'
    },
    {
      name: 'Kumar Khatiwada',
      region: 'Eastern',
      phones: ['980-202-0148', '985-202-0148'],
      email: 'kumar.medipro@gmail.com'
    },
    {
      name: 'Ashish Gurung',
      region: 'Gandaki Province',
      phones: ['980-202-0194', '985-602-0194'],
      email: 'hangdudh@gmail.com'
    },
    {
      name: 'Shekhar Dulal',
      region: 'KAVRE',
      phones: ['985-108-1595', '980-205-0888'],
      email: 'shekhardulal@gmail.com'
    },
    {
      name: 'Anil Shrestha',
      region: 'Narayangarh',
      phones: ['985-506-0164'],
      email: 'sthanil.medipro@gmail.com'
    }
  ];
}
