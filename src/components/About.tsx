import { GraduationCap, Briefcase, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 reveal">
            {t.about.title}
          </h2>

          <Card className="mb-8 hover-lift reveal">
            <CardContent className="p-8">
              <p className="text-lg mb-4 text-foreground">{t.about.intro}</p>
              <p className="text-lg text-muted-foreground">{t.about.description}</p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="hover-lift reveal">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{t.about.education}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-lg">{t.about.globalMBA}</h4>
                    <p className="text-muted-foreground">{t.about.globalMBADetails}</p>
                    <p className="text-sm text-muted-foreground">{t.about.globalMBADate}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{t.about.bba}</h4>
                    <p className="text-muted-foreground">{t.about.bbaDetails}</p>
                    <p className="text-sm text-muted-foreground">{t.about.bbaDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift reveal">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{t.about.experience}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-lg">{t.about.tutoring}</h4>
                    <p className="text-muted-foreground">{t.about.tutoringDesc}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{t.about.marketing}</h4>
                    <p className="text-muted-foreground">{t.about.marketingDesc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="hover-lift reveal">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                {t.about.languages}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <div className="text-2xl mb-2">🇮🇳</div>
                  <span className="font-semibold text-sm">{t.about.hindi}</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <div className="text-2xl mb-2">🇵🇰</div>
                  <span className="font-semibold text-sm">{t.about.urdu}</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <div className="text-2xl mb-2">🇫🇷</div>
                  <span className="font-semibold text-sm">{t.about.french}</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <div className="text-2xl mb-2">🇬🇧</div>
                  <span className="font-semibold text-sm">{t.about.english}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
