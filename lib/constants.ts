import {
  type LucideIcon,
  FileText,
  TreePine,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ClipboardList,
  FileCheck,
  Shield,
  Clock,
} from 'lucide-react'

export const NAV_LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como funciona', href: '#processo' },
]

interface Service {
  id: string
  icon: LucideIcon
  title: string
  desc: string
  items: string[]
}

export const SERVICES: Service[] = [
  {
    id: 'laudos',
    icon: FileText,
    title: 'Laudos agronômicos',
    desc: 'Elaboração de laudos técnicos com emissão de ART para licenciamento ambiental, financiamentos, órgãos reguladores e processos judiciais.',
    items: [
      'Laudos de viabilidade agrícola',
      'Laudos para licenciamento',
      'Receituário agronômico',
      'Laudos para financiamento rural',
    ],
  },
  {
    id: 'projetos',
    icon: TreePine,
    title: 'Projetos ambientais',
    desc: 'Soluções completas em regularização ambiental e fundiária, com acompanhamento técnico do início à aprovação nos órgãos competentes.',
    items: [
      'PRAD — Recuperação de áreas degradadas',
      'Regularização fundiária',
      'CAR — Cadastro Ambiental Rural',
      'Compensação e licenciamento ambiental',
    ],
  },
]

interface ServiceGuarantee {
  icon: LucideIcon
  text: string
}

export const SERVICE_GUARANTEES: ServiceGuarantee[] = [
  { icon: FileCheck, text: 'ART inclusa em todos os projetos' },
  { icon: Clock, text: 'Prazo sempre cumprido' },
  { icon: Shield, text: 'Sigilo das informações' },
]

interface ProcessStep {
  num: string
  icon: LucideIcon
  title: string
  desc: string
  bullet: string
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: '01',
    icon: MessageCircle,
    title: 'Contato',
    desc: 'Preencha o formulário ou fale via WhatsApp. Entendemos sua necessidade com agilidade.',
    bullet: 'Sem compromisso, retorno em até 24h',
  },
  {
    num: '02',
    icon: ClipboardList,
    title: 'Diagnóstico',
    desc: 'Avaliamos o escopo e elaboramos uma proposta técnica e comercial personalizada.',
    bullet: 'Proposta detalhada com prazo e valor',
  },
  {
    num: '03',
    icon: MapPin,
    title: 'Execução',
    desc: 'Visitas de campo, coletas, análises e toda a elaboração técnica necessária.',
    bullet: 'Visitas in loco com relatório fotográfico',
  },
  {
    num: '04',
    icon: FileCheck,
    title: 'Entrega',
    desc: 'Documentação completa com ART, pronta para uso junto a órgãos e instituições.',
    bullet: 'ART inclusa e documentação completa',
  },
]

export const PROCESS_DELIVERABLES = [
  'Laudo técnico assinado',
  'ART emitida',
  'Memorial descritivo',
  'Relatório fotográfico',
]

export const TESTIMONIALS = [
  {
    text: 'A Solum Consultoria entregou o PRAD no prazo e com uma qualidade técnica que nos surpreendeu. O órgão ambiental aprovou sem ressalvas.',
    author: 'Ricardo Mendes',
    role: 'Diretor de operações',
    company: 'Construtora Atlântica',
  },
  {
    text: 'Precisávamos de laudos agronômicos para um projeto de loteamento e a equipe foi extremamente ágil e profissional do início ao fim.',
    author: 'Fernanda Costa',
    role: 'Gerente de projetos',
    company: 'Grupo Terras do Norte',
  },
  {
    text: 'O suporte durante todo o processo de regularização fundiária foi impecável. Recomendo sem hesitar para qualquer empresa do setor.',
    author: 'Carlos Eduardo',
    role: 'Sócio-diretor',
    company: 'CE Empreendimentos',
  },
  {
    text: 'Contratamos a Solum Consultoria para o CAR de uma área extensa e o processo foi conduzido com total segurança jurídica. Aprovação sem nenhuma pendência.',
    author: 'Marcelo Teixeira',
    role: 'Diretor financeiro',
    company: 'Agropecuária Teixeira',
  },
]

interface ContactItem {
  icon: LucideIcon
  text: string
  href?: string
}

export const CONTACT_INFO: ContactItem[] = [
  { icon: Phone, text: '(81) 98417-2325', href: 'tel:+5581984172325' },
  { icon: Mail, text: 'consultoriasolum@gmail.com', href: 'mailto:consultoriasolum@gmail.com' },
  { icon: MapPin, text: 'Atendimento em todo o Brasil' },
]

export const FOOTER_SERVICES = [
  { label: 'Laudos agronômicos', href: '#servicos' },
  { label: 'PRAD', href: '#servicos' },
  { label: 'Regularização fundiária', href: '#servicos' },
  { label: 'CAR', href: '#servicos' },
]

export const FOOTER_COMPANY = [
  { label: 'Como funciona', href: '#processo' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

export const WHATSAPP_NUMBER = '5581984172325'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá, vim do site e gostaria de saber mais informações')}`
