import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar, Footer, WaveDown, WaveUp, SectionTitle, GCard, fadeUp, stagger } from '../components';

const GOLD = '#F0CB46'; const GOLD2 = '#CCA000'; const NAVY = '#001D3D'; const DARK = '#000814';
const gradText = { background: `linear-gradient(90deg,${GOLD2},${GOLD})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' };

const STEPS = [
  { num: '01', title: 'Diagnóstico Estratégico', icon: 'search_insights',
    desc: 'Mapeamento completo da sua operação: processos, gargalos, riscos jurídicos e oportunidades de automação. Entregamos um relatório executivo com prioridades claras.',
    tags: ['Entrevistas com stakeholders', 'Análise de dados', 'Mapeamento de processos', 'Risk Assessment'] },
  { num: '02', title: 'Blueprint de Solução', icon: 'architecture',
    desc: 'Com base no diagnóstico, desenhamos a arquitetura da solução sob medida. Cada módulo é priorizado por impacto e viabilidade, formando um roadmap cirúrgico.',
    tags: ['Roadmap priorizado', 'Design de processos', 'Definição de KPIs', 'Validação executiva'] },
  { num: '03', title: 'Implementação Lean', icon: 'precision_manufacturing',
    desc: 'Executamos em sprints curtos com entregas tangíveis a cada ciclo. Aplicamos Lean Office para eliminar desperdícios e maximizar o throughput da equipe.',
    tags: ['Sprints de 2 semanas', 'Automações n8n/Python', 'Treinamento de equipe', 'SOPs documentados'] },
  { num: '04', title: 'Compliance & Blindagem', icon: 'shield_locked',
    desc: 'Auditamos e implementamos as camadas de segurança jurídica necessárias. Garantimos conformidade com LGPD e governança de dados de ponta a ponta.',
    tags: ['Auditoria LGPD', 'Contratos revisados', 'Políticas de privacidade', 'Treinamento jurídico'] },
  { num: '05', title: 'Monitoramento & Escala', icon: 'monitoring',
    desc: 'Implantamos dashboards de performance em tempo real e um ciclo contínuo de melhoria. Sua operação ganha inteligência e capacidade de escala sustentável.',
    tags: ['Dashboards executivos', 'Alertas automatizados', 'Revisões mensais', 'Escala sustentável'] },
];

const FRAMEWORKS = [
  { title: 'Lean Office',     desc: 'Eliminação de desperdícios em processos administrativos para maximizar o valor entregue.', icon: 'speed' },
  { title: 'Six Sigma',       desc: 'Redução de variações nos processos críticos, garantindo previsibilidade e qualidade.',       icon: 'analytics' },
  { title: 'OKRs',            desc: 'Alinhamento de objetivos e resultados-chave em torno das prioridades estratégicas.',         icon: 'track_changes' },
  { title: 'Design Thinking', desc: 'Abordagem centrada no humano para desenvolver soluções que resolvem dores reais.',           icon: 'lightbulb' },
];

export default function MetodologiaPage() {
  return (
    <div style={{ background: DARK, minHeight: '100vh', overflowX: 'hidden', color: '#fff' }}>
      <Navbar active="/metodologia" />

      {/* Hero */}
      <section style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '140px 5% 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 600, background: `radial-gradient(circle,rgba(0,53,102,0.45) 0%,transparent 70%)`, filter: 'blur(60px)', pointerEvents: 'none' }} />
        <motion.div variants={stagger} initial="hidden" animate="visible" style={{ position: 'relative', zIndex: 1, maxWidth: 820 }}>
          <motion.span variants={fadeUp} style={{ color: GOLD2, letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.78rem', fontFamily: 'monospace' }}>Nossa Abordagem</motion.span>
          <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2.4rem,5vw,4.2rem)', marginTop: 14, lineHeight: 1.1 }}>
            Metodologia <span style={gradText}>Éris</span>
          </motion.h1>
          <motion.p variants={fadeUp} style={{ fontSize: '1.1rem', color: '#A8B3CA', marginTop: 18, lineHeight: 1.8 }}>
            Um processo de 5 etapas desenhado para transformar operações complexas em sistemas de alta performance — com precisão cirúrgica e resultados mensuráveis.
          </motion.p>
        </motion.div>
      </section>

      <WaveDown from={DARK} to={NAVY} />

      {/* Steps */}
      <section style={{ padding: '80px 5%', background: NAVY }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {STEPS.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -36 : 36 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
              <GCard style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 32, alignItems: 'start' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'monospace', fontSize: '2.6rem', color: 'rgba(204,160,0,0.28)', fontWeight: 700, lineHeight: 1 }}>{s.num}</div>
                  <div style={{ background: 'rgba(204,160,0,0.1)', border: '1px solid rgba(204,160,0,0.22)', borderRadius: '50%', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', color: GOLD, margin: '10px auto 0' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '1.5rem' }}>{s.icon}</span>
                  </div>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ color: '#A8B3CA', fontSize: '0.96rem', lineHeight: 1.8, marginBottom: 18 }}>{s.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {s.tags.map((tag, j) => (
                      <span key={j} style={{ padding: '5px 13px', background: 'rgba(204,160,0,0.08)', border: '1px solid rgba(204,160,0,0.2)', borderRadius: 100, fontSize: '0.76rem', color: GOLD, fontFamily: 'monospace', letterSpacing: '0.03em' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GCard>
            </motion.div>
          ))}
        </div>
      </section>

      <WaveUp from={NAVY} to={DARK} />

      {/* Frameworks */}
      <section style={{ padding: '80px 5%', background: DARK }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionTitle label="Ferramentas" title="Frameworks que" highlight="utilizamos" sub="As melhores práticas do mercado global adaptadas à realidade corporativa brasileira." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22 }}>
            {FRAMEWORKS.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <GCard style={{ textAlign: 'center', background: 'rgba(0,29,61,0.5)' }}>
                  <div style={{ background: 'rgba(204,160,0,0.1)', border: '1px solid rgba(204,160,0,0.22)', borderRadius: '50%', width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', color: GOLD, margin: '0 auto 18px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '2rem' }}>{f.icon}</span>
                  </div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: 10 }}>{f.title}</h3>
                  <p style={{ color: '#A8B3CA', fontSize: '0.88rem', lineHeight: 1.7 }}>{f.desc}</p>
                </GCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 5% 100px', background: NAVY, textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontSize: 'clamp(1.9rem,3.5vw,2.9rem)', marginBottom: 18 }}>
            Pronto para <span style={gradText}>transformar sua operação?</span>
          </h2>
          <p style={{ color: '#A8B3CA', fontSize: '1.05rem', marginBottom: 36 }}>
            Agende uma sessão de diagnóstico gratuita com um dos nossos especialistas.
          </p>
          <Link to="/contato" style={{ textDecoration: 'none' }}>
            <button style={{ background: `linear-gradient(135deg,${GOLD2},${GOLD})`, color: '#000', fontWeight: 700, padding: '16px 44px', borderRadius: 100, border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
              Solicitar Diagnóstico Gratuito
            </button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
