
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Hero = () => {
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dotsRef.current) return;

    // Clear any existing canvas
    const existingCanvas = dotsRef.current.querySelector('canvas');
    if (existingCanvas) {
      existingCanvas.remove();
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    dotsRef.current.appendChild(canvas);

    const resizeCanvas = () => {
      if (dotsRef.current) {
        canvas.width = dotsRef.current.offsetWidth;
        canvas.height = dotsRef.current.offsetHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle settings
    const particlesArray: {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
    }[] = [];
    const numberOfParticles = 100;
    const colors = ['#0c8de0', '#2CC4CB', '#7cc8fb'];

    // Create particles
    const createParticles = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        const radius = Math.random() * 2 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = (Math.random() - 0.5) * 0.5;
        const speedY = (Math.random() - 0.5) * 0.5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const alpha = Math.random() * 0.5 + 0.1;

        particlesArray.push({
          x, y, radius, speedX, speedY, color, alpha
        });
      }
    };

    // Draw particles
    const drawParticles = () => {
      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.alpha * 255).toString(16).padStart(2, '0');
        ctx.fill();
      }
    };

    // Update particles
    const updateParticles = () => {
      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i];
        p.x += p.speedX;
        p.y += p.speedY;

        // Boundary checking
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      }
    };

    // Connect particles with lines if they're close enough
    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const opacity = 1 - distance / 100;
            ctx.strokeStyle = `rgba(200, 200, 255, ${opacity * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawParticles();
      updateParticles();
      connectParticles();
      requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background dots animation */}
      <div 
        ref={dotsRef} 
        className="absolute inset-0 z-0 opacity-50"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="max-w-xl space-y-6">
              <div className="inline-block animate-fade-in">
                <span className="bg-primary-50 text-primary-700 text-sm font-medium px-4 py-1.5 rounded-full">
                  Advancing Healthcare Decisions
                </span>
              </div>
              
              <h1 className="heading-xl animate-fade-in text-balance" style={{animationDelay: '0.1s'}}>
                Evidence-Driven <span className="text-gradient">Healthcare</span> Outcomes Research
              </h1>
              
              <p className="text-xl text-gray-600 animate-fade-in text-balance" style={{animationDelay: '0.2s'}}>
                Transforming health economics with advanced AI-powered analytics and real-world evidence to improve patient outcomes and healthcare efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
                <Button 
                  className="bg-primary-600 hover:bg-primary-700 text-white text-lg h-12 px-6 btn-hover-effect"
                  asChild
                >
                  <Link to="/contact">
                    Get Started <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-300 hover:border-primary-600 hover:text-primary-700 text-lg h-12 px-6"
                  asChild
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
              
              <div className="pt-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <p className="text-sm text-gray-500">Trusted by leading healthcare organizations</p>
                <div className="flex flex-wrap items-center gap-8 mt-4">
                  <div className="text-gray-400 font-semibold">Mayo Clinic</div>
                  <div className="text-gray-400 font-semibold">Cleveland Clinic</div>
                  <div className="text-gray-400 font-semibold">Johns Hopkins</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-12">
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="aspect-[4/3] bg-gradient-to-br from-primary-700 to-primary-500 rounded-2xl">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
                </div>
                
                {/* Overlay with stats */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-2xl font-bold text-primary-700">98%</p>
                      <p className="text-sm text-gray-600">Accuracy Rate</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary-700">250+</p>
                      <p className="text-sm text-gray-600">Research Projects</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary-700">15+</p>
                      <p className="text-sm text-gray-600">Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-10 w-20 h-20 bg-secondary-400/20 rounded-full blur-2xl animate-pulse-slow"></div>
              <div className="absolute -bottom-5 right-10 w-16 h-16 bg-primary-300/30 rounded-full blur-xl animate-pulse-slow"></div>
              <div className="absolute -top-5 right-10 w-24 h-24 border-4 border-primary-200 rounded-xl -rotate-6 hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
