import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Loader2, ArrowRight } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  language: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/robmaroh/repos?sort=updated&direction=desc&per_page=6'
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const data = await response.json();

        // Filter and transform the repositories
        const filteredRepos = data
          .filter((repo: any) => !repo.fork)
          .slice(0, 6)
          .map((repo: any) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || 'No description available',
            html_url: repo.html_url,
            homepage: repo.homepage || '',
            topics: repo.topics || [],
            language: repo.language || 'Not specified'
          }));

        setProjects(filteredRepos);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-gray-800 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center">
          <Loader2 className="w-12 h-12 animate-spin text-purple-400 mb-4" />
          <p className="text-gray-400">Loading projects...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gray-800 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <p className="text-gray-400">
            Meanwhile, you can visit my{' '}
            <a 
              href="https://github.com/robmaroh?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              GitHub profile
            </a>
            {' '}directly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        {projects.length === 0 ? (
          <p className="text-center text-gray-400">No projects available at the moment.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-purple-500/10 hover:shadow-2xl transition-all border border-gray-800"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 capitalize">
                      {project.name.replace(/-/g, ' ')}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.language && (
                        <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                          {project.language}
                        </span>
                      )}
                      {project.topics.map((topic, topicIndex) => (
                        <span 
                          key={topicIndex}
                          className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a 
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        <Github size={20} />
                        Code
                      </a>
                      {project.homepage && (
                        <a 
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                        >
                          <ExternalLink size={20} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <a
                href="https://github.com/robmaroh?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
              >
                View All Projects
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}