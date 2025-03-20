
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '#',
    children: [
      { name: 'HEOR Research', href: '/services/heor-research' },
      { name: 'Real-World Evidence', href: '/services/real-world-evidence' },
      { name: 'Data Analytics', href: '/services/data-analytics' },
      { name: 'AI Solutions', href: '/services/ai-solutions' },
    ]
  },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-700">
                Connect<span className="text-primary-400">HEOR</span>
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => 
              !item.children ? (
                <Link 
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === item.href
                      ? 'text-primary-600 bg-primary-50/50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100/80'
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button 
                      className="px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 text-gray-700 hover:text-primary-600 hover:bg-gray-100/80"
                    >
                      {item.name} <ChevronDown size={16} />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-[180px] animate-scale-in">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link 
                          to={child.href}
                          className="w-full cursor-pointer"
                        >
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            )}
          </nav>

          <div className="hidden md:block">
            <Button 
              className="bg-primary-600 hover:bg-primary-700 text-white btn-hover-effect"
              asChild
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-0 top-[60px] z-50 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 space-y-4 h-full overflow-y-auto">
          {navigation.map((item) => 
            !item.children ? (
              <Link 
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 text-base font-medium rounded-md transition-colors ${
                  location.pathname === item.href
                    ? 'text-primary-600 bg-primary-50/50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ) : (
              <div key={item.name} className="space-y-2">
                <div className="px-4 py-2 text-sm font-medium text-gray-500">
                  {item.name}
                </div>
                <div className="pl-4 space-y-1 border-l-2 border-gray-200">
                  {item.children.map((child) => (
                    <Link 
                      key={child.name}
                      to={child.href}
                      className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}
          <div className="pt-4 mt-6 border-t border-gray-200">
            <Button 
              className="w-full bg-primary-600 hover:bg-primary-700 text-white"
              asChild
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
