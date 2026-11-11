import FadeIn from '@/components/ui/FadeIn'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  return (
    <section id="depoimentos">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-20 md:py-24">
        <FadeIn>
          <div className="flex flex-col gap-2.5">
            <span className="eyebrow">03 · DEPOIMENTOS</span>
            <h2 className="section-title">Quem já trabalhou com a Solumn</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.author} delay={0.1 + i * 0.1} className="h-full">
              <figure className="m-0 flex h-full flex-col gap-5 rounded-lg border border-line bg-sheet p-7">
                <blockquote className="m-0 flex-1 text-lg leading-[1.6]">“{t.text}”</blockquote>
                <figcaption className="flex flex-col gap-1 border-t border-contour pt-3.5">
                  <span className="font-semibold">{t.author}</span>
                  <span className="font-mono text-xs uppercase text-muted-soft">
                    {t.role} · {t.company}
                  </span>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
