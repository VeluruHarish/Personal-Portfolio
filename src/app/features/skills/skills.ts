import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills = [
    {
      name: 'HTML5 & CSS3',
      desc: 'Web Structure and Styling. Bootstrap for Responsive Design.',
      icon: 'assets/icons/html.svg'
    },
    {
      name: 'JavaScript / TypeScript',
      desc: 'Core Web Development Languages.',
      icon: 'assets/icons/java-script.svg'
    },
    {
      name: 'Angular 14+',
      desc: 'Frontend Framework and User-Interface Development.',
      icon: 'assets/icons/angular.svg'
    },
    {
      name: 'React.js',
      desc: 'Frontend Library and User-Interface Development.',
      icon: 'assets/icons/reactjs.svg'
    },
    {
      name: 'Java 8+',
      desc: 'Backend Development and OOPs.',
      icon: 'assets/icons/java.svg'
    },
    {
      name: 'Spring Boot',
      desc: 'Java-based Framework Backend & APIs Development.',
      icon: 'assets/icons/spring.svg'
    },
    {
      name: 'Databases',
      desc: 'MySQL, OracleSQL, and MongoDB for Data Management.',
      icon: 'assets/icons/database.svg'
    },
    {
      name: 'GitHub, Git & Perforce',
      desc: 'Version Control, CI/CD, and Collaboration.',
      icon: 'assets/icons/github.svg'
    },
    {
      name: 'Docker & Kubernetes',
      desc: 'Containerization and scalable deployments.',
      icon: 'assets/icons/docker.svg'
    },
    {
      name: 'AWS & Azure',
      desc: 'Cloud Services and Deployment.',
      icon: 'assets/icons/cloud.svg'
    }

  ];
}
