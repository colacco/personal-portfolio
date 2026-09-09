import type { ExperienceCopy } from '../types'

export const experience: ExperienceCopy = {
  experienceTitle: 'Path so far',
  experienceTabWork: 'Work',
  experienceTabEducation: 'Education',
  timeline: [
    {
      id: 'solutions',
      type: 'trabalho',
      period: '2026 — present',
      kind: 'Work',
      role: 'Software Engineer',
      org: 'Solutions BI',
      body: 'Development and evolution of back-end systems with NestJS and TypeScript, working on AWS integrations, payment APIs, deployments and file storage with S3, as well as building systems from scratch with a focus on software architecture.',
    },
    {
      id: 'intern',
      type: 'trabalho',
      period: '2026 — 2026',
      kind: 'Work',
      role: 'Software Intern',
      org: 'Solutions BI',
      body: 'Development of web applications and APIs, working on back-end and front-end with NestJS, TypeScript, FastAPI, React and MongoDB, along with integrations between services and first contact with messaging and cloud infrastructure.',
    },
    {
      id: 'einstein',
      type: 'trabalho',
      period: '2025 — 2025',
      kind: 'Work',
      role: 'Support and Infrastructure Intern',
      org: 'UniEinstein',
      body: 'Technical support and maintenance of physical and logical infrastructure, working on the configuration and maintenance of equipment, operating systems, networks and hardware.',
    },
    {
      id: 'tads',
      type: 'educacao',
      period: '2025 — 2027',
      kind: 'Education',
      role: 'Systems Analysis and Development (SAD)',
      org: 'UniEinstein',
      body: 'A degree in software development focused on programming, databases, software engineering and application building. The course combines theoretical foundations with hands-on projects throughout.',
    },
  ],
}
