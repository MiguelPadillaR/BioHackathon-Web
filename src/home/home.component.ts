import { Component, OnInit, OnDestroy, HostListener, signal, WritableSignal } from '@angular/core';
import { ITeamMember } from '../models/models';
import { DetailsPanelComponent } from "../details-panel/details-panel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DetailsPanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  /**
   * Team members information
   */
  public teamMembers: ITeamMember[] = [
    {
      photo: './assets/img/Foto_Nina-Souto-Blanco.jpg',
      name: 'Nina Souto Blanco',
      title: 'BioFounder',
      description: `Biochemistry student at Universidad de Málaga. Passioned for biomedicine and the study of human diseases, I focus my formation in the use of bioinformatic tools to impulse research, optimize clinical diagnosis and contribute to improve the health and quality of life of people.`,
      mail:'',
      linkedin: 'https://www.linkedin.com/in/nina-souto-blanco-524893282/'
    },
    {
      photo: './assets/img/Foto_Miguel-Leonardo-Padilla-Romo.jpeg',
      name: 'Miguel Padilla',
      title: 'BioFounder',
      description: `Health Engineering student at Universidad de Málaga, specialized in bioinformatics with interests in software development and ML/AI. I began my professional career developing a customized genomic data exploration tool to support researchers in their work. I am keen on helping scientists achieve meaningful breakthroughs.`,
      mail:'m.padi.r@icloud.com',
      linkedin: 'https://www.linkedin.com/in/miguel-l-padilla-romo'
    },
    {
      photo: './assets/img/Foto_Juan-Antonio-de-la-Cruz-Bellido.jpeg',
      name: 'Juan Antonio de la Cruz Bellido',
      title: 'BioFounder & CEO',
      description: `Biology student at Universidad de Málaga, with great interest for and some experience in synthetic biology, bioinformatics (within the genomic and protein engineering fields) as well as bio-entrepreneurship, focused on team leadership and achieving advancements on the research world.`,
      mail:'',
      linkedin: 'http://www.linkedin.com/in/juan-antonio-de-la-cruz-bellido-8900ba247'
    },
    {
      photo: './assets/img/Foto_Sofia-Zafirova.jpg',
      name: 'Sofía Zafirova',
      title: 'BioFounder',
      description: `Biology student at Universidad de Málaga, passioned about the field of diagnosis and research of the human body. My main interest is focused on making known and explaining the fundamental use of modern-day bioinformatics in facilitating the work of people belonging to the scientific sector.`,
      mail:'',
      linkedin: 'https://www.linkedin.com/in/sof%C3%ADa-zafirova-vasileva-kadankova-983759359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      photo: './assets/img/Foto_Juandiego-Lopez.jpg',
      name: 'Juandiego López',
      title: 'BioFounder',
      description: `Biochemistry student at Universidad de Málaga. I feel a special inclination towards bioinformatics, specially focused on analyzing biological data of any kind, and applied to automated classification systems and virtual data analysis. All centered around impulsing biology research, biochemstry and biotechnology.`,
      mail:'',
      linkedin: 'http://www.linkedin.com/in/juandiego-l%C3%B3pez-934035345'
    },
    {
      photo: './assets/img/Foto-Isabel_Fernandez.JPG',
      name: 'Isabel Fernández',
      title: 'BioFounder',
      description: `Biology student at Universidad de Málaga. I am passionate about genomic and protein analuysis to deepen our understanding of dieeases and develop new biomedical tools. I would like to apply biological data processing to improve all health-related research.`,
      mail:'',
      linkedin: 'https://www.linkedin.com/in/isabel-fernandez-51b350359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
    },
    {
      photo: './assets/img/Foto-Maria_Bonafonte.jpeg',
      name: 'María Bonafante',
      title: 'BioFounder',
      description: `Health Engineering student at the Universidad of Málaga. I love programming and its application in the healthcare field, with a special interest in optimizing processes to improve medical care. I enjoy collaborating on innovative projects, convinced that teamwork is key to contributing to people’s well-being and health.`,
      mail:'',
      linkedin: 'http://www.linkedin.com/in/mar%C3%ADa-bonafonte-s%C3%A1nchez-3a5b72358'
    },
    {
      photo: './assets/img/Foto_Lucía-Fernandez.jpeg',
      name: 'Lucía Fernández',
      title: 'BioFounder',
      description: `Health Engineering student with specialization in Biomedical Engineering at Universidad de Malaga. I combine my passion for technology and health to create innovative solutions. A tennis lover since childhood and an inveterate reader, I firmly believe in facing challenges with determination and a smile`,
      mail:'',
      linkedin: 'http://www.linkedin.com/in/luc%C3%ADa-fern%C3%A1ndez-fern%C3%A1ndez-6702a4257'
    },
    {
      photo: './assets/img/default_user.png',
      name: 'Fernando Ruz Castaño',
      title: 'BioFounder',
      description: ``,
      mail:'',
      linkedin: 'https://www.linkedin.com/in/fernando-ruz-casta%C3%B1o-360b69356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      photo: './assets/img/Foto_Eulogio-Vargas.jpeg',
      name: 'Eulogio Vargas',
      title: 'BioFounder',
      description: ``,
      mail:'',
      linkedin: 'https://www.linkedin.com/in/eulogio-vargas-7b953a339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
  ];
  /**
   * Clicked team member info
   */
  public selectedMember: ITeamMember = this.teamMembers[0];
  /**
   * Is discover section visible flag
   */
  public isDiscoverVisible: WritableSignal<boolean> = signal(true);
  /**
   * Is Details Panel open flag
   */
  public isDetailsPanelOpen: WritableSignal<boolean> = signal(false);
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
      } else if (window.scrollY <= 100 && discoverSection.style.height === '0px') {
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
    if (navBar) {
      const nearTop = event.clientY <= 100;
      const discoverSection = document.getElementById('discover') as HTMLElement | null;

      if (nearTop && discoverSection?.style.height === '0px') {
        navBar.style.height = '100px';
        navBar.style.visibility = 'visible';
      } else {
        navBar.style.height = '0';
        navBar.style.visibility = 'hidden';
      }
    }
  }
  openDetailsPanel(member: ITeamMember) {
    this.selectedMember = member;
    document.body.style.overflow = 'hidden'; // prevent scrolling
    this.isDetailsPanelOpen.set(true);
  }
  
  closeDetailsPanel() {
    this.isDetailsPanelOpen.set(false);
    document.body.style.overflow = ''; // re-enable scrolling
  }
  }
