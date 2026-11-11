import { LogoMark } from '@/components/brand/Logo'
import { FOOTER_SERVICES, FOOTER_COMPANY } from '@/lib/constants'

interface FooterProps {
  isReviewEnabled?: boolean
}

const linkClass = 'text-ink no-underline hover:text-forest'

export default function Footer({ isReviewEnabled = false }: FooterProps) {
  const companyLinks = FOOTER_COMPANY.filter((l) => !l.requiresReviews || isReviewEnabled)

  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 pb-8 pt-14">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-2.5">
              <LogoMark clipId="logo-footer" size={36} />
              <span className="font-brand text-[22px] font-semibold">Solumn</span>
            </div>
            <p className="m-0 max-w-[320px] text-[15px] leading-[1.6] text-muted">
              Consultoria ambiental com excelência técnica em todo o Brasil.
            </p>
          </div>
          <nav aria-label="Serviços" className="flex flex-col gap-2.5 text-[15px]">
            <span className="font-mono text-xs text-muted-soft">SERVIÇOS</span>
            {FOOTER_SERVICES.map((item) => (
              <a key={item.label} href={item.href} className={linkClass}>
                {item.label}
              </a>
            ))}
          </nav>
          <nav aria-label="Empresa" className="flex flex-col gap-2.5 text-[15px]">
            <span className="font-mono text-xs text-muted-soft">EMPRESA</span>
            {companyLinks.map((item) => (
              <a key={item.label} href={item.href} className={linkClass}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-line pt-5 text-[13px] text-muted-soft">
          <span>© 2026 Solumn Soluções Ambientais. Todos os direitos reservados.</span>
          <span className="font-mono">CREA · Responsabilidade técnica</span>
        </div>
      </div>
    </footer>
  )
}
