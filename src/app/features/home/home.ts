import { AfterViewInit, Component, ElementRef, EventEmitter, Inject, Output, PLATFORM_ID, signal, viewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import Typewriter from 'typewriter-effect/dist/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit {
  // Signal-based viewChild for Angular 21
  @Output() navigate = new EventEmitter<string>();
  private orbitContainer = viewChild<ElementRef>('orbitContainer');

  toastMessage = '';
  toastType: 'success' | 'error' = 'success';
  showToast = false;


  // Define icon sets as Signals
  innerIcons = signal([
    { name: 'Angular', path: 'assets/icons/angular.svg' },
    { name: 'JavaScript', path: 'assets/icons/java-script.svg' },
    // { name: 'React', path: 'assets/icons/reactjs.svg' },
    { name: 'TypeScript', path: 'assets/icons/typescript.svg' },
    { name: 'HTML', path: 'assets/icons/HTML5.svg' },
    { name: 'CSS', path: 'assets/icons/css.svg' },
    { name: 'Bootstrap', path: 'assets/icons/bootstrap.svg' },
  ]);

  outerIcons = signal([
    { name: 'Java', path: 'assets/icons/java.svg' },
    { name: 'SpringBoot', path: 'assets/icons/spring.svg' },
    { name: 'MySql', path: 'assets/icons/mysql.svg' },
    { name: 'MongoDB', path: 'assets/icons/mongo.svg' },
    { name: 'PostMan', path: 'assets/icons/postman.svg' },
    { name: 'AWS', path: 'assets/icons/aws.svg' },
    { name: 'Azure', path: 'assets/icons/azure.svg' },
    { name: 'GitHub', path: 'assets/icons/github.svg' },
    { name: 'Docker', path: 'assets/icons/docker.svg' },
  ]);

  private ctx?: gsap.Context;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return; // 🔴 IMPORTANT
    }

    new Typewriter('#typewriter', {
      strings: [
        'Full Stack Developer',
        'Front End Specialist',
        'Back-End Developer',
        'Java Full Stack Developer',
        'Angular Developer'
      ],
      autoStart: true,
      loop: true,
      delay: 50,
      deleteSpeed: 40,
      cursor: '|'
    });


    const root = this.orbitContainer()?.nativeElement;

    // Use GSAP Context for easy cleanup
    this.ctx = gsap.context(() => {

      // Rotate Inner Ring (Clockwise)
      gsap.to('.inner-ring', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none'
      });

      // Rotate Outer Ring (Counter-Clockwise)
      gsap.to('.outer-ring', {
        rotation: -360,
        duration: 35,
        repeat: -1,
        ease: 'none'
      });

      // Counter-rotate Inner Icons (Opposite of ring)
      gsap.to('.inner-ring .icon-wrapper', {
        rotation: -360,
        duration: 20,
        repeat: -1,
        ease: 'none'
      });

      // Counter-rotate Outer Icons (Opposite of ring)
      gsap.to('.outer-ring .icon-wrapper', {
        rotation: 360,
        duration: 35,
        repeat: -1,
        ease: 'none'
      });

    }, root);
  }

  // Interactive Hover Animation
  onHover(event: MouseEvent, enter: boolean) {
    const target = (event.currentTarget as HTMLElement).querySelector('.icon-wrapper');
    gsap.to(target, {
      scale: enter ? 1.3 : 1,
      boxShadow: enter ? '0 0 30px rgba(0, 150, 255, 0.8)' : '0 0 15px rgba(0, 150, 255, 0.2)',
      duration: 0.4,
      ease: 'back.out(1.7)'
    });
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/resume/Veluru Harish_7036791995.pdf';
    link.download = 'Harish_Veluru_Resume.pdf';
    link.click();
    this.showToastMessage(
      'Resume downloaded successfully.',
      'success'
    );
  }

  showToastMessage(message: string, type: 'success' | 'error' = 'success') {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;

    // Auto hide after 3 seconds
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }


  scrollTo(section: string) {
    this.navigate.emit(section);
  }

  ngOnDestroy() {
    this.ctx?.revert(); // Kills all animations and prevents memory leaks
  }

}
