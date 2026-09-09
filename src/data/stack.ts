import type { Copy } from '../i18n/copy'

import awsSvg from '../assets/icons/infra/aws.svg'
import chromaSvg from '../assets/icons/data/chroma.svg'
import dockerSvg from '../assets/icons/infra/docker.svg'
import fastapiSvg from '../assets/icons/frameworks-libs/fastapi.svg'
import githubActionsSvg from '../assets/icons/infra/github-actions.svg'
import githubSvg from '../assets/links/github.svg'
import cssSvg from '../assets/icons/languages/CSS3.svg'
import goSvg from '../assets/icons/languages/go.svg'
import htmlSvg from '../assets/icons/languages/HTML5.svg'
import javascriptSvg from '../assets/icons/languages/javascript.svg'
import langchainSvg from '../assets/icons/frameworks-libs/langchain.svg'
import linuxSvg from '../assets/icons/infra/linux.svg'
import microsoftSqlServerSvg from '../assets/icons/data/microsoft-sql-server.svg'
import mongodbSvg from '../assets/icons/data/mongodb.svg'
import nestjsSvg from '../assets/icons/frameworks-libs/nestjs.svg'
import nginxSvg from '../assets/icons/infra/nginx.svg'
import ollamaDarkSvg from '../assets/icons/infra/ollama-dark.svg'
import ollamaLightSvg from '../assets/icons/infra/ollama-light.svg'
import postgresqlSvg from '../assets/icons/data/postgresql.svg'
import prismaSvg from '../assets/icons/data/prisma.svg'
import prismaLightSvg from '../assets/icons/data/prisma-light.svg'
import pythonSvg from '../assets/icons/languages/python.svg'
import reactSvg from '../assets/icons/frameworks-libs/react.svg'
import sqlalchemySvg from '../assets/icons/data/sqlalchemy.svg'
import tailwindSvg from '../assets/icons/frameworks-libs/tailwind.svg'
import terraformSvg from '../assets/icons/infra/terraform.svg'
import typescriptSvg from '../assets/icons/languages/typescript.svg'

export interface SkillItem {
  name: string
  icon?: string
  svg?: string
  svgLight?: string
  invertOnDark?: boolean
}

export interface SkillGroup {
  title: string
  icon: string
  items: SkillItem[]
}

export function stackGroups(t: Copy): SkillGroup[] {
  return [
    {
      title: t.skillsLanguages,
      icon: 'ph ph-code',
      items: [
        { name: 'Python', svg: pythonSvg },
        { name: 'Go', svg: goSvg },
        { name: 'JavaScript', svg: javascriptSvg },
        { name: 'TypeScript', svg: typescriptSvg },
        { name: 'HTML5', svg: htmlSvg },
        { name: 'CSS3', svg: cssSvg },
      ],
    },
    {
      title: t.skillsFrameworks,
      icon: 'ph ph-gear',
      items: [
        { name: 'NestJS', svg: nestjsSvg },
        { name: 'FastAPI', svg: fastapiSvg },
        { name: 'React', svg: reactSvg },
        { name: 'Tailwind', svg: tailwindSvg },
        { name: 'LangChain', svg: langchainSvg },
      ],
    },
    {
      title: t.skillsData,
      icon: 'ph ph-database',
      items: [
        { name: 'PostgreSQL', svg: postgresqlSvg },
        { name: 'MongoDB', svg: mongodbSvg },
        { name: 'Microsoft SQL Server', svg: microsoftSqlServerSvg },
        { name: 'Prisma', svg: prismaSvg, svgLight: prismaLightSvg },
        { name: 'SQLAlchemy', svg: sqlalchemySvg },
        { name: 'Chroma', svg: chromaSvg },
      ],
    },
    {
      title: t.skillsInfrastructure,
      icon: 'ph ph-stack',
      items: [
        { name: 'AWS', svg: awsSvg },
        { name: 'Docker', svg: dockerSvg },
        { name: 'Linux', svg: linuxSvg },
        { name: 'Terraform', svg: terraformSvg },
        { name: 'GitHub Actions', svg: githubActionsSvg },
        { name: 'NGINX', svg: nginxSvg },
        { name: 'GitHub', svg: githubSvg, invertOnDark: true },
        { name: 'Ollama', svg: ollamaDarkSvg, svgLight: ollamaLightSvg },
      ],
    },
  ]
}
