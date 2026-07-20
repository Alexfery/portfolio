export const translations: Record<string, any> = {
  ro: {
    navbar: {
      projects: 'proiecte',
      skills: 'skills',
      education: 'educație',
      contact: 'contact',
      theme: 'temă'
    },
    hero: {
      desc1: 'Student la ',
      studies: 'Automatică',
      desc2: ' @ UTCN, în cadrul Facultății de Automatică și Calculatoare. Pasionat de ',
      cyber: 'cybersecurity',
      desc3: ' și de experimentarea unor domenii precum ',
      quantum: 'quantum computing',
      mid: ' și ',
      web: 'web development',
      desc4: ', aplicând mereu cunoștințele în proiecte reale.',
      btn_cv: 'Descarcă CV'
    },
    projects: {
      title: 'proiecte',
      items: [
        {
          badge: 'HACKATHON',
          tech: 'NestJS · PostgreSQL',
          title: 'Polyhack — Backend',
          desc: 'Arhitectură backend în NestJS, livrată sub deadline strâns într-o echipă agile de 5 persoane. Cluj-Napoca, 2026.',
          link: 'https://github.com/Alexfery',
          linkLabel: 'github.com/Alexfery ↗'
        },
        {
          badge: 'ROBOTICS',
          tech: 'FIRST LEGO League',
          title: 'Echipa XEO — locul 1',
          desc: 'Design și fabricarea modulelor mecanice pentru competiție; câștigători FIRST LEGO League, martie 2021.'
        }
      ]
    },
    websites: {
      title: 'websites',
      items: [
        {
          badge: 'CURRENT',
          tech: 'Angular · TypeScript',
          title: 'feralexandru.com',
          desc: 'Portofoliu construit de la zero în Angular, pentru a prezenta experiența, skill-urile și proiectele tehnice.',
          link: 'https://feralexandru.com',
          linkLabel: 'feralexandru.com ↗'
        },
        {
          badge: 'CLIENT',
          tech: 'React · Decap CMS',
          title: 'francescaiurian.com',
          desc: 'Am gândit sistemul și arhitectura site-ului, de la structură până la lansare.',
          link: 'https://francescaiurian.com',
          linkLabel: 'francescaiurian.com ↗'
        },
        {
          badge: 'CLIENT',
          tech: 'React · TypeScript · Java · Supabase · Cloudinary',
          title: 'urbankeller.de',
          desc: 'Am gândit sistemul și arhitectura site-ului, de la structură până la lansare.',
          link: 'https://urbankeller.de',
          linkLabel: 'urbankeller.de ↗'
        }
      ]
    },
    skills: {
      title: 'skills',
      groups: [
        { label: 'Limbaje', items: ['C', 'C++', 'Java', 'Python', 'TypeScript', 'MATLAB', 'SQL'] },
        { label: 'Frameworks', items: ['Angular', 'PostgreSQL', 'Qiskit'] },
        { label: 'Tools', items: ['Linux', 'Git', 'Microsoft Office'] }
      ]
    },
    certifications: {
      title: 'certificări',
      items: [
        {
          issuer: 'Udemy',
          title: 'Fundamentals of Backend Engineering',
          detail: 'Instructor Hussein Nasser · 19.5 ore',
          file: 'assets/certificates/udemy-backend-engineering.pdf',
          viewLabel: 'Vezi certificatul'
        },
        {
          issuer: 'Udemy',
          title: 'Complete Web Development Course',
          detail: 'Instructor Hitesh Choudhary · 100 ore',
          file: 'assets/certificates/udemy-web-development.pdf',
          viewLabel: 'Vezi certificatul'
        },
        {
          issuer: 'Coursera',
          title: 'Metasploit for Beginners: Ethical Penetration Testing',
          detail: 'Proiect practic de penetration testing cu Metasploit',
          file: 'assets/certificates/coursera-metasploit-pentest.pdf',
          viewLabel: 'Vezi certificatul'
        },
        {
          issuer: 'Google · Coursera',
          title: 'Google Cybersecurity',
          detail: 'Certificat profesional · 8 cursuri despre securitate cibernetică',
          file: 'assets/certificates/coursera-google-cybersecurity.pdf',
          viewLabel: 'Vezi certificatul'
        }
      ]
    },
    education: {
      title: 'educație',
      items: [
        {
          period: '2024 — prezent',
          title: 'Automatică — Universitatea Tehnică din Cluj-Napoca',
          place: 'Cluj-Napoca, RO',
          url: 'https://www.utcluj.ro',
          urlLabel: 'utcluj.ro'
        },
        {
          period: '2020 — 2024',
          title: 'Colegiul Național Horea, Cloșca și Crișan',
          place: 'Alba Iulia, RO',
          url: 'https://www.hcc.ro',
          urlLabel: 'hcc.ro'
        }
      ]
    },
    languages: {
      title: 'limbi',
      items: [
        { name: 'Română', level: 'nativ', pct: 100 },
        { name: 'Engleză', level: 'B2–C1', pct: 80 },
        { name: 'Germană', level: 'A2', pct: 30 },
        { name: 'Franceză', level: 'A2', pct: 30 }
      ]
    },
    contact: {
      title: 'contact',
      prompt: 'hai să colaborăm',
      heading: 'Deschis pentru proiecte, internship-uri și colaborări.',
      phoneLabel: 'Telefon'
    }
  },
  en: {
    navbar: {
      projects: 'projects',
      skills: 'skills',
      education: 'education',
      contact: 'contact',
      theme: 'theme'
    },
    hero: {
      desc1: '',
      studies: 'Automation',
      desc2: ' student @ UTCN, at the Faculty of Automation and Computer Science. Passionate about ',
      cyber: 'cybersecurity',
      desc3: ' and experimenting across domains like ',
      quantum: 'quantum computing',
      mid: ' and ',
      web: 'web development',
      desc4: ', always applying knowledge to real-world projects.',
      btn_cv: 'Download CV'
    },
    projects: {
      title: 'projects',
      items: [
        {
          badge: 'HACKATHON',
          tech: 'NestJS · PostgreSQL',
          title: 'Polyhack — Backend',
          desc: 'Backend architecture in NestJS, delivered under tight deadlines in a 5-member agile team. Cluj-Napoca, 2026.',
          link: 'https://github.com/Alexfery',
          linkLabel: 'github.com/Alexfery ↗'
        },
        {
          badge: 'ROBOTICS',
          tech: 'FIRST LEGO League',
          title: 'XEO team — 1st place',
          desc: 'Designed and fabricated mechanical modules for competition; FIRST LEGO League winners, March 2021.'
        }
      ]
    },
    websites: {
      title: 'websites',
      items: [
        {
          badge: 'CURRENT',
          tech: 'Angular · TypeScript',
          title: 'feralexandru.com',
          desc: 'Portfolio built from scratch with Angular to showcase experience, skills and technical projects.',
          link: 'https://feralexandru.com',
          linkLabel: 'feralexandru.com ↗'
        },
        {
          badge: 'CLIENT',
          tech: 'React · Decap CMS',
          title: 'francescaiurian.com',
          desc: 'I designed the system and architecture of the site, from structure to launch.',
          link: 'https://francescaiurian.com',
          linkLabel: 'francescaiurian.com ↗'
        },
        {
          badge: 'CLIENT',
          tech: 'React · TypeScript · Java · Supabase · Cloudinary',
          title: 'urbankeller.de',
          desc: 'I designed the system and architecture of the site, from structure to launch.',
          link: 'https://urbankeller.de',
          linkLabel: 'urbankeller.de ↗'
        }
      ]
    },
    skills: {
      title: 'skills',
      groups: [
        { label: 'Languages', items: ['C', 'C++', 'Java', 'Python', 'TypeScript', 'MATLAB', 'SQL'] },
        { label: 'Frameworks', items: ['Angular', 'PostgreSQL', 'Qiskit'] },
        { label: 'Tools', items: ['Linux', 'Git', 'Microsoft Office'] }
      ]
    },
    certifications: {
      title: 'certifications',
      items: [
        {
          issuer: 'Udemy',
          title: 'Fundamentals of Backend Engineering',
          detail: 'Instructor Hussein Nasser · 19.5 hours',
          file: 'assets/certificates/udemy-backend-engineering.pdf',
          viewLabel: 'View certificate'
        },
        {
          issuer: 'Udemy',
          title: 'Complete Web Development Course',
          detail: 'Instructor Hitesh Choudhary · 100 hours',
          file: 'assets/certificates/udemy-web-development.pdf',
          viewLabel: 'View certificate'
        },
        {
          issuer: 'Coursera',
          title: 'Metasploit for Beginners: Ethical Penetration Testing',
          detail: 'Hands-on penetration testing project using Metasploit',
          file: 'assets/certificates/coursera-metasploit-pentest.pdf',
          viewLabel: 'View certificate'
        },
        {
          issuer: 'Google · Coursera',
          title: 'Google Cybersecurity',
          detail: 'Professional certificate · 8 courses on cybersecurity fundamentals',
          file: 'assets/certificates/coursera-google-cybersecurity.pdf',
          viewLabel: 'View certificate'
        }
      ]
    },
    education: {
      title: 'education',
      items: [
        {
          period: '2024 — now',
          title: 'Automation — Technical University of Cluj-Napoca',
          place: 'Cluj-Napoca, RO',
          url: 'https://www.utcluj.ro',
          urlLabel: 'utcluj.ro'
        },
        {
          period: '2020 — 2024',
          title: 'H.C.C. National College',
          place: 'Alba Iulia, RO',
          url: 'https://www.hcc.ro',
          urlLabel: 'hcc.ro'
        }
      ]
    },
    languages: {
      title: 'languages',
      items: [
        { name: 'Romanian', level: 'native', pct: 100 },
        { name: 'English', level: 'B2–C1', pct: 80 },
        { name: 'German', level: 'A2', pct: 30 },
        { name: 'French', level: 'A2', pct: 30 }
      ]
    },
    contact: {
      title: 'contact',
      prompt: "let's work together",
      heading: 'Open to projects, internships and collaborations.',
      phoneLabel: 'Phone'
    }
  },
  de: {
    navbar: {
      projects: 'projekte',
      skills: 'skills',
      education: 'ausbildung',
      contact: 'kontakt',
      theme: 'thema'
    },
    hero: {
      desc1: 'Student der ',
      studies: 'Automatik',
      desc2: ' @ UTCN, an der Fakultät für Automatik und Informatik. Begeistert von ',
      cyber: 'Cybersecurity',
      desc3: ' und dem Experimentieren in Bereichen wie ',
      quantum: 'Quantencomputing',
      mid: ' und ',
      web: 'Webentwicklung',
      desc4: ' – Wissen stets in realen Projekten angewandt.',
      btn_cv: 'Lebenslauf herunterladen'
    },
    projects: {
      title: 'projekte',
      items: [
        {
          badge: 'HACKATHON',
          tech: 'NestJS · PostgreSQL',
          title: 'Polyhack — Backend',
          desc: 'Backend-Architektur in NestJS, unter engem Zeitplan in einem agilen 5-köpfigen Team geliefert. Cluj-Napoca, 2026.',
          link: 'https://github.com/Alexfery',
          linkLabel: 'github.com/Alexfery ↗'
        },
        {
          badge: 'ROBOTICS',
          tech: 'FIRST LEGO League',
          title: 'Team XEO — 1. Platz',
          desc: 'Design und Fertigung der mechanischen Module für den Wettbewerb; Sieger der FIRST LEGO League, März 2021.'
        }
      ]
    },
    websites: {
      title: 'websites',
      items: [
        {
          badge: 'CURRENT',
          tech: 'Angular · TypeScript',
          title: 'feralexandru.com',
          desc: 'Von Grund auf mit Angular gebautes Portfolio, um Erfahrung, Skills und technische Projekte zu präsentieren.',
          link: 'https://feralexandru.com',
          linkLabel: 'feralexandru.com ↗'
        },
        {
          badge: 'CLIENT',
          tech: 'React · Decap CMS',
          title: 'francescaiurian.com',
          desc: 'System und Architektur der Website von mir entworfen, von der Struktur bis zum Launch.',
          link: 'https://francescaiurian.com',
          linkLabel: 'francescaiurian.com ↗'
        },
        {
          badge: 'CLIENT',
          tech: 'React · TypeScript · Java · Supabase · Cloudinary',
          title: 'urbankeller.de',
          desc: 'System und Architektur der Website von mir entworfen, von der Struktur bis zum Launch.',
          link: 'https://urbankeller.de',
          linkLabel: 'urbankeller.de ↗'
        }
      ]
    },
    skills: {
      title: 'skills',
      groups: [
        { label: 'Sprachen', items: ['C', 'C++', 'Java', 'Python', 'TypeScript', 'MATLAB', 'SQL'] },
        { label: 'Frameworks', items: ['Angular', 'PostgreSQL', 'Qiskit'] },
        { label: 'Tools', items: ['Linux', 'Git', 'Microsoft Office'] }
      ]
    },
    certifications: {
      title: 'zertifikate',
      items: [
        {
          issuer: 'Udemy',
          title: 'Fundamentals of Backend Engineering',
          detail: 'Dozent Hussein Nasser · 19,5 Stunden',
          file: 'assets/certificates/udemy-backend-engineering.pdf',
          viewLabel: 'Zertifikat ansehen'
        },
        {
          issuer: 'Udemy',
          title: 'Complete Web Development Course',
          detail: 'Dozent Hitesh Choudhary · 100 Stunden',
          file: 'assets/certificates/udemy-web-development.pdf',
          viewLabel: 'Zertifikat ansehen'
        },
        {
          issuer: 'Coursera',
          title: 'Metasploit for Beginners: Ethical Penetration Testing',
          detail: 'Praktisches Penetrationstest-Projekt mit Metasploit',
          file: 'assets/certificates/coursera-metasploit-pentest.pdf',
          viewLabel: 'Zertifikat ansehen'
        },
        {
          issuer: 'Google · Coursera',
          title: 'Google Cybersecurity',
          detail: 'Professional Certificate · 8 Kurse zu Cybersicherheit',
          file: 'assets/certificates/coursera-google-cybersecurity.pdf',
          viewLabel: 'Zertifikat ansehen'
        }
      ]
    },
    education: {
      title: 'ausbildung',
      items: [
        {
          period: '2024 — heute',
          title: 'Automatisierung — Technische Universität Cluj-Napoca',
          place: 'Cluj-Napoca, RO',
          url: 'https://www.utcluj.ro',
          urlLabel: 'utcluj.ro'
        },
        {
          period: '2020 — 2024',
          title: 'Nationalkolleg Horea, Cloșca și Crișan',
          place: 'Alba Iulia, RO',
          url: 'https://www.hcc.ro',
          urlLabel: 'hcc.ro'
        }
      ]
    },
    languages: {
      title: 'sprachen',
      items: [
        { name: 'Rumänisch', level: 'Muttersprache', pct: 100 },
        { name: 'Englisch', level: 'B2–C1', pct: 80 },
        { name: 'Deutsch', level: 'A2', pct: 30 },
        { name: 'Französisch', level: 'A2', pct: 30 }
      ]
    },
    contact: {
      title: 'kontakt',
      prompt: 'lass uns zusammenarbeiten',
      heading: 'Offen für Projekte, Praktika und Kooperationen.',
      phoneLabel: 'Telefon'
    }
  },
  fr: {
    navbar: {
      projects: 'projets',
      skills: 'skills',
      education: 'éducation',
      contact: 'contact',
      theme: 'thème'
    },
    hero: {
      desc1: 'Étudiant en ',
      studies: 'Automatique',
      desc2: " @ UTCN, à la Faculté d'Automatique et Informatique. Passionné par la ",
      cyber: 'cybersécurité',
      desc3: " et l'expérimentation de domaines comme le ",
      quantum: 'quantum computing',
      mid: ' et le ',
      web: 'développement web',
      desc4: ', en appliquant toujours mes connaissances à des projets réels.',
      btn_cv: 'Télécharger le CV'
    },
    projects: {
      title: 'projets',
      items: [
        {
          badge: 'HACKATHON',
          tech: 'NestJS · PostgreSQL',
          title: 'Polyhack — Backend',
          desc: "Architecture backend en NestJS, livrée dans des délais serrés au sein d'une équipe agile de 5 personnes. Cluj-Napoca, 2026.",
          link: 'https://github.com/Alexfery',
          linkLabel: 'github.com/Alexfery ↗'
        },
        {
          badge: 'ROBOTICS',
          tech: 'FIRST LEGO League',
          title: 'Équipe XEO — 1ère place',
          desc: 'Conception et fabrication des modules mécaniques pour la compétition ; vainqueurs de la FIRST LEGO League, mars 2021.'
        }
      ]
    },
    websites: {
      title: 'websites',
      items: [
        {
          badge: 'CURRENT',
          tech: 'Angular · TypeScript',
          title: 'feralexandru.com',
          desc: "Portfolio construit de zéro avec Angular pour présenter mon expérience, mes compétences et mes projets techniques.",
          link: 'https://feralexandru.com',
          linkLabel: 'feralexandru.com ↗'
        },
        {
          badge: 'CLIENT',
          tech: 'React · Decap CMS',
          title: 'francescaiurian.com',
          desc: "Système et architecture du site conçus par moi, de la structure au lancement.",
          link: 'https://francescaiurian.com',
          linkLabel: 'francescaiurian.com ↗'
        },
        {
          badge: 'CLIENT',
          tech: 'React · TypeScript · Java · Supabase · Cloudinary',
          title: 'urbankeller.de',
          desc: "Système et architecture du site conçus par moi, de la structure au lancement.",
          link: 'https://urbankeller.de',
          linkLabel: 'urbankeller.de ↗'
        }
      ]
    },
    skills: {
      title: 'skills',
      groups: [
        { label: 'Langages', items: ['C', 'C++', 'Java', 'Python', 'TypeScript', 'MATLAB', 'SQL'] },
        { label: 'Frameworks', items: ['Angular', 'PostgreSQL', 'Qiskit'] },
        { label: 'Tools', items: ['Linux', 'Git', 'Microsoft Office'] }
      ]
    },
    certifications: {
      title: 'certifications',
      items: [
        {
          issuer: 'Udemy',
          title: 'Fundamentals of Backend Engineering',
          detail: 'Instructeur Hussein Nasser · 19,5 heures',
          file: 'assets/certificates/udemy-backend-engineering.pdf',
          viewLabel: 'Voir le certificat'
        },
        {
          issuer: 'Udemy',
          title: 'Complete Web Development Course',
          detail: 'Instructeur Hitesh Choudhary · 100 heures',
          file: 'assets/certificates/udemy-web-development.pdf',
          viewLabel: 'Voir le certificat'
        },
        {
          issuer: 'Coursera',
          title: 'Metasploit for Beginners: Ethical Penetration Testing',
          detail: "Projet pratique de test d'intrusion avec Metasploit",
          file: 'assets/certificates/coursera-metasploit-pentest.pdf',
          viewLabel: 'Voir le certificat'
        },
        {
          issuer: 'Google · Coursera',
          title: 'Google Cybersecurity',
          detail: 'Certificat professionnel · 8 cours sur la cybersécurité',
          file: 'assets/certificates/coursera-google-cybersecurity.pdf',
          viewLabel: 'Voir le certificat'
        }
      ]
    },
    education: {
      title: 'éducation',
      items: [
        {
          period: '2024 — présent',
          title: 'Automatique — Université Technique de Cluj-Napoca',
          place: 'Cluj-Napoca, RO',
          url: 'https://www.utcluj.ro',
          urlLabel: 'utcluj.ro'
        },
        {
          period: '2020 — 2024',
          title: 'Collège National Horea, Cloșca și Crișan',
          place: 'Alba Iulia, RO',
          url: 'https://www.hcc.ro',
          urlLabel: 'hcc.ro'
        }
      ]
    },
    languages: {
      title: 'langues',
      items: [
        { name: 'Roumain', level: 'natif', pct: 100 },
        { name: 'Anglais', level: 'B2–C1', pct: 80 },
        { name: 'Allemand', level: 'A2', pct: 30 },
        { name: 'Français', level: 'A2', pct: 30 }
      ]
    },
    contact: {
      title: 'contact',
      prompt: 'travaillons ensemble',
      heading: 'Ouvert aux projets, stages et collaborations.',
      phoneLabel: 'Téléphone'
    }
  }
};
