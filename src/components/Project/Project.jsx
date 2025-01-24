
"use client "
import React, { useState, useEffect } from "react";
import "@/styles/globals.css";
import { getProjects } from "@/app/api/Project";

// Reusable Project Component
const Project = ({ project, isReversed }) => {
  return (
    <div
      className={`flex flex-col md:flex-row gap-10 max-w-5xl w-full ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image Section */}
      <div className="flex justify-center md:justify-end w-90 my-auto md:w-[20rem] md:h-[20rem] relative">
        <div className="absolute inset-0 bg-gray-200 rounded-lg animate-spin-slow"></div>
        <img
          className="w-auto   md:w-90   object-fill rounded-lg relative z-10"
          src={project.images}
          alt={project.title}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:w-2/4">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h1>
        {/* <h5 className="text-sm text-gray-500">{project.title}</h5> */}
        <p className="text-gray-700 text-sm md:text-base mb-4">
          {project.technologies}
        </p>
        
        <p className="text-gray-700 text-sm md:text-base mb-4">
          {project.description}
        </p>
        
        <p className="text-gray-700 text-sm md:text-base mb-4">
          {project.team}
        </p>
        
      </div>
    </div>
  );
};

const ProjectSection = () => {
  const [project, setProject] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Loading state

  const fetchProject = async () => {
    try {
      const data = await getProjects();
      setProject(data);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
  
    <div className="flex flex-col items-center min-h-screen px-4 space-y-10">
    {loading ? (
      <p>Loading projects...</p> // Show a loading message while fetching
    ) : project.length > 0 ? (
      project.slice(0, 4).map((proj, index) => ( // Show only the first 4 projects
        <Project
          key={proj.id}
          project={proj}
          isReversed={index % 2 !== 0}
        />
      ))
    ) : (
      <p>No projects available.</p>
    )}
  </div>
);

};

export default ProjectSection;
