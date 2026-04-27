import { FOOTER_SERVICES, FOOTER_COMPANY } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-green-950 border-t border-white/[0.06] pt-12 pb-8">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 mb-10">
          <div>
            <div className="mb-2.5">
              <span className="text-2xl font-bold text-white font-serif">Solumn</span>
              <span className="text-2xl font-light text-teal-500 font-serif"> Consultoria</span>
            </div>
            <p className="text-sm text-white/35 max-w-[260px] leading-relaxed">
              Consultoria ambiental com excelência técnica para todo o Brasil.
            </p>
          </div>

          <div className="flex gap-14">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.08em] text-white/30 mb-4">
                Serviços
              </h4>
              {FOOTER_SERVICES.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-white/55 no-underline mb-2.5 hover:text-white/80 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.08em] text-white/30 mb-4">
                Empresa
              </h4>
              {FOOTER_COMPANY.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-white/55 no-underline mb-2.5 hover:text-white/80 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row justify-between text-sm text-white/25 gap-2 md:gap-0">
          <span>&copy; 2026 Solumn Consultoria. Todos os direitos reservados.</span>
          <span>CREA — Responsabilidade técnica</span>
        </div>
      </div>
    </footer>
  )
}
