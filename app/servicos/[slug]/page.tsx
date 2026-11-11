import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { getIsServicesEnabled } from '@/flags'
import NavWrapper from '@/components/layout/NavWrapper'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import FadeIn from '@/components/ui/FadeIn'
import { SERVICE_PAGES, getServicePage, type ServicePage } from '@/lib/service-pages'
import { WHATSAPP_NUMBER } from '@/lib/constants'
import { BASE_OPEN_GRAPH, SITE_URL } from '@/lib/site'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return SERVICE_PAGES.map((page) => ({ slug: page.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getServicePage((await params).slug)
  if (!page) return {}
  const path = `/servicos/${page.slug}`
  return {
    title: { absolute: page.seoTitle },
    description: page.seoDescription,
    alternates: { canonical: path },
    openGraph: {
      ...BASE_OPEN_GRAPH,
      url: path,
      title: page.seoTitle,
      description: page.seoDescription,
    },
  }
}

function structuredData(page: ServicePage) {
  const url = `${SITE_URL}/servicos/${page.slug}`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: page.title,
        description: page.description,
        url,
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: { '@type': 'Country', name: 'Brasil' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Serviços', item: `${SITE_URL}/servicos` },
          { '@type': 'ListItem', position: 3, name: page.title, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faq.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  }
}

export default async function ServicoPage({ params }: Props) {
  const isServicesEnabled = await getIsServicesEnabled()
  if (!isServicesEnabled) redirect('/')

  const page = getServicePage((await params).slug)
  if (!page) notFound()

  const related = SERVICE_PAGES.filter((p) => p.category.id === page.category.id && p.slug !== page.slug)
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá, vim do site e gostaria de um orçamento de ${page.title}`,
  )}`

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(page)) }}
      />
      <NavWrapper />

      {/* Abertura */}
      <section className="border-b border-line pt-[72px]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-6 py-16 md:py-20">
          <nav aria-label="Você está em" className="font-mono text-xs text-muted-soft">
            <ol className="m-0 flex list-none flex-wrap gap-2 p-0">
              <li>
                <a href="/" className="text-muted-soft no-underline hover:text-forest">
                  Início
                </a>{' '}
                /
              </li>
              <li>
                <a href="/servicos" className="text-muted-soft no-underline hover:text-forest">
                  Serviços
                </a>{' '}
                /
              </li>
              <li aria-current="page" className="text-ink">
                {page.title}
              </li>
            </ol>
          </nav>
          <div className="flex flex-wrap items-center gap-3">
            <span className="eyebrow">{page.category.label.toUpperCase()}</span>
            <span className="rounded-sm bg-contour px-2 py-1 font-mono text-[11px] text-forest-dark">
              ART INCLUSA
            </span>
          </div>
          <h1 className="m-0 max-w-[900px] text-[clamp(36px,5vw,60px)] font-bold leading-[1.05] tracking-[-0.03em]">
            {page.title}
          </h1>
          <p className="m-0 max-w-[720px] text-lg leading-[1.7] text-muted">{page.description}</p>
          <div className="flex flex-wrap gap-3">
            <a href="/#contato" className="btn-primary">
              Solicitar orçamento →
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Detalhes */}
      <section className="border-b border-line bg-sheet">
        <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-6 py-16 md:py-20 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="m-0 text-2xl font-bold tracking-[-0.01em]">Para quem é indicado</h2>
              <ul className="m-0 flex list-none flex-col border-b border-contour p-0 text-base">
                {page.forWhom.map((who) => (
                  <li key={who} className="border-t border-contour py-3">
                    {who}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="m-0 text-2xl font-bold tracking-[-0.01em]">O que você recebe</h2>
              <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                {page.deliverables.map((d) => (
                  <li key={d} className="rounded-sm border border-ink px-2 py-[3px] font-mono text-xs">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-4 rounded-lg border border-line bg-paper p-6 md:p-8">
              <h2 className="m-0 text-2xl font-bold tracking-[-0.01em]">Como funciona</h2>
              <ol className="m-0 flex list-none flex-col p-0">
                {page.steps.map((step, idx) => {
                  const isLast = idx === page.steps.length - 1
                  return (
                    <li
                      key={step}
                      className={`flex items-baseline gap-4 border-t-2 py-3 ${isLast ? 'border-marker' : 'border-ink'}`}
                    >
                      <span className={`font-mono text-xs ${isLast ? 'text-marker-dark' : 'text-forest'}`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[15px] leading-[1.5]">{step}</span>
                    </li>
                  )
                })}
              </ol>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Perguntas frequentes */}
      <section className="border-b border-line">
        <div className="mx-auto flex w-full max-w-[900px] flex-col gap-8 px-6 py-16 md:py-20">
          <h2 className="section-title">Perguntas frequentes</h2>
          <div className="flex flex-col border-b border-line">
            {page.faq.map(({ q, a }) => (
              <details key={q} className="group border-t border-line py-5">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 text-lg font-semibold">
                  {q}
                  <span aria-hidden="true" className="font-mono text-forest transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="m-0 mt-3 leading-[1.7] text-muted">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Outros serviços da categoria */}
      {related.length > 0 && (
        <section className="bg-sheet">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-6 py-16 md:py-20">
            <h2 className="m-0 text-2xl font-bold tracking-[-0.01em]">
              Outros serviços de {page.category.label.toLowerCase()}
            </h2>
            <ul className="m-0 grid list-none gap-3 p-0 md:grid-cols-2">
              {related.map((p) => (
                <li key={p.slug}>
                  <a
                    href={`/servicos/${p.slug}`}
                    className="group flex items-baseline justify-between gap-4 rounded-lg border border-line bg-paper p-5 text-ink no-underline hover:border-forest"
                  >
                    <span className="text-base font-semibold group-hover:text-forest">{p.title}</span>
                    <span aria-hidden="true" className="text-forest">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a href="/servicos" className="self-start font-mono text-sm text-forest">
              Ver todos os serviços →
            </a>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
