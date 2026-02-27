import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ExternalLink, Play } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Brand Launch',
    category: 'Branding',
    description: 'Complete brand identity and digital strategy',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['Branding', 'Social Media', 'Web Design']
  },
  {
    id: 2,
    title: 'Tech Startup Campaign',
    category: 'AdFilm',
    description: 'Cinematic brand story and product launch',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80',
    tags: ['AdFilm', 'Social Media']
  },
  {
    id: 3,
    title: 'Luxury Real Estate',
    category: 'Billboard',
    description: 'Premium outdoor advertising campaign',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    tags: ['Billboard', 'Branding']
  },
  {
    id: 4,
    title: 'Fashion Brand Reels',
    category: 'Social Media',
    description: 'Viral social media content strategy',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
    tags: ['Social Media', 'Content Creation']
  },
  {
    id: 5,
    title: 'SaaS Product Website',
    category: 'Web Design',
    description: 'Conversion-optimized landing page',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    tags: ['Web Design', 'UI/UX']
  },
  {
    id: 6,
    title: 'Restaurant Chain',
    category: 'Branding',
    description: 'Full brand refresh and digital presence',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    tags: ['Branding', 'Social Media', 'AdFilm']
  }
];

const categories = ['All', 'Branding', 'AdFilm', 'Social Media', 'Web Design', 'Billboard'];

export const WorkPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState(null);

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

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
            <span className="text-[#F5F5F5]">OUR </span>
            <span className="gradient-text">WORK</span>
          </h1>
          
          <p className="font-inter text-xl text-[#F5F5F5]/70 max-w-3xl mx-auto leading-relaxed mb-12">
            Case studies that speak louder than promises. Results that matter.
          </p>

          {/* Instagram CTA */}
          <a
            href="https://instagram.com/digitalevo.ads"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-glow relative px-8 py-4 bg-transparent border-2 border-[#F5D300] text-[#F5D300] font-orbitron font-semibold rounded-full smooth-transition hover:bg-[#F5D300] hover:text-[#000000] hover:shadow-[0_0_30px_rgba(245,211,0,0.4)]"
          >
            <span className="relative z-10">View Full Portfolio</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-[#F5D300]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 font-orbitron text-sm font-semibold rounded-full smooth-transition ${
                  activeCategory === category
                    ? 'bg-[#F5D300] text-[#000000]'
                    : 'bg-[#F5D300]/10 text-[#F5D300] hover:bg-[#F5D300]/20 border border-[#F5D300]/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className="group relative glass rounded-2xl overflow-hidden cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover smooth-transition group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/50 to-transparent smooth-transition ${
                    hoveredItem === item.id ? 'opacity-100' : 'opacity-70'
                  }`}></div>

                  {/* Play icon for video items */}
                  {item.category === 'AdFilm' && (
                    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-[#F5D300]/20 border-2 border-[#F5D300] smooth-transition ${
                      hoveredItem === item.id ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                    }`}>
                      <Play className="w-8 h-8 text-[#F5D300] ml-1" fill="currentColor" />
                    </div>
                  )}

                  {/* Yellow glow frame on hover */}
                  <div className={`absolute inset-0 border-2 border-[#F5D300] smooth-transition ${
                    hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                  }`} style={{ boxShadow: hoveredItem === item.id ? '0 0 30px rgba(245, 211, 0, 0.4) inset' : 'none' }}></div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-[#F5D300]/10 text-[#F5D300] text-xs font-orbitron font-semibold rounded-full border border-[#F5D300]/20">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="font-orbitron text-xl font-bold text-[#F5F5F5] mb-2 group-hover:text-[#F5D300] smooth-transition">
                    {item.title}
                  </h3>
                  
                  <p className="font-inter text-[#F5F5F5]/60 text-sm mb-4">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs font-inter text-[#F5F5F5]/40">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <p className="font-inter text-[#F5F5F5]/60 mb-6">
              Want to see more? Check out our Instagram
            </p>
            <a
              href="https://instagram.com/digitalevo.ads"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#F5D300]/10 text-[#F5D300] font-orbitron font-semibold rounded-full smooth-transition hover:bg-[#F5D300]/20 border border-[#F5D300]/20"
            >
              @digitalevo.ads
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
