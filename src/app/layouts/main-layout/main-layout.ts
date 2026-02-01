import { Component, HostListener } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { Home } from '../../features/home/home';
import { About } from '../../features/about/about';
import { Skills } from '../../features/skills/skills';
import { Projects } from '../../features/projects/projects';
import { Contact } from '../../features/contact/contact';
import { Experience } from "../../features/experience/experience";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [Header, Home, About, Skills, Projects, Contact, Experience],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  activeSection = 'home';

  @HostListener('window:scroll')
  onScroll() {
    const sections = document.querySelectorAll<HTMLElement>('section');

    for (const section of Array.from(sections)) {
      const rect = section.getBoundingClientRect();

      if (rect.top <= 150 && rect.bottom > 150) {
        this.activeSection = section.id;
        break;
      }
    }
  }

  scrollTo(sectionId: string) {
    this.activeSection = sectionId;
    document.getElementById(sectionId)
      ?.scrollIntoView({ behavior: 'smooth' });
  }
}
