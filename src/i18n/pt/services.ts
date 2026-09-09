import type { ServicesCopy } from '../types'

export const services: ServicesCopy = {
  servicesTitle: 'O que eu faço',
  servicesSub:
    'O que já entrego hoje e o que estou construindo a seguir, com foco em resolver problemas reais.',
  servicesTag: 'Backend',
  services: [
    {
      title: 'Arquitetura e design de APIs',
      body: 'Camadas que mantêm a regra de negócio independente de framework, com contratos de interface que não quebram quem já consome.',
    },
    {
      title: 'Testes automatizados',
      body: 'Testes unitários, de integração e E2E que tornam o refactor seguro e a regressão barulhenta.',
    },
    {
      title: 'Containers e deploy',
      body: 'Pipeline de CI/CD com build e deploy automatizados, containers orquestrados com Swarm, hospedados em AWS.',
    },
    {
      title: 'Confiabilidade em integrações',
      body: 'Consumo de APIs de terceiros com retry e idempotência, com logs estruturados e rastreio que dizem onde e por que a falha aconteceu.',
    },
    {
      title: 'Automação e scripts',
      body: 'Trabalho repetitivo virando script, rotinas de dados, setup de ambiente e pequenas ferramentas internas.',
    },
    {
      title: 'Documentação e decisões técnicas',
      body: 'Contrato de API em OpenAPI e registro das decisões de arquitetura, incluindo o porquê de cada escolha e não só o resultado.',
    },
  ],
}
