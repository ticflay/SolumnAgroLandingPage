'use client'

import { useState } from 'react'
import { MessageCircle, CheckCircle2, Loader2, X } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import { CONTACT_INFO, WHATSAPP_NUMBER, WHATSAPP_URL } from '@/lib/constants'

const inputBase =
  'w-full rounded border bg-sheet px-3.5 py-[13px] font-sans text-base text-ink outline-none transition-colors duration-200 focus:border-2 focus:border-forest focus:px-[13px] focus:py-3 focus-visible:outline-none'

const inputClass = `${inputBase} border-line-strong`

const inputErrorClass = `${inputBase} border-[#B3261E]`

const labelClass = 'text-sm font-semibold'

const errorClass = 'mt-1 text-[13px] text-[#B3261E]'

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
          className="fixed inset-0 z-[150] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-success-title"
            className="relative flex w-full max-w-sm flex-col items-center gap-5 rounded-lg bg-paper p-8 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center border-0 bg-transparent text-muted-soft hover:text-ink"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-contour">
              <CheckCircle2 size={36} className="text-forest" />
            </div>

            <div>
              <h3 id="contact-success-title" className="mb-2 text-[22px] font-bold">
                Mensagem enviada!
              </h3>
              <p className="m-0 text-[15px] leading-[1.6] text-muted">
                Em breve entraremos em contato com uma proposta personalizada.
              </p>
            </div>

            <a
              href={buildWhatsAppUrl(fields)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              <MessageCircle size={18} /> Continuar pelo WhatsApp
            </a>

            <button
              type="button"
              onClick={handleCloseModal}
              className="cursor-pointer border-0 bg-transparent p-0 text-sm text-muted-soft hover:text-ink"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      <section id="contato" className="relative flex min-h-[calc(100svh-72px)] flex-col justify-center overflow-hidden bg-ink text-paper">
        <svg
          width="700"
          height="500"
          viewBox="0 0 700 500"
          className="pointer-events-none absolute -bottom-[120px] -left-[120px]"
          aria-hidden="true"
        >
          <g fill="none" stroke="#24402F" strokeWidth="1.5">
            <path d="M0 420 C160 320 340 440 520 320 C600 270 660 290 700 270" />
            <path d="M0 340 C160 240 340 360 520 240 C600 190 660 210 700 190" />
            <path d="M0 260 C160 160 340 280 520 160 C600 110 660 130 700 110" />
          </g>
        </svg>

        <div className="relative mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-14 px-6 py-20 md:py-24 lg:grid-cols-2">
          <FadeIn>
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[13px] text-varzea">04 · CONTATO</span>
              <h2 className="m-0 text-[clamp(34px,4.4vw,52px)] font-bold leading-[1.06] tracking-[-0.03em]">
                Pronto para iniciar seu projeto?
              </h2>
              <p className="m-0 max-w-[440px] text-lg leading-[1.6] text-[#C9D3CC]">
                Solicite um orçamento gratuito. Respondemos em até 24 horas.
              </p>
              <div className="flex flex-col border-t border-[#36523F]">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between gap-3 border-b border-[#36523F] py-[18px] text-paper no-underline hover:text-varzea"
                >
                  <span className="font-mono text-xs text-[#A9B5AD]">WHATSAPP</span>
                  <span className="text-[17px]">{CONTACT_INFO[0].text}</span>
                </a>
                <a
                  href={CONTACT_INFO[1].href}
                  className="flex justify-between gap-3 border-b border-[#36523F] py-[18px] text-paper no-underline hover:text-varzea"
                >
                  <span className="font-mono text-xs text-[#A9B5AD]">E-MAIL</span>
                  <span className="break-all text-right text-[17px]">{CONTACT_INFO[1].text}</span>
                </a>
                <div className="flex justify-between gap-3 border-b border-[#36523F] py-[18px]">
                  <span className="font-mono text-xs text-[#A9B5AD]">ATUAÇÃO</span>
                  <span className="text-[17px]">Todo o Brasil</span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-4 rounded-lg bg-paper p-6 text-ink md:p-8"
            >
              <div className="flex flex-col gap-1.5">
                <label htmlFor="nome" className={labelClass}>
                  Nome completo
                </label>
                <input
                  id="nome"
                  name="nome"
                  autoComplete="name"
                  className={errors.nome ? inputErrorClass : inputClass}
                  placeholder="Seu nome"
                  value={fields.nome}
                  onChange={handleChange}
                  aria-invalid={!!errors.nome}
                />
                {errors.nome && <p className={errorClass}>{errors.nome}</p>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contato-input" className={labelClass}>
                  E-mail ou telefone
                </label>
                <input
                  id="contato-input"
                  name="contato"
                  className={errors.contato ? inputErrorClass : inputClass}
                  placeholder="Como prefere ser contatado"
                  value={fields.contato}
                  onChange={handleChange}
                  aria-invalid={!!errors.contato}
                />
                {errors.contato && <p className={errorClass}>{errors.contato}</p>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="servico" className={labelClass}>
                  Tipo de serviço
                </label>
                <select
                  id="servico"
                  name="servico"
                  className={errors.servico ? inputErrorClass : inputClass}
                  value={fields.servico}
                  onChange={handleChange}
                  aria-invalid={!!errors.servico}
                >
                  <option value="">Selecione</option>
                  <option>Laudo agronômico</option>
                  <option>PRAD</option>
                  <option>Regularização fundiária</option>
                  <option>CAR — Cadastro Ambiental Rural</option>
                  <option>Licenciamento ambiental</option>
                  <option>Outro</option>
                </select>
                {errors.servico && <p className={errorClass}>{errors.servico}</p>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="detalhes" className={labelClass}>
                  Detalhes do projeto
                </label>
                <textarea
                  id="detalhes"
                  name="detalhes"
                  rows={4}
                  className={`${inputClass} resize-y`}
                  placeholder="Localização, área, prazo, o que for útil"
                  value={fields.detalhes}
                  onChange={handleChange}
                />
              </div>

              {submitError && (
                <p className="m-0 text-sm leading-[1.6] text-[#B3261E]">
                  {submitError}{' '}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B3261E] underline"
                  >
                    Fale pelo WhatsApp
                  </a>
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex min-h-[52px] cursor-pointer items-center justify-center gap-2 rounded border-0 bg-forest px-[22px] py-4 font-sans text-base font-semibold text-white transition-colors duration-200 hover:bg-forest-dark disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Enviando...
                  </>
                ) : (
                  'Enviar solicitação →'
                )}
              </button>
              <span className="text-[13px] text-muted-soft">
                Seus dados são usados apenas para responder à solicitação.
              </span>
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
