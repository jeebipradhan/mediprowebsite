import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import webdata from '../../assets/webdata.json';
import { WebdataService } from '../services/webdata.service';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  title = 'About MediPro';
  description = 'Empowering Healthcare and Medicine Business Since 1991';
  AboutDescription: string = '';
  MissionDescription: string = '';
  
  constructor(private webdataService: WebdataService) {}

  ngOnInit(): void {
    this.AboutDescription = this.webdataService.getDescriptionByName('About');
    this.MissionDescription = this.webdataService.getDescriptionByName('Mission');
  }   
}