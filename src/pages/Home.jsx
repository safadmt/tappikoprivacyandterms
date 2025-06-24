import  { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Star, 
  Truck, 
  Shield, 
  RefreshCw, 
  Heart,
  Search,
  Menu,
  X,
  ArrowRight,
  Play,
  Users,
  Award,
  Zap
} from 'lucide-react';

const TappikoHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Hero carousel slides
  const heroSlides = [
    {
      title: "Discover Amazing Products",
      subtitle: "Your one-stop shop for everything you need",
      bg: "from-purple-600 to-pink-600",
      image: "🛍️"
    },
    {
      title: "Premium Quality Guaranteed",
      subtitle: "Curated collection of top-tier products",
      bg: "from-blue-600 to-cyan-600",
      image: "⭐"
    },
    {
      title: "Fast & Secure Delivery",
      subtitle: "Get your orders delivered safely and quickly",
      bg: "from-green-600 to-teal-600",
      image: "🚚"
    }
  ];

  // Featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "₹4,999",
      originalPrice: "₹6,999",
      rating: 4.8,
      reviews: 124,
      image: "🎧",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: "₹8,999",
      originalPrice: "₹12,999",
      rating: 4.9,
      reviews: 89,
      image: "⌚",
      badge: "New"
    },
    {
      id: 3,
      name: "Portable Bluetooth Speaker",
      price: "₹2,499",
      originalPrice: "₹3,999",
      rating: 4.7,
      reviews: 156,
      image: "🔊",
      badge: "Sale"
    },
    {
      id: 4,
      name: "Wireless Power Bank",
      price: "₹1,999",
      originalPrice: "₹2,999",
      rating: 4.6,
      reviews: 203,
      image: "🔋",
      badge: ""
    }
  ];

  // Categories
  const categories = [
    { name: "Electronics", icon: "📱", count: "500+" },
    { name: "Fashion", icon: "👕", count: "800+" },
    { name: "Home & Garden", icon: "🏠", count: "300+" },
    { name: "Sports", icon: "⚽", count: "250+" },
    { name: "Books", icon: "📚", count: "1000+" },
    { name: "Beauty", icon: "💄", count: "400+" }
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Tappiko
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Shop</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Categories</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
              </button>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Home</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Shop</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Categories</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600">About</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${heroSlides[currentSlide].bg} transition-all duration-1000`}>
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="text-8xl mb-6 animate-bounce">
            {heroSlides[currentSlide].image}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {heroSlides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>Shop Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over ₹999</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure payment processing</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day hassle-free returns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16" id="categories" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600">
              Discover our wide range of products across different categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div 
                key={index}
                className={`text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                  isVisible.categories ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} items</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50" id="products" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
              Handpicked products just for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer ${
                  isVisible.products ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative p-6 bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="text-6xl text-center mb-4 group-hover:scale-110 transition-transform">
                    {product.image}
                  </div>
                  {product.badge && (
                    <span className={`absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-semibold ${
                      product.badge === 'Best Seller' ? 'bg-yellow-100 text-yellow-800' :
                      product.badge === 'New' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {product.badge}
                    </span>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-purple-600">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                    <button className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors">
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-lg opacity-90">Happy Customers</div>
            </div>
            
            <div>
              <div className="flex items-center justify-center mb-4">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-lg opacity-90">Products Sold</div>
            </div>
            
            <div>
              <div className="flex items-center justify-center mb-4">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">4.8</div>
              <div className="text-lg opacity-90">Average Rating</div>
            </div>
            
            <div>
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for exclusive deals and new product updates
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <span className="text-2xl font-bold">Tappiko</span>
              </div>
              <p className="text-gray-300 mb-4">
                Your trusted online shopping destination for quality products and exceptional service.
              </p>
              <div className="text-sm text-gray-400">
                <p>Email: tappiko.official@gmail.com</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Electronics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fashion</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Home & Garden</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sports</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Tappiko. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TappikoHomepage;