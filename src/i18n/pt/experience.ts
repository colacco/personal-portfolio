import type { ExperienceCopy } from '../types'

export const experience: ExperienceCopy = {
  experienceTitle: 'Trajetória',
  experienceTabWork: 'Trabalho',
  experienceTabEducation: 'Educação',
  timeline: [
    {
      id: 'solutions',
      type: 'trabalho',
      period: '2026 — atual',
      kind: 'Trabalho',
      role: 'Engenheiro de Software',
      org: 'Solutions BI',
      body: 'Desenvolvimento e evolução de sistemas back-end com NestJS e TypeScript, atuando em integrações com AWS, APIs de pagamento, deploys e armazenamento de arquivos com S3, além da construção de sistemas do zero com foco em arquitetura de software.',
    },
    {
      id: 'intern',
      type: 'trabalho',
      period: '2026 — 2026',
      kind: 'Trabalho',
      role: 'Estagiário de Software',
      org: 'Solutions BI',
      body: 'Desenvolvimento de aplicações web e APIs, atuando em back-end e front-end com NestJS, TypeScript, FastAPI, React e MongoDB, além de integrações entre serviços e primeiros contatos com mensageria e infraestrutura em nuvem.',
    },
    {
      id: 'einstein',
      type: 'trabalho',
      period: '2025 — 2025',
      kind: 'Trabalho',
      role: 'Estagiário de Suporte e Infraestrutura',
      org: 'UniEinstein',
      body: 'Suporte técnico e manutenção de infraestrutura física e lógica, atuando na configuração e manutenção de equipamentos, sistemas operacionais, redes e hardware.',
    },
    {
      id: 'tads',
      type: 'educacao',
      period: '2025 — 2027',
      kind: 'Educação',
      role: 'Análise e Desenvolvimento de Sistemas (ADS)',
      org: 'UniEinstein',
      body: 'Formação em desenvolvimento de software, com foco em programação, bancos de dados, engenharia de software e construção de aplicações. O curso combina fundamentos teóricos com projetos práticos ao longo da formação.',
    },
  ],
}
