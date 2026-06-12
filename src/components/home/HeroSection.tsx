import { ArrowRight, Sparkles, Activity, Shield, Zap } from 'lucide-react';
import { heroData } from '../../data/heroData';
import { Button } from '../shared/Button';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animations';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#0f172a] py-24 lg:py-32">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 blur-[120px] rounded-full mix-blend-screen" />
      </div>
      <div className="absolute bottom-0 right-[-20%] w-[600px] h-[600px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tl from-purple-600 to-fuchsia-600 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU5IDYwaC0xVjFoLTF2NTlIMHYtMWg1OFYwaDF2NjB6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpcCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-50 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Text Content */}
        <motion.div 
          className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start max-w-3xl mx-auto lg:mx-0"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          
          {/* Trust Badge */}
          <motion.div variants={fadeInUp}>
            <Button 
              href={heroData.badge.link}
              variant="outline"
              size="sm"
              className="group rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {heroData.badge.text}
              </span>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 group-hover:text-white transition-all" />
            </Button>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8 break-words hyphens-auto"
          >
            {heroData.headline.prefix}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 relative inline-block">
              {heroData.headline.highlight}
              {/* Subtle underline glow */}
              <span className="absolute bottom-1 left-0 w-full h-[4px] bg-purple-500/30 blur-[2px] rounded-full" />
            </span>{' '}
            <br className="hidden md:block" />
            {heroData.headline.suffix}
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
          >
            {heroData.description}
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Button 
              href={heroData.primaryCta.href}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              {heroData.primaryCta.label}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              href={heroData.secondaryCta.href}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              {heroData.secondaryCta.label}
            </Button>
          </motion.div>

          {/* Trust Metrics */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/10 w-full max-w-lg"
          >
            {heroData.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl font-bold text-white mb-1">{metric.value}</span>
                <span className="text-sm text-gray-400 font-medium">{metric.label}</span>
              </div>
            ))}
          </motion.div>

        </motion.div>

        {/* Right Visual Element (SaaS Dashboard Mockup) */}
        <div className="flex-1 w-full relative hidden lg:block perspective-[1000px]">
          
          {/* Decorative rotating aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 blur-[80px] rounded-full animate-[spin_20s_linear_infinite]" />

          {/* Main Glass Window */}
          <div className="relative w-full max-w-2xl ml-auto bg-[#1e293b]/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out z-20 hover:shadow-purple-500/20">
            
            {/* MacOS style window header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-4 px-3 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-gray-400 font-mono tracking-wider">
                infocera-cloud-console
              </div>
            </div>

            {/* Window Content */}
            <div className="p-6 grid gap-4">
              
              {/* Fake Chart / Stats Area */}
              <div className="flex gap-4">
                <div className="flex-1 bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <Activity className="w-5 h-5 text-indigo-400" />
                    <span className="text-xs text-green-400 font-mono">+24.5%</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">2.4M</div>
                  <div className="text-xs text-gray-400">API Requests</div>
                </div>
                <div className="flex-1 bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <Shield className="w-5 h-5 text-purple-400" />
                    <span className="text-xs text-gray-400 font-mono">Active</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-xs text-gray-400">System Uptime</div>
                </div>
              </div>

              {/* Fake Deployment Status */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm text-gray-300 font-medium">Recent Deployments</span>
                </div>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]' : 'bg-gray-500'}`} />
                        <span className="text-xs text-gray-400 font-mono">prod-cluster-{i}</span>
                      </div>
                      <span className="text-xs text-gray-400">{i * 2}m ago</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Floating Accents */}
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-40 animate-[bounce_4s_infinite]" />
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-tr from-fuchsia-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-[pulse_3s_infinite]" />
          
        </div>

      </div>
    </section>
  );
};
