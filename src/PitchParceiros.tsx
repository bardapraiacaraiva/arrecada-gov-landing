import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import {
  ChevronLeft, ChevronRight, Printer, Sparkles, TrendingUp, AlertTriangle,
  Bot, Rocket, Building2, Brain, MessageCircle,
  Wallet, BarChart3, Database, Shield, CheckCircle2, XCircle, Zap,
  Search, FileSearch, Banknote, Users, Wind, Award, Briefcase,
} from 'lucide-react';

/* ============================================================
   PITCH PARCEIROS — ARRECADA.GOV (9 slides · deck dark mode)
   Rota: /parceiros
   ============================================================ */

const TOTAL_SLIDES = 9;

/* ---------- Counter (animated number) ---------- */
function Counter({ from = 0, to, prefix = '', suffix = '', decimals = 0, duration = 1.4, className = '' }: { from?: number; to: number; prefix?: string; suffix?: string; decimals?: number; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const mv = useMotionValue(from);
  const display = useTransform(mv, (v) => `${prefix}${decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString('pt-BR')}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration, ease: 'easeOut' });
      return controls.stop;
    }
  }, [inView, to, duration, mv]);

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}

/* ---------- Shared primitives ---------- */
function SlideShell({ children, badge, title, accent }: { children: React.ReactNode; badge?: string; title?: React.ReactNode; accent?: string }) {
  return (
    <div className="deck-slide min-h-screen w-full px-8 md:px-16 lg:px-24 py-20 md:py-24 flex flex-col">
      {(badge || title) && (
        <div className="mb-10 md:mb-14">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] font-semibold border"
              style={{ color: 'var(--color-deck-teal)', borderColor: 'var(--color-deck-border-strong)', background: 'var(--color-deck-card)' }}
            >
              {badge}
            </motion.div>
          )}
          {title && (
            <motion.h1
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}
              className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.05] mt-5 max-w-5xl"
              style={{ color: 'var(--color-deck-text)' }}
            >
              {title}
              {accent && <span style={{ color: 'var(--color-deck-teal)' }}> {accent}</span>}
            </motion.h1>
          )}
        </div>
      )}
      <div className="flex-1">{children}</div>
    </div>
  );
}

function StatCard({ value, label, sub, large = false, danger = false, delay = 0 }: { value: React.ReactNode; label: string; sub?: string; large?: boolean; danger?: boolean; delay?: number }) {
  const color = danger ? 'var(--color-deck-danger)' : 'var(--color-deck-teal)';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.5 }}
      className="rounded-2xl p-6 md:p-8 border backdrop-blur-sm"
      style={{ background: 'var(--color-deck-card)', borderColor: 'var(--color-deck-border)' }}
    >
      <div className={`font-serif font-bold ${large ? 'text-5xl md:text-7xl' : 'text-3xl md:text-5xl'} leading-none`} style={{ color }}>{value}</div>
      <div className="mt-4 text-sm md:text-base font-medium" style={{ color: 'var(--color-deck-text)' }}>{label}</div>
      {sub && <div className="mt-1 text-xs md:text-sm" style={{ color: 'var(--color-deck-muted)' }}>{sub}</div>}
    </motion.div>
  );
}

function Pill({ children, tone = 'teal' }: { children: React.ReactNode; tone?: 'teal' | 'danger' | 'amber' | 'mute' }) {
  const map: Record<string, { bg: string; fg: string }> = {
    teal: { bg: 'rgba(0,200,150,0.12)', fg: 'var(--color-deck-teal)' },
    danger: { bg: 'rgba(244,107,93,0.13)', fg: 'var(--color-deck-danger)' },
    amber: { bg: 'rgba(245,179,76,0.13)', fg: 'var(--color-deck-amber)' },
    mute: { bg: 'rgba(255,255,255,0.06)', fg: 'var(--color-deck-text-mid)' },
  };
  const s = map[tone];
  return <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider" style={{ background: s.bg, color: s.fg }}>{children}</span>;
}

/* ============================================================
   SLIDE 1 — CAPA
   ============================================================ */
function Slide1() {
  return (
    <div className="deck-slide min-h-screen w-full px-8 md:px-16 lg:px-24 py-16 flex flex-col justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-[10%] -left-32 w-[480px] h-[480px] rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, var(--color-deck-teal) 0%, transparent 60%)' }} />
        <div className="absolute bottom-[5%] -right-40 w-[520px] h-[520px] rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, var(--color-deck-teal-soft) 0%, transparent 60%)' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] mb-10 border" style={{ borderColor: 'var(--color-deck-teal-dim)', color: 'var(--color-deck-teal)', background: 'rgba(0,200,150,0.08)' }}>
          <Sparkles size={12} /> Pitch Parceiros · Maio 2026
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif font-bold leading-[0.95] tracking-tight">
          <span className="block text-6xl md:text-8xl lg:text-9xl" style={{ color: 'var(--color-deck-text)' }}>ARRECADA<span style={{ color: 'var(--color-deck-teal)' }}>.GOV</span></span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mt-8 text-xl md:text-2xl lg:text-3xl font-light max-w-3xl" style={{ color: 'var(--color-deck-text-mid)' }}>
          O primeiro <span className="font-semibold" style={{ color: 'var(--color-deck-teal)' }}>agente de IA conciliador</span> para recuperação de receita municipal.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="mt-4 text-base md:text-lg max-w-2xl" style={{ color: 'var(--color-deck-muted)' }}>
          A prefeitura envia uma planilha. Nós devolvemos receita.
        </motion.p>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl">
          <StatCard value={<><Counter to={500} suffix="B+" prefix="R$ " /></>} label="Dívida ativa municipal nacional" sub="SICONFI · Tesouro Nacional" delay={0.6} />
          <StatCard value="R$ 0" label="Custo inicial para a prefeitura" sub="Success fee · zero risco" delay={0.75} />
          <StatCard value={<><Counter to={12} suffix="%" /></>} label="Success fee sobre recuperado" sub="88% direto ao caixa municipal" delay={0.9} />
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   SLIDE 2 — MERCADO
   ============================================================ */
function Slide2() {
  const composicao = [
    { label: 'IPTU', pct: 60, color: 'var(--color-deck-teal)' },
    { label: 'ISS', pct: 25, color: 'var(--color-deck-teal-soft)' },
    { label: 'ITBI', pct: 7, color: 'var(--color-deck-amber)' },
    { label: 'Taxas', pct: 5, color: 'rgba(255,255,255,0.45)' },
    { label: 'Multas', pct: 3, color: 'rgba(255,255,255,0.25)' },
  ];
  return (
    <SlideShell badge="02 · Mercado" title="R$ 500 bilhões esperando." accent="Ninguém está cobrando.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-6">
        <div>
          <div className="text-xs uppercase tracking-widest mb-5" style={{ color: 'var(--color-deck-muted)' }}>O tamanho do problema</div>
          <div className="space-y-3">
            {[
              { label: 'Estoque dívida ativa municipal (BR)', value: 'R$ 500 bilhões+', src: 'SICONFI · Tesouro Nacional', tone: 'teal' as const },
              { label: 'Municípios brasileiros', value: '5.570', src: 'IBGE', tone: 'teal' as const },
              { label: 'Mercado GovTech no Brasil', value: 'USD 18,5B', src: 'Mordor Intelligence', tone: 'teal' as const },
              { label: 'Recuperação atual via execução fiscal', value: '2–3%', src: 'PGFN / IEPTB', tone: 'danger' as const },
              { label: 'Receita perdida por prescrição/ano', value: 'R$ 50–80B', src: 'Estimativa SICONFI', tone: 'danger' as const },
            ].map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.06 }}
                className="flex items-center justify-between gap-4 px-5 py-4 rounded-xl border" style={{ background: 'var(--color-deck-card)', borderColor: 'var(--color-deck-border)' }}>
                <div className="min-w-0">
                  <div className="text-sm md:text-base" style={{ color: 'var(--color-deck-text)' }}>{r.label}</div>
                  <div className="text-[11px] mt-0.5" style={{ color: 'var(--color-deck-muted)' }}>{r.src}</div>
                </div>
                <div className="font-serif text-xl md:text-2xl font-bold whitespace-nowrap" style={{ color: r.tone === 'danger' ? 'var(--color-deck-danger)' : 'var(--color-deck-teal)' }}>{r.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest mb-5" style={{ color: 'var(--color-deck-muted)' }}>Ticket médio por porte</div>
          <div className="rounded-xl border overflow-hidden mb-8" style={{ borderColor: 'var(--color-deck-border)' }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'var(--color-deck-card)' }}>
                  <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider" style={{ color: 'var(--color-deck-muted)' }}>Porte (hab.)</th>
                  <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider" style={{ color: 'var(--color-deck-muted)' }}>Dívida ativa</th>
                  <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider" style={{ color: 'var(--color-deck-muted)' }}>Devedores</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { p: '< 50K', d: 'R$ 6–12M', q: '1.500–4.000', hl: false },
                  { p: '50–200K · alvo', d: 'R$ 10–50M', q: '3.000–15.000', hl: true },
                  { p: '> 200K', d: 'R$ 100–500M', q: '30K–100K', hl: false },
                ].map((r, i) => (
                  <tr key={i} style={{ background: r.hl ? 'rgba(0,200,150,0.06)' : 'transparent', borderTop: '1px solid var(--color-deck-border)' }}>
                    <td className="px-4 py-3" style={{ color: r.hl ? 'var(--color-deck-teal)' : 'var(--color-deck-text)' }}>{r.p}</td>
                    <td className="px-4 py-3 font-semibold" style={{ color: 'var(--color-deck-text)' }}>{r.d}</td>
                    <td className="px-4 py-3" style={{ color: 'var(--color-deck-text-mid)' }}>{r.q}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--color-deck-muted)' }}>Composição da dívida (município 200K hab.)</div>
          <div className="space-y-2.5">
            {composicao.map((c, i) => (
              <motion.div key={c.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + i * 0.07 }}>
                <div className="flex items-center justify-between mb-1 text-xs" style={{ color: 'var(--color-deck-text-mid)' }}>
                  <span>{c.label}</span>
                  <span className="font-semibold" style={{ color: c.color }}>{c.pct}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <motion.div initial={{ width: 0 }} animate={{ width: `${c.pct}%` }} transition={{ delay: 0.35 + i * 0.07, duration: 0.7, ease: 'easeOut' }} className="h-full rounded-full" style={{ background: c.color }} />
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }} className="mt-6 px-4 py-3 rounded-lg border text-sm" style={{ borderColor: 'var(--color-deck-teal-dim)', background: 'rgba(0,200,150,0.04)', color: 'var(--color-deck-text-mid)' }}>
            <span style={{ color: 'var(--color-deck-teal)', fontWeight: 600 }}>Insight:</span> IPTU é o maior bloco — dívida de eleitor. Cobrar com judicialização é politicamente caro. <span style={{ color: 'var(--color-deck-teal)' }}>IA conciliadora é politicamente seguro.</span>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}

/* ============================================================
   SLIDE 3 — CENÁRIO (concorrência)
   ============================================================ */
function Slide3() {
  const players = [
    { who: 'Procuradoria municipal', what: 'Execução fiscal judicial', how: '3–10 advogados públicos manejando 50K processos', limit: '2–3% recuperação · R$ 5.606/ação · 9,75 anos por caso', icon: <Briefcase size={18} /> },
    { who: 'Escritórios de advocacia', what: 'Terceirização judicial', how: 'Petição em papel · processo tradicional', limit: 'Lento, caro, mesmo gargalo do judiciário', icon: <Building2 size={18} /> },
    { who: 'BRbid · Softplan · PGM Digital', what: 'Software de cobrança', how: 'Licença mensal · gera boletos · régua email', limit: 'Sem IA · sem investigação · sem Open Banking · paga mesmo sem recuperar', icon: <Database size={18} /> },
    { who: 'Cartórios via IEPTB', what: 'Protesto extrajudicial', how: 'Remessa CNAB · cartório intima', limit: 'Precisa de "apresentante" credenciado · sem priorização', icon: <Shield size={18} /> },
    { who: 'Bancos via convênio', what: 'Carnê IPTU', how: 'Boleto físico · sem follow-up', limit: '"Despacha" — não cobra', icon: <Wallet size={18} /> },
  ];
  return (
    <SlideShell badge="03 · Cenário" title="A cobrança municipal hoje é feita por" accent="quem não pode escalar.">
      <div className="mt-4 rounded-xl border overflow-hidden" style={{ borderColor: 'var(--color-deck-border)' }}>
        <div className="grid grid-cols-12 gap-4 px-5 py-3 text-[10px] uppercase tracking-widest font-semibold" style={{ background: 'var(--color-deck-card)', color: 'var(--color-deck-muted)' }}>
          <div className="col-span-3">Player</div>
          <div className="col-span-2">O que faz</div>
          <div className="col-span-3">Como funciona</div>
          <div className="col-span-4">Limite</div>
        </div>
        {players.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.07 }}
            className="grid grid-cols-12 gap-4 px-5 py-4 text-sm" style={{ borderTop: '1px solid var(--color-deck-border)' }}>
            <div className="col-span-3 flex items-center gap-2.5 font-semibold" style={{ color: 'var(--color-deck-text)' }}><span style={{ color: 'var(--color-deck-muted)' }}>{p.icon}</span> {p.who}</div>
            <div className="col-span-2" style={{ color: 'var(--color-deck-text-mid)' }}>{p.what}</div>
            <div className="col-span-3 text-xs md:text-sm" style={{ color: 'var(--color-deck-text-mid)' }}>{p.how}</div>
            <div className="col-span-4 text-xs md:text-sm" style={{ color: 'var(--color-deck-danger)' }}>{p.limit}</div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-xl border p-6" style={{ borderColor: 'var(--color-deck-border)', background: 'var(--color-deck-card)' }}>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--color-deck-danger)' }}><AlertTriangle size={14} /> Consequência prática</div>
          <p className="text-sm md:text-base" style={{ color: 'var(--color-deck-text-mid)' }}>
            Para um IPTU de <span style={{ color: 'var(--color-deck-text)', fontWeight: 600 }}>R$ 2.000</span>, a execução fiscal custa <span style={{ color: 'var(--color-deck-danger)', fontWeight: 600 }}>R$ 5.606</span> — <span style={{ color: 'var(--color-deck-text)' }}>2,8× o valor da dívida</span>. O procurador-geral racionalmente arquiva. <span style={{ color: 'var(--color-deck-danger)' }}>As pequenas prescrevem.</span>
          </p>
        </div>
        <div className="rounded-xl border p-6" style={{ borderColor: 'var(--color-deck-teal-dim)', background: 'rgba(0,200,150,0.05)' }}>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--color-deck-teal)' }}><Zap size={14} /> O quadrante vazio</div>
          <ul className="space-y-1.5 text-sm md:text-base" style={{ color: 'var(--color-deck-text-mid)' }}>
            <li className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-deck-teal)' }} /> IA que investiga, segmenta e prioriza por probabilidade de pagamento</li>
            <li className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-deck-teal)' }} /> Cobrança humanizada via WhatsApp 24/7</li>
            <li className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-deck-teal)' }} /> Open Banking · pagamento A2A em 3 passos</li>
            <li className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-deck-teal)' }} /> Success fee · R$ 0 se não recuperar</li>
          </ul>
          <div className="mt-4 text-sm font-semibold" style={{ color: 'var(--color-deck-teal)' }}>É exatamente esse quadrante que ARRECADA.GOV ocupa.</div>
        </div>
      </motion.div>
    </SlideShell>
  );
}

/* ============================================================
   SLIDE 4 — PROBLEMA
   ============================================================ */
function Slide4() {
  const dores = [
    { v: 'R$ 5–8M/ano', t: 'Receita evaporando', d: 'Município de 200K hab. perde por prescrição — dinheiro que nunca mais volta.', icon: <TrendingUp size={20} /> },
    { v: 'R$ 5–10K', t: 'Custo > dívida', d: 'Execução fiscal custa mais que a dívida média de IPTU (R$ 1,5–3K). Cobrar dá prejuízo.', icon: <AlertTriangle size={20} /> },
    { v: '50.000', t: 'Processos por procurador', d: '3 procuradores cuidam de 50K processos. 16K/procurador — fisicamente impossível.', icon: <Users size={20} /> },
    { v: '0', t: 'Motor de cobrança no ERP', d: 'Betha, IPM, Elotech têm cadastro tributário. Nenhum tem IA de cobrança integrada.', icon: <Database size={20} /> },
    { v: '⚠', t: 'Risco político', d: 'IPTU é dívida de eleitor. Execução fiscal vira manchete local. O prefeito prefere arquivar.', icon: <XCircle size={20} /> },
  ];
  return (
    <SlideShell badge="04 · Problema" title="A receita está desaparecendo." accent="E ninguém pode impedir.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
        {dores.map((d, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.08 }}
            className="rounded-xl border p-5 flex flex-col" style={{ background: 'var(--color-deck-card)', borderColor: 'var(--color-deck-border)' }}>
            <div className="mb-3" style={{ color: 'var(--color-deck-danger)' }}>{d.icon}</div>
            <div className="font-serif text-2xl md:text-3xl font-bold leading-none mb-2" style={{ color: 'var(--color-deck-danger)' }}>{d.v}</div>
            <div className="text-sm font-semibold mt-1" style={{ color: 'var(--color-deck-text)' }}>{d.t}</div>
            <div className="text-xs mt-1.5 leading-relaxed" style={{ color: 'var(--color-deck-muted)' }}>{d.d}</div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
        className="mt-10 rounded-2xl border-2 p-8 lg:p-10" style={{ borderColor: 'var(--color-deck-danger)', background: 'rgba(244,107,93,0.05)' }}>
        <div className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--color-deck-danger)' }}>O custo da inércia · município 200K hab.</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center font-mono text-sm md:text-base">
          <div className="text-right">
            <div className="text-xs mb-1" style={{ color: 'var(--color-deck-muted)' }}>Estoque dívida ativa</div>
            <div className="font-serif text-2xl md:text-4xl font-bold" style={{ color: 'var(--color-deck-text)' }}>R$ 30–50M</div>
          </div>
          <div className="text-center">
            <div className="text-xs mb-1" style={{ color: 'var(--color-deck-muted)' }}>menos · prescrição em 5 anos</div>
            <div className="font-serif text-2xl md:text-4xl font-bold" style={{ color: 'var(--color-deck-danger)' }}>− R$ 25–40M</div>
          </div>
          <div className="text-left">
            <div className="text-xs mb-1" style={{ color: 'var(--color-deck-teal)' }}>= perdidos para sempre</div>
            <div className="font-serif text-3xl md:text-5xl font-bold" style={{ color: 'var(--color-deck-danger)' }}>R$ 25–40M</div>
          </div>
        </div>
      </motion.div>
    </SlideShell>
  );
}

/* ============================================================
   SLIDE 5 — SOLUÇÃO (Agente Conciliador)
   ============================================================ */
function Slide5() {
  const fluxo = [
    { n: '1', t: 'Conhece quem chamar', d: 'IA cruza CSV + dados públicos · filtra: vivo? localizável? pagador?', icon: <Search size={18} /> },
    { n: '2', t: 'Chama como humano', d: 'WhatsApp verificado · tom por perfil · não-SMS frio', icon: <MessageCircle size={18} /> },
    { n: '3', t: 'Escuta antes de propor', d: 'Hormozi CLOSER + Chris Voss · "Posso explicar as opções?"', icon: <Bot size={18} /> },
    { n: '4', t: 'Negocia personalizado', d: 'Desconto + parcelamento sob medida · Pay by Link na conversa', icon: <Sparkles size={18} /> },
    { n: '5', t: 'Recebe em 3 passos', d: 'Open Banking · paga no app do banco · reconciliação automática', icon: <Banknote size={18} /> },
  ];
  return (
    <SlideShell badge="05 · Solução" title="Um agente que cobra como gente boa —" accent="e converte como vendedor.">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 mb-10 text-base md:text-lg max-w-3xl" style={{ color: 'var(--color-deck-text-mid)' }}>
        Cobrança municipal não é caça — é conciliação. <span style={{ color: 'var(--color-deck-teal)' }}>~70% dos devedores pagam ao serem lembrados com respeito.</span> ARRECADA.GOV é construído nessa premissa.
      </motion.p>

      {/* Fluxo horizontal */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-10">
        {fluxo.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }}
            className="relative rounded-xl border p-5" style={{ background: 'var(--color-deck-card)', borderColor: 'var(--color-deck-border)' }}>
            <div className="flex items-center justify-between mb-3">
              <span className="font-serif text-3xl font-bold" style={{ color: 'var(--color-deck-teal-dim)' }}>{f.n}</span>
              <span style={{ color: 'var(--color-deck-teal)' }}>{f.icon}</span>
            </div>
            <div className="text-sm font-semibold" style={{ color: 'var(--color-deck-text)' }}>{f.t}</div>
            <div className="text-xs mt-1.5 leading-relaxed" style={{ color: 'var(--color-deck-muted)' }}>{f.d}</div>
            {i < 4 && (
              <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 items-center justify-center rounded-full z-10" style={{ background: 'var(--color-deck-bg)', border: '1px solid var(--color-deck-border)' }}>
                <ChevronRight size={12} style={{ color: 'var(--color-deck-teal)' }} />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Filtro 2 camadas */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.75 }}
          className="rounded-xl border p-6" style={{ borderColor: 'var(--color-deck-border)', background: 'var(--color-deck-card)' }}>
          <div className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--color-deck-teal)' }}>Diferencial · Filtro 2 camadas</div>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-lg flex flex-col items-center justify-center" style={{ background: 'rgba(0,200,150,0.12)', border: '1px solid var(--color-deck-teal-dim)' }}>
                <span className="text-xs font-bold uppercase" style={{ color: 'var(--color-deck-teal)' }}>Grátis</span>
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold" style={{ color: 'var(--color-deck-text)' }}>Camada 1 · dados grátis</div>
                <div className="text-xs" style={{ color: 'var(--color-deck-muted)' }}>CSV prefeitura · DataJud · SICONFI · portais públicos</div>
              </div>
            </div>
            <div className="flex justify-center"><ChevronRight size={16} className="rotate-90" style={{ color: 'var(--color-deck-muted)' }} /></div>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-lg flex flex-col items-center justify-center" style={{ background: 'rgba(245,179,76,0.12)', border: '1px solid rgba(245,179,76,0.3)' }}>
                <span className="text-xs font-bold uppercase" style={{ color: 'var(--color-deck-amber)' }}>Pago</span>
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold" style={{ color: 'var(--color-deck-text)' }}>Camada 2 · só após filtro</div>
                <div className="text-xs" style={{ color: 'var(--color-deck-muted)' }}>SERPRO · Serasa · Big Data Corp — só para perfis viáveis</div>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5 border-t text-sm" style={{ borderColor: 'var(--color-deck-border)', color: 'var(--color-deck-text-mid)' }}>
            <span style={{ color: 'var(--color-deck-teal)', fontWeight: 600 }}>Resultado:</span> custo operacional <span style={{ color: 'var(--color-deck-teal)', fontWeight: 600 }}>60–80% menor</span> que cobrança tradicional.
          </div>
        </motion.div>

        {/* Handoff humano */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.85 }}
          className="rounded-xl border p-6" style={{ borderColor: 'var(--color-deck-border)', background: 'var(--color-deck-card)' }}>
          <div className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--color-deck-amber)' }}>5 gatilhos de handoff humano</div>
          <div className="space-y-2.5">
            {[
              { g: 'Cidadão pede atendente', q: 'Atendente ARRECADA · N1' },
              { g: 'Dívida > R$ 20K · múltiplos parcelamentos', q: 'Especialista de negociação' },
              { g: 'Cidadão contesta a dívida', q: 'Equipa da prefeitura · N2' },
              { g: 'Chatbot loop (3 tentativas sem avanço)', q: 'Atendente ARRECADA' },
              { g: 'Menção a advogado, Procon, processo', q: 'Jurídico · N3 (régua é pausada)' },
            ].map((h, i) => (
              <div key={i} className="flex items-start gap-3 text-xs">
                <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: 'rgba(245,179,76,0.15)', color: 'var(--color-deck-amber)' }}>{i + 1}</span>
                <div className="flex-1">
                  <div style={{ color: 'var(--color-deck-text)' }}>{h.g}</div>
                  <div style={{ color: 'var(--color-deck-muted)' }}>→ {h.q}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

/* ============================================================
   SLIDE 6 — COMO SOLUCIONAMOS (IA First + Stack)
   ============================================================ */
function Slide6() {
  const camadas = [
    { n: 1, t: 'DataSync', d: 'Conecta com Betha · IPM · Elotech · CSV fallback. 80% do mercado coberto.', icon: <Database size={18} /> },
    { n: 2, t: 'Investigador Digital (IA)', d: 'SERPRO · Serasa · DataJud · Junta Comercial sob filtro 2 camadas', icon: <FileSearch size={18} /> },
    { n: 3, t: 'Classificador Comportamental (ML)', d: '6 perfis: ESQUECIDO · APERTADO · NEGOCIADOR · CONTUMAZ · DISPUTADOR · DESCONHECIDO', icon: <Brain size={18} /> },
    { n: 4, t: 'Negociador 24/7 (Chatbot WhatsApp)', d: 'Hormozi CLOSER + Chris Voss + Talia Wolf · tom por perfil · Pay by Link na conversa', icon: <MessageCircle size={18} /> },
    { n: 5, t: 'Open Banking (OFAI)', d: 'PIS · Pay by Link · Recurring Payments · Reconciliation API · 3 passos vs 7 do PIX', icon: <Banknote size={18} /> },
    { n: 6, t: 'Dashboard + Repasse', d: 'KPIs real-time · alerta prescrição · repasse 88/12 mensal automatizado', icon: <BarChart3 size={18} /> },
  ];
  return (
    <SlideShell badge="06 · Como Solucionamos" title="IA First. Stack integrado." accent="98/100 production-grade.">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 mt-4">
        {/* Stack 6 camadas */}
        <div>
          <div className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--color-deck-muted)' }}>Stack · 6 camadas integradas</div>
          <div className="relative">
            {camadas.map((c, i) => (
              <motion.div key={c.n} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.07 }}
                className="relative flex items-stretch gap-3 mb-2">
                <div className="flex-shrink-0 w-12 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center font-serif font-bold text-sm" style={{ background: 'rgba(0,200,150,0.1)', border: '1px solid var(--color-deck-teal-dim)', color: 'var(--color-deck-teal)' }}>{c.n}</div>
                  {i < camadas.length - 1 && <div className="flex-1 w-px mt-1" style={{ background: 'var(--color-deck-border)' }} />}
                </div>
                <div className="flex-1 pb-3">
                  <div className="rounded-lg border px-4 py-3" style={{ background: 'var(--color-deck-card)', borderColor: 'var(--color-deck-border)' }}>
                    <div className="flex items-center gap-2 mb-1">
                      <span style={{ color: 'var(--color-deck-teal)' }}>{c.icon}</span>
                      <span className="font-semibold text-sm" style={{ color: 'var(--color-deck-text)' }}>{c.t}</span>
                    </div>
                    <div className="text-xs" style={{ color: 'var(--color-deck-muted)' }}>{c.d}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4 princípios + Estado */}
        <div className="space-y-6">
          <div>
            <div className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--color-deck-muted)' }}>4 princípios IA First</div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { t: 'Filtro 2 camadas', d: 'Grátis → pago' },
                { t: 'Gatilhos por estágio', d: 'Escala custo por necessidade' },
                { t: 'Régua 5 etapas', d: 'Sempre cordial' },
                { t: 'IA First', d: 'Humano só onde IA não chega' },
              ].map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.07 }}
                  className="rounded-lg border p-3" style={{ background: 'rgba(0,200,150,0.04)', borderColor: 'var(--color-deck-teal-dim)' }}>
                  <div className="text-sm font-semibold" style={{ color: 'var(--color-deck-teal)' }}>{p.t}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--color-deck-text-mid)' }}>{p.d}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--color-deck-muted)' }}>Estado atual da plataforma</div>
            <div className="rounded-xl border overflow-hidden" style={{ borderColor: 'var(--color-deck-border)' }}>
              {[
                { m: 'Backend NestJS + Prisma + PostgreSQL', s: 'LIVE no VPS', ok: true },
                { m: 'Auth + RBAC + MFA + Multi-tenant', s: '12/12 smoke checks', ok: true },
                { m: 'DataSync · 80% do mercado', s: 'LIVE', ok: true },
                { m: 'Investigador Digital', s: 'Lógica completa · APIs em integração', ok: true },
                { m: 'Chatbot Negociador', s: 'Frameworks integrados', ok: true },
                { m: 'Open Banking (OFAI)', s: 'PSP LIVE · OFAI em integração', ok: true },
                { m: 'Dashboard + KPIs', s: 'LIVE · encriptação AES-256-GCM', ok: true },
              ].map((r, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 + i * 0.04 }}
                  className="flex items-center justify-between px-4 py-2.5 text-xs" style={{ borderTop: i ? '1px solid var(--color-deck-border)' : undefined }}>
                  <span className="flex items-center gap-2" style={{ color: 'var(--color-deck-text)' }}><CheckCircle2 size={12} style={{ color: 'var(--color-deck-teal)' }} /> {r.m}</span>
                  <span style={{ color: 'var(--color-deck-muted)' }}>{r.s}</span>
                </motion.div>
              ))}
              <div className="px-4 py-3 flex items-center justify-between" style={{ borderTop: '1px solid var(--color-deck-border)', background: 'rgba(0,200,150,0.06)' }}>
                <span className="text-sm font-semibold" style={{ color: 'var(--color-deck-teal)' }}>Score técnico de auditoria</span>
                <span className="font-serif text-xl font-bold" style={{ color: 'var(--color-deck-teal)' }}>98/100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}

/* ============================================================
   SLIDE 7 — RESULTADO (math literal · 50K habitantes)
   ============================================================ */
function Slide7() {
  const escalas = [
    { h: '50.000', l: 'R$ 1,76M – 3,96M', f: 'R$ 240K – 540K', hl: true },
    { h: '100.000', l: 'R$ 3,5M – 7,9M', f: 'R$ 480K – 1,08M' },
    { h: '200.000', l: 'R$ 7,0M – 15,8M', f: 'R$ 960K – 2,15M' },
    { h: '500.000', l: 'R$ 17,5M – 39,6M', f: 'R$ 2,4M – 5,4M' },
    { h: '1.000.000', l: 'R$ 35M – 79M', f: 'R$ 4,8M – 10,8M' },
  ];
  return (
    <SlideShell badge="07 · Resultado · 50K habitantes" title="Para cada 50 mil habitantes," accent="R$ 1,76 a 3,96 milhões líquidos no Ano 1.">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 mt-6">
        {/* Cálculo */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="rounded-2xl border p-6 lg:p-8" style={{ borderColor: 'var(--color-deck-teal-dim)', background: 'linear-gradient(180deg, rgba(0,200,150,0.05), transparent)' }}>
          <div className="text-xs uppercase tracking-widest mb-5" style={{ color: 'var(--color-deck-teal)' }}>Calculadora · cenário base (SICONFI + IEPTB)</div>
          <div className="space-y-3 font-mono text-sm">
            <Row k="Estoque dívida ativa acumulada" v="R$ 8 – 12 milhões" />
            <Row k="Prescreve em 12 meses" v="R$ 1,2 – 2,5M" tone="danger" />
            <div className="py-2"><div className="text-[11px] uppercase tracking-widest mb-2" style={{ color: 'var(--color-deck-muted)' }}>Recuperação combinada (Régua + Protesto seletivo)</div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg border py-2 px-2" style={{ borderColor: 'var(--color-deck-border)' }}>
                  <div className="text-[10px]" style={{ color: 'var(--color-deck-muted)' }}>Amigável</div>
                  <div className="font-bold" style={{ color: 'var(--color-deck-teal)' }}>15–22%</div>
                </div>
                <div className="rounded-lg border py-2 px-2" style={{ borderColor: 'var(--color-deck-border)' }}>
                  <div className="text-[10px]" style={{ color: 'var(--color-deck-muted)' }}>Protesto</div>
                  <div className="font-bold" style={{ color: 'var(--color-deck-teal)' }}>10–15%</div>
                </div>
                <div className="rounded-lg py-2 px-2" style={{ background: 'rgba(0,200,150,0.12)', border: '1px solid var(--color-deck-teal-dim)' }}>
                  <div className="text-[10px]" style={{ color: 'var(--color-deck-muted)' }}>Total</div>
                  <div className="font-bold" style={{ color: 'var(--color-deck-teal)' }}>25–30%</div>
                </div>
              </div>
            </div>
            <Row k="Valor recuperado · Ano 1" v="R$ 2,0 – 4,5M" tone="teal" big />
            <Row k="Fee ARRECADA · 12%" v="R$ 240K – 540K" />
            <div className="mt-4 pt-4 border-t-2" style={{ borderColor: 'var(--color-deck-teal-dim)' }}>
              <div className="text-[11px] uppercase tracking-widest mb-2" style={{ color: 'var(--color-deck-teal)' }}>Líquido para a prefeitura · 88%</div>
              <div className="font-serif text-4xl md:text-5xl font-bold leading-none" style={{ color: 'var(--color-deck-teal)' }}>
                R$ <Counter to={1.76} decimals={2} duration={1.6} /> M – <Counter to={3.96} decimals={2} duration={1.6} /> M
              </div>
              <div className="mt-2 text-xs" style={{ color: 'var(--color-deck-muted)' }}>Custo para a prefeitura: <span style={{ color: 'var(--color-deck-teal)', fontWeight: 600 }}>R$ 0</span></div>
            </div>
          </div>
        </motion.div>

        {/* Compare + Escala */}
        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}
            className="rounded-xl border p-5" style={{ borderColor: 'var(--color-deck-border)', background: 'var(--color-deck-card)' }}>
            <div className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--color-deck-muted)' }}>Comparação contundente</div>
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="rounded-lg p-3" style={{ background: 'rgba(244,107,93,0.08)', border: '1px solid rgba(244,107,93,0.2)' }}>
                <div className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--color-deck-danger)' }}>Sem ARRECADA</div>
                <div className="font-serif text-xl font-bold mt-1" style={{ color: 'var(--color-deck-danger)' }}>2–3%</div>
                <div className="text-[10px] mt-1" style={{ color: 'var(--color-deck-muted)' }}>R$ 160K – 360K</div>
              </div>
              <div className="rounded-lg p-3" style={{ background: 'rgba(0,200,150,0.1)', border: '1px solid var(--color-deck-teal-dim)' }}>
                <div className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--color-deck-teal)' }}>Com ARRECADA</div>
                <div className="font-serif text-xl font-bold mt-1" style={{ color: 'var(--color-deck-teal)' }}>25–30%</div>
                <div className="text-[10px] mt-1" style={{ color: 'var(--color-deck-text-mid)' }}>R$ 1,76M – 3,96M</div>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              <span style={{ color: 'var(--color-deck-text-mid)' }}>Multiplicador real: </span>
              <span className="font-bold" style={{ color: 'var(--color-deck-teal)' }}>10× receita · zero custo.</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
            className="rounded-xl border overflow-hidden" style={{ borderColor: 'var(--color-deck-border)' }}>
            <div className="px-4 py-3 text-xs uppercase tracking-widest" style={{ background: 'var(--color-deck-card)', color: 'var(--color-deck-muted)' }}>Escala por município</div>
            <table className="w-full text-xs">
              <thead>
                <tr style={{ color: 'var(--color-deck-muted)' }}>
                  <th className="text-left px-3 py-2 font-semibold">Habitantes</th>
                  <th className="text-left px-3 py-2 font-semibold">Líquido prefeitura/ano</th>
                  <th className="text-right px-3 py-2 font-semibold">Fee/ano</th>
                </tr>
              </thead>
              <tbody>
                {escalas.map((e, i) => (
                  <tr key={i} style={{ background: e.hl ? 'rgba(0,200,150,0.06)' : undefined, borderTop: '1px solid var(--color-deck-border)' }}>
                    <td className="px-3 py-2.5 font-mono" style={{ color: e.hl ? 'var(--color-deck-teal)' : 'var(--color-deck-text)' }}>{e.h}</td>
                    <td className="px-3 py-2.5 font-semibold" style={{ color: 'var(--color-deck-text)' }}>{e.l}</td>
                    <td className="px-3 py-2.5 text-right" style={{ color: 'var(--color-deck-text-mid)' }}>{e.f}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-4 py-3 text-[11px]" style={{ borderTop: '1px solid var(--color-deck-border)', background: 'rgba(0,200,150,0.04)', color: 'var(--color-deck-text-mid)' }}>
              Capital de porte médio = <span style={{ color: 'var(--color-deck-teal)', fontWeight: 600 }}>uma Série A inteira em ARR</span>.
            </div>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}

function Row({ k, v, tone, big }: { k: string; v: string; tone?: 'teal' | 'danger'; big?: boolean }) {
  const color = tone === 'teal' ? 'var(--color-deck-teal)' : tone === 'danger' ? 'var(--color-deck-danger)' : 'var(--color-deck-text)';
  return (
    <div className="flex items-center justify-between py-1.5" style={{ borderBottom: '1px dashed var(--color-deck-border)' }}>
      <span className="text-xs" style={{ color: 'var(--color-deck-muted)' }}>{k}</span>
      <span className={`font-semibold ${big ? 'text-base md:text-lg' : 'text-sm'}`} style={{ color }}>{v}</span>
    </div>
  );
}

/* ============================================================
   SLIDE 8 — PRAZO / PLUG-N-PLAY
   ============================================================ */
function Slide8() {
  const semanas = [
    { s: 'Sem 1', t: 'Contrato (CPSI ou Dispensa)' },
    { s: 'Sem 1–2', t: 'Onboarding técnico · sync inicial' },
    { s: 'Sem 2', t: 'Validação de dados com prefeitura' },
    { s: 'Sem 3', t: 'Primeiro SMS · régua inicia' },
    { s: 'Sem 4–5', t: 'Primeiros pagamentos via Open Banking' },
    { s: 'Sem 5+', t: 'Operação permanente · repasse mensal' },
  ];
  const garantias = [
    'Não instalamos servidor na prefeitura',
    'Não alteramos cadastro tributário (read-only)',
    'Não realocamos servidor público',
    'Não exigimos compra antecipada',
    'LGPD: ARRECADA operadora · prefeitura controladora',
    'Saída livre: 30 dias de aviso prévio',
  ];
  return (
    <SlideShell badge="08 · Plug-n-Play" title="A prefeitura envia uma planilha." accent="Em 45 dias, está recebendo.">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 mt-4">
        {/* Camada externa SVG diagram */}
        <div>
          <div className="text-xs uppercase tracking-widest mb-5" style={{ color: 'var(--color-deck-muted)' }}>Camada externa · sem interferência</div>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="rounded-2xl border p-6" style={{ borderColor: 'var(--color-deck-border)', background: 'var(--color-deck-card)' }}>
            <div className="grid grid-cols-[1fr_60px_1fr] gap-4 items-center">
              <div className="rounded-xl border p-4" style={{ borderColor: 'var(--color-deck-border)' }}>
                <div className="text-[10px] uppercase tracking-widest mb-3" style={{ color: 'var(--color-deck-muted)' }}>Sistema tributário atual</div>
                <div className="space-y-2 text-xs" style={{ color: 'var(--color-deck-text-mid)' }}>
                  <div>· Cadastro contribuinte</div>
                  <div>· Lançamentos IPTU/ISS</div>
                  <div>· Dívida ativa</div>
                  <div>· Procuradoria</div>
                </div>
                <div className="mt-4 text-[10px] font-semibold" style={{ color: 'var(--color-deck-text-mid)' }}>FICA INTACTO</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="text-[9px] uppercase tracking-widest" style={{ color: 'var(--color-deck-muted)' }}>API</div>
                <ChevronRight size={20} style={{ color: 'var(--color-deck-teal)' }} />
                <div className="text-[9px] uppercase tracking-widest mt-1" style={{ color: 'var(--color-deck-muted)' }}>read-only</div>
              </div>
              <div className="rounded-xl border-2 p-4" style={{ borderColor: 'var(--color-deck-teal-dim)', background: 'rgba(0,200,150,0.05)' }}>
                <div className="text-[10px] uppercase tracking-widest mb-3" style={{ color: 'var(--color-deck-teal)' }}>ARRECADA.GOV</div>
                <div className="space-y-2 text-xs" style={{ color: 'var(--color-deck-text)' }}>
                  <div>· Investigador IA</div>
                  <div>· Chatbot Negociador</div>
                  <div>· Open Banking</div>
                  <div>· Dashboard</div>
                </div>
                <div className="mt-4 text-[10px] font-semibold" style={{ color: 'var(--color-deck-teal)' }}>ROTA ALTERNATIVA</div>
              </div>
            </div>
          </motion.div>

          <div className="mt-6 text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--color-deck-muted)' }}>6 garantias contratuais</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {garantias.map((g, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.06 }}
                className="flex items-start gap-2 text-xs px-3 py-2 rounded-lg" style={{ background: 'rgba(0,200,150,0.04)' }}>
                <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-deck-teal)' }} />
                <span style={{ color: 'var(--color-deck-text-mid)' }}>{g}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline + base legal */}
        <div>
          <div className="text-xs uppercase tracking-widest mb-5" style={{ color: 'var(--color-deck-muted)' }}>Cronograma · semana a semana</div>
          <div className="space-y-2 mb-8">
            {semanas.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.08 }}
                className="flex items-stretch gap-3">
                <div className="flex-shrink-0 w-20 rounded-lg flex items-center justify-center text-xs font-bold" style={{ background: i < 2 ? 'rgba(0,200,150,0.12)' : 'var(--color-deck-card)', border: '1px solid var(--color-deck-border)', color: i < 2 ? 'var(--color-deck-teal)' : 'var(--color-deck-text-mid)' }}>{s.s}</div>
                <div className="flex-1 rounded-lg border px-4 py-2.5 text-sm flex items-center" style={{ background: 'var(--color-deck-card)', borderColor: 'var(--color-deck-border)', color: 'var(--color-deck-text)' }}>{s.t}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--color-deck-muted)' }}>3 vias legais · sem licitação tradicional</div>
          <div className="space-y-2">
            {[
              { v: 'CPSI', l: 'LC 182/2021 art. 12-17', t: '12+12 meses · sem licitação', pill: 'Recomendada', tone: 'teal' as const },
              { v: 'Dispensa', l: 'Art. 75 Lei 14.133/2021', t: '5–15 dias · até R$ 59.906', pill: 'Piloto', tone: 'amber' as const },
              { v: 'Sandbox', l: 'LC 182/2021 + lei municipal', t: 'Curitiba, Rio, outros', pill: 'Variável', tone: 'mute' as const },
            ].map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 + i * 0.08 }}
                className="rounded-lg border px-4 py-3 flex items-center gap-4" style={{ background: 'var(--color-deck-card)', borderColor: 'var(--color-deck-border)' }}>
                <div className="flex-shrink-0">
                  <div className="font-serif text-base font-bold" style={{ color: 'var(--color-deck-text)' }}>{r.v}</div>
                  <div className="text-[10px]" style={{ color: 'var(--color-deck-muted)' }}>{r.l}</div>
                </div>
                <div className="flex-1 text-xs" style={{ color: 'var(--color-deck-text-mid)' }}>{r.t}</div>
                <Pill tone={r.tone}>{r.pill}</Pill>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideShell>
  );
}

/* ============================================================
   SLIDE 9 — FECHAMENTO
   ============================================================ */
function Slide9() {
  const ventos = [
    { icon: <Wind size={20} />, t: 'Open Banking regulamentado', d: 'Pagamento A2A é realidade técnica e jurídica desde 2024 (BCB). Stack ARRECADA já é nativo.' },
    { icon: <TrendingUp size={20} />, t: 'Reforma Tributária CBS/IBS', d: 'Estados e municípios financeiramente apavorados. Toda receita perdida virou prioridade política.' },
    { icon: <AlertTriangle size={20} />, t: 'Crise fiscal municipal', d: '82% dos municípios dependem de transferências. Receita própria é a única alavanca do prefeito.' },
  ];
  const moats = [
    'Stack proprietário 98/100 · 18 sprints',
    'Adapters Betha/IPM/Elotech prontos · 80% mercado',
    'Frameworks chatbot integrados · não-regex',
    'Modelo success fee · único no mercado',
    'LGPD nativa · ROPA · DPO · CDC art. 42',
    'IA First + filtro 2 camadas · custos 60–80% menores',
  ];
  const parceiros = [
    { who: 'Investidor-anjo (R$ 500K-1,5M)', fit: 'Seed · 10-20% equity', win: 'Comp 1Doc: 4-6× ARR · target M&A R$ 35-80M em 3-5 anos', icon: <Sparkles size={18} /> },
    { who: 'Sócio operacional', fit: 'Equity + sucesso comercial', win: 'Cada município médio = R$ 240-540K fee/ano recorrente', icon: <Briefcase size={18} /> },
    { who: 'Sócio jurídico/contratual', fit: 'Equity por estrutura legal', win: 'Estrutura legal vira moat (CPSI, LGPD, contratos)', icon: <Shield size={18} /> },
    { who: 'Integrador GovTech (IMA-like)', fit: 'Revenue share', win: 'Carteira instantânea · 800+ municípios · venda cruzada', icon: <Building2 size={18} /> },
    { who: 'OFAI (Open Banking)', fit: 'Parceria estratégica', win: 'Volume A2A garantido · expansão GovTech B2B', icon: <Banknote size={18} /> },
  ];
  return (
    <SlideShell badge="09 · Fechamento" title="R$ 500B esperando. 5.570 municípios." accent="Quem entra agora entra como sócio.">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-6 mb-8">
        {ventos.map((v, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.1 }}
            className="rounded-xl border p-5" style={{ background: 'var(--color-deck-card)', borderColor: 'var(--color-deck-border)' }}>
            <div className="mb-2" style={{ color: 'var(--color-deck-teal)' }}>{v.icon}</div>
            <div className="text-sm font-semibold mb-1" style={{ color: 'var(--color-deck-text)' }}>{v.t}</div>
            <div className="text-xs" style={{ color: 'var(--color-deck-muted)' }}>{v.d}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--color-deck-muted)' }}>6 moats</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {moats.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + i * 0.06 }}
                className="flex items-start gap-2 text-xs px-3 py-2.5 rounded-lg border" style={{ background: 'var(--color-deck-card)', borderColor: 'var(--color-deck-border)' }}>
                <Award size={14} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-deck-teal)' }} />
                <span style={{ color: 'var(--color-deck-text-mid)' }}>{m}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--color-deck-muted)' }}>Tese por tipo de parceiro</div>
          <div className="space-y-2">
            {parceiros.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.07 }}
                className="rounded-lg border p-3 flex items-start gap-3 text-xs" style={{ background: 'var(--color-deck-card)', borderColor: 'var(--color-deck-border)' }}>
                <span className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-deck-teal)' }}>{p.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="font-semibold" style={{ color: 'var(--color-deck-text)' }}>{p.who}</span>
                    <Pill tone="teal">{p.fit}</Pill>
                  </div>
                  <div style={{ color: 'var(--color-deck-muted)' }}>{p.win}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}
        className="mt-10 rounded-2xl border-2 p-6 lg:p-8 text-center relative overflow-hidden" style={{ borderColor: 'var(--color-deck-teal-dim)', background: 'linear-gradient(135deg, rgba(0,200,150,0.08), rgba(20,232,184,0.04))' }}>
        <Rocket className="absolute top-4 right-4 opacity-10" size={80} style={{ color: 'var(--color-deck-teal)' }} />
        <div className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--color-deck-teal)' }}>Próximo passo concreto</div>
        <div className="font-serif text-2xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-deck-text)' }}>Reunião · NDA · Term sheet em 14 dias</div>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <a href="mailto:contato@arrecadagov.com.br" className="px-6 py-3 rounded-lg font-semibold text-sm transition-colors" style={{ background: 'var(--color-deck-teal)', color: 'var(--color-deck-bg)' }}>contato@arrecadagov.com.br</a>
          <a href="http://31.97.53.231:3333" target="_blank" className="px-6 py-3 rounded-lg font-semibold text-sm border transition-colors" style={{ borderColor: 'var(--color-deck-border-strong)', color: 'var(--color-deck-text)' }}>Demo ao vivo · 31.97.53.231:3333</a>
        </div>
        <div className="mt-6 text-[10px] uppercase tracking-widest" style={{ color: 'var(--color-deck-muted)' }}>
          Open Finance AI · IA conciliadora proprietária · Stack production-grade · LGPD compliant · Open Banking regulado pelo BCB
        </div>
      </motion.div>
    </SlideShell>
  );
}

/* ============================================================
   MAIN COMPONENT — Navigation + Slide Switcher
   ============================================================ */
const SLIDES = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9];
const TITLES = ['Capa', 'Mercado', 'Cenário', 'Problema', 'Solução', 'Como solucionamos', 'Resultado', 'Plug-n-Play', 'Fechamento'];

export default function PitchParceiros() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  // Add/remove deck-mode class on body
  useEffect(() => {
    document.body.classList.add('deck-mode');
    document.title = 'ARRECADA.GOV · Pitch Parceiros';
    return () => { document.body.classList.remove('deck-mode'); };
  }, []);

  const go = (delta: number) => {
    const next = Math.max(0, Math.min(TOTAL_SLIDES - 1, current + delta));
    if (next !== current) {
      setDirection(delta);
      setCurrent(next);
    }
  };

  // Keyboard nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); go(1); }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); go(-1); }
      else if (e.key === 'Home') { setDirection(-1); setCurrent(0); }
      else if (e.key === 'End') { setDirection(1); setCurrent(TOTAL_SLIDES - 1); }
      else if (e.key === 'p' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); window.print(); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [current]);

  const Slide = SLIDES[current];

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-deck-bg)', color: 'var(--color-deck-text)' }}>
      {/* Top nav bar */}
      <div className="deck-nav fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 backdrop-blur-md" style={{ background: 'rgba(10,25,41,0.78)', borderBottom: '1px solid var(--color-deck-border)' }}>
        <a href="/" className="flex items-center gap-2 text-sm hover:opacity-80" style={{ color: 'var(--color-deck-text-mid)' }}>
          <div className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs" style={{ background: 'var(--color-deck-teal)', color: 'var(--color-deck-bg)' }}>A</div>
          <span className="font-serif font-bold" style={{ color: 'var(--color-deck-text)' }}>ARRECADA<span style={{ color: 'var(--color-deck-teal)' }}>.GOV</span></span>
          <span className="hidden md:inline ml-3 text-[10px] uppercase tracking-widest" style={{ color: 'var(--color-deck-muted)' }}>· Pitch Parceiros</span>
        </a>
        <div className="hidden md:flex items-center gap-1.5">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className="group relative transition-all" title={`${i + 1}. ${TITLES[i]}`}>
              <span className={`block rounded-full transition-all ${i === current ? 'w-8 h-1.5' : 'w-1.5 h-1.5 hover:w-3'}`}
                style={{ background: i === current ? 'var(--color-deck-teal)' : 'var(--color-deck-border-strong)' }} />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => window.print()} className="hidden md:flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border hover:opacity-80" style={{ borderColor: 'var(--color-deck-border-strong)', color: 'var(--color-deck-text-mid)' }} title="Imprimir / Exportar PDF (Ctrl+P)">
            <Printer size={12} /> PDF
          </button>
        </div>
      </div>

      {/* Slide stage */}
      <div className="pt-16 pb-20">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction >= 0 ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? -30 : 30 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}>
            <Slide />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom navigation */}
      <div className="deck-footer fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-3 backdrop-blur-md" style={{ background: 'rgba(10,25,41,0.78)', borderTop: '1px solid var(--color-deck-border)' }}>
        <div className="text-[11px] uppercase tracking-widest flex items-center gap-3" style={{ color: 'var(--color-deck-muted)' }}>
          <span className="font-mono">{String(current + 1).padStart(2, '0')} / {String(TOTAL_SLIDES).padStart(2, '0')}</span>
          <span className="hidden md:inline">·</span>
          <span className="hidden md:inline" style={{ color: 'var(--color-deck-text-mid)' }}>{TITLES[current]}</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => go(-1)} disabled={current === 0}
            className="w-10 h-10 rounded-lg border flex items-center justify-center disabled:opacity-30 hover:opacity-80 transition-opacity"
            style={{ borderColor: 'var(--color-deck-border-strong)', color: 'var(--color-deck-text)' }}>
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => go(1)} disabled={current === TOTAL_SLIDES - 1}
            className="w-10 h-10 rounded-lg flex items-center justify-center disabled:opacity-30 hover:opacity-80 transition-opacity"
            style={{ background: 'var(--color-deck-teal)', color: 'var(--color-deck-bg)' }}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
