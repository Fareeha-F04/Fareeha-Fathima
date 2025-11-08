import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

export const Contact = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! I will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 reveal">
            {t.contact.title}
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 reveal">
            {t.contact.subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift reveal">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.contact.name}
                    </label>
                    <Input required placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.contact.email}
                    </label>
                    <Input required type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.contact.message}
                    </label>
                    <Textarea
                      required
                      placeholder="Your message..."
                      rows={5}
                      className="resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    {t.contact.send}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6 reveal">
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{t.contact.email}</h3>
                      <a
                        href="mailto:fareehafathima2604@gmail.com"
                        className="text-muted-foreground hover:text-primary smooth-transition"
                      >
                        fareehafathima2604@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone</h3>
                      <a
                        href="tel:+33744282566"
                        className="text-muted-foreground hover:text-primary smooth-transition"
                      >
                        +33 7 44 28 25 66
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{t.contact.location}</h3>
                      <p className="text-muted-foreground">{t.contact.locationValue}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center pt-6">
                <p className="text-sm text-muted-foreground mb-4">{t.contact.or}</p>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('https://www.linkedin.com/in/fareeha-fathima', '_blank')}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  linkedin.com/in/fareeha-fathima
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
