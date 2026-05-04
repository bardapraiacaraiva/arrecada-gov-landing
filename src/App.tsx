import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Shield, Brain, MessageCircle, FileSearch, Smartphone, BarChart3, ChevronRight, CheckCircle2, XCircle, Building2, Users, Server, ClipboardList, ArrowRight, Zap, Lock, Target, Clock, Handshake } from 'lucide-react';

function Section({ children, className = '', delay = 0, id }: { children: React.ReactNode; className?: string; delay?: number; id?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.section ref={ref} id={id} initial={{ opacity: 0, y: 60 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: 'easeOut' }} className={className}>
      {children}
    </motion.section>
  );
}

function StatCard({ value, label, color = 'accent' }: { value: string; label: string; color?: string }) {
  const colors: Record<string, string> = { accent: 'text-accent', danger: 'text-danger', warn: 'text-warn', blue: 'text-blue' };
  return (
    <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform">
      <div className={`text-3xl md:text-4xl font-bold ${colors[color]}`}>{value}</div>
      <div className="text-xs text-muted mt-2 uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function App() {
  return (
    <div className="overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="glass rounded-xl px-5 py-3">
            <span className="font-bold text-lg tracking-widest text-accent">ARRECADA</span>
            <span className="text-muted">.GOV</span>
          </div>
          <a href="#contato" className="glass-accent rounded-full px-6 py-3 text-sm font-semibold text-accent hover:bg-accent/20 transition-colors hidden md:block">
            Agendar Demonstração
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center relative px-6 pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="glass-accent rounded-full px-5 py-2 inline-flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-accent">Certificado por parceiro tecnológico oficial</span>
            </div>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            Sua prefeitura está{' '}<span className="gradient-text-danger">perdendo milhões</span><br />em dívida ativa
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10">
            Recuperamos receita municipal com inteligência artificial — sem custo para a prefeitura.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-col md:flex-row gap-4 justify-center mb-16">
            <a href="#contato" className="bg-accent text-ink px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-accent-dark transition-colors group">
              Solicitar Demonstração <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a href="#como-funciona" className="glass rounded-full px-8 py-4 font-semibold hover:bg-white/10 transition-colors text-center">Como Funciona</a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            <StatCard value="40-70%" label="Taxa de recuperação" />
            <StatCard value="R$ 0" label="Custo inicial" />
            <StatCard value="30 dias" label="Para começar" />
          </motion.div>
        </div>
      </section>

      <div className="line-glow max-w-4xl mx-auto" />

      {/* PROBLEMA */}
      <Section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3 text-center">O Problema</p>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Sua prefeitura perde receita <span className="gradient-text-danger">todos os dias</span></h2>
          <p className="text-muted text-center mb-16 max-w-xl mx-auto">Dados reais de municípios brasileiros</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: 'R$ 30-50M', label: 'Dívida Ativa', desc: 'Anos de tributos não cobrados', color: 'danger' },
              { value: 'R$ 5-8M', label: 'Prescrição/ano', desc: 'Dinheiro que desaparece para sempre', color: 'danger' },
              { value: '2-3%', label: 'Recuperação', desc: 'Procuradoria sobrecarregada', color: 'warn' },
              { value: 'R$ 5-10K', label: 'Custo Execução', desc: 'Mais caro que a dívida', color: 'warn' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass-danger rounded-2xl p-6 hover:scale-105 transition-transform">
                <div className={`text-2xl md:text-3xl font-bold ${item.color === 'danger' ? 'text-danger' : 'text-warn'}`}>{item.value}</div>
                <div className="font-semibold mt-2 text-sm">{item.label}</div>
                <div className="text-xs text-muted mt-1">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <div className="line-glow max-w-4xl mx-auto" />

      {/* SOLUÇÃO */}
      <Section className="py-24 px-6" id="como-funciona">
        <div className="max-w-6xl mx-auto">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3 text-center">A Solução</p>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Recuperação inteligente <span className="gradient-text">com IA</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <FileSearch size={28} />, title: 'Investigador Digital', desc: 'IA investiga: vivo? Onde mora? Patrimônio? Melhor canal?' },
              { icon: <Brain size={28} />, title: 'Perfil Comportamental', desc: 'Classifica e adapta abordagem por perfil do devedor.' },
              { icon: <MessageCircle size={28} />, title: 'Negociador 24/7', desc: 'Chatbot WhatsApp negocia e gera PIX a qualquer hora.' },
              { icon: <Shield size={28} />, title: 'Protesto Automático', desc: 'Remessa CRA automática. R$ 20-50 vs R$ 5-10K judicial.' },
              { icon: <Smartphone size={28} />, title: 'Pagamento Digital', desc: 'PIX, boleto, parcelamento. Tudo pelo celular.' },
              { icon: <BarChart3 size={28} />, title: 'Dashboard Tempo Real', desc: 'Quanto recuperou, quanto falta, prescrição iminente.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 hover:border-accent/30 transition-all group">
                <div className="text-accent mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <div className="line-glow max-w-4xl mx-auto" />

      {/* JORNADA */}
      <Section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">A jornada do contribuinte</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-accent via-blue to-accent rounded-full" />
            {[
              { emoji: '👋', title: 'Acolhimento', quote: '"Encontrei uma solução para te ajudar."' },
              { emoji: '👂', title: 'Escuta', quote: '"Qual sua situação hoje?"' },
              { emoji: '🎁', title: 'Solução pessoal', quote: '"No SEU caso, consegui 20% de desconto."' },
              { emoji: '✅', title: 'Resolução', quote: '"CPF limpo, família tranquila."' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="glass rounded-2xl p-6 text-center relative z-10">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h4 className="font-bold mb-2 text-sm">{item.title}</h4>
                <p className="text-xs text-muted italic">{item.quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* COMPROMISSOS */}
      <Section className="py-24 px-6 bg-gradient-to-b from-ink-light to-ink">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Nossos 6 compromissos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: <XCircle size={20} />, title: 'Nunca humilhamos.', desc: 'Dignidade sempre.' },
              { icon: <Lock size={20} />, title: 'Nunca expomos.', desc: 'Dados 100% sigilosos.' },
              { icon: <Clock size={20} />, title: 'Nunca pressionamos.', desc: 'Porta sempre aberta.' },
              { icon: <Target size={20} />, title: 'Sempre personalizamos.', desc: 'Proposta para cada realidade.' },
              { icon: <Zap size={20} />, title: 'Sempre facilitamos.', desc: 'Celular. Zero burocracia.' },
              { icon: <Handshake size={20} />, title: 'Sempre do lado do cidadão.', desc: 'Melhor saída, não a mais cara.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass-accent rounded-xl p-5 flex items-start gap-4">
                <div className="text-accent mt-0.5">{item.icon}</div>
                <div><h4 className="font-bold text-sm">{item.title}</h4><p className="text-xs text-muted mt-1">{item.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <div className="line-glow max-w-4xl mx-auto" />

      {/* ZERO IMPACTO */}
      <Section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3 text-center">Zero Impacto</p>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Resolvemos sem <span className="gradient-text">interferência</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_80px_1fr] gap-4 items-center">
            <div className="glass rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-5 bg-ink-light px-3 py-1 rounded-full text-[10px] text-muted uppercase tracking-widest border border-white/10">Prefeitura</div>
              <div className="space-y-3 mt-4">
                {[{ icon: <Building2 size={18}/>, l: 'Sistema Tributário', s: 'Betha / IPM / Elotech' },{ icon: <Users size={18}/>, l: 'Equipa', s: 'Mesmas pessoas' },{ icon: <Server size={18}/>, l: 'TI', s: 'Nada instalado' },{ icon: <ClipboardList size={18}/>, l: 'Processos', s: 'Tudo igual' }].map((x,i)=>(
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                    <span className="text-muted">{x.icon}</span>
                    <div className="flex-1"><div className="text-sm font-semibold">{x.l}</div><div className="text-[11px] text-muted">{x.s}</div></div>
                    <span className="text-[10px] bg-accent/10 text-accent px-2 py-1 rounded-full font-semibold">Intocado ✓</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:flex flex-col items-center gap-2 text-muted">
              <span className="text-[10px]">planilha</span><ArrowRight className="text-accent" size={24}/><ArrowRight className="text-warn rotate-180" size={24}/><span className="text-[10px]">receita</span>
            </div>
            <div className="bg-gradient-to-br from-ink-card to-ink-light rounded-2xl p-6 border border-accent/20 relative">
              <div className="absolute -top-3 left-5 bg-accent px-3 py-1 rounded-full text-[10px] text-ink font-bold uppercase tracking-widest">ARRECADA.GOV</div>
              <div className="space-y-3 mt-4">
                {[{ icon: <FileSearch size={18}/>, l: 'Investigação IA' },{ icon: <MessageCircle size={18}/>, l: 'Negociação WhatsApp' },{ icon: <Smartphone size={18}/>, l: 'PIX e Boleto' },{ icon: <BarChart3 size={18}/>, l: 'Dashboard' }].map((x,i)=>(
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                    <span className="text-accent">{x.icon}</span><span className="text-sm font-semibold">{x.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="glass-accent rounded-2xl p-6 mt-8 text-center">
            <p className="font-bold text-lg">A prefeitura envia uma planilha. Nós devolvemos receita.</p>
            <p className="text-sm text-muted mt-2">Nenhum sistema tocado. Nenhum servidor instalado. Nenhum funcionário realocado.</p>
          </div>
        </div>
      </Section>

      <div className="line-glow max-w-4xl mx-auto" />

      {/* PRICING */}
      <Section className="py-24 px-6">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Zero risco</h2>
          <div className="glass rounded-3xl overflow-hidden">
            <div className="bg-gradient-to-r from-accent-dark to-accent p-8 text-center text-ink">
              <div className="text-sm font-semibold uppercase tracking-widest mb-2">Success Fee</div>
              <div className="text-6xl font-bold">12%</div>
              <div className="text-sm opacity-80 mt-1">sobre o valor recuperado</div>
            </div>
            <div className="p-8 space-y-3">
              <div className="glass-accent rounded-xl p-4 text-center font-bold text-accent text-sm">Não recuperou = não paga</div>
              {['Sem taxa de adesão','Sem mensalidade','Sem implantação','Sem prazo mínimo','Plataforma completa','Investigador Digital','Suporte dedicado','Treinamento','Migração de dados'].map((t,i)=>(
                <div key={i} className="flex items-center gap-3 py-2 border-b border-white/5"><CheckCircle2 size={16} className="text-accent flex-shrink-0"/><span className="text-sm">{t}</span></div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <div className="line-glow max-w-4xl mx-auto" />

      {/* ROI */}
      <Section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Projeção — município 200K hab</h2>
          <div className="glass rounded-2xl overflow-hidden">
            {[['Dívida ativa','R$ 32.000.000'],['Prescrevendo 12 meses','R$ 5.200.000'],['Protestadas (ano 1)','8.000'],['Recuperação','40-50%'],['Recuperado','R$ 6.400.000'],['Fee 12%','R$ 768.000']].map(([l,v],i)=>(
              <div key={i} className="flex justify-between px-6 py-4 border-b border-white/5"><span className="text-sm text-muted">{l}</span><span className="font-semibold">{v}</span></div>
            ))}
            <div className="flex justify-between px-6 py-5 bg-accent/10"><span className="font-bold text-accent">Líquido prefeitura</span><span className="font-bold text-2xl text-accent">R$ 5.632.000</span></div>
          </div>
          <p className="text-center text-sm text-muted mt-6">Dados calibrados com SICONFI (Tesouro Nacional)</p>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-24 px-6 relative" id="contato">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold mb-6">
            Recupere a receita que está <span className="gradient-text">perdendo</span>
          </motion.h2>
          <p className="text-muted text-lg mb-10">Demonstração gratuita. Sem compromisso.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="https://wa.me/5519999999999?text=Quero%20demonstração%20ARRECADA.GOV" className="bg-accent text-ink px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-accent-dark transition-all group shadow-[0_0_40px_rgba(26,188,156,0.3)]">
              Agendar Demonstração <ChevronRight className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="http://31.97.53.231:3333/agente.html" target="_blank" className="glass-accent rounded-full px-10 py-5 font-bold text-accent hover:bg-accent/10 transition-colors">Ver Demo</a>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <p className="font-bold text-accent">ARRECADA.GOV</p>
        <p className="text-xs text-muted mt-2">Recuperação Inteligente de Receita Municipal</p>
        <p className="text-[10px] text-muted/50 mt-4">© 2026 ARRECADA.GOV · LGPD</p>
      </footer>
    </div>
  );
}
