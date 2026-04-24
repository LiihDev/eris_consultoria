import React from 'react';
import { motion } from 'framer-motion';
import './index.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function App() {
  return (
    <div className="app-container" style={{ overflowX: 'hidden' }}>
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="glass-nav"
        style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, padding: '20px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Éris Logo" style={{ height: '84px', objectFit: 'contain' }} />
        </div>
        
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }} className="nav-links">
          <a href="#services" style={{ color: 'var(--c-saffron)', fontWeight: 600, borderBottom: '2px solid var(--c-satin-gold)', paddingBottom: '4px' }}>Nossos Serviços</a>
          <a href="#about" style={{ color: '#A8B3CA', fontWeight: 500, transition: 'color 0.3s' }}>Sobre Nós</a>
          <a href="#methodology" style={{ color: '#A8B3CA', fontWeight: 500, transition: 'color 0.3s' }}>Metodologia</a>
          <a href="#contact" style={{ color: '#A8B3CA', fontWeight: 500, transition: 'color 0.3s' }}>Contato</a>
        </div>

        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          Diagnóstico Estratégico
        </button>
      </motion.nav>

      <main style={{ paddingTop: '140px' }}>
        
        {/* 1. Hero Section */}
        <section style={{ minHeight: '85vh', position: 'relative', padding: '0 5%' }}>
          {/* Abstract background shape top right */}
          <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', background: 'var(--c-oxford-blue)', borderRadius: '50%', filter: 'blur(100px)', zIndex: 0, opacity: 0.6 }} />
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            style={{ position: 'relative', zIndex: 10, maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '60px', alignItems: 'center' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <motion.div variants={fadeUp} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 20px', background: 'rgba(0, 29, 61, 0.6)', border: '1px solid rgba(204, 160, 0, 0.3)', borderRadius: '100px', width: 'fit-content' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--c-saffron)', boxShadow: '0 0 10px var(--c-saffron)', animation: 'pulse 2s infinite' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#D0C5AF', letterSpacing: '0.05em' }}>Agility Strategic Framework</span>
              </motion.div>
              
              <motion.h1 variants={fadeUp} style={{ fontSize: '4.5rem', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Sua Consultoria <br/>
                <span className="text-gradient">Orientada a Dados</span>
              </motion.h1>
              
              <motion.p variants={fadeUp} style={{ fontSize: '1.25rem', color: '#A8B3CA', maxWidth: '600px' }}>
                Onde quer que você precise, quando você precisar! Sincronizamos metodologias Lean com compliance avançado para executivos que exigem precisão.
              </motion.p>
              
              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                <button className="btn-primary">Ver Serviços</button>
                <button className="btn-secondary">Contate-nos</button>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                <img 
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Corporate Consulting" 
                  className="blob-shape"
                  style={{ width: '100%', maxWidth: '550px', height: '600px', objectFit: 'cover', border: '2px solid rgba(240, 203, 70, 0.4)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }} 
                />
            </motion.div>
          </motion.div>
        </section>

        {/* Top Wave */}
        <div className="wave-divider" style={{ bottom: '-1px', transform: 'translateY(100%)', zIndex: 5 }}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path fill="var(--c-oxford-blue)" d="M0,64L80,69.3C160,75,320,85,480,74.7C640,64,800,32,960,26.7C1120,21,1280,43,1360,53.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>

        {/* 2. Services Grid Section */}
        <section id="services" style={{ padding: '120px 5%', background: 'var(--c-oxford-blue)', position: 'relative' }}>
          <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', marginBottom: '80px' }}
            >
              <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Serviços Que <span className="text-gradient">Oferecemos</span></h2>
              <p style={{ fontSize: '1.125rem', color: '#A8B3CA', maxWidth: '600px', margin: '0 auto' }}>
                A Consultoria Éris provê soluções customizadas para o seu negócio da maneira mais flexível e orientada a dados.
              </p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
              {[
                { title: 'Workplace Efficiency', desc: 'Otimizamos o coaching de ambiente de trabalho atingindo máximo potencial.', icon: 'trending_up' },
                { title: 'Redesign Estrutural', desc: 'Apoiamos empresas remodelando estruturas para adaptação orgânica rápida.', icon: 'account_tree' },
                { title: 'Blueprints de Automação', desc: 'Workflows em n8n e scripts Python para delegação algorítmica de tarefas.', icon: 'memory' },
                { title: 'Aquisição de Talentos', desc: 'Nossa equipe localiza profissionais alinhados ao seu fit cultural e técnico.', icon: 'group_add' },
                { title: 'Compliance LGPD', desc: 'Auditoria avançada de dados para garantir total segurança corporativa.', icon: 'shield_locked' },
                { title: 'Playbooks Lean', desc: 'Documentação tática e redução drástica de gargalos na esteira de serviços.', icon: 'library_books' }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card" 
                  style={{ padding: '40px', background: 'rgba(0, 8, 20, 0.4)', display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ background: 'rgba(204, 160, 0, 0.1)', padding: '16px', borderRadius: '50%', width: 'fit-content', marginBottom: '24px', color: 'var(--c-saffron)' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '2rem' }}>{service.icon}</span>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{service.title}</h3>
                  <p style={{ color: '#A8B3CA', flexGrow: 1, marginBottom: '24px' }}>{service.desc}</p>
                  <a href="#" style={{ color: 'var(--c-saffron)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Saber mais <span className="material-symbols-outlined" style={{ fontSize: '1.2rem' }}>chevron_right</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Wave from Oxford to Rich Black */}
        <div className="wave-divider" style={{ top: '-1px', transform: 'translateY(-100%) rotate(180deg)', zIndex: 5 }}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path fill="var(--c-oxford-blue)" d="M0,64L80,69.3C160,75,320,85,480,74.7C640,64,800,32,960,26.7C1120,21,1280,43,1360,53.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>

        {/* 3. We're Here To Help Section */}
        <section id="about" style={{ padding: '100px 5%', background: 'var(--c-rich-black)' }}>
          <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Nós Estamos Aqui <span className="text-gradient">Para Ajudar</span></h2>
              <p style={{ fontSize: '1.125rem', color: '#A8B3CA', marginBottom: '24px' }}>
                A Consultoria Éris se torna um recurso inestimável dentro da sua empresa, atuando como seu braço direito e permitindo que você se concentre em outras áreas do seu negócio de alto valor estratégico.
              </p>
              <p style={{ fontSize: '1.125rem', color: '#A8B3CA', marginBottom: '32px' }}>
                Oferecemos soluções escaláveis, consultoria premium e metodologias que entregam resultados massivos.
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--c-saffron)', fontWeight: 500 }}>Éris Team — Board of Directors</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
               <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team Meeting" 
                  className="blob-shape"
                  style={{ width: '100%', maxWidth: '600px', height: '500px', objectFit: 'cover', border: '2px solid rgba(240, 203, 70, 0.2)' }} 
                />
            </motion.div>
          </div>
        </section>

        {/* 4. Values/Pillars Section */}
        <section style={{ padding: '80px 5% 140px', background: 'var(--c-rich-black)' }}>
          <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '60px', alignItems: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '2.5rem', color: 'var(--c-saffron)', lineHeight: 1.2 }}>Os valores e pilares que fundamentam nosso serviço</h2>
            </motion.div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
              {[
                { title: 'Performance', desc: 'Otimização algorítmica e redução de gargalos garantindo eficiência máxima.', icon: 'speed' },
                { title: 'Human-Centric', desc: 'Nossas soluções são balanceadas para respeitar o potencial humano da equipe.', icon: 'accessibility_new' },
                { title: 'Escalabilidade', desc: 'Sistemas preparados para suportar crescimento sem perda de velocidade.', icon: 'trending_up' },
                { title: 'Experiência', desc: 'Temos a inteligência jurídica e o know-how para blindar o seu negócio.', icon: 'military_tech' }
              ].map((val, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  style={{ display: 'flex', gap: '24px' }}
                >
                  <div style={{ background: 'var(--c-oxford-blue)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-saffron)', flexShrink: 0, border: '1px solid rgba(204, 160, 0, 0.3)' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '2rem' }}>{val.icon}</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '8px', fontWeight: 700 }}>{val.title}</h4>
                    <p style={{ color: '#A8B3CA', fontSize: '0.95rem' }}>{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Contact Section */}
        <section id="contact" style={{ position: 'relative', padding: '120px 5%', overflow: 'hidden' }}>
          {/* Background Image with Overlay */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
             <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Office Background" />
             <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--c-oxford-blue) 0%, rgba(0, 29, 61, 0.8) 100%)' }} />
          </div>

          <div style={{ position: 'relative', zIndex: 10, maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card" 
              style={{ padding: '48px', background: 'rgba(0, 8, 20, 0.6)' }}
            >
              <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Contato <span className="text-gradient">Éris</span></h2>
              <p style={{ color: '#A8B3CA', marginBottom: '32px' }}>Entre em contato conosco hoje, para sabermos como podemos te ajudar.</p>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <input type="text" placeholder="Nome Completo" style={{ width: '100%', padding: '16px 24px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(240, 203, 70, 0.2)', borderRadius: '8px', color: '#fff', fontSize: '1rem', outline: 'none' }} />
                <input type="email" placeholder="Email" style={{ width: '100%', padding: '16px 24px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(240, 203, 70, 0.2)', borderRadius: '8px', color: '#fff', fontSize: '1rem', outline: 'none' }} />
                <select style={{ width: '100%', padding: '16px 24px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(240, 203, 70, 0.2)', borderRadius: '8px', color: '#A8B3CA', fontSize: '1rem', outline: 'none', appearance: 'none' }}>
                  <option value="" disabled selected>Faturamento Anual (Estimado)</option>
                  <option value="tier1">&lt; R$ 1M</option>
                  <option value="tier2">R$ 1M - R$ 5M</option>
                  <option value="tier3">&gt; R$ 5M</option>
                </select>
                <textarea placeholder="Mensagem / Principal Gargalo" rows="4" style={{ width: '100%', padding: '16px 24px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(240, 203, 70, 0.2)', borderRadius: '8px', color: '#fff', fontSize: '1rem', outline: 'none', resize: 'none' }}></textarea>
                <button type="button" className="btn-primary" style={{ marginTop: '8px', alignSelf: 'flex-start' }}>Enviar Mensagem</button>
              </form>
            </motion.div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer style={{ background: 'var(--c-rich-black)', padding: '80px 5% 40px', borderTop: '2px solid var(--c-oxford-blue)' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px', marginBottom: '60px' }}>
          
          <div style={{ maxWidth: '300px' }}>
             <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', color: 'var(--c-saffron)', marginBottom: '16px' }}>
               ÉRIS
             </div>
             <p style={{ color: '#A8B3CA', fontSize: '0.9rem' }}>Consultoria de excelência, orientada a dados e focada na blindagem jurídica do seu negócio.</p>
          </div>

          <div>
             <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '20px' }}>Sede</h4>
             <p style={{ color: '#A8B3CA', fontSize: '0.9rem', lineHeight: 1.8 }}>Av. Faria Lima, 3477<br/>Andar 14<br/>São Paulo - SP</p>
          </div>

          <div>
             <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '20px' }}>Explore</h4>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
               <a href="#about" style={{ color: '#A8B3CA', fontSize: '0.9rem', transition: 'color 0.3s' }}>Sobre Nós</a>
               <a href="#services" style={{ color: '#A8B3CA', fontSize: '0.9rem', transition: 'color 0.3s' }}>Serviços</a>
               <a href="#contact" style={{ color: '#A8B3CA', fontSize: '0.9rem', transition: 'color 0.3s' }}>Contato</a>
             </div>
          </div>

          <div>
             <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '20px' }}>Get in touch</h4>
             <p style={{ color: '#A8B3CA', fontSize: '0.9rem', marginBottom: '8px' }}>contato@erisconsulting.com.br</p>
             <p style={{ color: '#A8B3CA', fontSize: '0.9rem' }}>+55 (11) 99999-9999</p>
          </div>
        </div>

        <div style={{ maxWidth: '1300px', margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ color: '#6A7A9C', fontSize: '0.85rem' }}>© 2026 Consultoria Éris. Todos os direitos reservados.</p>
          <div style={{ display: 'flex', gap: '16px' }}>
             <a href="#" style={{ color: '#6A7A9C', fontSize: '0.85rem' }}>Privacidade</a>
             <a href="#" style={{ color: '#6A7A9C', fontSize: '0.85rem' }}>Termos</a>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(240, 203, 70, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(240, 203, 70, 0); }
          100% { box-shadow: 0 0 0 0 rgba(240, 203, 70, 0); }
        }
        input:focus, select:focus, textarea:focus {
          border-color: var(--c-saffron) !important;
          background: rgba(255, 255, 255, 0.1) !important;
        }
        .nav-links a:hover {
          color: var(--c-saffron) !important;
        }
      `}} />
    </div>
  );
}
