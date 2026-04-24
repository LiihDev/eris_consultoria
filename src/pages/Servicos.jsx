import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar, Footer, WaveDown, WaveUp, SectionTitle, GCard, fadeUp, stagger } from '../components';

const GOLD = '#F0CB46';
const GOLD2 = '#CCA000';
const NAVY = '#001D3D';
const DARK = '#000814';
const gradText = { background: `linear-gradient(90deg,${GOLD2},${GOLD})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' };

const SERVICES = [
  { mod: 'MÓDULO I',   title: 'Blueprints de Automação', desc: 'Workflows n8n e scripts Python para delegação algorítmica de tarefas de alto volume.',             icon: 'account_tree', price: 'R$ 5k' },
  { mod: 'MÓDULO II',  title: 'Ecossistema OAB',         desc: 'Métricas e dashboards de performance para bancas de advocacia de alta performance.',              icon: 'query_stats',  price: 'R$ 8k' },
  { mod: 'MÓDULO III', title: 'Playbooks Lean',           desc: 'SOPs e documentação tática para padronização de qualidade e redução de gargalos.',               icon: 'library_books', price: 'R$ 6k' },
  { mod: 'MÓDULO IV',  title: 'Compliance LGPD',          desc: 'Auditoria e implementação de políticas de dados para total proteção corporativa.',               icon: 'shield_locked', price: 'R$ 12k' },
  { mod: 'MÓDULO V',   title: 'Workforce Analytics',      desc: 'Análise preditiva de capital humano e otimização de equipes estratégicas.',                      icon: 'group_add',    price: 'R$ 9k' },
  { mod: 'MÓDULO VI',  title: 'Strategic Intelligence',   desc: 'Inteligência competitiva, benchmarking e mapeamento de mercado para decisões de alto impacto.', icon: 'military_tech', price: 'R$ 15k' },
];

const PLANS = [
  { name: 'Starter',      price: 'R$ 5k',       desc: 'Para empresas em diagnóstico',  highlight: false, items: ['1 módulo incluso','Diagnóstico inicial','Relatório executivo','Suporte por e-mail','30 dias de acompanhamento'] },
  { name: 'Professional', price: 'R$ 18k',      desc: 'Para operações em escala',       highlight: true,  items: ['3 módulos inclusos','Diagnóstico completo','Dashboard exclusivo','Suporte prioritário','90 dias de acompanhamento','Playbook personalizado'] },
  { name: 'Enterprise',   price: 'Sob consulta', desc: 'Para grandes corporações',      highlight: false, items: ['Todos os módulos','Consultoria on-site','Time dedicado','SLA garantido','Acompanhamento contínuo','Acesso a C-level Éris'] },
];

export default function ServicosPage() {
  return (
    <div style={{ background: DARK, minHeight: '100vh', overflowX: 'hidden', color: '#fff' }}>
      <Navbar active="/servicos" />

      {/* Hero */}
      <section style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '140px 5% 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 600, background: `radial-gradient(circle,rgba(204,160,0,0.1) 0%,transparent 70%)`, pointerEvents: 'none' }} />
        <motion.div variants={stagger} initial="hidden" animate="visible" style={{ position: 'relative', zIndex: 1, maxWidth: 800 }}>
          <motion.span variants={fadeUp} style={{ color: GOLD2, letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.78rem', fontFamily: 'monospace' }}>Nossas Soluções</motion.span>
          <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2.4rem,5vw,4.2rem)', marginTop: 14, lineHeight: 1.1 }}>
            Arquitetura de <span style={gradText}>Resultado</span>
          </motion.h1>
          <motion.p variants={fadeUp} style={{ fontSize: '1.1rem', color: '#A8B3CA', marginTop: 18, lineHeight: 1.8 }}>
            Módulos escaláveis desenhados para otimização extrema de processos corporativos e jurídicos.
          </motion.p>
        </motion.div>
      </section>

      <WaveDown from={DARK} to={NAVY} />

      {/* Services Grid */}
      <section style={{ padding: '80px 5%', background: NAVY }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {SERVICES.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <GCard style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -10, right: -10, opacity: 0.07, color: GOLD }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 110 }}>{s.icon}</span>
                </div>
                <span style={{ color: GOLD2, fontFamily: 'monospace', fontSize: '0.72rem', letterSpacing: '0.1em' }}>{s.mod}</span>
                <div style={{ background: 'rgba(204,160,0,0.1)', border: '1px solid rgba(204,160,0,0.2)', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', color: GOLD, margin: '14px 0', flexShrink: 0 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '1.6rem' }}>{s.icon}</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: '#A8B3CA', fontSize: '0.91rem', lineHeight: 1.7, flexGrow: 1 }}>{s.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24, paddingTop: 18, borderTop: '1px solid rgba(204,160,0,0.14)' }}>
                  <span style={{ color: '#A8B3CA', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'monospace' }}>A partir de</span>
                  <span style={{ color: GOLD, fontFamily: 'monospace', fontSize: '1.6rem', fontWeight: 600 }}>{s.price}</span>
                </div>
              </GCard>
            </motion.div>
          ))}
        </div>
      </section>

      <WaveUp from={NAVY} to={DARK} />

      {/* Pricing */}
      <section style={{ padding: '80px 5% 120px', background: DARK }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionTitle label="Planos" title="Escolha sua" highlight="Jornada" sub="Do diagnóstico à implementação completa — o plano certo para cada etapa." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {PLANS.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
                <div style={{ background: p.highlight ? 'linear-gradient(135deg,rgba(0,29,61,0.9),rgba(0,53,102,0.7))' : 'rgba(0,29,61,0.4)', border: p.highlight ? `2px solid ${GOLD2}` : '1px solid rgba(204,160,0,0.2)', borderRadius: 20, padding: 36, position: 'relative', overflow: 'hidden', boxShadow: p.highlight ? `0 20px 60px rgba(204,160,0,0.18)` : 'none' }}>
                  {p.highlight && <div style={{ position: 'absolute', top: 14, right: 14, background: `linear-gradient(135deg,${GOLD2},${GOLD})`, color: '#000', fontSize: '0.68rem', fontWeight: 700, padding: '3px 11px', borderRadius: 100 }}>RECOMENDADO</div>}
                  <h3 style={{ fontSize: '1.4rem', marginBottom: 6 }}>{p.name}</h3>
                  <p style={{ color: '#A8B3CA', fontSize: '0.88rem', marginBottom: 20 }}>{p.desc}</p>
                  <div style={{ fontSize: '2.3rem', fontFamily: 'monospace', color: GOLD, marginBottom: 28, lineHeight: 1 }}>{p.price}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                    {p.items.map((item, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#D0C5AF', fontSize: '0.91rem' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '1rem', color: GOLD, flexShrink: 0 }}>check_circle</span>
                        {item}
                      </div>
                    ))}
                  </div>
                  <button style={{ width: '100%', padding: '13px 0', borderRadius: 100, border: p.highlight ? 'none' : `2px solid ${GOLD2}`, background: p.highlight ? `linear-gradient(135deg,${GOLD2},${GOLD})` : 'transparent', color: p.highlight ? '#000' : GOLD, fontWeight: 700, cursor: 'pointer', fontSize: '0.92rem' }}>
                    Começar Agora
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
