import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareersComponent } from './careers/careers.component';
import { NewsComponent } from './news/news.component';
import { TeamComponent } from './team/team.component';
import { EventComponent } from './event/event.component';
import { ContactComponent } from './contact/contact.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { ResourcesComponent } from './resources/resources.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'news', component: NewsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'event', component: EventComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'downloads', component: DownloadsComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: '**', redirectTo: '' } // Redirect any unknown routes to home
];
