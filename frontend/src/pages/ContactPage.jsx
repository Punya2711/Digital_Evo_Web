import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MapPin, Phone, Mail, Send, Instagram } from 'lucide-react';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, open WhatsApp with message
    const message = `Hi! I'm ${formData.name}. ${formData.message}`;
    window.open(`https://wa.me/919380923767?text=${encodeURIComponent(message)}`, '_blank');
  };

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
            <span className="text-[#F5F5F5]">LET'S </span>
            <span className="gradient-text">TALK</span>
          </h1>
          
          <p className="font-inter text-xl text-[#F5F5F5]/70 max-w-3xl mx-auto leading-relaxed">
            Ready to scale? Let's engineer your growth strategy.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-[#F5F5F5] mb-6">
                  Get in <span className="gradient-text">Touch</span>
                </h2>
                <p className="font-inter text-lg text-[#F5F5F5]/70 leading-relaxed">
                  Drop us a message and we'll get back to you within 24 hours. Or reach out directly via phone or WhatsApp.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone */}
                <a
                  href="https://wa.me/919380923767"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-[#F5D300]/50 smooth-transition group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F5D300]/10 group-hover:bg-[#F5D300]/20 smooth-transition flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#F5D300]" />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-sm font-semibold text-[#F5F5F5] mb-1">
                      Phone / WhatsApp
                    </h3>
                    <p className="font-inter text-[#F5D300] font-medium">
                      +91 93809 23767
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/digitalevo.ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-[#F5D300]/50 smooth-transition group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F5D300]/10 group-hover:bg-[#F5D300]/20 smooth-transition flex-shrink-0">
                    <Instagram className="w-6 h-6 text-[#F5D300]" />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-sm font-semibold text-[#F5F5F5] mb-1">
                      Instagram
                    </h3>
                    <p className="font-inter text-[#F5D300] font-medium">
                      @digitalevo.ads
                    </p>
                  </div>
                </a>
              </div>

              {/* Locations */}
              <div className="space-y-4">
                <h3 className="font-orbitron text-xl font-bold text-[#F5F5F5] flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#F5D300]" />
                  Our Locations
                </h3>
                
                <div className="glass rounded-xl p-6 hover:border-[#F5D300]/50 smooth-transition">
                  <p className="font-inter text-[#F5F5F5] font-medium mb-1">Hassan Office</p>
                  <p className="font-inter text-[#F5F5F5]/70 text-sm">
                    Vidyanagar, Hassan – 573202
                  </p>
                </div>

                <div className="glass rounded-xl p-6 hover:border-[#F5D300]/50 smooth-transition">
                  <p className="font-inter text-[#F5F5F5] font-medium mb-1">Mysuru Office</p>
                  <p className="font-inter text-[#F5F5F5]/70 text-sm">
                    Vijaynagar 1st Stage, Mysuru – 570017
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass rounded-3xl p-10 relative overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#F5D300]/20 rounded-tr-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#F5D300]/20 rounded-bl-3xl"></div>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                {/* Name */}
                <div>
                  <label className="block font-inter text-sm font-medium text-[#F5F5F5] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-[#000000]/50 border rounded-xl font-inter text-[#F5F5F5] smooth-transition focus:outline-none ${
                      focusedField === 'name' ? 'border-[#F5D300] shadow-[0_0_20px_rgba(245,211,0,0.2)]' : 'border-[#F5D300]/20'
                    }`}
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-inter text-sm font-medium text-[#F5F5F5] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-[#000000]/50 border rounded-xl font-inter text-[#F5F5F5] smooth-transition focus:outline-none ${
                      focusedField === 'email' ? 'border-[#F5D300] shadow-[0_0_20px_rgba(245,211,0,0.2)]' : 'border-[#F5D300]/20'
                    }`}
                    placeholder="john@company.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-inter text-sm font-medium text-[#F5F5F5] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-[#000000]/50 border rounded-xl font-inter text-[#F5F5F5] smooth-transition focus:outline-none ${
                      focusedField === 'phone' ? 'border-[#F5D300] shadow-[0_0_20px_rgba(245,211,0,0.2)]' : 'border-[#F5D300]/20'
                    }`}
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block font-inter text-sm font-medium text-[#F5F5F5] mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('service')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-[#000000]/50 border rounded-xl font-inter text-[#F5F5F5] smooth-transition focus:outline-none ${
                      focusedField === 'service' ? 'border-[#F5D300] shadow-[0_0_20px_rgba(245,211,0,0.2)]' : 'border-[#F5D300]/20'
                    }`}
                  >
                    <option value="">Select a service</option>
                    <option value="social-media">Social Media Handling</option>
                    <option value="adfilm">AdFilm Production</option>
                    <option value="billboard">Digital Billboard</option>
                    <option value="web-design">Web Design</option>
                    <option value="branding">Branding & Identity</option>
                    <option value="all">Complete Package</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-inter text-sm font-medium text-[#F5F5F5] mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-[#000000]/50 border rounded-xl font-inter text-[#F5F5F5] smooth-transition focus:outline-none resize-none ${
                      focusedField === 'message' ? 'border-[#F5D300] shadow-[0_0_20px_rgba(245,211,0,0.2)]' : 'border-[#F5D300]/20'
                    }`}
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-glow relative px-8 py-4 bg-[#F5D300] text-[#000000] font-orbitron font-semibold rounded-full smooth-transition hover:bg-[#FFE55C] hover:shadow-[0_0_30px_rgba(245,211,0,0.5)] flex items-center justify-center gap-3"
                >
                  <span className="relative z-10">Send Message</span>
                  <Send className="w-5 h-5" />
                </button>

                <p className="text-center font-inter text-xs text-[#F5F5F5]/50">
                  We'll respond within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
