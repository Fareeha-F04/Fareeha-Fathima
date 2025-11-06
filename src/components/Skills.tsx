import { BarChart3, Brain, Code, GitBranch, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: BarChart3,
      title: t.skills.biTools,
      description: t.skills.biToolsDesc,
      tools: ['Excel', 'Power BI', 'Tableau', 'Google Looker'],
    },
    {
      icon: Brain,
      title: t.skills.aiWorkflow,
      description: t.skills.aiWorkflowDesc,
      tools: ['Claude', 'Perplexity', 'NotebookLM', 'Qwen'],
    },
    {
      icon: Code,
      title: t.skills.webDev,
      description: t.skills.webDevDesc,
      tools: ['Lovable.dev', 'V0 by Vercel', 'Float'],
    },
    {
      icon: GitBranch,
      title: t.skills.deployment,
      description: t.skills.deploymentDesc,
      tools: ['GitHub', 'Netlify', 'YAML'],
    },
  ];

  const coreCompetencies = [
    { icon: TrendingUp, label: t.skills.adaptability },
    { icon: Users, label: t.skills.listening },
    { icon: Users, label: t.skills.customerFocus },
    { icon: Users, label: t.skills.trustworthy },
    { icon: TrendingUp, label: t.skills.punctual },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 reveal">
          {t.skills.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="hover-lift reveal">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {category.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="max-w-4xl mx-auto hover-lift reveal">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">{t.skills.coreCompetencies}</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {coreCompetencies.map((competency, index) => {
                const Icon = competency.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="p-4 rounded-full bg-primary/10 mb-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-medium text-sm">{competency.label}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
