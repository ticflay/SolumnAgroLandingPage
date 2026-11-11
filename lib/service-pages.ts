import {
  LAUDOS_AGRONOMICOS,
  PROJETOS_AMBIENTAIS,
  type ProjetoAmbiental,
} from '@/lib/services-page-content'

export interface FaqItem {
  q: string
  a: string
}

interface ServicePageSeo {
  slug: string
  /** Título da aba/Google. Curto (até ~60 caracteres) e com o termo buscado. */
  seoTitle: string
  seoDescription: string
  faq: FaqItem[]
}

export interface ServicePage extends ProjetoAmbiental, ServicePageSeo {
  category: { id: string; label: string }
}

// Conteúdo de SEO de cada página de serviço, ligado ao serviço pelo id.
// As respostas são gerais de propósito: prazos e valores variam caso a caso.
const SEO: Record<string, ServicePageSeo> = {
  prad: {
    slug: 'prad-recuperacao-de-areas-degradadas',
    seoTitle: 'PRAD: Plano de Recuperação de Áreas Degradadas | Solumn',
    seoDescription:
      'Elaboração de PRAD com ART: diagnóstico, projeto técnico, protocolo no órgão ambiental e monitoramento até a homologação. Atendimento em todo o Brasil.',
    faq: [
      {
        q: 'Quando o PRAD é exigido?',
        a: 'Quando o órgão ambiental exige a recuperação de uma área degradada: por exemplo, após autuação ou embargo, como condicionante de licença ambiental ou na adesão ao Programa de Regularização Ambiental (PRA).',
      },
      {
        q: 'Quem pode elaborar o PRAD?',
        a: 'Um profissional legalmente habilitado, que assume a responsabilidade técnica pelo projeto com a emissão de ART. Na Solumn, a ART já está inclusa.',
      },
      {
        q: 'Quanto tempo dura a recuperação?',
        a: 'Depende do tipo de degradação, do tamanho da área e da metodologia aprovada. O PRAD traz um cronograma de execução e monitoramento que é acompanhado até a homologação pelo órgão.',
      },
    ],
  },
  car: {
    slug: 'car-cadastro-ambiental-rural',
    seoTitle: 'CAR: Cadastro Ambiental Rural com ART | Solumn',
    seoDescription:
      'Inscrição e retificação do CAR no SICAR com vistoria, georreferenciamento e delimitação de APP e Reserva Legal. Regularize seu imóvel rural e tenha acesso a crédito.',
    faq: [
      {
        q: 'Quem precisa fazer o CAR?',
        a: 'Todo imóvel rural, inclusive posses, é obrigado a ter inscrição no Cadastro Ambiental Rural, conforme o Código Florestal (Lei 12.651/2012).',
      },
      {
        q: 'O CAR comprova que a terra é minha?',
        a: 'Não. O CAR é um cadastro ambiental declaratório e não substitui a escritura nem regulariza a titularidade. Para isso existe a regularização fundiária.',
      },
      {
        q: 'Por que manter o CAR em dia?',
        a: 'Os bancos exigem o CAR para liberar crédito rural, e ele é a porta de entrada para o Programa de Regularização Ambiental (PRA). Um cadastro com erros pode gerar pendências na análise do órgão.',
      },
    ],
  },
  licenciamento: {
    slug: 'licenciamento-ambiental',
    seoTitle: 'Licenciamento Ambiental: LP, LI e LO | Solumn',
    seoDescription:
      'Assessoria completa em licenciamento ambiental para atividades rurais e agroindústrias: enquadramento, Licença Prévia, de Instalação e de Operação, condicionantes e renovações.',
    faq: [
      {
        q: 'Minha atividade precisa de licença ambiental?',
        a: 'Depende do tipo de atividade, do porte e do potencial poluidor. O enquadramento é definido pelas normas do órgão ambiental competente, e é por ele que começamos a análise.',
      },
      {
        q: 'Quais são as licenças do processo?',
        a: 'Em geral, Licença Prévia (LP), que aprova a localização e a concepção; Licença de Instalação (LI), que autoriza a obra; e Licença de Operação (LO), que autoriza o funcionamento.',
      },
      {
        q: 'A licença ambiental vence?',
        a: 'Sim. Cada licença tem validade e condicionantes. A renovação deve ser pedida com antecedência mínima de 120 dias do vencimento para que a licença continue válida durante a análise.',
      },
    ],
  },
  regularizacao: {
    slug: 'regularizacao-fundiaria',
    seoTitle: 'Regularização Fundiária Rural e Georreferenciamento | Solumn',
    seoDescription:
      'Regularização de imóveis rurais: georreferenciamento conforme normas do INCRA, memorial descritivo, CCIR e registro em cartório. Segurança para vender, financiar ou transferir.',
    faq: [
      {
        q: 'O que é georreferenciamento do imóvel rural?',
        a: 'É a medição do imóvel com coordenadas precisas, certificada pelo INCRA. Ela define com exatidão os limites da propriedade e evita sobreposição com vizinhos.',
      },
      {
        q: 'Quando o georreferenciamento é obrigatório?',
        a: 'Em situações como venda, desmembramento, remembramento e outras alterações na matrícula, dentro dos prazos definidos por lei para cada tamanho de imóvel.',
      },
      {
        q: 'Para que serve o CCIR?',
        a: 'O Certificado de Cadastro de Imóvel Rural, emitido pelo INCRA, é exigido para vender, arrendar, hipotecar, desmembrar ou partilhar o imóvel e para obter crédito rural.',
      },
    ],
  },
  'laudo-licenciamento': {
    slug: 'laudos-para-licenciamento-ambiental',
    seoTitle: 'Laudos para Licenciamento Ambiental com ART | Solumn',
    seoDescription:
      'Laudos técnicos exigidos pelos órgãos ambientais no licenciamento, com vistoria, análises laboratoriais, relatório fotográfico e ART inclusa.',
    faq: [
      {
        q: 'Quais laudos o órgão ambiental pode pedir?',
        a: 'Varia conforme a atividade e o órgão: caracterização de solo e vegetação, uso da água, áreas de preservação e outros. Começamos analisando exatamente o que foi exigido no seu processo.',
      },
      {
        q: 'O laudo precisa de ART?',
        a: 'Sim. Laudos técnicos precisam de um responsável habilitado, com a ART registrada no conselho profissional. Ela já está inclusa no nosso serviço.',
      },
    ],
  },
  'laudo-viabilidade': {
    slug: 'laudo-de-viabilidade-agricola',
    seoTitle: 'Laudo de Viabilidade Agrícola com ART | Solumn',
    seoDescription:
      'Laudo de viabilidade agrícola com análise de solo, água, clima e viabilidade econômica, para decidir com segurança antes de investir em uma nova área ou cultura.',
    faq: [
      {
        q: 'Quando vale fazer um laudo de viabilidade?',
        a: 'Antes de investir em uma nova área, cultura ou sistema produtivo, ou quando um investidor ou financiador pede uma avaliação técnica do projeto.',
      },
      {
        q: 'O que é analisado no laudo?',
        a: 'Características do solo, disponibilidade de água, clima, infraestrutura da área e a viabilidade econômica do projeto proposto.',
      },
    ],
  },
  'laudo-financiamento': {
    slug: 'laudo-para-financiamento-rural',
    seoTitle: 'Laudo Agronômico para Financiamento Rural | Solumn',
    seoDescription:
      'Laudos agronômicos para crédito rural de custeio e investimento e avaliação de garantias, no padrão exigido pelos bancos e cooperativas. ART inclusa.',
    faq: [
      {
        q: 'O banco exige laudo para liberar o crédito rural?',
        a: 'Depende da linha de crédito e da instituição. Muitas exigem laudo ou projeto técnico, principalmente em operações de investimento e quando o imóvel entra como garantia.',
      },
      {
        q: 'O laudo serve para qualquer banco?',
        a: 'Cada instituição pode ter modelo e exigências próprias. Por isso o primeiro passo é levantar o que o seu banco pede e elaborar o laudo nesse padrão.',
      },
    ],
  },
  receituario: {
    slug: 'receituario-agronomico',
    seoTitle: 'Receituário Agronômico para Defensivos | Solumn',
    seoDescription:
      'Emissão de receituário agronômico por engenheiro agrônomo habilitado, com diagnóstico fitossanitário da lavoura e indicação técnica dos produtos. ART inclusa.',
    faq: [
      {
        q: 'O receituário agronômico é obrigatório?',
        a: 'Sim. A legislação de agrotóxicos exige receita emitida por profissional habilitado para a venda e a aplicação de defensivos agrícolas.',
      },
      {
        q: 'Quem pode emitir o receituário?',
        a: 'Um profissional legalmente habilitado, como o engenheiro agrônomo, após diagnóstico da lavoura e do problema a ser controlado.',
      },
    ],
  },
}

const CATEGORIES = [
  { id: 'projetos-ambientais', label: 'Projetos ambientais', items: PROJETOS_AMBIENTAIS },
  { id: 'laudos-agronomicos', label: 'Laudos agronômicos', items: LAUDOS_AGRONOMICOS },
]

export const SERVICE_PAGES: ServicePage[] = CATEGORIES.flatMap(({ id, label, items }) =>
  items.map((item) => ({ ...item, ...SEO[item.id], category: { id, label } })),
)

export function getServicePage(slug: string): ServicePage | undefined {
  return SERVICE_PAGES.find((page) => page.slug === slug)
}

/** Link da página de um serviço a partir do id usado nas âncoras de /servicos. */
export function servicePageHref(id: string): string {
  return `/servicos/${SEO[id].slug}`
}
