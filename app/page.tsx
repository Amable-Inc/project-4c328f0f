'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, CheckCircle, Truck, Shield, Award } from 'lucide-react';

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Pro Match Ball',
      price: 89.99,
      image: '⚽',
      rating: 5,
      description: 'Official match ball with superior grip and flight',
      badge: 'Best Seller',
    },
    {
      id: 2,
      name: 'Training Elite',
      price: 49.99,
      image: '⚽',
      rating: 4.5,
      description: 'Durable ball perfect for daily training sessions',
      badge: 'Popular',
    },
    {
      id: 3,
      name: 'Youth Champion',
      price: 29.99,
      image: '⚽',
      rating: 4.8,
      description: 'Lightweight ball designed for young players',
      badge: 'New',
    },
    {
      id: 4,
      name: 'Street Soccer',
      price: 34.99,
      image: '⚽',
      rating: 4.3,
      description: 'Extra durable for concrete and street play',
      badge: null,
    },
    {
      id: 5,
      name: 'Indoor Futsal',
      price: 44.99,
      image: '⚽',
      rating: 4.7,
      description: 'Low-bounce ball optimized for indoor play',
      badge: null,
    },
    {
      id: 6,
      name: 'Premium League',
      price: 129.99,
      image: '⚽',
      rating: 5,
      description: 'Top-tier professional ball with FIFA approval',
      badge: 'Premium',
    },
  ];

  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Free Shipping',
      description: 'On orders over $50',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '2-Year Warranty',
      description: 'Quality guaranteed',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Official Products',
      description: 'Certified soccer balls',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: '30-Day Returns',
      description: 'Easy return policy',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-4xl">⚽</span>
            <span className="text-2xl font-bold text-green-700">GoalGear</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#products" className="text-gray-700 hover:text-green-700 transition">
              Products
            </a>
            <a href="#features" className="text-gray-700 hover:text-green-700 transition">
              Features
            </a>
            <a href="#about" className="text-gray-700 hover:text-green-700 transition">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-green-700 transition">
              Contact
            </a>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Cart (0)
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Premium Soccer Balls for Every Player
            </h1>
            <p className="text-xl text-gray-600">
              From professional matches to weekend games, find the perfect ball to elevate your game. 
              Quality craftsmanship, unbeatable prices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                View Collection
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-green-700">10K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-700">50+</div>
                <div className="text-gray-600">Ball Models</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-700">4.9</div>
                <div className="text-gray-600 flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                  Rating
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-3xl opacity-20"></div>
              <div className="relative text-[300px] leading-none animate-pulse">⚽</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg hover:bg-green-50 transition"
              >
                <div className="text-green-600">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Soccer Balls</h2>
          <p className="text-xl text-gray-600">
            Discover our handpicked selection of top-quality soccer balls
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="relative">
                  <div className="text-[120px] text-center leading-none mb-4">{product.image}</div>
                  {product.badge && (
                    <Badge className="absolute top-0 right-0 bg-green-600">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 stroke-yellow-400'
                          : 'stroke-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                </div>
                <div className="text-3xl font-bold text-green-700">${product.price}</div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Score?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of players who trust GoalGear for their soccer equipment
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Browse All Products
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-3xl">⚽</span>
                <span className="text-xl font-bold">GoalGear</span>
              </div>
              <p className="text-gray-400">
                Your trusted source for premium soccer balls since 2010.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Shop</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Match Balls</a></li>
                <li><a href="#" className="hover:text-white transition">Training Balls</a></li>
                <li><a href="#" className="hover:text-white transition">Youth Balls</a></li>
                <li><a href="#" className="hover:text-white transition">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition">Returns</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Get exclusive deals and updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded bg-gray-800 text-white flex-1 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <Button className="bg-green-600 hover:bg-green-700">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GoalGear. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
