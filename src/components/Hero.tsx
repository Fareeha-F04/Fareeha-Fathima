import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import profilePhoto from '@/assets/profile-photo.jpg';
export const Hero = () => {
  const {
    language,
    t
  } = useLanguage();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  const handleViewResume = () => {
    const resumePath = language === 'fr' ? '/resumes/Fareeha_FATHIMA_FR.pdf' : '/resumes/Fareeha_FATHIMA_EN.pdf';
    window.open(resumePath, '_blank');
  };
  return <section id="home" className="min-h-screen flex items-center gradient-hero">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 reveal">
            <p className="text-lg font-medium opacity-90">{t.hero.greeting}</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              {t.hero.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold opacity-95">
              {t.hero.title}
            </h2>
            <p className="text-xl opacity-90">{t.hero.subtitle}</p>
            <p className="text-lg opacity-85 max-w-xl">
              {t.hero.description}
            </p>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 max-w-xl">
              <p className="text-sm font-medium">{t.hero.availability}</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" onClick={() => scrollToSection('projects')} className="bg-white text-primary hover:bg-white/90">
                {t.hero.cta}
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={handleViewResume} className="border-white bg-transparent text-white">
                <Download className="mr-2 h-5 w-5" />
                {t.hero.downloadResume}
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/10" onClick={() => window.open('https://github.com/Fareeha-F04', '_blank')}>
                <Github className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/10" onClick={() => window.location.href = 'mailto:fareehafathima2604@gmail.com'}>
                <Mail className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/10" onClick={() => window.open('https://linkedin.com', '_blank')}>
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="reveal flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-3xl blur-3xl"></div>
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};