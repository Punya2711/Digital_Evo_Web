import React, { useEffect, useRef, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Target, Zap, Award, Users } from 'lucide-react';

const milestones = [
{ year: '2020', title: 'Founded', description: 'Digital Evo begins with a vision to transform digital marketing' },
{ year: '2021', title: 'First Major Campaign', description: '50+ brands onboarded, 10M+ reach achieved' },
{ year: '2022', title: 'Expansion', description: 'Opened second office in Mysuru, team of 15+' },
{ year: '2023', title: 'Industry Recognition', description: 'Award-winning campaigns, 100+ projects completed' },
{ year: '2024', title: 'Scale', description: '150+ projects, 80+ brands, 5M+ monthly reach' }];


const values = [
{
  icon: Target,
  title: 'Performance-Driven',
  description: 'Every campaign is engineered for measurable results, not vanity metrics.'
},
{
  icon: Zap,
  title: 'Speed & Precision',
  description: 'We move fast, iterate faster, and deliver excellence without compromise.'
},
{
  icon: Award,
  title: 'Bold Creativity',
  description: 'We don\'t follow trends—we set them. Our work stands out and speaks volumes.'
},
{
  icon: Users,
  title: 'Client Success',
  description: 'Your growth is our mission. We succeed when you scale.'
}];


export const AboutPage = () => {
  const [visibleMilestones, setVisibleMilestones] = useState([]);
  const milestonesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            setVisibleMilestones((prev) => [...new Set([...prev, parseInt(index)])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    milestonesRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#000000] min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#0A0F1C] to-[#000000]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(245, 211, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 211, 0, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-block mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#F5D300] to-transparent mx-auto"></div>
          </div>
          
          <h1 className="font-orbitron text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-[#F5F5F5]">ABOUT </span>
            <span className="gradient-text">US</span>
          </h1>
          
          <p className="font-inter text-xl text-[#F5F5F5]/70 max-w-3xl mx-auto leading-relaxed">Turning vision into impactful digital presence.

          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="space-y-12">
            <div className="text-center space-y-6">
              <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-[#F5F5F5]">
                Building <span className="gradient-text">Bold Brands</span>
              </h2>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#F5D300] to-transparent mx-auto"></div>
            </div>

            <div className="space-y-8 font-inter text-lg text-[#F5F5F5]/70 leading-relaxed">
              <p>
                Digital Evo isn't just another marketing agency. We're a performance engineering firm that happens to specialize in digital growth. Born from the belief that marketing should be measurable, scalable, and ruthlessly effective.
              </p>
              
              <p>
                We work with ambitious businesses who refuse to settle for mediocre results. Brands that want to dominate their space, not just participate in it. Our approach combines data-driven strategy with bold creative execution—because performance without creativity is forgettable, and creativity without performance is expensive.
              </p>

              <p>
                From brand strategy to social media dominance, from cinematic storytelling to conversion-optimized web design—we engineer every touchpoint for maximum impact. We're not here to be your vendor. We're here to be your growth partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#000000] via-[#0A0F1C] to-[#000000]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="glass rounded-3xl p-10 relative overflow-hidden group hover:border-[#F5D300]/50 smooth-transition">
              <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#F5D300]/0 group-hover:border-[#F5D300]/30 rounded-tr-3xl smooth-transition"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#F5D300]/0 group-hover:border-[#F5D300]/30 rounded-bl-3xl smooth-transition"></div>
              
              <div className="relative z-10">
                <h3 className="font-orbitron text-3xl font-bold text-[#F5D300] mb-6">
                  Our Mission
                </h3>
                <p className="font-inter text-lg text-[#F5F5F5]/70 leading-relaxed">
                  To empower ambitious businesses with marketing strategies that don't just look good—they perform. We exist to turn brands into market leaders through data-driven creativity and relentless execution.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="glass rounded-3xl p-10 relative overflow-hidden group hover:border-[#F5D300]/50 smooth-transition">
              <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#F5D300]/0 group-hover:border-[#F5D300]/30 rounded-tr-3xl smooth-transition"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#F5D300]/0 group-hover:border-[#F5D300]/30 rounded-bl-3xl smooth-transition"></div>
              
              <div className="relative z-10">
                <h3 className="font-orbitron text-3xl font-bold text-[#F5D300] mb-6">
                  Our Vision
                </h3>
                <p className="font-inter text-lg text-[#F5F5F5]/70 leading-relaxed">
                  To redefine what a digital marketing agency can be. To set the standard for performance, creativity, and client success. To be the agency that ambitious brands choose when they're ready to dominate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 space-y-6">
            <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-[#F5F5F5]">
              Our <span className="gradient-text">Team</span>
            </h2>
            <p className="font-inter text-xl text-[#F5F5F5]/70">
              The minds behind Digital Evo's success
            </p>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#F5D300] to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="glass rounded-3xl p-10 relative overflow-hidden group hover:border-[#F5D300]/50 smooth-transition text-center">
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#F5D300]/0 group-hover:border-[#F5D300]/30 rounded-tr-3xl smooth-transition"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#F5D300]/0 group-hover:border-[#F5D300]/30 rounded-bl-3xl smooth-transition"></div>
              
              <div className="relative z-10 space-y-4">
                {/* Icon placeholder */}
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#F5D300]/10 group-hover:bg-[#F5D300]/20 smooth-transition">
                  <span className="text-4xl text-[#F5D300]">👨‍💼</span>
                </div>
                
                <h3 className="font-orbitron text-2xl font-bold text-[#F5D300] mb-2">
                  Abhishek Vishnu -
                  Founder/Cinematographer
                  /Editor
                </h3>
                <div className="h-px w-16 bg-[#F5D300]/30 mx-auto mb-4"></div>
                <p className="font-inter text-[#F5F5F5]/70 leading-relaxed">
                  Visionary leader with 10+ years in digital marketing. Drives strategy and innovation, transforming brands into market leaders.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="glass rounded-3xl p-10 relative overflow-hidden group hover:border-[#F5D300]/50 smooth-transition text-center">
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#F5D300]/0 group-hover:border-[#F5D300]/30 rounded-tr-3xl smooth-transition"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#F5D300]/0 group-hover:border-[#F5D300]/30 rounded-bl-3xl smooth-transition"></div>
              
              <div className="relative z-10 space-y-4">
                {/* Icon placeholder */}
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#F5D300]/10 group-hover:bg-[#F5D300]/20 smooth-transition">
                  <span className="text-4xl text-[#F5D300]">🎨</span>
                </div>
                
                <h3 className="font-orbitron text-2xl font-bold text-[#F5D300] mb-2">
                  Kishor Gowda
                  Co-Founder/Creative Director
                </h3>
                <div className="h-px w-16 bg-[#F5D300]/30 mx-auto mb-4"></div>
                <p className="font-inter text-[#F5F5F5]/70 leading-relaxed">
                  Award-winning creative mind specializing in brand identity and visual storytelling that captivates and converts.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="glass rounded-3xl p-10 relative overflow-hidden group hover:border-[#F5D300]/50 smooth-transition text-center">
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#F5D300]/0 group-hover:border-[#F5D300]/30 rounded-tr-3xl smooth-transition"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#F5D300]/0 group-hover:border-[#F5D300]/30 rounded-bl-3xl smooth-transition"></div>
              
              <div className="relative z-10 space-y-4">
                {/* Icon placeholder */}
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#F5D300]/10 group-hover:bg-[#F5D300]/20 smooth-transition">
                  <span className="text-4xl text-[#F5D300]">📊</span>
                </div>
                
                <h3 className="font-orbitron text-2xl font-bold text-[#F5D300] mb-2">
                  Deepthi Bhandari
                  Director- Sales & Operations
                </h3>
                <div className="h-px w-16 bg-[#F5D300]/30 mx-auto mb-4"></div>
                <p className="font-inter text-[#F5F5F5]/70 leading-relaxed">
                  Data-driven strategist optimizing campaigns for maximum ROI. Turns analytics into actionable growth insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#000000] via-[#0A0F1C] to-[#000000]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 space-y-6">
            <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-[#F5F5F5]">
              Our <span className="gradient-text">Values</span>
            </h2>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#F5D300] to-transparent mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={index}
                  className="glass rounded-2xl p-8 text-center hover:border-[#F5D300]/50 smooth-transition group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}>

                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-[#F5D300]/10 group-hover:bg-[#F5D300]/20 smooth-transition">
                    <Icon className="w-8 h-8 text-[#F5D300]" />
                  </div>
                  <h3 className="font-orbitron text-lg font-bold text-[#F5F5F5] mb-3">
                    {value.title}
                  </h3>
                  <p className="font-inter text-sm text-[#F5F5F5]/70">
                    {value.description}
                  </p>
                </div>);

            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>);

};