import { useState, useEffect, useRef } from "react";
import { ArrowRight, Phone, Mail, MapPin, ChevronRight, FileText, TreePine, Clock, CheckCircle2, Send, MessageCircle, Menu, X, Star } from "lucide-react";

const COLORS = {
  green950: "#0a1f04",
  green900: "#122b08",
  green800: "#1a3a0e",
  green700: "#265216",
  teal600: "#0F6E56",
  teal500: "#1D9E75",
  teal400: "#2ab889",
  teal100: "#d4f0e5",
  teal50: "#edf9f4",
  sand50: "#FAFAF7",
  sand100: "#F5F4F0",
  sand200: "#ECEAE4",
  sand300: "#D6D3CA",
  sand400: "#B0ADA4",
  sand500: "#8A877E",
  sand700: "#52504A",
  sand900: "#1C1B18",
};

function useOnScreen(ref, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const visible = useOnScreen(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const linkStyle = {
    fontSize: 14, color: scrolled ? COLORS.sand500 : "rgba(255,255,255,0.6)", textDecoration: "none",
    transition: "color 0.2s", fontWeight: 400, letterSpacing: "0.01em",
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(10,31,4,0.4)",
      backdropFilter: "blur(16px)",
      borderBottom: `1px solid ${scrolled ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.06)"}`,
      boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,0.06)" : "none",
      transition: "all 0.4s",
    }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: 2 }}>
          <span style={{ fontSize: 21, fontWeight: 700, color: scrolled ? COLORS.green900 : "#fff", letterSpacing: "-0.03em", fontFamily: "'Georgia', serif", transition: "color 0.4s" }}>Solum</span>
          <span style={{ fontSize: 21, fontWeight: 300, color: COLORS.teal600, letterSpacing: "-0.03em", fontFamily: "'Georgia', serif" }}>Agro</span>
        </a>

        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="nav-desktop">
          <a href="#servicos" style={linkStyle}>Serviços</a>
          <a href="#processo" style={linkStyle}>Como funciona</a>
          <a href="#depoimentos" style={linkStyle}>Depoimentos</a>
          <a href="#contato" style={{
            ...linkStyle, background: COLORS.green900, color: "#fff",
            padding: "9px 22px", borderRadius: 7, fontWeight: 500, fontSize: 13,
          }}>Solicitar orçamento</a>
        </div>

        <button onClick={() => setOpen(!open)} className="nav-mobile-btn" style={{
          background: "none", border: "none", cursor: "pointer", padding: 4, display: "none",
        }}>
          {open ? <X size={22} color={scrolled ? COLORS.sand900 : "#fff"} /> : <Menu size={22} color={scrolled ? COLORS.sand900 : "#fff"} />}
        </button>
      </div>

      {open && (
        <div style={{
          position: "absolute", top: 64, left: 0, right: 0, background: "#fff",
          padding: "20px 24px", borderBottom: `1px solid ${COLORS.sand200}`,
          display: "flex", flexDirection: "column", gap: 16,
        }}>
          <a href="#servicos" onClick={() => setOpen(false)} style={linkStyle}>Serviços</a>
          <a href="#processo" onClick={() => setOpen(false)} style={linkStyle}>Como funciona</a>
          <a href="#depoimentos" onClick={() => setOpen(false)} style={linkStyle}>Depoimentos</a>
          <a href="#contato" onClick={() => setOpen(false)} style={{
            ...linkStyle, background: COLORS.green900, color: "#fff",
            padding: "12px 22px", borderRadius: 7, fontWeight: 500, fontSize: 14, textAlign: "center",
          }}>Solicitar orçamento</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{ padding: 0, background: COLORS.green950, position: "relative", overflow: "hidden", minHeight: 580 }}>
      <div className="hero-img" style={{
        position: "absolute", top: 0, right: 0, width: "55%", height: "100%",
        backgroundImage: "url(https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80)",
        backgroundSize: "cover", backgroundPosition: "center",
        pointerEvents: "none",
      }} />
      <div className="hero-img" style={{
        position: "absolute", top: 0, right: 0, width: "55%", height: "100%",
        background: `linear-gradient(to right, #0a1f04 0%, rgba(10,31,4,0.92) 18%, rgba(10,31,4,0.6) 45%, rgba(10,31,4,0.25) 75%, transparent 100%)`,
        pointerEvents: "none",
      }} />
      <div className="hero-img" style={{
        position: "absolute", top: 0, right: 0, width: "55%", height: "100%",
        background: `linear-gradient(to bottom, rgba(10,31,4,0.6) 0%, transparent 25%, transparent 75%, rgba(10,31,4,0.8) 100%)`,
        pointerEvents: "none",
      }} />

      <svg style={{
        position: "absolute", top: 0, left: 0, width: "55%", height: "100%",
        opacity: 0.12, pointerEvents: "none",
      }} viewBox="0 0 700 500" preserveAspectRatio="xMidYMid slice">
        <path d="M0 420 Q100 380 200 400 Q350 430 500 360 Q650 290 700 310" fill="none" stroke="#1D9E75" strokeWidth="1.8"/>
        <path d="M0 380 Q120 340 240 360 Q380 390 520 320 Q660 255 700 270" fill="none" stroke="#1D9E75" strokeWidth="1.3"/>
        <path d="M0 340 Q130 305 260 325 Q400 350 540 285 Q680 220 700 235" fill="none" stroke="#1D9E75" strokeWidth="1"/>
        <path d="M0 300 Q140 265 280 285 Q420 310 560 245 Q700 180 700 195" fill="none" stroke="#1D9E75" strokeWidth="0.8"/>
        <path d="M0 260 Q150 225 300 245 Q450 270 590 205 Q700 145 700 155" fill="none" stroke="#1D9E75" strokeWidth="0.6"/>
        <path d="M0 220 Q160 185 320 205 Q480 230 620 165 Q700 105 700 115" fill="none" stroke="#1D9E75" strokeWidth="0.45"/>
        <path d="M0 180 Q180 145 350 165 Q520 190 660 125 L700 80" fill="none" stroke="#1D9E75" strokeWidth="0.35"/>
        <path d="M0 460 Q80 440 180 450 Q320 465 480 400 Q620 340 700 355" fill="none" stroke="#1D9E75" strokeWidth="2"/>
      </svg>

      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "160px 24px 120px", position: "relative", zIndex: 1 }}>
        <FadeIn>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(29,158,117,0.12)", border: "1px solid rgba(29,158,117,0.2)",
            borderRadius: 100, padding: "6px 18px 6px 12px",
            fontSize: 13, fontWeight: 500, color: COLORS.teal400, marginBottom: 28,
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%", background: COLORS.teal400,
              animation: "pulse 2s ease-in-out infinite",
            }} />
            Atuação em todo o Brasil
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 style={{
            fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400, lineHeight: 1.1,
            letterSpacing: "-0.03em", color: "#fff",
            fontFamily: "'Georgia', serif", marginBottom: 22, maxWidth: 600,
          }}>
            Consultoria agronômica<br />
            com <span style={{ fontStyle: "italic", color: COLORS.teal400 }}>excelência técnica</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p style={{
            fontSize: 18, color: "rgba(255,255,255,0.5)", maxWidth: 480,
            lineHeight: 1.7, marginBottom: 40,
          }}>
            Laudos agronômicos e projetos ambientais para empresas
            e construtoras que exigem qualidade, conformidade e agilidade.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <a href="#contato" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: COLORS.teal500, color: "#fff",
              padding: "15px 30px", borderRadius: 8, fontSize: 15,
              fontWeight: 500, textDecoration: "none", transition: "all 0.2s",
            }}>
              Solicitar orçamento <ArrowRight size={16} />
            </a>
            <a href="https://wa.me/5581900000000" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#25D366", color: "#fff",
              padding: "15px 30px", borderRadius: 8, fontSize: 15,
              fontWeight: 500, textDecoration: "none", transition: "all 0.2s",
            }}>
              <MessageCircle size={18} fill="#fff" /> WhatsApp
            </a>
            <a href="#servicos" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.75)",
              padding: "15px 30px", borderRadius: 8, fontSize: 15,
              fontWeight: 500, textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.12)", transition: "all 0.2s",
            }}>
              Conhecer serviços
            </a>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
        @media (max-width: 768px) {
          .hero-img { width: 100% !important; opacity: 0.25 !important; }
        }
      `}</style>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <FileText size={24} />,
      title: "Laudos agronômicos",
      desc: "Elaboração de laudos técnicos com emissão de ART para licenciamento ambiental, financiamentos, órgãos reguladores e processos judiciais.",
      items: ["Laudos de viabilidade agrícola", "Laudos para licenciamento", "Receituário agronômico", "Laudos para financiamento rural"],
      color: COLORS.green900,
      bg: "rgba(18,43,8,0.04)",
    },
    {
      icon: <TreePine size={24} />,
      title: "Projetos ambientais",
      desc: "Soluções completas em regularização ambiental e fundiária, com acompanhamento técnico do início à aprovação nos órgãos competentes.",
      items: ["PRAD — Recuperação de áreas degradadas", "Regularização fundiária", "CAR — Cadastro Ambiental Rural", "Compensação e licenciamento ambiental"],
      color: COLORS.teal600,
      bg: "rgba(15,110,86,0.04)",
    },
  ];

  return (
    <section id="servicos" style={{ padding: "100px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
        <FadeIn>
          <p style={{
            fontSize: 12, fontWeight: 600, textTransform: "uppercase",
            letterSpacing: "0.1em", color: COLORS.teal600, marginBottom: 12,
          }}>Serviços</p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 style={{
            fontFamily: "'Georgia', serif", fontSize: "clamp(28px, 4vw, 38px)",
            fontWeight: 400, letterSpacing: "-0.02em", color: COLORS.green950,
            marginBottom: 16, lineHeight: 1.2,
          }}>
            Nossas principais áreas de atuação
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: 16, color: COLORS.sand500, maxWidth: 560, marginBottom: 56, lineHeight: 1.7 }}>
            Atendemos diversas demandas agronômicas e ambientais. Conheça nossas principais frentes — e se o que você precisa não está aqui, entre em contato que encontramos a solução.
          </p>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: 20 }}>
          {services.map((s, i) => (
            <FadeIn key={i} delay={0.15 + i * 0.1}>
              <a href="#contato" style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}>
                <div style={{
                  background: COLORS.sand50, borderRadius: 16, padding: "36px 32px",
                  border: `1px solid transparent`, transition: "all 0.3s", height: "100%",
                  position: "relative", overflow: "hidden", cursor: "pointer",
                  display: "flex", flexDirection: "column",
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.borderColor = COLORS.sand200;
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 12px 48px rgba(0,0,0,0.05)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = COLORS.sand50;
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{
                    position: "absolute", top: -60, right: -60, width: 160, height: 160,
                    borderRadius: "50%", background: s.bg, pointerEvents: "none",
                  }} />
                  <div style={{
                    width: 48, height: 48, borderRadius: 12, background: s.bg,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: s.color, marginBottom: 24, position: "relative",
                  }}>
                    {s.icon}
                  </div>
                  <h3 style={{
                    fontFamily: "'Georgia', serif", fontSize: 22, fontWeight: 400,
                    color: COLORS.green950, marginBottom: 12, position: "relative",
                  }}>{s.title}</h3>
                  <p style={{
                    fontSize: 15, color: COLORS.sand500, lineHeight: 1.7,
                    marginBottom: 24, position: "relative",
                  }}>{s.desc}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, position: "relative" }}>
                    {s.items.map((item, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: COLORS.sand700 }}>
                        <ChevronRight size={14} color={s.color} style={{ flexShrink: 0 }} />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    fontSize: 14, fontWeight: 500, color: s.color, position: "relative",
                    marginTop: "auto", paddingTop: 20,
                  }}>
                    Solicitar orçamento <ArrowRight size={14} />
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}

          <FadeIn delay={0.35}>
            <a href="#contato" style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}>
              <div style={{
                background: COLORS.sand50, borderRadius: 16, padding: "36px 32px",
                border: `1px dashed ${COLORS.sand300}`, transition: "all 0.3s", height: "100%",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                textAlign: "center", cursor: "pointer", minHeight: 280,
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.borderColor = COLORS.teal500;
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 12px 48px rgba(0,0,0,0.05)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = COLORS.sand50;
                  e.currentTarget.style.borderColor = COLORS.sand300;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: "rgba(15,110,86,0.06)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: COLORS.teal600, marginBottom: 20,
                }}>
                  <MessageCircle size={24} />
                </div>
                <h3 style={{
                  fontFamily: "'Georgia', serif", fontSize: 22, fontWeight: 400,
                  color: COLORS.green950, marginBottom: 10,
                }}>Precisa de outro serviço?</h3>
                <p style={{
                  fontSize: 15, color: COLORS.sand500, lineHeight: 1.7,
                  marginBottom: 20, maxWidth: 300,
                }}>
                  Atendemos diversas demandas agronômicas e ambientais. Fale conosco e entenda como podemos ajudar.
                </p>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 14, fontWeight: 500, color: COLORS.teal600,
                }}>
                  Entrar em contato <ArrowRight size={14} />
                </div>
              </div>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { num: "01", title: "Contato", desc: "Preencha o formulário ou fale via WhatsApp. Entendemos sua necessidade em até 24h." },
    { num: "02", title: "Diagnóstico", desc: "Avaliamos o escopo e elaboramos uma proposta técnica e comercial personalizada." },
    { num: "03", title: "Execução", desc: "Visitas de campo, coletas, análises e toda a elaboração técnica necessária." },
    { num: "04", title: "Entrega", desc: "Documentação completa com ART, pronta para uso junto a órgãos e instituições." },
  ];

  return (
    <section id="processo" style={{ padding: "100px 0", background: COLORS.sand50 }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
        <FadeIn>
          <p style={{
            fontSize: 12, fontWeight: 600, textTransform: "uppercase",
            letterSpacing: "0.1em", color: COLORS.teal600, marginBottom: 12,
          }}>Como funciona</p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 style={{
            fontFamily: "'Georgia', serif", fontSize: "clamp(28px, 4vw, 38px)",
            fontWeight: 400, letterSpacing: "-0.02em", color: COLORS.green950,
            marginBottom: 56, lineHeight: 1.2,
          }}>
            Do primeiro contato à<br />entrega do projeto
          </h2>
        </FadeIn>

        <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {steps.map((s, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.1}>
              <div style={{ position: "relative" }}>
                {i < 3 && (
                  <div className="process-line" style={{
                    position: "absolute", top: 26, left: "calc(100% - 8px)",
                    width: "calc(100% - 44px)", height: 1,
                    background: COLORS.sand300, zIndex: 0,
                  }} />
                )}
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: "50%",
                    background: COLORS.green900, color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Georgia', serif", fontSize: 16, fontWeight: 400,
                    position: "relative", zIndex: 1, flexShrink: 0,
                  }}>{s.num}</div>
                  <div style={{
                    height: 2, width: 32, borderRadius: 1,
                    background: COLORS.teal500,
                  }} className="step-dash" />
                </div>
                <h3 style={{
                  fontSize: 17, fontWeight: 600, color: COLORS.green950,
                  marginBottom: 8,
                }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: COLORS.sand500, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 40px 24px !important; }
          .process-line { display: none !important; }
        }
        @media (max-width: 540px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      text: "A Solum Agro entregou o PRAD no prazo e com uma qualidade técnica que nos surpreendeu. O órgão ambiental aprovou sem ressalvas.",
      author: "Ricardo Mendes",
      role: "Diretor de operações",
      company: "Construtora Atlântica",
    },
    {
      text: "Precisávamos de laudos agronômicos para um projeto de loteamento e a equipe foi extremamente ágil e profissional do início ao fim.",
      author: "Fernanda Costa",
      role: "Gerente de projetos",
      company: "Grupo Terras do Norte",
    },
    {
      text: "O suporte durante todo o processo de regularização fundiária foi impecável. Recomendo sem hesitar para qualquer empresa do setor.",
      author: "Carlos Eduardo",
      role: "Sócio-diretor",
      company: "CE Empreendimentos",
    },
  ];

  return (
    <section id="depoimentos" style={{ padding: "100px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
        <FadeIn>
          <p style={{
            fontSize: 12, fontWeight: 600, textTransform: "uppercase",
            letterSpacing: "0.1em", color: COLORS.teal600, marginBottom: 12,
          }}>Depoimentos</p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 style={{
            fontFamily: "'Georgia', serif", fontSize: "clamp(28px, 4vw, 38px)",
            fontWeight: 400, letterSpacing: "-0.02em", color: COLORS.green950,
            marginBottom: 56, lineHeight: 1.2,
          }}>
            O que dizem nossos clientes
          </h2>
        </FadeIn>

        <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.1}>
              <div style={{
                background: COLORS.sand50, borderRadius: 16,
                padding: "32px 28px", height: "100%",
                display: "flex", flexDirection: "column",
                border: "1px solid transparent",
                transition: "all 0.3s",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = COLORS.sand200;
                  e.currentTarget.style.background = "#fff";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.background = COLORS.sand50;
                }}
              >
                <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill={COLORS.teal500} color={COLORS.teal500} />)}
                </div>
                <p style={{
                  fontSize: 15, color: COLORS.sand700, lineHeight: 1.7,
                  fontStyle: "italic", flex: 1, marginBottom: 24,
                }}>
                  "{t.text}"
                </p>
                <div style={{ borderTop: `1px solid ${COLORS.sand200}`, paddingTop: 16 }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: COLORS.green950, marginBottom: 2 }}>{t.author}</p>
                  <p style={{ fontSize: 13, color: COLORS.sand500 }}>{t.role} — {t.company}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; max-width: 520px; }
        }
      `}</style>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ nome: "", empresa: "", email: "", telefone: "", servico: "", detalhes: "" });

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputStyle = {
    width: "100%", padding: "11px 14px",
    border: `1px solid ${COLORS.sand200}`, borderRadius: 8,
    fontSize: 14, color: COLORS.sand900, background: COLORS.sand50,
    outline: "none", transition: "border-color 0.2s, background 0.2s",
    fontFamily: "inherit",
  };

  return (
    <section id="contato" style={{
      padding: "100px 0", background: COLORS.green950,
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "-40%", right: "-15%",
        width: 700, height: 700,
        background: "radial-gradient(circle, rgba(29,158,117,0.1) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div className="contact-grid" style={{
        maxWidth: 1120, margin: "0 auto", padding: "0 24px",
        display: "grid", gridTemplateColumns: "1fr 460px", gap: 60,
        alignItems: "start", position: "relative", zIndex: 1,
      }}>
        <FadeIn>
          <div>
            <h2 style={{
              fontFamily: "'Georgia', serif", fontSize: "clamp(28px, 4vw, 38px)",
              fontWeight: 400, color: "#fff", letterSpacing: "-0.02em",
              marginBottom: 16, lineHeight: 1.2,
            }}>
              Pronto para iniciar<br />seu projeto?
            </h2>
            <p style={{
              fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.7,
              marginBottom: 48, maxWidth: 400,
            }}>
              Solicite um orçamento sem compromisso. Nossa equipe retorna
              em até 24 horas com uma proposta personalizada.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                { icon: <Phone size={18} />, text: "(81) 9xxxx-xxxx" },
                { icon: <Mail size={18} />, text: "contato@solumagro.com.br" },
                { icon: <MapPin size={18} />, text: "Atendimento em todo o Brasil" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, color: "rgba(255,255,255,0.65)", fontSize: 15 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 10,
                    background: "rgba(255,255,255,0.07)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, color: "rgba(255,255,255,0.5)",
                  }}>{item.icon}</div>
                  {item.text}
                </div>
              ))}
            </div>

            <a href="https://wa.me/5581900000000" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "#25D366", color: "#fff",
              padding: "16px 32px", borderRadius: 10, fontSize: 16,
              fontWeight: 500, textDecoration: "none", transition: "all 0.2s",
              marginTop: 36,
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(37,211,102,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <MessageCircle size={20} fill="#fff" /> Fale pelo WhatsApp
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div style={{ background: "#fff", borderRadius: 18, padding: "36px 32px" }}>
            <h3 style={{
              fontFamily: "'Georgia', serif", fontSize: 22, fontWeight: 400,
              color: COLORS.green950, marginBottom: 28,
            }}>Solicitar orçamento</h3>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }} className="form-row">
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: COLORS.sand700, marginBottom: 6 }}>Nome completo</label>
                <input style={inputStyle} placeholder="Seu nome"
                  onFocus={e => { e.target.style.borderColor = COLORS.teal500; e.target.style.background = "#fff"; }}
                  onBlur={e => { e.target.style.borderColor = COLORS.sand200; e.target.style.background = COLORS.sand50; }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: COLORS.sand700, marginBottom: 6 }}>Empresa</label>
                <input style={inputStyle} placeholder="Nome da empresa"
                  onFocus={e => { e.target.style.borderColor = COLORS.teal500; e.target.style.background = "#fff"; }}
                  onBlur={e => { e.target.style.borderColor = COLORS.sand200; e.target.style.background = COLORS.sand50; }}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }} className="form-row">
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: COLORS.sand700, marginBottom: 6 }}>E-mail</label>
                <input style={inputStyle} placeholder="seu@email.com" type="email"
                  onFocus={e => { e.target.style.borderColor = COLORS.teal500; e.target.style.background = "#fff"; }}
                  onBlur={e => { e.target.style.borderColor = COLORS.sand200; e.target.style.background = COLORS.sand50; }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: COLORS.sand700, marginBottom: 6 }}>Telefone / WhatsApp</label>
                <input style={inputStyle} placeholder="(81) 9xxxx-xxxx" type="tel"
                  onFocus={e => { e.target.style.borderColor = COLORS.teal500; e.target.style.background = "#fff"; }}
                  onBlur={e => { e.target.style.borderColor = COLORS.sand200; e.target.style.background = COLORS.sand50; }}
                />
              </div>
            </div>

            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: COLORS.sand700, marginBottom: 6 }}>Tipo de serviço</label>
              <select style={{ ...inputStyle, appearance: "auto" }}
                onFocus={e => { e.target.style.borderColor = COLORS.teal500; e.target.style.background = "#fff"; }}
                onBlur={e => { e.target.style.borderColor = COLORS.sand200; e.target.style.background = COLORS.sand50; }}
              >
                <option value="">Selecione o serviço desejado</option>
                <option>Laudo agronômico</option>
                <option>PRAD</option>
                <option>Regularização fundiária</option>
                <option>CAR — Cadastro Ambiental Rural</option>
                <option>Licenciamento ambiental</option>
                <option>Outro</option>
              </select>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: COLORS.sand700, marginBottom: 6 }}>Detalhes do projeto</label>
              <textarea style={{ ...inputStyle, minHeight: 90, resize: "vertical" }}
                placeholder="Descreva brevemente sua necessidade..."
                onFocus={e => { e.target.style.borderColor = COLORS.teal500; e.target.style.background = "#fff"; }}
                onBlur={e => { e.target.style.borderColor = COLORS.sand200; e.target.style.background = COLORS.sand50; }}
              />
            </div>

            <button onClick={handleSubmit} style={{
              width: "100%", padding: 14,
              background: submitted ? COLORS.teal600 : COLORS.green900,
              color: "#fff", border: "none", borderRadius: 8,
              fontSize: 15, fontWeight: 500, cursor: "pointer",
              transition: "all 0.3s", fontFamily: "inherit",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            }}>
              {submitted ? <><CheckCircle2 size={16} /> Enviado com sucesso!</> : <><Send size={16} /> Enviar solicitação</>}
            </button>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 540px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      background: COLORS.green950, borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "48px 0 32px",
    }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
        <div className="footer-top" style={{
          display: "flex", justifyContent: "space-between", alignItems: "start",
          marginBottom: 40,
        }}>
          <div>
            <div style={{ marginBottom: 10 }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: "#fff", fontFamily: "'Georgia', serif" }}>Solum</span>
              <span style={{ fontSize: 18, fontWeight: 300, color: COLORS.teal500, fontFamily: "'Georgia', serif" }}>Agro</span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", maxWidth: 260, lineHeight: 1.6 }}>
              Consultoria agronômica e ambiental com excelência técnica para todo o Brasil.
            </p>
          </div>

          <div className="footer-links" style={{ display: "flex", gap: 56 }}>
            <div>
              <h4 style={{
                fontSize: 11, fontWeight: 600, textTransform: "uppercase",
                letterSpacing: "0.08em", color: "rgba(255,255,255,0.3)", marginBottom: 16,
              }}>Serviços</h4>
              {["Laudos agronômicos", "PRAD", "Regularização fundiária", "CAR"].map((s, i) => (
                <a key={i} href="#servicos" style={{
                  display: "block", fontSize: 14, color: "rgba(255,255,255,0.55)",
                  textDecoration: "none", marginBottom: 10, transition: "color 0.2s",
                }}>{s}</a>
              ))}
            </div>
            <div>
              <h4 style={{
                fontSize: 11, fontWeight: 600, textTransform: "uppercase",
                letterSpacing: "0.08em", color: "rgba(255,255,255,0.3)", marginBottom: 16,
              }}>Empresa</h4>
              {[
                { label: "Como funciona", href: "#processo" },
                { label: "Depoimentos", href: "#depoimentos" },
                { label: "Contato", href: "#contato" },
              ].map((s, i) => (
                <a key={i} href={s.href} style={{
                  display: "block", fontSize: 14, color: "rgba(255,255,255,0.55)",
                  textDecoration: "none", marginBottom: 10, transition: "color 0.2s",
                }}>{s.label}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{
          borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24,
          display: "flex", justifyContent: "space-between",
          fontSize: 13, color: "rgba(255,255,255,0.25)",
        }}>
          <span>&copy; 2026 Solum Agro. Todos os direitos reservados.</span>
          <span>CREA — Responsabilidade técnica</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-top { flex-direction: column !important; gap: 32px !important; }
          .footer-links { gap: 32px !important; }
          .footer-bottom { flex-direction: column !important; gap: 8px !important; }
        }
      `}</style>
    </footer>
  );
}

function WhatsAppButton() {
  const [hover, setHover] = useState(false);
  return (
    <a
      href="https://wa.me/5581900000000"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "fixed", bottom: 24, right: 24, zIndex: 99,
        width: hover ? "auto" : 56, height: 56, borderRadius: 28,
        background: "#25D366", color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        gap: hover ? 10 : 0, padding: hover ? "0 24px 0 18px" : 0,
        boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
        textDecoration: "none", transition: "all 0.3s ease",
        overflow: "hidden", whiteSpace: "nowrap",
      }}
    >
      <MessageCircle size={22} fill="#fff" />
      <span style={{
        fontSize: 14, fontWeight: 500,
        maxWidth: hover ? 200 : 0, opacity: hover ? 1 : 0,
        transition: "all 0.3s ease",
      }}>
        Fale conosco
      </span>
    </a>
  );
}

export default function SolumAgroLanding() {
  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", color: COLORS.sand900, background: "#fff", minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
