'use client'

import { useState } from 'react'
import { MessageCircle, Send, CheckCircle2 } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import { CONTACT_INFO, WHATSAPP_NUMBER } from '@/lib/constants'

const inputClass =
  'w-full px-3.5 py-[11px] border border-sand-200 rounded-lg text-sm text-sand-900 bg-sand-50 outline-none transition-all duration-200 focus:border-teal-500 focus:bg-white'

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 4000)
  }

  return (
    <section id="contato" className="min-h-screen flex flex-col justify-center py-12 md:py-20 bg-green-950 relative overflow-hidden">
      <div
        className="absolute -top-[40%] -right-[15%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(29,158,117,0.1) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-[1] max-w-[1120px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_460px] gap-8 md:gap-[60px] items-start">
        <FadeIn>
          <div>
            <h2 className="font-serif font-normal text-white tracking-[-0.02em] mb-4 leading-[1.2] text-[clamp(1.75rem,4vw,2.375rem)]">
              Pronto para iniciar<br />seu projeto?
            </h2>
            <p className="text-base text-white/50 leading-[1.7] mb-8 md:mb-12 max-w-[400px]">
              Solicite um orçamento sem compromisso. Nossa equipe retorna em até 24 horas com
              uma proposta personalizada.
            </p>

            <div className="flex flex-col gap-6">
              {CONTACT_INFO.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.text} className="flex items-center gap-3.5 text-white/65 text-base">
                    <div className="w-[42px] h-[42px] rounded-[10px] bg-white/[7%] flex items-center justify-center shrink-0 text-white/50">
                      <Icon size={18} />
                    </div>
                    {item.text}
                  </div>
                )
              })}
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] text-white px-8 py-4 rounded-[10px] text-base font-medium no-underline transition-all duration-200 mt-9 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,211,102,0.3)]"
            >
              <MessageCircle size={20} fill="#fff" /> Fale pelo WhatsApp
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="bg-white rounded-[18px] p-6 md:p-9">
            <h3 className="font-serif text-[1.375rem] font-normal text-green-950 mb-7">
              Solicitar orçamento
            </h3>

            <div className="grid grid-cols-2 max-[540px]:grid-cols-1 gap-3.5 mb-3.5">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-sand-700 mb-1.5">
                  Nome completo
                </label>
                <input id="nome" className={inputClass} placeholder="Seu nome" />
              </div>
              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-sand-700 mb-1.5">
                  Empresa
                </label>
                <input id="empresa" className={inputClass} placeholder="Nome da empresa" />
              </div>
            </div>

            <div className="grid grid-cols-2 max-[540px]:grid-cols-1 gap-3.5 mb-3.5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-sand-700 mb-1.5">
                  E-mail
                </label>
                <input id="email" className={inputClass} placeholder="seu@email.com" type="email" />
              </div>
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-sand-700 mb-1.5">
                  Telefone / WhatsApp
                </label>
                <input id="telefone" className={inputClass} placeholder="(81) 9xxxx-xxxx" type="tel" />
              </div>
            </div>

            <div className="mb-3.5">
              <label htmlFor="servico" className="block text-sm font-medium text-sand-700 mb-1.5">
                Tipo de serviço
              </label>
              <select id="servico" className={inputClass}>
                <option value="">Selecione o serviço desejado</option>
                <option>Laudo agronômico</option>
                <option>PRAD</option>
                <option>Regularização fundiária</option>
                <option>CAR — Cadastro Ambiental Rural</option>
                <option>Licenciamento ambiental</option>
                <option>Outro</option>
              </select>
            </div>

            <div className="mb-5">
              <label htmlFor="detalhes" className="block text-sm font-medium text-sand-700 mb-1.5">
                Detalhes do projeto
              </label>
              <textarea
                id="detalhes"
                className={`${inputClass} min-h-[90px] resize-y`}
                placeholder="Descreva brevemente sua necessidade..."
              />
            </div>

            <button
              onClick={handleSubmit}
              className={`w-full py-3.5 text-white border-0 rounded-lg text-base font-medium cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 ${
                isSubmitted ? 'bg-teal-600' : 'bg-green-900 hover:bg-green-800'
              }`}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle2 size={16} /> Enviado com sucesso!
                </>
              ) : (
                <>
                  <Send size={16} /> Enviar solicitação
                </>
              )}
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
