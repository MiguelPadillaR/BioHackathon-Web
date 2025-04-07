import { Component, OnInit, OnDestroy, HostListener, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  public teamMembers = [
    {
      photo: './assets/img/Foto_Nina-Souto-Blanco.jpg',
      name: 'Nina Souto Blanco',
      title: 'BioFounder',
      description: `Biochemistry student at Universidad de Málaga. Passioned for biomedicine and the study of human diseases, I focus my formation in the use of bioinformatic tools to impulse research, optimize clinical diagnosis and contribute to improve the health and quality of life of people.`,
    },
    {
      photo: './assets/img/Foto_Miguel-Leonardo-Padilla-Romo.jpeg',
      name: 'Miguel Padilla',
      title: 'BioFounder',
      description: `Health Engineering student at Universidad de Málaga, specialized in bioinformatics and interested in web development. I began my career developing a customized genomic data exploration tool to support researchers in their work. I am passionate about helping scientists achieve meaningful breakthroughs.`,
    },
    {
      photo: './assets/img/Foto_Juan-Antonio-de-la-Cruz-Bellido.jpeg',
      name: 'Juan Antonio de la Cruz Bellido',
      title: 'BioFounder & CEO',
      description: `Biology student at Universidad de Málaga, with great interest for and some experience in synthetic biology, bioinformatics (within the genomic and protein engineering fields) as well as bioentrepreneurship, focused on team leadership and achieving advancements on the research world.`,
    },
    {
      photo: './assets/img/Foto_Sofia-Zafirova.jpg',
      name: 'Sofía Zafirova',
      title: 'BioFounder',
      description: `Biology student at universidad de Málaga, passioned about the field of diagnosis and research of the human body. My main interest is focused on making known and explaining the fundamental use of modern-day bioinformatics in facilitating the work of people belonging to the scientific sector.`,
    },
    {
      photo: './assets/img/default_user.png',
      name: 'Juan Diego López',
      title: 'BioFounder',
      description: `Biochemistry student at University de Málaga. I feel a special inclination towards bioinformatics, specially focused on analyzing biological data of any kind, and applied to automated classification systems and virtual data analysis. All centered around impulsing biology research, biochemstry and biotechnology.`,
    },
    {
      photo: './assets/img/default_user.png',
      name: 'Isabel Fernández',
      title: 'BioFounder',
      description: `Biology student at Universidad de Málaga. I am passionate about genomic and protein analysis to deepen our understanding of diseases and develop new biomedical tools. I would like to apply biological data processing to improve all health-related research.`,
    },
    {
      photo: './assets/img/Foto-Maria_Bonafonte.jpeg',
      name: 'María Bonafante',
      title: 'BioFounder',
      description: `Health Engineering student at the University of Málaga. I love programming and its application in the healthcare field, with a special interest in optimizing processes to improve medical care. I enjoy collaborating on innovative projects, convinced that teamwork is key to contributing to people’s well-being and health.`,
    },
    {
      photo: './assets/img/default_user.png',
      name: 'Miembro 8',
      title: 'BioFounder',
      description: `Biology student at universidad de Málaga, passioned about the field of diagnosis and research of the human body. My main interest is focused on making known and explaining the fundamental use of modern-day bioinformatics in facilitating the work of people belonging to the scientific sector.`,
    },
    {
      photo: './assets/img/default_user.png',
      name: 'Miembro 9',
      title: 'BioFounder',
      description: `Biology student at universidad de Málaga, passioned about the field of diagnosis and research of the human body. My main interest is focused on making known and explaining the fundamental use of modern-day bioinformatics in facilitating the work of people belonging to the scientific sector.`,
    },
    {
      photo: './assets/img/default_user.png',
      name: 'Miembro 10',
      title: 'BioFounder',
      description: `Biology student at universidad de Málaga, passioned about the field of diagnosis and research of the human body. My main interest is focused on making known and explaining the fundamental use of modern-day bioinformatics in facilitating the work of people belonging to the scientific sector.`,
    }
  ];
  /**
   * Is discover section visible flag
   */
  isDiscoverVisible: WritableSignal<boolean> = signal(true);
  /**
   * Current year for footer
   */
  currentYear: number = new Date().getFullYear();
  /**
   * Toggles vibility on discover section
   */
  private toggleDiscoverSection = () => {
    const discoverSection = document.getElementById('discover') as HTMLElement | null;
    if (discoverSection) {
      if (window.scrollY > 100 && discoverSection.style.height !== '0px') {
        this.isDiscoverVisible.set(true);
        discoverSection.style.height = '0px';
        document.body.style.pointerEvents = 'none';
        document.body.style.overflow = 'hidden';
        discoverSection.style.transform = "translateY(-14rem)";
        setTimeout(() => {
          document.body.style.pointerEvents = 'auto';
          document.body.style.overflow = '';
        }, 1100);
      } else if (window.scrollY <= 100 && discoverSection.style.height !== 'auto') {
        this.isDiscoverVisible.set(true);
        discoverSection.style.height = '100vh';
        discoverSection.style.transform = '';
      }
    }
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.toggleDiscoverSection);
    window.addEventListener('mousemove', this.toggleNavbarVisibility);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.toggleDiscoverSection);
    window.removeEventListener('mousemove', this.toggleNavbarVisibility);
  }
  
  /**
   * Toggles navbar visibility when moving mouse to top edge
   * @param event to get current mouse position
   */
  private toggleNavbarVisibility(event: MouseEvent): void {
    const navBar = document.getElementById('navbar');
    const discoverSection = document.getElementById('discover') as HTMLElement | null;
    if (navBar) {
      if (event.clientY <= 100 && discoverSection?.style.height === '0px') {
        navBar.style.height = '100px';
        navBar.style.visibility = 'visible';
      } else {
        navBar.style.height = '0';
        navBar.style.visibility = 'hidden';
      }
    }
  }
}
