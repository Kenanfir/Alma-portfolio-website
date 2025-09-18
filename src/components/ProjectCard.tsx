import React from 'react';
import type { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="glass glass-hover rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
      {/* Project Image - Only render if image exists */}
      {project.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {project.featured && (
            <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
              Featured
            </span>
          )}
        </div>
      )}

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-800">
            {project.title}
          </h3>
          {project.featured && !project.image && (
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm ml-2">
              Featured
            </span>
          )}
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              data-tag={tag.toLowerCase()}
              className="px-3 py-1 glass-subtle text-gray-700 rounded-full text-sm border border-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        {/* <div className="flex gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 glass-subtle text-gray-700 rounded-xl hover:glass transition-colors border border-gray-300"
            >
              View Code
            </a>
          )}
        </div> */}
      </div>
    </div>
  );
};
