import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar, Footer, WaveDown, WaveUp, SectionTitle, GCard, fadeUp, stagger } from '../components';

const GOLD = '#F0CB46'; const GOLD2 = '#CCA000'; const NAVY = '#001D3D'; const DARK = '#000814';
const gradText = { background: `linear-gradient(90deg,${GOLD2},${GOLD})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' };

const TEAM = [
  { name: 'Ana Carvalho',     role: 'CEO & Founder',       img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', bio: 'Especialista em gestão estratégica com 15 anos em corporações Fortune 500.' },
  { name: 'Rafael Matos',     role: 'Chief Legal Officer',  img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80', bio: 'Doutor em Direito Empresarial pela USP. Referência em LGPD e compliance corporativo.' },
  { name: 'Priya Venkatesan', role: 'Head of Technology',  img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80', bio: 'Ex-Google. Arquiteta de sistemas escaláveis e especialista em automação inteligente.' },
  { name: 'Carlos Drummond',  role: 'CFO',                 img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', bio: 'MBA em Finanças pelo INSEAD. Gestão de portfolios de R$500M+ em ativos corporativos.' },
];

const VALUES = [
  { title: 'Excelência',  desc: 'Cada entrega é tratada como ativo estratégico de alto valor.',     icon: 'military_tech' },
  { title: 'Discrição',   desc: 'Operamos com o mais alto padrão de confidencialidade profissional.', icon: 'lock' },
  { title: 'Precisão',    desc: 'Dados validados fundamentam cada recomendação que fazemos.',         icon: 'precision_manufacturing' },
  { title: 'Agilidade',   desc: 'Metodologias Lean garantem velocidade sem comprometer a qualidade.', icon: 'bolt' },
];

const TIMELINE = [
  { year: '2018', title: 'Fundação',        desc: 'Éris nasce com a missão de democratizar inteligência estratégica no mercado jurídico.' },
  { year: '2020', title: 'Expansão Digital', desc: 'Lançamento dos primeiros blueprints de automação para bancas de advocacia.' },
  { year: '2022', title: 'Ecossistema OAB', desc: 'Plataforma proprietária atinge 200+ escritórios parceiros em todo o Brasil.' },
  { year: '2024', title: 'Enterprise',      desc: 'Abertura da vertical Enterprise com atendimento a corporações listadas na B3.' },
];

export default function SobrePage() {
  return (
    <div style={{ background: DARK, minHeight: '100vh', overflowX: 'hidden', color: '#fff' }}>
      <Navbar active="/sobre" />

      {/* Hero */}
      <section style={{ padding: '140px 5% 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: 600, height: 600, background: NAVY, borderRadius: '50%', filter: 'blur(120px)', opacity: 0.5, pointerEvents: 'none' }} />
        <motion.div variants={stagger} initial="hidden" animate="visible"
          style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div>
            <motion.span variants={fadeUp} style={{ color: GOLD2, letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.78rem', fontFamily: 'monospace' }}>Nossa História</motion.span>
            <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2.4rem,4.5vw,3.8rem)', marginTop: 14, lineHeight: 1.1 }}>
              Excellence in <span style={gradText}>Discretion</span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: '1.1rem', color: '#A8B3CA', marginTop: 22, lineHeight: 1.85 }}>
              Fundada em 2018, a Éris nasceu da convicção de que inteligência estratégica e tecnologia de ponta pertencem a qualquer executivo que exija precisão institucional.
            </motion.p>
            <motion.p variants={fadeUp} style={{ fontSize: '1.05rem', color: '#A8B3CA', marginTop: 14, lineHeight: 1.85 }}>
              Somos especialistas em blindagem corporativa — sincronizando metodologias Lean com compliance avançado para transformar operações complexas em sistemas de alta performance.
            </motion.p>
          </div>
          <motion.div variants={fadeUp}>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80" alt="Team" className="blob-shape"
              style={{ width: '100%', height: 460, objectFit: 'cover', border: '2px solid rgba(240,203,70,0.22)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }} />
          </motion.div>
        </motion.div>
      </section>

      <WaveDown from={DARK} to={NAVY} />

      {/* Values */}
      <section style={{ padding: '80px 5%', background: NAVY }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <SectionTitle label="Nossos Pilares" title="Valores que" highlight="nos definem" sub="Cada princípio reflete nosso compromisso com a excelência em cada projeto." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22 }}>
            {VALUES.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <GCard style={{ textAlign: 'center', background: 'rgba(0,8,20,0.5)' }}>
                  <div style={{ background: 'rgba(204,160,0,0.1)', border: '1px solid rgba(204,160,0,0.22)', borderRadius: '50%', width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', color: GOLD, margin: '0 auto 18px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '2rem' }}>{v.icon}</span>
                  </div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: 10 }}>{v.title}</h3>
                  <p style={{ color: '#A8B3CA', fontSize: '0.88rem', lineHeight: 1.7 }}>{v.desc}</p>
                </GCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveUp from={NAVY} to={DARK} />

      {/* Team */}
      <section style={{ padding: '80px 5%', background: DARK }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <SectionTitle label="Nosso Time" title="Os líderes por trás da" highlight="Éris" sub="Especialistas multidisciplinares com experiência em mercados globais." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
            {TEAM.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <GCard style={{ textAlign: 'center', background: 'rgba(0,29,61,0.5)' }}>
                  <img src={m.img} alt={m.name} style={{ width: 90, height: 90, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 16px', display: 'block', border: '3px solid rgba(204,160,0,0.4)', boxShadow: '0 0 20px rgba(204,160,0,0.12)' }} />
                  <h4 style={{ fontSize: '1.05rem', marginBottom: 5 }}>{m.name}</h4>
                  <p style={{ color: GOLD, fontSize: '0.75rem', fontFamily: 'monospace', marginBottom: 12, letterSpacing: '0.04em' }}>{m.role}</p>
                  <p style={{ color: '#A8B3CA', fontSize: '0.86rem', lineHeight: 1.7 }}>{m.bio}</p>
                </GCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '20px 5% 120px', background: DARK }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionTitle label="Trajetória" title="Nossa" highlight="Jornada" />
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom,${GOLD2},transparent)`, transform: 'translateX(-50%)' }} />
            {TIMELINE.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -36 : 36 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                style={{ display: 'flex', justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end', marginBottom: 40, position: 'relative' }}>
                <div style={{ position: 'absolute', left: '50%', top: 22, width: 14, height: 14, borderRadius: '50%', background: GOLD2, transform: 'translateX(-50%)', boxShadow: `0 0 18px rgba(204,160,0,0.6)`, zIndex: 2 }} />
                <GCard style={{ width: '43%', background: 'rgba(0,29,61,0.5)' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '1.4rem', color: GOLD, fontWeight: 600 }}>{t.year}</span>
                  <h4 style={{ fontSize: '1.15rem', margin: '6px 0 8px' }}>{t.title}</h4>
                  <p style={{ color: '#A8B3CA', fontSize: '0.88rem' }}>{t.desc}</p>
                </GCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
