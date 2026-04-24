import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar, Footer, WaveDown, GCard, fadeUp, stagger } from '../components';

const GOLD = '#F0CB46'; const GOLD2 = '#CCA000'; const NAVY = '#001D3D'; const DARK = '#000814';
const gradText = { background: `linear-gradient(90deg,${GOLD2},${GOLD})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' };

const INFO = [
  { icon: 'location_on', title: 'Sede',      lines: ['Av. Faria Lima, 3477, Andar 14', 'São Paulo — SP, 04538-133'] },
  { icon: 'mail',        title: 'Email',      lines: ['contato@erisconsulting.com.br', 'suporte@erisconsulting.com.br'] },
  { icon: 'phone',       title: 'Telefone',   lines: ['+55 (11) 99999-9999', 'Seg–Sex, 9h–18h'] },
  { icon: 'link',        title: 'LinkedIn',   lines: ['linkedin.com/company/eris', '@eris.consultoria'] },
];

const input = {
  width: '100%', padding: '15px 18px', background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(204,160,0,0.22)', borderRadius: 10,
  color: '#fff', fontSize: '0.95rem', outline: 'none',
  fontFamily: 'inherit', boxSizing: 'border-box',
};

export default function ContatoPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', revenue: '', msg: '' });
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <div style={{ background: DARK, minHeight: '100vh', overflowX: 'hidden', color: '#fff' }}>
      <Navbar active="/contato" />

      {/* Hero */}
      <section style={{ padding: '140px 5% 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: '30%', width: 700, height: 500, background: `radial-gradient(circle,rgba(0,53,102,0.55) 0%,transparent 70%)`, filter: 'blur(80px)', pointerEvents: 'none' }} />
        <motion.div variants={stagger} initial="hidden" animate="visible" style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto' }}>
          <motion.span variants={fadeUp} style={{ color: GOLD2, letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.78rem', fontFamily: 'monospace' }}>Fale Conosco</motion.span>
          <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', marginTop: 14, lineHeight: 1.1 }}>
            Inicie sua <span style={gradText}>Transformação</span>
          </motion.h1>
          <motion.p variants={fadeUp} style={{ fontSize: '1.1rem', color: '#A8B3CA', marginTop: 18, lineHeight: 1.8 }}>
            Entre em contato e descubra como podemos blindar e escalar o seu negócio com precisão cirúrgica.
          </motion.p>
        </motion.div>
      </section>

      <WaveDown from={DARK} to={NAVY} />

      {/* Form + Info */}
      <section style={{ padding: '80px 5% 120px', background: NAVY }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 56, alignItems: 'start' }}>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -36 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <GCard style={{ background: 'rgba(0,8,20,0.7)' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '60px 0' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '3.5rem', color: GOLD }}>check_circle</span>
                  <h3 style={{ fontSize: '1.8rem', marginTop: 14, marginBottom: 10 }}>Mensagem Enviada!</h3>
                  <p style={{ color: '#A8B3CA' }}>Entraremos em contato em até 24 horas úteis.</p>
                </div>
              ) : (
                <>
                  <h2 style={{ fontSize: '1.7rem', marginBottom: 6 }}>Processo de <span style={gradText}>Screening</span></h2>
                  <p style={{ color: '#A8B3CA', fontSize: '0.9rem', marginBottom: 30 }}>Preencha para iniciar sua avaliação gratuita.</p>
                  <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                      <input required value={form.name}    onChange={set('name')}    type="text"  placeholder="Nome Completo"     style={input} />
                      <input required value={form.email}   onChange={set('email')}   type="email" placeholder="Email Corporativo"  style={input} />
                    </div>
                    <input value={form.company} onChange={set('company')} type="text" placeholder="Empresa / Escritório" style={input} />
                    <select value={form.revenue} onChange={set('revenue')} style={{ ...input, color: form.revenue ? '#fff' : '#6A7A9C', appearance: 'none' }}>
                      <option value="" disabled>Faturamento Anual Estimado</option>
                      <option value="t1">&lt; R$ 1M</option>
                      <option value="t2">R$ 1M – R$ 5M</option>
                      <option value="t3">R$ 5M – R$ 20M</option>
                      <option value="t4">&gt; R$ 20M</option>
                    </select>
                    <textarea required value={form.msg} onChange={set('msg')} placeholder="Descreva seu principal desafio..." rows={5} style={{ ...input, resize: 'none' }} />
                    <button type="submit" style={{ background: `linear-gradient(135deg,${GOLD2},${GOLD})`, color: '#000', fontWeight: 700, padding: '15px', borderRadius: 100, border: 'none', cursor: 'pointer', fontSize: '0.95rem', marginTop: 6 }}>
                      Enviar Submissão
                    </button>
                  </form>
                </>
              )}
            </GCard>
          </motion.div>

          {/* Info cards */}
          <motion.div initial={{ opacity: 0, x: 36 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ marginBottom: 8 }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: 10 }}>Nossos <span style={gradText}>Canais</span></h2>
              <p style={{ color: '#A8B3CA', fontSize: '0.9rem' }}>Disponíveis por múltiplos canais para a melhor experiência de atendimento.</p>
            </div>
            {INFO.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <GCard style={{ display: 'flex', alignItems: 'flex-start', gap: 18, background: 'rgba(0,8,20,0.5)', padding: '22px 24px' }}>
                  <div style={{ background: 'rgba(204,160,0,0.1)', border: '1px solid rgba(204,160,0,0.2)', borderRadius: '50%', width: 46, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center', color: GOLD, flexShrink: 0 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '1.45rem' }}>{c.icon}</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: GOLD, marginBottom: 6 }}>{c.title}</h4>
                    {c.lines.map((l, j) => <p key={j} style={{ color: '#D0C5AF', fontSize: '0.88rem', lineHeight: 1.6 }}>{l}</p>)}
                  </div>
                </GCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
      <style dangerouslySetInnerHTML={{ __html: `input:focus,select:focus,textarea:focus{border-color:${GOLD}!important;background:rgba(255,255,255,0.07)!important}` }} />
    </div>
  );
}
