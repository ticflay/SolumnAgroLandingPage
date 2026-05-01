export interface ProjetoAmbiental {
  id: string
  num: string
  title: string
  description: string
  forWhom: string[]
  steps: string[]
  deliverables: string[]
}

export const PROJETOS_AMBIENTAIS: ProjetoAmbiental[] = [
  {
    id: 'prad',
    num: '01',
    title: 'PRAD — Recuperação de Áreas Degradadas',
    description:
      'O Plano de Recuperação de Áreas Degradadas é obrigatório quando uma propriedade possui passivos ambientais — como supressão irregular de vegetação ou degradação de Área de Preservação Permanente. Elaboramos o projeto técnico completo, conduzindo todo o processo desde o diagnóstico inicial até a homologação pelo órgão ambiental competente.',
    forWhom: [
      'Proprietários rurais com passivo ambiental',
      'Empresas com autuações ou embargos ambientais',
      'Empreendedores que precisam de compensação ambiental para licenciamento',
    ],
    steps: [
      'Diagnóstico da área degradada',
      'Definição da metodologia de recuperação',
      'Elaboração do projeto técnico',
      'Submissão ao órgão ambiental',
      'Monitoramento periódico',
      'Relatório final e homologação',
    ],
    deliverables: [
      'Projeto técnico completo',
      'ART emitida',
      'Cronograma de execução',
      'Relatórios de monitoramento',
      'Relatório final de conclusão',
    ],
  },
  {
    id: 'car',
    num: '02',
    title: 'CAR — Cadastro Ambiental Rural',
    description:
      'O Cadastro Ambiental Rural é obrigatório para todas as propriedades rurais no Brasil e condição para acesso a crédito rural e programas governamentais. Realizamos o levantamento completo, georreferenciamento e inscrição no SICAR, garantindo a regularidade ambiental da sua propriedade.',
    forWhom: [
      'Proprietários rurais sem CAR ou com cadastro desatualizado',
      'Produtores que buscam crédito rural ou financiamento',
      'Propriedades em processo de licenciamento ambiental',
    ],
    steps: [
      'Levantamento documental',
      'Vistoria in loco',
      'Georreferenciamento da propriedade',
      'Delimitação de APPs e Reserva Legal',
      'Submissão ao SICAR',
      'Acompanhamento da análise',
    ],
    deliverables: [
      'Protocolo de inscrição no SICAR',
      'Mapa com delimitação do imóvel',
      'Relatório de APPs e Reserva Legal',
    ],
  },
  {
    id: 'licenciamento',
    num: '03',
    title: 'Licenciamento Ambiental',
    description:
      'Para atividades com potencial impacto ambiental, o licenciamento é condição legal para operar. Gerenciamos todo o processo junto aos órgãos competentes — do estudo de viabilidade à obtenção das licenças — garantindo conformidade e segurança jurídica para o seu empreendimento.',
    forWhom: [
      'Empresas agrícolas e agroindústrias',
      'Empreendedores em expansão de atividades',
      'Propriedades com atividades de impacto ambiental significativo',
    ],
    steps: [
      'Análise de viabilidade e enquadramento',
      'Obtenção da Licença Prévia (LP)',
      'Obtenção da Licença de Instalação (LI)',
      'Obtenção da Licença de Operação (LO)',
      'Acompanhamento de condicionantes e renovações',
    ],
    deliverables: [
      'Licenças Prévia, de Instalação e de Operação',
      'ART emitida',
      'Relatórios técnicos e ambientais',
      'Planos de controle ambiental',
    ],
  },
  {
    id: 'regularizacao',
    num: '04',
    title: 'Regularização Fundiária',
    description:
      'Imóveis rurais sem documentação regular não podem ser vendidos, financiados ou transferidos por herança. Conduzimos todo o processo de regularização — do georreferenciamento ao registro em cartório — garantindo segurança jurídica completa para a sua propriedade.',
    forWhom: [
      'Proprietários de imóveis sem escritura ou com documentação irregular',
      'Produtores que buscam crédito rural ou seguro agrícola',
      'Herdeiros de propriedades rurais não regularizadas',
    ],
    steps: [
      'Levantamento documental',
      'Vistoria e levantamento topográfico',
      'Georreferenciamento conforme normas INCRA',
      'Elaboração do memorial descritivo',
      'Submissão ao INCRA',
      'Registro em cartório',
    ],
    deliverables: [
      'Planta georreferenciada',
      'Memorial descritivo',
      'CCIR atualizado',
      'Averbação em cartório',
    ],
  },
  {
    id: 'laudo-licenciamento',
    num: '05',
    title: 'Laudos para Licenciamento Ambiental',
    description:
      'Órgãos ambientais exigem laudos técnicos específicos ao longo do processo de licenciamento. Elaboramos toda a documentação necessária — com rigor técnico e conhecimento das exigências de cada órgão — para garantir a aprovação sem pendências.',
    forWhom: [
      'Empreendimentos sujeitos a licenciamento ambiental',
      'Empresas em ampliação ou modificação de atividades',
      'Projetos de irrigação e uso de recursos hídricos',
    ],
    steps: [
      'Análise das exigências do órgão licenciador',
      'Vistoria in loco e diagnóstico técnico',
      'Coleta de amostras e análises laboratoriais',
      'Elaboração da documentação técnica',
      'Emissão com ART e entrega ao órgão',
    ],
    deliverables: [
      'Laudo técnico para licenciamento',
      'ART emitida',
      'Relatório fotográfico',
      'Resultados de análises laboratoriais',
    ],
  },
]

export const LAUDOS_AGRONOMICOS: ProjetoAmbiental[] = [
  {
    id: 'laudo-viabilidade',
    num: '01',
    title: 'Laudos de Viabilidade Agrícola',
    description:
      'Avalia a aptidão técnica e econômica de uma área para cultivos específicos, considerando características do solo, clima, disponibilidade hídrica e infraestrutura disponível. Essencial para embasar decisões de investimento e implantação de novos projetos agropecuários.',
    forWhom: [
      'Empreendedores rurais planejando novas lavouras ou sistemas produtivos',
      'Produtores em processo de expansão ou reconversão de atividade',
      'Investidores e financiadores do setor agropecuário',
    ],
    steps: [
      'Análise do projeto e objetivos produtivos',
      'Vistoria e inspeção da área',
      'Coleta e análise de solo e água',
      'Levantamento climático e hídrico',
      'Estudo de viabilidade econômica',
      'Elaboração do laudo e emissão com ART',
    ],
    deliverables: [
      'Laudo de viabilidade completo',
      'Análise de solo e água',
      'ART emitida',
      'Estudo de viabilidade econômica',
      'Memorial descritivo da área',
    ],
  },
  {
    id: 'laudo-financiamento',
    num: '02',
    title: 'Laudos para Financiamento Rural',
    description:
      'Bancos e instituições financeiras exigem laudos agronômicos para concessão de crédito rural, avaliação de garantias e financiamentos de custeio e investimento. Elaboramos laudos que atendem aos padrões exigidos pelas principais instituições do mercado.',
    forWhom: [
      'Produtores rurais buscando crédito agrícola ou de investimento',
      'Proprietários utilizando imóvel rural como garantia',
      'Cooperativas e associações rurais',
    ],
    steps: [
      'Levantamento das exigências da instituição financeira',
      'Vistoria e avaliação da propriedade ou lavoura',
      'Coleta de dados e análises necessárias',
      'Elaboração conforme padrão exigido',
      'Emissão com ART',
    ],
    deliverables: [
      'Laudo para financiamento assinado',
      'ART emitida',
      'Avaliação da propriedade',
      'Planta ou croqui da área',
    ],
  },
  {
    id: 'receituario',
    num: '03',
    title: 'Receituário Agronômico',
    description:
      'Documento obrigatório para aquisição e aplicação de agrotóxicos e produtos fitossanitários. Emitido por engenheiro agrônomo habilitado, garante o uso seguro, eficaz e dentro da legalidade dos defensivos agrícolas na sua propriedade.',
    forWhom: [
      'Produtores rurais que necessitam adquirir defensivos agrícolas',
      'Cooperativas e associações de produtores',
      'Empreendimentos com produção agrícola regular',
    ],
    steps: [
      'Visita à propriedade',
      'Diagnóstico fitossanitário da lavoura',
      'Identificação de pragas, doenças e plantas daninhas',
      'Indicação técnica dos produtos adequados',
      'Emissão do receituário com ART',
    ],
    deliverables: [
      'Receituário agronômico',
      'ART emitida',
      'Relatório de diagnóstico fitossanitário',
    ],
  },
]
