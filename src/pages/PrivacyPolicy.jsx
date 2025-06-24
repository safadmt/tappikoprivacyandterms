import  { useState } from 'react';
import { Shield, Eye, Lock, Users, FileText, Mail, MapPin } from 'lucide-react';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'about', title: 'About Tappiko', icon: Shield },
    { id: 'information', title: 'Information We Collect', icon: Eye },
    { id: 'usage', title: 'How We Use Your Information', icon: FileText },
    { id: 'sharing', title: 'Information Sharing', icon: Users },
    { id: 'social', title: 'Social Media Logins', icon: Lock },
    { id: 'retention', title: 'Data Retention', icon: FileText },
    { id: 'rights', title: 'Your Privacy Rights', icon: Shield },
    { id: 'minors', title: 'Minors Policy', icon: Users }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Tappiko</h1>
                <p className="text-sm text-gray-600">Privacy Policy</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Last updated</p>
              <p className="text-sm font-medium text-gray-900">June 24, 2025</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contents</h3>
                <nav className="space-y-2">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                          activeSection === section.id
                            ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span className="text-sm font-medium">{section.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 mt-8 lg:mt-0">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Introduction */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-white">
                <h1 className="text-4xl font-bold mb-4">Privacy Notice</h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  This Privacy Notice for Tappiko , describes how and why we might access, collect, store, use, and/or share ('process') your personal information when you use our services.
                </p>
              </div>

              <div className="px-8 py-8 space-y-12">
                {/* About Tappiko */}
                <section id="about" className="scroll-mt-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">About Tappiko</h2>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                    <p className="text-gray-700 leading-relaxed">
                      Tappiko is your premier architectural multi-vendor platform featuring HomeCraft: Architecture & Design. Explore and shop high-quality architectural products & furniture for every space. Browse thousands of architectural products including tiles, cladding, lighting, furniture, and more. Discover modern design ideas, save your favorites, and connect with verified vendors.
                    </p>
                  </div>
                </section>

                {/* Information We Collect */}
                <section id="information" className="scroll-mt-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Eye className="h-5 w-5 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    We collect personal information that you voluntarily provide to us when you:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {[
                      'Register on our platform',
                      'Create user accounts',
                      'Browse and shop for architectural products',
                      'Connect with vendors',
                      'Save favorites and create wishlists',
                      'Contact us for support'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information Categories</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        'Contact information (email, phone, addresses)',
                        'Account credentials (username, password)',
                        'Professional information',
                        'Billing and payment details',
                        'Communication preferences',
                        'Location data (with permission)'
                      ].map((category, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{category}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* How We Use Your Information */}
                <section id="usage" className="scroll-mt-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-purple-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    We process your information to:
                  </p>
                  <div className="space-y-3">
                    {[
                      'Facilitate account creation and authentication',
                      'Provide access to our architectural product marketplace',
                      'Connect you with verified vendors',
                      'Process orders and manage transactions',
                      'Send marketing communications (with consent)',
                      'Improve our platform and services',
                      'Ensure security and prevent fraud'
                    ].map((use, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg border border-purple-100">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{use}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Information Sharing */}
                <section id="sharing" className="scroll-mt-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-orange-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Information Sharing</h2>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    We may share your information in specific situations:
                  </p>
                  <div className="grid gap-4">
                    {[
                      'With vendors when you make inquiries or purchases',
                      'During business transfers or acquisitions',
                      'When required by law or legal process',
                      'With your explicit consent'
                    ].map((situation, index) => (
                      <div key={index} className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                        <span className="text-gray-700">{situation}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Social Media Logins */}
                <section id="social" className="scroll-mt-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <Lock className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Social Media Logins</h2>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                    <p className="text-gray-700 leading-relaxed">
                      Our platform offers the ability to register and log in using your social media accounts (Facebook, X, etc.). When you choose this option, we receive certain profile information from your social media provider, including name, email address, and profile picture.
                    </p>
                  </div>
                </section>

                {/* Data Retention */}
                <section id="retention" className="scroll-mt-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-red-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Data Retention</h2>
                  </div>
                  <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                    <p className="text-gray-700 leading-relaxed">
                      We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice, or as required by law. When you close your account, we will delete or anonymize your data, except where retention is required for legal compliance.
                    </p>
                  </div>
                </section>

                {/* Your Privacy Rights */}
                <section id="rights" className="scroll-mt-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Shield className="h-5 w-5 text-teal-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Your Privacy Rights</h2>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    You have the right to:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Access your personal information',
                      'Update or correct your data',
                      'Delete your account and data',
                      'Withdraw consent for processing',
                      'Opt-out of marketing communications',
                      'Control location tracking and push notifications'
                    ].map((right, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-teal-50 rounded-lg border border-teal-200">
                        <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-gray-700">{right}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Minors Policy */}
                <section id="minors" className="scroll-mt-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-pink-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Minors Policy</h2>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-6 border border-pink-200">
                    <p className="text-gray-700 leading-relaxed">
                      We do not knowingly collect data from or market to children under 18 years of age. If you are under 18, you must have parental consent to use our services.
                    </p>
                  </div>
                </section>
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-12 bg-white rounded-xl shadow-lg border border-gray-100 p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Tappiko</h3>
                <p className="text-gray-600 mb-6">Your premier architectural multi-vendor platform for discovering and purchasing high-quality architectural products and design solutions.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
                  <div className="space-y-2">
                    {['Privacy Policy', 'Terms & Conditions', 'Contact Support', 'Vendor Registration'].map((link, index) => (
                      <div key={index} className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">
                        {link}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">tappiko.official@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">Vatakara, Kerala, India</span>
                    </div>
                    <div className="text-gray-600 text-sm">
                      Platform for Architects & Designers
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 text-center">
                <p className="text-gray-500 text-sm">
                  © 2025 Tappiko. All rights reserved. | Empowering architectural excellence through innovative marketplace solutions.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;