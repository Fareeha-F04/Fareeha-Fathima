import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import powerBIDashboard from '@/assets/projects/powerbi-dashboard.png';
import powerBIAnalysis from '@/assets/projects/powerbi-analysis.png';
import excelDashboard from '@/assets/projects/excel-dashboard.png';
import excelSales from '@/assets/projects/excel-sales.png';
import webDevCode from '@/assets/projects/web-dev-code.png';
import webDevSite from '@/assets/projects/web-dev-site.png';
export const Projects = () => {
  const {
    t
  } = useLanguage();
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const projects = [{
    title: t.projects.biDashboard,
    description: t.projects.biDashboardDesc,
    tags: ['Power BI', 'Tableau', 'Data Visualization'],
    gradient: 'from-blue-500 to-cyan-500',
    images: [powerBIDashboard, powerBIAnalysis]
  }, {
    title: t.projects.excelAnalysis,
    description: t.projects.excelAnalysisDesc,
    tags: ['Excel', 'Power Query', 'Data Analysis'],
    gradient: 'from-green-500 to-emerald-500',
    images: [excelDashboard, excelSales]
  }, {
    title: t.projects.aiWebsite,
    description: t.projects.aiWebsiteDesc,
    tags: ['Claude', 'Perplexity', 'NotebookLM', 'Lovable.dev'],
    gradient: 'from-purple-500 to-pink-500',
    images: [webDevSite, webDevCode]
  }, {
    title: t.projects.webDevProject,
    description: t.projects.webDevProjectDesc,
    tags: ['V0', 'Vercel', 'React', 'TypeScript'],
    gradient: 'from-orange-500 to-red-500',
    images: [webDevCode, webDevSite]
  }];
  return <section id="projects" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 reveal">
          {t.projects.title}
        </h2>

        <div className="space-y-12 max-w-6xl mx-auto">
          {projects.map((project, index) => <div key={index} className={`reveal flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-center`}>
              <div className="w-full md:w-1/2 relative group">
                <div className="relative h-80 overflow-hidden rounded-xl shadow-xl">
                  {project.images.map((image, imgIdx) => <img key={imgIdx} src={image} alt={`${project.title} screenshot ${imgIdx + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hoveredImage === `${index}-${imgIdx}` ? 'z-20 scale-105' : imgIdx === 0 ? 'z-10' : 'z-0 translate-x-4 translate-y-4 opacity-70'}`} onMouseEnter={() => setHoveredImage(`${index}-${imgIdx}`)} onMouseLeave={() => setHoveredImage(null)} />)}
                </div>
              </div>
              
              <Card className="w-full md:w-1/2 hover-lift overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {tag}
                      </span>)}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" onClick={() => window.open('https://github.com/Fareeha-F04', '_blank')}>
                      <Github className="mr-2 h-4 w-4" />
                      {t.projects.viewGithub}
                    </Button>
                    
                  </div>
                </CardContent>
              </Card>
            </div>)}
        </div>

        <div className="text-center mt-12 reveal">
          <Button size="lg" onClick={() => window.open('https://github.com/Fareeha-F04', '_blank')}>
            <Github className="mr-2 h-5 w-5" />
            {t.projects.viewAllProjects}
          </Button>
        </div>
      </div>
    </section>;
};