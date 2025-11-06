import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Fareeha Fathima. {t.footer.rights}
          </p>
          <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center gap-1">
            {t.footer.madeWith} <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using Lovable.dev
          </p>
        </div>
      </div>
    </footer>
  );
};
