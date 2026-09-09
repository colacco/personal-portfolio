import type { ServicesCopy } from '../types'

export const services: ServicesCopy = {
  servicesTitle: 'What I do',
  servicesSub:
    "What I already deliver today and what I'm building next, focused on solving real problems.",
  servicesTag: 'Backend',
  services: [
    {
      title: 'API architecture & design',
      body: "Layers that keep business rules independent from frameworks, with interface contracts that don't break existing consumers.",
    },
    {
      title: 'Automated testing',
      body: 'Unit, integration and E2E tests that make refactoring safe and regressions loud.',
    },
    {
      title: 'Containers & deployment',
      body: 'A CI/CD pipeline with automated build and deploy, containers orchestrated with Swarm, hosted on AWS.',
    },
    {
      title: 'Reliable integrations',
      body: 'Third-party API consumption with retries and idempotency, with structured logs and tracing that tell you where and why a failure happened.',
    },
    {
      title: 'Automation & scripting',
      body: 'Repetitive work turned into scripts, data routines, environment setup and small internal tools.',
    },
    {
      title: 'Documentation & technical decisions',
      body: 'API contracts in OpenAPI and a record of architecture decisions, including the why behind each choice, not just the outcome.',
    },
  ],
}
