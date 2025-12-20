import { RouteConfig } from '../types';
import { lazy } from 'react';

// Lazy load pages for better performance
const Home = lazy(() => import('../pages/Home'));
const AboutMe = lazy(() => import('../pages/Home/AboutMe'));
const Education = lazy(() => import('../pages/Home/Education'));
const Experience = lazy(() => import('../pages/Home/Experience'));
const Skills = lazy(() => import('../pages/Home/Skill'));
const Projects = lazy(() => import('../pages/Home/Project'));
const Achievements = lazy(() => import('../pages/Home/Achievements'));
const Contact = lazy(() => import('../pages/Home/ContactMe'));

export const routes: RouteConfig[] = [
  {
    path: '/',
    element: Home,
    label: 'Home',
    id: 'home'
  },
  {
    path: '/about',
    element: AboutMe,
    label: 'About',
    id: 'about'
  },
  {
    path: '/education',
    element: Education,
    label: 'Education',
    id: 'education'
  },
  {
    path: '/experience',
    element: Experience,
    label: 'Experience',
    id: 'experience'
  },
  {
    path: '/skills',
    element: Skills,
    label: 'Skills',
    id: 'skills'
  },
  {
    path: '/projects',
    element: Projects,
    label: 'Projects',
    id: 'projects'
  },
  {
    path: '/achievements',
    element: Achievements,
    label: 'Achievements',
    id: 'achievements'
  },
  {
    path: '/contact',
    element: Contact,
    label: 'Contact',
    id: 'contact'
  }
];

// Navigation items for header (sections on home page)
export const navItems = [
  { id: 'home', label: 'Home', path: '#home' },
  { id: 'education', label: 'Education', path: '#education' },
  { id: 'experience', label: 'Experience', path: '#experience' },
  { id: 'skills', label: 'Skills', path: '#skills' },
  { id: 'projects', label: 'Projects', path: '#projects' },
  { id: 'achievements', label: 'Achievements', path: '#achievements' },
  { id: 'contact', label: 'Contact', path: '#contact' }
];

