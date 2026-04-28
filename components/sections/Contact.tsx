'use client'

import { useState } from 'react'
import { MessageCircle, Send, CheckCircle2, Loader2, X } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import { CONTACT_INFO, WHATSAPP_NUMBER } from '@/lib/constants'

const inputClass =
  'w-full px-3.5 py-[11px] border border-sand-200 rounded-lg text-sm text-sand-900 bg-sand-50 outline-none transition-all duration-200 focus:border-teal-500 focus:bg-white'

const inputErrorClass =
  'w-full px-3.5 py-[11px] border border-red-400 rounded-lg text-sm text-sand-900 bg-sand-50 outline-none transition-all duration-200 focus:border-red-500 focus:bg-white'

interface FormFields {
  nome: string
  contato: string
  servico: string
  detalhes: string
}

interface FormErrors {
  nome?: string
  contato?: string
  servico?: string
}

const emptyFields: FormFields = {
  nome: '',
  contato: '',
  servico: '',
  detalhes: '',
}

function buildWhatsAppUrl(fields: FormFields) {
  const msg = `Olá! Acabei de enviar uma mensagem pelo site.\nNome: ${fields.nome}\nServiço: ${fields.servico}`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
}

export default function Contact() {
  const [fields, setFields] = useState<FormFields>(emptyFields)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  function validate(): FormErrors {
    const errs: FormErrors = {}
    if (!fields.nome.trim()) errs.nome = 'Nome é obrigatório.'
    if (!fields.servico) errs.servico = 'Selecione um serviço.'
    if (!fields.contato.trim()) errs.contato = 'Informe e-mail ou telefone.'
    return errs
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => {
      const next = { ...prev }
      if (name === 'nome') delete next.nome
      if (name === 'servico') delete next.servico
      if (name === 'contato') delete next.contato
      return next
    })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error ?? 'Erro ao enviar.')
      }

      setIsSubmitted(true)
    } catch {
      setSubmitError('Erro ao enviar a mensagem. Tente novamente ou entre em contato pelo WhatsApp.')
    } finally {
      setIsSubmitting(false)
    }
  }

  function handleCloseModal() {
    setIsSubmitted(false)
    setFields(emptyFields)
  }

  return (
    <>
      {isSubmitted && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-sm w-full flex flex-col items-center text-center gap-5 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-sand-400 hover:text-sand-600 transition-colors"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center">
              <CheckCircle2 size={36} className="text-teal-600" />
            </div>

            <div>
              <h3 className="font-serif text-[1.375rem] font-normal text-green-950 mb-2">
                Mensagem enviada!
              </h3>
              <p className="text-sm text-sand-500 leading-[1.7]">
                Em breve entraremos em contato com uma proposta personalizada.
              </p>
            </div>

            <a
              href={buildWhatsAppUrl(fields)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] text-green-950 px-6 py-3.5 rounded-lg text-sm font-medium no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,211,102,0.3)] w-full justify-center"
            >
              <MessageCircle size={18} fill="currentColor" /> Continuar pelo WhatsApp
            </a>

            <button
              onClick={handleCloseModal}
              className="text-sm text-sand-400 hover:text-sand-600 transition-colors cursor-pointer bg-transparent border-0 p-0"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      <section id="contato" className="min-h-screen flex flex-col justify-center py-12 md:py-20 bg-green-950 relative overflow-hidden">
        <div
          className="absolute -top-[40%] -right-[15%] w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(29,158,117,0.1) 0%, transparent 60%)',
          }}
        />

        <div className="relative z-[1] max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_460px] xl:grid-cols-[1fr_520px] gap-8 md:gap-[60px] items-start">
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
                  const content = (
                    <>
                      <div className="w-[42px] h-[42px] rounded-[10px] bg-white/[7%] flex items-center justify-center shrink-0 text-white/50">
                        <Icon size={18} />
                      </div>
                      {item.text}
                    </>
                  )
                  return item.href ? (
                    <a key={item.text} href={item.href} className="flex items-center gap-3.5 text-white/65 text-base no-underline hover:text-white/90 transition-colors duration-200">
                      {content}
                    </a>
                  ) : (
                    <div key={item.text} className="flex items-center gap-3.5 text-white/65 text-base">
                      {content}
                    </div>
                  )
                })}
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá, vim do site e gostaria de saber mais informações')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] text-green-950 px-8 py-4 rounded-[10px] text-base font-medium no-underline transition-all duration-200 mt-9 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,211,102,0.3)]"
              >
                <MessageCircle size={20} fill="currentColor" /> Fale pelo WhatsApp
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="bg-white rounded-[18px] p-6 md:p-9">
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="font-serif text-[1.375rem] font-normal text-green-950 mb-7">
                  Solicitar orçamento
                </h3>

                <div className="mb-3.5">
                  <label htmlFor="nome" className="block text-sm font-medium text-sand-700 mb-1.5">
                    Nome completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    className={errors.nome ? inputErrorClass : inputClass}
                    placeholder="Seu nome"
                    value={fields.nome}
                    onChange={handleChange}
                  />
                  {errors.nome && <p className="text-xs text-red-500 mt-1">{errors.nome}</p>}
                </div>

                <div className="mb-3.5">
                  <label htmlFor="contato-input" className="block text-sm font-medium text-sand-700 mb-1.5">
                    E-mail ou Telefone <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contato-input"
                    name="contato"
                    className={errors.contato ? inputErrorClass : inputClass}
                    placeholder="seu@email.com ou (81) 9xxxx-xxxx"
                    value={fields.contato}
                    onChange={handleChange}
                  />
                  {errors.contato && <p className="text-xs text-red-500 mt-1">{errors.contato}</p>}
                </div>

                <div className="mb-3.5">
                  <label htmlFor="servico" className="block text-sm font-medium text-sand-700 mb-1.5">
                    Tipo de serviço <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="servico"
                    name="servico"
                    className={errors.servico ? inputErrorClass : inputClass}
                    value={fields.servico}
                    onChange={handleChange}
                  >
                    <option value="">Selecione o serviço desejado</option>
                    <option>Laudo agronômico</option>
                    <option>PRAD</option>
                    <option>Regularização fundiária</option>
                    <option>CAR — Cadastro Ambiental Rural</option>
                    <option>Licenciamento ambiental</option>
                    <option>Outro</option>
                  </select>
                  {errors.servico && <p className="text-xs text-red-500 mt-1">{errors.servico}</p>}
                </div>

                <div className="mb-5">
                  <label htmlFor="detalhes" className="block text-sm font-medium text-sand-700 mb-1.5">
                    Detalhes do projeto
                  </label>
                  <textarea
                    id="detalhes"
                    name="detalhes"
                    className={`${inputClass} min-h-[90px] resize-y`}
                    placeholder="Descreva brevemente sua necessidade..."
                    value={fields.detalhes}
                    onChange={handleChange}
                  />
                </div>

                {submitError && (
                  <p className="text-sm text-red-500 mb-4 leading-[1.6]">
                    {submitError}{' '}
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-red-600 hover:text-red-700"
                    >
                      Fale pelo WhatsApp
                    </a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 text-white border-0 rounded-lg text-base font-medium cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 bg-green-900 hover:bg-green-800 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Enviar solicitação
                    </>
                  )}
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
