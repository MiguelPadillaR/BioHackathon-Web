import { Component, OnInit, OnDestroy, HostListener, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  /**
   * Flag for Discover section animation
   */
  isDiscoverVisible: WritableSignal<boolean> = signal(true);
  /**
   * Current year for footer section
   */
  currentYear: number = new Date().getFullYear();

  private onScroll = () => {
    const menu = document.getElementById('menu') as HTMLElement | null;
    if (menu) {
      if (window.scrollY > 100) {
        menu.style.height = '100px';
        menu.style.visibility = 'visible';
      } else {
        this.isDiscoverVisible.set(false);
        menu.style.height = '0';
        menu.style.visibility = 'hidden';
      }
    }
  };

  private toggleDiscoverSection = () => {
    const discoverSection = document.getElementById('discover') as HTMLElement | null;
    if (discoverSection) {
      if (window.scrollY > 100 && discoverSection.style.height !== '0px') {
        discoverSection.style.height = '0px';
      } else if (window.scrollY <= 100 && discoverSection.style.height !== 'auto') {
        discoverSection.style.height = '100vh';
      }
    }
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll);
    window.addEventListener('scroll', this.toggleDiscoverSection);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('scroll', this.toggleDiscoverSection);
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const menu = document.getElementById('menu');
    if (menu) {
      if (event.clientY <= 50) {
        menu.style.height = '100px';
        menu.style.visibility = 'visible';
      } else {
        menu.style.height = '0';
        menu.style.visibility = 'hidden';
      }
    }
  }

  @HostListener('window:scroll')
  makeDiscoverSectionVisible() {
    if (window.scrollY < 100) {
      this.isDiscoverVisible.set(true);
      const hideDiscover = document.getElementById('hide-discover-btn') as HTMLInputElement | null;
      if (hideDiscover) {
        hideDiscover.checked = true; // Check the checkbox if scrolling back up
      }
    }
  }
}
