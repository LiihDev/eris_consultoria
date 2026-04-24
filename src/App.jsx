import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar, Footer, WaveDown, WaveUp, fadeUp, stagger } from './components';
import './index.css';

const GOLD = '#F0CB46';
const GOLD2 = '#CCA000';
const NAVY = '#001D3D';
const DARK = '#000814';

const gradText = { background: `linear-gradient(90deg,${GOLD2},${GOLD})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' };

const SERVICES = [
  { title: 'Workplace Efficiency',   desc: 'Otimizamos o ambiente de trabalho para atingir o máximo potencial da equipe.',           icon: 'trending_up' },
  { title: 'Redesign Estrutural',    desc: 'Remodelamos estruturas organizacionais para adaptação rápida ao mercado.',                icon: 'account_tree' },
  { title: 'Blueprints de Automação',desc: 'Workflows n8n e scripts Python para delegação algorítmica de tarefas repetitivas.',      icon: 'memory' },
  { title: 'Aquisição de Talentos',  desc: 'Localizamos profissionais alinhados ao fit cultural e técnico da organização.',          icon: 'group_add' },
  { title: 'Compliance LGPD',        desc: 'Auditoria avançada de dados para garantir segurança e conformidade corporativa.',        icon: 'shield_locked' },
  { title: 'Playbooks Lean',         desc: 'Documentação tática e redução drástica de gargalos na esteira de serviços.',             icon: 'library_books' },
];

const VALUES = [
  { title: 'Performance',    desc: 'Otimização algorítmica garantindo eficiência máxima.',           icon: 'speed' },
  { title: 'Human-Centric',  desc: 'Soluções que respeitam e potencializam o capital humano.',       icon: 'accessibility_new' },
  { title: 'Escalabilidade', desc: 'Sistemas que crescem sem perda de qualidade ou velocidade.',      icon: 'trending_up' },
  { title: 'Experiência',    desc: 'Know-how jurídico e tecnológico para blindar o seu negócio.',    icon: 'military_tech' },
];

function IconBadge({ icon }) {
  return (
    <div style={{ background: 'rgba(204,160,0,0.1)', border: '1px solid rgba(204,160,0,0.25)', borderRadius: '50%', width: 52, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center', color: GOLD, marginBottom: 20, flexShrink: 0 }}>
      <span className="material-symbols-outlined" style={{ fontSize: '1.7rem' }}>{icon}</span>
    </div>
  );
}

export default function Home() {
  return (
    <div style={{ background: DARK, minHeight: '100vh', overflowX: 'hidden', color: '#fff' }}>
      <Navbar active="/" />

      {/* ── HERO ─────────────────────────────────────── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 5%', position: 'relative', overflow: 'hidden' }}>
        {/* glow blob */}
        <div style={{ position: 'absolute', top: '-10%', right: '-8%', width: 700, height: 700, background: NAVY, borderRadius: '50%', filter: 'blur(130px)', opacity: 0.7, pointerEvents: 'none' }} />

        <motion.div variants={stagger} initial="hidden" animate="visible"
          style={{ maxWidth: 1300, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 60, alignItems: 'center', position: 'relative', zIndex: 1, paddingTop: 80 }}>

          {/* left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <motion.div variants={fadeUp} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '7px 18px', background: 'rgba(0,29,61,0.7)', border: '1px solid rgba(204,160,0,0.3)', borderRadius: 100, width: 'fit-content' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: GOLD, boxShadow: `0 0 10px ${GOLD}`, animation: 'pulse 2s infinite', flexShrink: 0 }} />
              <span style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: '#D0C5AF', letterSpacing: '0.05em' }}>Agility Strategic Framework</span>
            </motion.div>

            <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2.6rem,5vw,4.4rem)', lineHeight: 1.1, margin: 0 }}>
              Sua Consultoria<br /><span style={gradText}>Orientada a Dados</span>
            </motion.h1>

            <motion.p variants={fadeUp} style={{ fontSize: '1.15rem', color: '#A8B3CA', lineHeight: 1.8, maxWidth: 540 }}>
              Sincronizamos metodologias Lean com compliance avançado para executivos que exigem precisão tecnológica e blindagem jurídica.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link to="/servicos" style={{ textDecoration: 'none' }}>
                <button style={{ background: `linear-gradient(135deg,${GOLD2},${GOLD})`, color: '#000', fontWeight: 700, padding: '14px 32px', borderRadius: 100, border: 'none', cursor: 'pointer', fontSize: '0.95rem' }}>
                  Ver Serviços
                </button>
              </Link>
              <Link to="/contato" style={{ textDecoration: 'none' }}>
                <button style={{ background: 'transparent', color: GOLD, fontWeight: 700, padding: '14px 32px', borderRadius: 100, border: `2px solid ${GOLD2}`, cursor: 'pointer', fontSize: '0.95rem' }}>
                  Contate-nos
                </button>
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 44, paddingTop: 8 }}>
              {[['200+', 'Clientes Ativos'], ['R$2B+', 'em Ativos Geridos'], ['98%', 'Retenção']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: '1.9rem', fontFamily: 'monospace', color: GOLD, fontWeight: 600 }}>{n}</div>
                  <div style={{ fontSize: '0.78rem', color: '#A8B3CA', marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* right — image */}
          <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80"
              alt="Consulting" className="blob-shape"
              style={{ width: '100%', maxWidth: 500, height: 560, objectFit: 'cover', border: `2px solid rgba(240,203,70,0.35)`, boxShadow: '0 30px 80px rgba(0,0,0,0.6)' }} />
          </motion.div>
        </motion.div>
      </section>

      <WaveDown from={DARK} to={NAVY} />

      {/* ── SERVICES ─────────────────────────────────── */}
      <section id="services" style={{ padding: '100px 5%', background: NAVY }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{ color: GOLD2, letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.78rem', fontFamily: 'monospace' }}>O que fazemos</span>
            <h2 style={{ fontSize: 'clamp(1.9rem,3.5vw,2.9rem)', margin: '14px 0 0' }}>
              Serviços Que <span style={gradText}>Oferecemos</span>
            </h2>
            <p style={{ color: '#A8B3CA', marginTop: 16, maxWidth: 560, margin: '16px auto 0', lineHeight: 1.8 }}>
              Soluções customizadas para o seu negócio da maneira mais flexível e orientada a dados.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {SERVICES.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.09 }}
                style={{ background: 'rgba(0,8,20,0.5)', border: '1px solid rgba(204,160,0,0.18)', borderRadius: 16, padding: 32, display: 'flex', flexDirection: 'column' }}>
                <IconBadge icon={s.icon} />
                <h3 style={{ fontSize: '1.25rem', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: '#A8B3CA', fontSize: '0.93rem', lineHeight: 1.7, flexGrow: 1 }}>{s.desc}</p>
                <Link to="/servicos" style={{ color: GOLD, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4, marginTop: 20, textDecoration: 'none', fontSize: '0.88rem' }}>
                  Saber mais <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>chevron_right</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveUp from={NAVY} to={DARK} />

      {/* ── ABOUT ────────────────────────────────────── */}
      <section id="about" style={{ padding: '80px 5%', background: DARK }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span style={{ color: GOLD2, letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.78rem', fontFamily: 'monospace' }}>Quem Somos</span>
            <h2 style={{ fontSize: 'clamp(1.9rem,3.5vw,2.9rem)', margin: '14px 0 20px' }}>
              Nós Estamos Aqui <span style={gradText}>Para Ajudar</span>
            </h2>
            <p style={{ color: '#A8B3CA', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: 16 }}>
              A Consultoria Éris se torna um recurso inestimável dentro da sua empresa, atuando como braço direito dos seus líderes.
            </p>
            <p style={{ color: '#A8B3CA', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: 32 }}>
              Soluções escaláveis, consultoria premium e metodologias que entregam resultados massivos e mensuráveis.
            </p>
            <Link to="/sobre" style={{ textDecoration: 'none' }}>
              <button style={{ background: 'transparent', color: GOLD, fontWeight: 700, padding: '13px 28px', borderRadius: 100, border: `2px solid ${GOLD2}`, cursor: 'pointer' }}>
                Conheça nosso time
              </button>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80" alt="Team"
              className="blob-shape"
              style={{ width: '100%', height: 460, objectFit: 'cover', border: '2px solid rgba(240,203,70,0.2)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }} />
          </motion.div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────── */}
      <section style={{ padding: '40px 5% 100px', background: DARK }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span style={{ color: GOLD2, letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.78rem', fontFamily: 'monospace' }}>Pilares</span>
            <h2 style={{ fontSize: 'clamp(1.7rem,2.8vw,2.4rem)', marginTop: 14, color: GOLD, lineHeight: 1.25 }}>
              Os valores que fundamentam nosso serviço
            </h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            {VALUES.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ display: 'flex', gap: 18 }}>
                <div style={{ background: NAVY, width: 56, height: 56, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: GOLD, flexShrink: 0, border: '1px solid rgba(204,160,0,0.25)' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '1.7rem' }}>{v.icon}</span>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: 7 }}>{v.title}</h4>
                  <p style={{ color: '#A8B3CA', fontSize: '0.9rem', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDown from={DARK} to={NAVY} />

      {/* ── CTA ──────────────────────────────────────── */}
      <section style={{ padding: '100px 5%', background: NAVY, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1600&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.08 }} alt="" />
        </div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ position: 'relative', zIndex: 1, maxWidth: 840, margin: '0 auto' }}>
          <span style={{ color: GOLD2, letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.78rem', fontFamily: 'monospace' }}>Pronto para começar?</span>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', margin: '18px 0' }}>
            Solicite seu <span style={gradText}>Diagnóstico Estratégico</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#A8B3CA', lineHeight: 1.8, marginBottom: 44 }}>
            Intervenção cirúrgica para operações complexas. Especialidade em Compliance LGPD e Lean Office.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contato" style={{ textDecoration: 'none' }}>
              <button style={{ background: `linear-gradient(135deg,${GOLD2},${GOLD})`, color: '#000', fontWeight: 700, padding: '16px 40px', borderRadius: 100, border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                Falar com um Especialista
              </button>
            </Link>
            <Link to="/servicos" style={{ textDecoration: 'none' }}>
              <button style={{ background: 'transparent', color: GOLD, fontWeight: 700, padding: '16px 40px', borderRadius: 100, border: `2px solid ${GOLD2}`, cursor: 'pointer', fontSize: '1rem' }}>
                Ver Serviços
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      <WaveUp from={NAVY} to={DARK} />

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(240,203,70,0.7); }
          70% { box-shadow: 0 0 0 10px rgba(240,203,70,0); }
        }
      `}} />
    </div>
  );
}
