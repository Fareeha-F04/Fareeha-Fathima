import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t.projects.biDashboard,
      description: t.projects.biDashboardDesc,
      tags: ['Power BI', 'Tableau', 'Data Visualization'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: t.projects.excelAnalysis,
      description: t.projects.excelAnalysisDesc,
      tags: ['Excel', 'Power Query', 'Data Analysis'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: t.projects.aiWebsite,
      description: t.projects.aiWebsiteDesc,
      tags: ['Claude', 'Perplexity', 'NotebookLM', 'Lovable.dev'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: t.projects.v0Project,
      description: t.projects.v0ProjectDesc,
      tags: ['V0', 'Vercel', 'Web Development'],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="projects" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 reveal">
          {t.projects.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="hover-lift reveal overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open('https://github.com/Fareeha-F04', '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    {t.projects.viewGithub}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open('https://github.com/Fareeha-F04', '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <Button
            size="lg"
            onClick={() => window.open('https://github.com/Fareeha-F04', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};
