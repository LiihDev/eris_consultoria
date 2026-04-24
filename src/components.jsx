import React from 'react';
import { Link } from 'react-router-dom';

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const NAV_LINKS = [
  { to: '/servicos',    label: 'Nossos Serviços' },
  { to: '/sobre',       label: 'Sobre Nós' },
  { to: '/metodologia', label: 'Metodologia' },
  { to: '/contato',     label: 'Contato' },
];

/* ── Navbar ─────────────────────────────── */
export function Navbar({ active }) {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '8px 48px',
      background: 'rgba(0,8,20,0.95)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid rgba(240,203,70,0.15)',
    }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img src="/logo.png" alt="Éris" style={{ height: '60px', objectFit: 'contain' }} />
      </Link>

      <div style={{ display: 'flex', gap: '32px' }}>
        {NAV_LINKS.map(l => (
          <Link key={l.to} to={l.to} style={{
            color: active === l.to ? '#F0CB46' : '#A8B3CA',
            fontWeight: 600, fontSize: '0.93rem', textDecoration: 'none',
            borderBottom: active === l.to ? '2px solid #CCA000' : '2px solid transparent',
            paddingBottom: '3px', transition: 'color 0.2s',
          }}>{l.label}</Link>
        ))}
      </div>

      <Link to="/contato" style={{ textDecoration: 'none' }}>
        <button style={{
          background: 'linear-gradient(135deg, #CCA000, #F0CB46)',
          color: '#000', fontWeight: 700, fontSize: '0.88rem',
          padding: '10px 22px', borderRadius: '100px', border: 'none',
          cursor: 'pointer', whiteSpace: 'nowrap',
        }}>Diagnóstico Estratégico</button>
      </Link>
    </nav>
  );
}

/* ── Footer ─────────────────────────────── */
export function Footer() {
  return (
    <footer style={{ background: '#000814', borderTop: '1px solid #001D3D', padding: '72px 5% 36px' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '48px', justifyContent: 'space-between', marginBottom: '48px' }}>
        <div style={{ maxWidth: '260px' }}>
          <div style={{ fontWeight: 800, fontSize: '1.5rem', color: '#F0CB46', marginBottom: '14px' }}>ÉRIS</div>
          <p style={{ color: '#A8B3CA', fontSize: '0.9rem', lineHeight: 1.8 }}>Consultoria de excelência orientada a dados e focada na blindagem jurídica.</p>
        </div>
        <div>
          <p style={{ color: '#fff', fontWeight: 600, marginBottom: '16px' }}>Explore</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[['/', 'Home'], ['/servicos', 'Serviços'], ['/sobre', 'Sobre Nós'], ['/metodologia', 'Metodologia'], ['/contato', 'Contato']].map(([to, l]) => (
              <Link key={to} to={to} style={{ color: '#A8B3CA', fontSize: '0.9rem', textDecoration: 'none' }}>{l}</Link>
            ))}
          </div>
        </div>
        <div>
          <p style={{ color: '#fff', fontWeight: 600, marginBottom: '16px' }}>Sede</p>
          <p style={{ color: '#A8B3CA', fontSize: '0.9rem', lineHeight: 1.9 }}>Av. Faria Lima, 3477<br />Andar 14 — São Paulo, SP</p>
        </div>
        <div>
          <p style={{ color: '#fff', fontWeight: 600, marginBottom: '16px' }}>Contato</p>
          <p style={{ color: '#A8B3CA', fontSize: '0.9rem' }}>contato@erisconsulting.com.br</p>
          <p style={{ color: '#A8B3CA', fontSize: '0.9rem', marginTop: '6px' }}>+55 (11) 99999-9999</p>
        </div>
      </div>
      <div style={{ maxWidth: '1300px', margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <p style={{ color: '#4A5A7C', fontSize: '0.82rem' }}>© 2026 Consultoria Éris. Todos os direitos reservados.</p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <a href="#" style={{ color: '#4A5A7C', fontSize: '0.82rem', textDecoration: 'none' }}>Privacidade</a>
          <a href="#" style={{ color: '#4A5A7C', fontSize: '0.82rem', textDecoration: 'none' }}>Termos</a>
        </div>
      </div>
    </footer>
  );
}

/* ── Wave dividers ──────────────────────── */
export function WaveDown({ from, to }) {
  return (
    <div style={{ lineHeight: 0, background: from }}>
      <svg viewBox="0 0 1440 90" style={{ display: 'block', width: '100%' }}>
        <path fill={to} d="M0,55 C400,95 1040,5 1440,55 L1440,90 L0,90 Z" />
      </svg>
    </div>
  );
}

export function WaveUp({ from, to }) {
  return (
    <div style={{ lineHeight: 0, background: to }}>
      <svg viewBox="0 0 1440 90" style={{ display: 'block', width: '100%' }}>
        <path fill={from} d="M0,35 C400,-5 1040,85 1440,35 L1440,0 L0,0 Z" />
      </svg>
    </div>
  );
}

/* ── Section Title ──────────────────────── */
export function SectionTitle({ label, title, highlight, sub, center = true }) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left', marginBottom: '60px' }}>
      {label && <span style={{ color: '#CCA000', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.78rem', fontFamily: 'monospace' }}>{label}</span>}
      <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)', margin: '14px 0 0', color: '#fff', fontWeight: 700 }}>
        {title} {highlight && <span style={{ background: 'linear-gradient(90deg,#CCA000,#F0CB46)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{highlight}</span>}
      </h2>
      {sub && <p style={{ fontSize: '1.05rem', color: '#A8B3CA', maxWidth: '600px', margin: center ? '16px auto 0' : '16px 0 0', lineHeight: 1.8 }}>{sub}</p>}
    </div>
  );
}

/* ── Glass Card ─────────────────────────── */
export function GCard({ children, style = {} }) {
  return (
    <div style={{
      background: 'rgba(0,29,61,0.45)',
      border: '1px solid rgba(204,160,0,0.2)',
      borderRadius: '16px', padding: '32px',
      backdropFilter: 'blur(8px)',
      ...style,
    }}>
      {children}
    </div>
  );
}
