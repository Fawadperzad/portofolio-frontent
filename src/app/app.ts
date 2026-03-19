import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface für Portfolio-Projekte - Passend zum Java Backend DTO
 */
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  category: 'Frontend' | 'Backend' | 'Fullstack';
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class.dark]="isDarkMode()" class="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 font-sans">
      
      <!-- Navigationsleiste -->
      <nav class="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl cursor-pointer" (click)="scrollTo('about')">
              JD
            </div>
            <span class="text-xl font-bold text-slate-900 dark:text-white hidden sm:block">FullStack.java</span>
          </div>
          
          <div class="flex items-center gap-8">
            <div class="hidden md:flex gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
              <button (click)="scrollTo('about')" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Über Mich</button>
              <button (click)="scrollTo('projects')" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projekte</button>
              <button (click)="scrollTo('tech')" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Tech-Stack</button>
            </div>
            <button (click)="toggleDarkMode()" class="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              @if (isDarkMode()) {
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              } @else {
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              }
            </button>
          </div>
        </div>
      </nav>

      <!-- Hero Section -->
      <section id="about" class="relative py-24 overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div class="z-10">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6">
              <span class="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
              Full Stack Engineer @ Java & Angular
            </div>
            <h1 class="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
              Moderne <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Enterprise</span> Software.
            </h1>
            <p class="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
              Hallo! Ich bin Fawad Perzad und ein motivierter Junior Developer mit einer großen Leidenschaft für die Backend-Logik von <strong>Java 21 Spring Boot</strong> und die dynamischen Frontends von <strong>Angular 18</strong>. 
              Ich liebe es, neue Herausforderungen anzunehmen, sauberen Code zu schreiben und moderne Lösungen zu entwickeln, die einen echten Mehrwert bieten. 
              Lass uns gemeinsam die digitale Zukunft gestalten!            </p>
            <div class="flex flex-wrap gap-4">
              <!-- Projekte ansehen Button -->
              <button 
                (click)="scrollTo('projects')"
                class="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 dark:shadow-none transition-all hover:-translate-y-1">
                Projekte ansehen
              </button>
              <!-- Kontakt Button -->
              <button 
                (click)="scrollTo('contact')"
                class="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                Kontakt
              </button>
            </div>
          </div>
          <div class="relative">
            <div class="w-full aspect-square bg-gradient-to-br from-indigo-200 to-cyan-200 dark:from-indigo-500/20 dark:to-cyan-500/20 rounded-[3rem] rotate-3 relative overflow-hidden flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-2xl">
               <div class="rotate-[-3deg] text-indigo-600 dark:text-indigo-400">
                  <svg class="w-48 h-48 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783l-3.047 16h2.156l3.047-16h-2.156z"/>
                  </svg>
               </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tech Stack -->
      <section id="tech" class="py-20 bg-white dark:bg-slate-800/50">
        <div class="max-w-7xl mx-auto px-6">
          <h2 class="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">Enterprise Tech Stack</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            @for (tech of techStack; track tech.name) {
              <div class="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-indigo-500 transition-colors group">
                <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">{{tech.icon}}</div>
                <h3 class="font-bold text-slate-900 dark:text-white">{{tech.name}}</h3>
                <p class="text-sm text-slate-500 mt-2">{{tech.version}}</p>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Projekte Bereich mit ID -->
      <section id="projects" class="py-24">
        <div class="max-w-7xl mx-auto px-6">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 class="text-4xl font-bold text-slate-900 dark:text-white mb-4">Referenzprojekte</h2>
              <p class="text-slate-600 dark:text-slate-400 max-w-xl">Entwickelt nach Clean-Code-Prinzipien und unter Berücksichtigung von Performance und Sicherheit.</p>
            </div>
            <div class="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
              @for (cat of ['Alle', 'Frontend', 'Backend', 'Fullstack']; track cat) {
                <button 
                  (click)="filter.set(cat)"
                  [class]="filter() === cat ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'"
                  class="px-4 py-2 text-sm font-bold rounded-lg transition-all"
                >
                  {{cat}}
                </button>
              }
            </div>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (project of filteredProjects(); track project.id) {
              <div class="group bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
                <div class="h-48 bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-8 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 transition-colors">
                  <div class="text-indigo-600 dark:text-indigo-400">
                    <svg class="w-16 h-16 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  </div>
                </div>
                <div class="p-8">
                  <div class="flex justify-between items-start mb-4">
                    <h3 class="text-xl font-bold text-slate-900 dark:text-white">{{project.title}}</h3>
                    <span class="text-[10px] font-black uppercase px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-500">{{project.category}}</span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">{{project.description}}</p>
                  <div class="flex flex-wrap gap-2 mb-8">
                    @for (tag of project.tags; track tag) {
                      <span class="px-3 py-1 bg-slate-50 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 text-xs font-semibold rounded-lg border border-slate-100 dark:border-slate-600">
                        {{tag}}
                      </span>
                    }
                  </div>
                  <div class="flex items-center justify-between mt-auto">
                    <a [href]="project.githubUrl" class="text-indigo-600 dark:text-indigo-400 font-bold text-sm flex items-center gap-2 hover:underline">
                      Code ansehen
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Footer Bereich mit ID für Kontakt -->
      <footer id="contact" class="bg-slate-900 text-white py-20 px-6">
        <div class="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 class="text-3xl font-bold mb-6">Bereit für die nächste Herausforderung</h2>
          <div class="flex gap-4">
            <a href="mailto:kontakt@beispiel.de" class="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-indigo-100 transition-colors">E-Mail</a>
            <a href="#" class="px-8 py-4 bg-slate-800 text-white font-bold rounded-2xl border border-slate-700 hover:bg-slate-700 transition-colors">GitHub</a>
          </div>
          <div class="mt-20 pt-8 border-t border-slate-800 w-full text-slate-500 text-sm">
            &copy; 2024 Fullstack Portfolio. Erstellt mit Angular 21 & Java 21.
          </div>
        </div>
      </footer>
    </div>
  `
})
export class App {
  isDarkMode = signal(false);
  filter = signal('Alle');

  techStack = [
    { name: 'Angular', version: 'v21.0', icon: '🅰️' },
    { name: 'Spring Boot', version: 'v3.3', icon: '🍃' },
    { name: 'PostgreSQL', version: 'v16.0', icon: '🐘' },
    { name: 'Docker', version: 'Cloud Native', icon: '🐳' }
  ];

  projects = signal<Project[]>([
    {
      id: 1,
      title: 'Enterprise ERP Suite',
      description: 'Zentrale Verwaltung von Lagerbeständen mit Spring Security JWT.',
      tags: ['Angular', 'Spring Boot', 'PostgreSQL'],
      githubUrl: '#',
      category: 'Fullstack'
    },
    {
      id: 2,
      title: 'Cloud Document Manager',
      description: 'Microservice-Architektur zum Speichern von Dokumenten.',
      tags: ['Java 21', 'Docker', 'AWS'],
      githubUrl: '#',
      category: 'Backend'
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Dashboards mit Echtzeit-Updates über WebSockets.',
      tags: ['Angular', 'D3.js', 'Tailwind'],
      githubUrl: '#',
      category: 'Frontend'
    }
  ]);

  filteredProjects = computed(() => {
    const activeFilter = this.filter();
    return activeFilter === 'Alle' 
      ? this.projects() 
      : this.projects().filter(p => p.category === activeFilter);
  });

  toggleDarkMode() {
    this.isDarkMode.update(v => !v);
  }

  /**
   * Scrollt sanft zu einem bestimmten Bereich der Webseite
   * @param targetId Die ID des HTML-Elements (z.B. 'projects' oder 'contact')
   */
  scrollTo(targetId: string) {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }
}