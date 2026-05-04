import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Shield, Brain, MessageCircle, FileSearch, Smartphone, BarChart3, ChevronRight, CheckCircle2, Building2, Users, Server, ClipboardList, ArrowRight } from 'lucide-react';

function S({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: '-80px' });
  return <motion.section ref={ref} id={id} initial={{ opacity: 0, y: 40 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className={className}>{children}</motion.section>;
}

export default function App() {
  return (
    <div>

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">A</span></div>
            <span className="font-serif text-xl text-navy font-bold tracking-tight">ARRECADA.GOV</span>
          </div>
          <a href="#contato" className="bg-navy text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-navy-light transition-colors hidden md:block">Solicitar Demonstração</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-muted uppercase tracking-widest mb-6">Recuperação de Receita Municipal</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl leading-tight text-navy mb-8">
            Sua prefeitura perde<br /><span className="text-danger">milhões por ano</span> em<br />dívida ativa prescrita.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg text-slate max-w-2xl mb-10 leading-relaxed">
            Recuperamos receita municipal com inteligência artificial. Sem custo para a prefeitura — você só paga sobre o que for efetivamente recuperado.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#contato" className="bg-navy text-white px-8 py-4 rounded text-base font-medium hover:bg-navy-light transition-colors inline-flex items-center gap-2 justify-center">
              Solicitar Demonstração <ChevronRight size={18} />
            </a>
            <a href="#solucao" className="border border-border px-8 py-4 rounded text-base font-medium text-navy hover:bg-warm transition-colors text-center">Como Funciona</a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="grid grid-cols-3 gap-8 max-w-lg">
            {[['40–70%','Taxa de\nrecuperação'],['R$ 0','Custo inicial\npara o município'],['30 dias','Para começar\na recuperar']].map(([v,l],i) => (
              <div key={i}><div className="font-serif text-2xl md:text-3xl text-navy font-bold">{v}</div><div className="text-xs text-muted mt-1 whitespace-pre-line">{l}</div></div>
            ))}
          </motion.div>
        </div>
      </section>

      <hr className="border-border max-w-6xl mx-auto" />

      {/* PROBLEMA */}
      <S className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-muted uppercase tracking-widest mb-3">O Problema</p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">Receita que desaparece todos os dias</h2>
          <p className="text-slate mb-12 max-w-xl">Dados reais de municípios brasileiros com 200 mil habitantes.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { v: 'R$ 30–50M', t: 'Dívida Ativa Acumulada', d: 'Anos de tributos sem cobrança efetiva.' },
              { v: 'R$ 5–8M/ano', t: 'Prescrição Anual', d: 'Após 5 anos, a dívida prescreve. O dinheiro desaparece.' },
              { v: '2–3%', t: 'Taxa de Recuperação', d: 'Procuradoria com 3 advogados para 50 mil processos.' },
              { v: 'R$ 5–10K', t: 'Custo por Execução Fiscal', d: 'Cada processo custa mais que a própria dívida.' },
            ].map((c, i) => (
              <div key={i} className="bg-danger-bg border border-danger/10 rounded-lg p-6">
                <div className="font-serif text-2xl text-danger font-bold mb-2">{c.v}</div>
                <div className="font-medium text-sm text-navy mb-1">{c.t}</div>
                <div className="text-xs text-muted">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </S>

      <hr className="border-border max-w-6xl mx-auto" />

      {/* SOLUÇÃO */}
      <S className="py-20 px-6" id="solucao">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-muted uppercase tracking-widest mb-3">A Solução</p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">Recuperação inteligente com IA</h2>
          <p className="text-slate mb-12 max-w-xl">Protesto extrajudicial automatizado, negociação por inteligência artificial e pagamento digital.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <FileSearch size={22} />, t: 'Investigador Digital', d: 'Antes de cobrar, a IA investiga: status vital, contacto actualizado, patrimônio, perfil.' },
              { icon: <Brain size={22} />, t: 'Perfil Comportamental', d: 'Classifica cada devedor e adapta tom, canal, horário e proposta de pagamento.' },
              { icon: <MessageCircle size={22} />, t: 'Agente Reconciliador 24/7', d: 'Negociação humanizada por WhatsApp. O contribuinte parcela e gera PIX a qualquer hora.' },
              { icon: <Shield size={22} />, t: 'Protesto Automático', d: 'Remessa CRA para protesto extrajudicial. R$ 20–50 vs R$ 5–10K de execução.' },
              { icon: <Smartphone size={22} />, t: 'Pagamento Digital', d: 'PIX, boleto, parcelamento online. Tudo pelo celular, sem ir à prefeitura.' },
              { icon: <BarChart3 size={22} />, t: 'Dashboard em Tempo Real', d: 'Quanto recuperou, quanto falta, maiores devedores, prescrição iminente.' },
            ].map((c, i) => (
              <div key={i} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="text-blue mb-3">{c.icon}</div>
                <h3 className="font-semibold text-navy mb-2">{c.t}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </S>

      <hr className="border-border max-w-6xl mx-auto" />

      {/* JORNADA */}
      <S className="py-20 px-6 bg-warm">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-muted uppercase tracking-widest mb-3">A Abordagem</p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-12">A jornada do contribuinte</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-0">
            {[
              { n: 'I', t: 'Acolhimento', d: 'Contacto respeitoso, identificação clara, sem pressão. O contribuinte decide se quer ouvir.' },
              { n: 'II', t: 'Escuta', d: 'Entendemos a realidade financeira antes de propor qualquer solução.' },
              { n: 'III', t: 'Solução personalizada', d: 'Desconto e parcelamento calculados para o perfil específico do contribuinte.' },
              { n: 'IV', t: 'Resolução', d: 'Pagamento digital, quitação imediata, CPF regularizado.' },
            ].map((c, i) => (
              <div key={i} className={`bg-white p-8 ${i < 3 ? 'md:border-r' : ''} border-b md:border-b-0 border-border`}>
                <div className="font-serif text-2xl text-navy/15 font-bold mb-4">{c.n}</div>
                <h4 className="font-semibold text-navy mb-2 text-sm uppercase tracking-wider">{c.t}</h4>
                <p className="text-sm text-muted leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </S>

      {/* COMPROMISSOS */}
      <S className="py-20 px-6 bg-navy text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">Nossos compromissos com o cidadão</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              ['Nunca humilhamos.', 'Dignidade independente do valor.'],
              ['Nunca expomos.', 'Dados 100% sigilosos.'],
              ['Nunca pressionamos.', '"Agora não" é respeitado.'],
              ['Sempre personalizamos.', 'Proposta certa para cada realidade.'],
              ['Sempre facilitamos.', 'Celular. Zero burocracia.'],
              ['Sempre do lado do cidadão.', 'A melhor saída — não a mais cara.'],
            ].map(([t, d], i) => (
              <div key={i} className="flex items-start gap-3 py-3 border-b border-white/10">
                <CheckCircle2 size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <div><span className="font-semibold text-sm">{t}</span> <span className="text-sm text-white/60">{d}</span></div>
              </div>
            ))}
          </div>
        </div>
      </S>

      <hr className="border-border max-w-6xl mx-auto" />

      {/* ZERO IMPACTO */}
      <S className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-muted uppercase tracking-widest mb-3">Zero Impacto</p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">Resolvemos sem interferência</h2>
          <p className="text-slate mb-12 max-w-xl">O ARRECADA.GOV é um serviço externo. Não substitui, não altera, não interfere em nada que já existe.</p>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_60px_1fr] gap-6 items-center">
            <div className="border border-border rounded-lg p-6">
              <p className="text-xs text-muted uppercase tracking-widest mb-4">Prefeitura — nada muda</p>
              {[
                { icon: <Building2 size={18}/>, l: 'Sistema Tributário', s: 'Betha / IPM / Elotech' },
                { icon: <Users size={18}/>, l: 'Equipa da Fazenda', s: 'Mesmas pessoas, mesmas funções' },
                { icon: <Server size={18}/>, l: 'Servidores e TI', s: 'Nada instalado' },
                { icon: <ClipboardList size={18}/>, l: 'Processos e rotinas', s: 'Tudo continua igual' },
              ].map((x, i) => (
                <div key={i} className="flex items-center gap-3 py-3 border-b border-border last:border-0">
                  <span className="text-muted">{x.icon}</span>
                  <div className="flex-1"><div className="text-sm font-medium">{x.l}</div><div className="text-xs text-muted">{x.s}</div></div>
                  <span className="text-xs bg-accent-bg text-accent px-2 py-1 rounded font-medium">Intocado</span>
                </div>
              ))}
            </div>
            <div className="hidden md:flex flex-col items-center gap-1 text-muted">
              <span className="text-[10px] uppercase tracking-wider">planilha</span>
              <ArrowRight size={20} className="text-blue" />
              <ArrowRight size={20} className="text-accent rotate-180" />
              <span className="text-[10px] uppercase tracking-wider">receita</span>
            </div>
            <div className="bg-navy text-white rounded-lg p-6">
              <p className="text-xs uppercase tracking-widest mb-4 text-white/50">ARRECADA.GOV</p>
              {[
                { icon: <FileSearch size={18}/>, l: 'Investigação por IA' },
                { icon: <MessageCircle size={18}/>, l: 'Negociação WhatsApp 24/7' },
                { icon: <Smartphone size={18}/>, l: 'PIX e Boleto digital' },
                { icon: <BarChart3 size={18}/>, l: 'Dashboard tempo real' },
              ].map((x, i) => (
                <div key={i} className="flex items-center gap-3 py-3 border-b border-white/10 last:border-0">
                  <span className="text-accent">{x.icon}</span>
                  <span className="text-sm">{x.l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-accent-bg border border-accent/20 rounded-lg p-6 mt-8 text-center">
            <p className="font-serif text-lg text-navy font-semibold">A prefeitura envia uma planilha. Nós devolvemos receita.</p>
            <p className="text-sm text-muted mt-2">Nenhum sistema tocado. Nenhum servidor instalado. Nenhum funcionário realocado.</p>
          </div>
        </div>
      </S>

      <hr className="border-border max-w-6xl mx-auto" />

      {/* PRICING */}
      <S className="py-20 px-6 bg-warm">
        <div className="max-w-md mx-auto">
          <p className="text-sm text-muted uppercase tracking-widest mb-3 text-center">Modelo Comercial</p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-12 text-center">Zero risco para o município</h2>
          <div className="bg-white border border-border rounded-lg overflow-hidden shadow-sm">
            <div className="bg-navy text-white p-8 text-center">
              <p className="text-xs uppercase tracking-widest mb-2 opacity-60">Success Fee</p>
              <p className="font-serif text-5xl font-bold">12%</p>
              <p className="text-sm opacity-60 mt-1">sobre o valor efectivamente recuperado</p>
            </div>
            <div className="p-8">
              <div className="bg-accent-bg text-accent text-center py-3 rounded text-sm font-semibold mb-6">Se não recuperar nada → a prefeitura não paga nada</div>
              {['Sem taxa de adesão','Sem mensalidade','Sem custo de implantação','Sem prazo mínimo','Plataforma completa incluída','Investigador Digital incluído','Suporte técnico dedicado','Treinamento da equipa','Migração de dados'].map((t,i) => (
                <div key={i} className="flex items-center gap-3 py-2.5 border-b border-border last:border-0">
                  <CheckCircle2 size={16} className="text-accent flex-shrink-0" /><span className="text-sm text-slate">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </S>

      <hr className="border-border max-w-6xl mx-auto" />

      {/* ROI */}
      <S className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm text-muted uppercase tracking-widest mb-3">Projecção</p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">Retorno para município de 200 mil habitantes</h2>
          <p className="text-sm text-muted mb-12">Baseado em dados reais do SICONFI (Tesouro Nacional).</p>
          <div className="border border-border rounded-lg overflow-hidden">
            {[['Dívida ativa acumulada','R$ 32.000.000'],['Prescrevendo em 12 meses','R$ 5.200.000'],['Dívidas protestadas (ano 1)','8.000'],['Taxa de recuperação esperada','40–50%'],['Valor recuperado (ano 1)','R$ 6.400.000'],['Fee ARRECADA.GOV (12%)','R$ 768.000']].map(([l,v],i) => (
              <div key={i} className="flex justify-between px-6 py-4 border-b border-border">
                <span className="text-sm text-muted">{l}</span><span className="text-sm font-semibold text-navy">{v}</span>
              </div>
            ))}
            <div className="flex justify-between px-6 py-5 bg-accent-bg">
              <span className="font-semibold text-accent">Receita líquida para a prefeitura</span>
              <span className="font-serif text-xl font-bold text-accent">R$ 5.632.000</span>
            </div>
          </div>
        </div>
      </S>

      {/* CTA */}
      <section className="py-20 px-6 bg-navy text-white" id="contato">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-serif text-3xl md:text-5xl mb-6">
            Recupere a receita que sua prefeitura está perdendo
          </motion.h2>
          <p className="text-white/60 text-lg mb-10">Demonstração gratuita com dados reais do seu município. Sem compromisso.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5519999999999?text=Quero%20demonstração%20ARRECADA.GOV" className="bg-accent text-white px-10 py-4 rounded font-semibold text-lg inline-flex items-center gap-3 justify-center hover:bg-accent/90 transition-colors">
              Agendar Demonstração <ChevronRight size={20} />
            </a>
            <a href="http://31.97.53.231:3333/agente.html" target="_blank" className="border border-white/20 px-10 py-4 rounded font-semibold hover:bg-white/5 transition-colors">Ver Demo ao Vivo</a>
          </div>
          <p className="text-xs text-white/30 mt-8">Contratação facilitada via parceiro tecnológico público</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-border text-center">
        <p className="font-serif text-navy font-bold">ARRECADA.GOV</p>
        <p className="text-xs text-muted mt-2">Recuperação Inteligente de Receita Municipal</p>
        <p className="text-[11px] text-muted/50 mt-4">© 2026 ARRECADA.GOV · Conformidade LGPD (Lei 13.709/2018)</p>
      </footer>
    </div>
  );
}
