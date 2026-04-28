import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

interface ContactPayload {
  nome: string
  contato: string
  servico: string
  detalhes: string
}

function validate(body: ContactPayload): string | null {
  if (!body.nome?.trim()) return 'Nome é obrigatório.'
  if (!body.servico?.trim()) return 'Tipo de serviço é obrigatório.'
  if (!body.contato?.trim()) return 'Informe e-mail ou telefone.'
  return null
}

export async function POST(req: NextRequest) {
  const body: ContactPayload = await req.json()

  const error = validate(body)
  if (error) {
    return NextResponse.json({ error }, { status: 400 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const html = `
    <h2 style="color:#14532d">Novo orçamento solicitado</h2>
    <table style="border-collapse:collapse;width:100%;max-width:520px">
      <tr><td style="padding:8px 0;color:#6b7280;width:140px">Nome</td><td style="padding:8px 0;font-weight:500">${body.nome}</td></tr>
      <tr><td style="padding:8px 0;color:#6b7280">Contato</td><td style="padding:8px 0;font-weight:500">${body.contato}</td></tr>
      <tr><td style="padding:8px 0;color:#6b7280">Serviço</td><td style="padding:8px 0;font-weight:500">${body.servico}</td></tr>
      ${body.detalhes ? `<tr><td style="padding:8px 0;color:#6b7280;vertical-align:top">Detalhes</td><td style="padding:8px 0">${body.detalhes}</td></tr>` : ''}
    </table>
  `

  await resend.emails.send({
    from: 'Solum Agro — Site <onboarding@resend.dev>',
    to: 'consultoriasolum@gmail.com',
    subject: `Novo orçamento: ${body.servico} — ${body.nome}`,
    html,
  })

  return NextResponse.json({ success: true })
}
