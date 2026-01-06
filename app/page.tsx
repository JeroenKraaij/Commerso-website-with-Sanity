'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Link from "next/link";
import { useEffect, useState } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'AI-oplossingen voor het MKB';

  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Typing animation
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Particle generator
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  const MagneticButton = ({ children, className, primary = false }: any) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const springConfig = { damping: 20, stiffness: 300 };
    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((e.clientX - centerX) * 0.3);
      y.set((e.clientY - centerY) * 0.3);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.button
        className={className}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x, y }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.button>
    );
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-primary rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      />

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 backdrop-blur-xl transition-colors duration-500 ${
          isDark ? 'bg-black/80 border-white/10' : 'bg-white/80 border-gray-100'
        } border-b`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                COMMERSO
              </div>
            </motion.div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#diensten" className={`transition-colors ${isDark ? 'text-white hover:text-primary' : 'text-gray-900 hover:text-primary'}`}>
                Diensten
              </Link>
              <Link href="#over" className={`transition-colors ${isDark ? 'text-white hover:text-primary' : 'text-gray-900 hover:text-primary'}`}>
                Over ons
              </Link>
              <Link href="#contact" className={`transition-colors ${isDark ? 'text-white hover:text-primary' : 'text-gray-900 hover:text-primary'}`}>
                Contact
              </Link>
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-full transition-colors ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {isDark ? '☀️' : '🌙'}
              </button>
              <MagneticButton className="bg-primary hover:bg-[#E67E00] text-white px-6 py-2.5 rounded-full font-medium transition-colors">
                Neem contact op
              </MagneticButton>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with Gradient Mesh */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Animated Gradient Mesh Background */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-0 -left-40 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #FF8C00 0%, transparent 70%)',
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #C84338 0%, transparent 70%)',
            }}
            animate={{
              x: [0, -50, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 right-20 w-20 h-20 rounded-full bg-secondary opacity-40"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-60 w-16 h-16 rotate-45 bg-primary opacity-30"
          animate={{
            y: [0, 40, 0],
            rotate: [45, 405],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-40 w-24 h-24 rounded-full border-4 border-primary opacity-30"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <div className="flex items-center gap-2 text-primary font-medium mb-4">
                  <motion.div
                    className="w-8 h-1 bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: 32 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  />
                  <span>YOUR COMMERCIAL AI COMPANY</span>
                </div>
              </motion.div>

              {/* Animated Gradient Text */}
              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    {typedText}
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-1 h-16 bg-primary ml-2 align-middle"
                  />
                </motion.div>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className={`text-xl leading-relaxed max-w-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              >
                Commerso helpt middelgrote en kleine bedrijven om de kracht van kunstmatige intelligentie
                te benutten. Praktische AI-toepassingen die écht impact maken.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <MagneticButton
                  className="bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/50 text-white px-8 py-4 rounded-full font-medium text-lg transition-all"
                  primary
                >
                  Ontdek onze diensten
                </MagneticButton>
                <MagneticButton
                  className={`border-2 px-8 py-4 rounded-full font-medium text-lg transition-all ${
                    isDark
                      ? 'border-white text-white hover:bg-white hover:text-black'
                      : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                  }`}
                >
                  Plan een gesprek
                </MagneticButton>
              </motion.div>
            </motion.div>

            {/* 3D Interactive Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative hidden md:block"
              style={{
                perspective: '1000px',
              }}
            >
              <motion.div
                className="relative w-full aspect-square max-w-md mx-auto"
                style={{
                  rotateX: useTransform(
                    useMotionValue(mousePosition.y),
                    [0, window.innerHeight],
                    [10, -10]
                  ),
                  rotateY: useTransform(
                    useMotionValue(mousePosition.x),
                    [0, window.innerWidth],
                    [-10, 10]
                  ),
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="space-y-8">
                    <motion.div
                      className="flex items-center justify-center gap-8"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <motion.div
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-secondary/50 shadow-2xl shadow-secondary/50"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.div
                        className="w-20 h-2 bg-gradient-to-r from-[#F5D47E] to-[#F5D47E]/50"
                        animate={{ scaleX: [1, 1.2, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <motion.div
                        className="w-20 h-20 rotate-45 bg-gradient-to-br from-primary to-primary/50 shadow-2xl shadow-primary/50"
                        whileHover={{ scale: 1.2, rotate: 405 }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>
                    <motion.div
                      className="flex items-center justify-center gap-8"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      <motion.div
                        className="w-20 h-2 bg-gradient-to-r from-gray-300 to-gray-300/50"
                        animate={{ scaleX: [1, 0.8, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      />
                      <motion.div
                        className="w-20 h-20 rounded-full border-8 border-secondary shadow-2xl shadow-secondary/30"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Glassmorphism Bento Grid */}
      <section id="diensten" className={`py-32 relative ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-primary font-medium mb-4">
              <div className="w-8 h-1 bg-primary" />
              <span>ONZE DIENSTEN</span>
              <div className="w-8 h-1 bg-primary" />
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Wat wij voor u kunnen betekenen
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Praktische AI-oplossingen die direct impact maken op uw bedrijfsvoering
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'AI Consultancy',
                desc: 'We helpen u de juiste AI-strategie te ontwikkelen voor uw organisatie. Van eerste verkenning tot volledige implementatie.',
                icon: '○',
                delay: 0.1,
              },
              {
                title: 'Custom AI Solutions',
                desc: 'Maatwerk AI-applicaties die perfect aansluiten bij uw specifieke bedrijfsprocessen en uitdagingen.',
                icon: '◇',
                delay: 0.2,
              },
              {
                title: 'Training & Support',
                desc: 'Uw team volledig voorbereiden op de AI-revolutie. Praktische training en doorlopende ondersteuning.',
                icon: '□',
                delay: 0.3,
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: service.delay, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative p-8 rounded-3xl backdrop-blur-xl border-2 border-transparent hover:border-primary transition-all overflow-hidden ${
                  isDark
                    ? 'bg-white/5 hover:bg-white/10'
                    : 'bg-white/60 hover:bg-white/90'
                }`}
                style={{
                  boxShadow: '0 8px 32px 0 rgba(255, 140, 0, 0.1)',
                }}
              >
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <motion.div
                  className="text-6xl mb-6 text-primary"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {service.desc}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all"
                >
                  Lees meer
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Commerso - Parallax Section */}
      <section id="over" className={`py-32 relative overflow-hidden ${isDark ? 'bg-gradient-to-b from-black to-gray-900' : 'bg-white'}`}>
        <motion.div style={{ y: y1 }} className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-primary font-medium mb-4">
                <div className="w-8 h-1 bg-primary" />
                <span>WAAROM COMMERSO</span>
              </div>

              <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                AI toegankelijk maken voor ieder bedrijf
              </h2>

              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Bij Commerso geloven we dat AI niet alleen voorbehouden is aan grote corporates.
                Het MKB verdient toegang tot dezelfde krachtige tools en technologieën.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  { title: 'Praktisch & Betaalbaar', desc: 'Oplossingen die direct waarde toevoegen zonder astronomische kosten' },
                  { title: 'Persoonlijke Aanpak', desc: 'Geen one-size-fits-all, maar maatwerk voor uw specifieke situatie' },
                  { title: 'Snelle Implementatie', desc: 'Van idee naar werkende oplossing in weken, niet maanden' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-lg shadow-primary/50"
                    >
                      ✓
                    </motion.div>
                    <div>
                      <h4 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h4>
                      <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ y: y2 }}
              className="relative"
            >
              <div className={`rounded-3xl p-8 space-y-6 backdrop-blur-xl ${
                isDark ? 'bg-white/5' : 'bg-gray-50'
              }`}>
                {[
                  { number: '50+', label: 'MKB-bedrijven geholpen', color: 'primary' },
                  { number: '95%', label: 'Klanttevredenheid', color: 'secondary' },
                  { number: '2-6', label: 'Weken tot implementatie', color: 'primary' },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.5 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className={`p-6 rounded-2xl border-l-4 backdrop-blur-lg ${
                      stat.color === 'primary' ? 'border-primary' : 'border-secondary'
                    } ${isDark ? 'bg-white/10' : 'bg-white'}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 + 0.2 }}
                      className={`text-4xl font-bold mb-2 bg-gradient-to-r ${
                        stat.color === 'primary'
                          ? 'from-primary to-orange-600'
                          : 'from-secondary to-red-600'
                      } bg-clip-text text-transparent`}
                    >
                      {stat.number}
                    </motion.div>
                    <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section - Gradient Explosion */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(circle, #FF8C00 0%, transparent 70%)' }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(circle, #C84338 0%, transparent 70%)' }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 25, repeat: Infinity }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 text-center relative z-10"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent"
          >
            Klaar om te starten met AI?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Plan een vrijblijvend gesprek en ontdek hoe AI uw bedrijf naar een hoger niveau kan tillen.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <MagneticButton className="bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/50 text-white px-8 py-4 rounded-full font-medium text-lg transition-all">
              Plan een gesprek
            </MagneticButton>
            <MagneticButton className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-medium text-lg transition-all backdrop-blur-sm">
              Bekijk cases
            </MagneticButton>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl font-bold mb-4">COMMERSO</div>
              <p className="text-gray-400 text-sm">Your Commercial AI Company</p>
            </motion.div>

            {[
              { title: 'Diensten', links: ['AI Consultancy', 'Custom Solutions', 'Training'] },
              { title: 'Bedrijf', links: ['Over ons', 'Cases', 'Blog'] },
              { title: 'Contact', links: ['info@commerso.nl', '+31 (0)20 123 4567'] },
            ].map((col, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h4 className="font-bold mb-4">{col.title}</h4>
                <ul className="space-y-2 text-gray-400">
                  {col.links.map((link, i) => (
                    <motion.li key={i} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <Link href="#" className="hover:text-primary transition-colors">
                        {link}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Commerso. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
