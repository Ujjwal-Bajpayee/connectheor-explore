
import { useState, useEffect, useRef } from "react";
import { Heart, HandHelping } from "lucide-react";

const Philosophy = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = canvas.offsetHeight;
      }
    };
    
    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);
    
    // Create particles
    type Particle = {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      opacity: number;
    };
    
    const particles: Particle[] = [];
    const colors = ["#e0eefe", "#bae0fd", "#7cc8fb", "#c2eef2", "#8ce0e6"];
    
    const createParticles = () => {
      const particleCount = Math.min(50, Math.floor(window.innerWidth / 20));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: (Math.random() - 0.5) * 0.7,
          speedY: (Math.random() - 0.5) * 0.7,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };
    
    createParticles();
    
    // Animation loop
    let animationFrameId: number;
    
    // Hand-connecting animation variables
    const handLeftImg = new Image();
    const handRightImg = new Image();
    handLeftImg.src = "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#7cc8fb" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-helping">
        <path d="M11 12h2a4 4 0 0 1 4 4v4H9v-7a3 3 0 0 1 3-3v0"></path>
        <path d="M14 6.5L12 5l-2 1.5 2 1.5 2-1.5z"></path>
        <path d="M11 8.5V12"></path>
        <path d="M6 10h3a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1H6"></path>
        <path d="M5 10v4a1 1 0 0 0 1 1h2"></path>
      </svg>
    `);
    handRightImg.src = "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#7cc8fb" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-helping" style="transform: scaleX(-1)">
        <path d="M11 12h2a4 4 0 0 1 4 4v4H9v-7a3 3 0 0 1 3-3v0"></path>
        <path d="M14 6.5L12 5l-2 1.5 2 1.5 2-1.5z"></path>
        <path d="M11 8.5V12"></path>
        <path d="M6 10h3a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1H6"></path>
        <path d="M5 10v4a1 1 0 0 0 1 1h2"></path>
      </svg>
    `);
    
    let handDistance = 200; // Initial distance between hands
    let handDirection = -1; // Direction of movement (-1: coming together, 1: moving apart)
    let handCycleProgress = 0; // 0 to 1 for a complete cycle
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
      
      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(124, 200, 251, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Draw hands connecting animation
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Update hand cycle
      handCycleProgress += 0.005;
      if (handCycleProgress >= 1) {
        handCycleProgress = 0;
      }
      
      // Calculate hand positions with pulsing effect
      const pulseEffect = Math.sin(handCycleProgress * Math.PI * 2) * 20;
      const baseDistance = 150 + pulseEffect;
      
      // Draw left hand
      const leftHandX = centerX - baseDistance;
      const leftHandY = centerY - 60;
      ctx.globalAlpha = 0.3;
      ctx.drawImage(handLeftImg, leftHandX - 36, leftHandY - 36, 72, 72);
      
      // Draw right hand
      const rightHandX = centerX + baseDistance;
      const rightHandY = centerY - 60;
      ctx.drawImage(handRightImg, rightHandX - 36, rightHandY - 36, 72, 72);
      
      // Draw connecting light between hands
      const gradient = ctx.createLinearGradient(leftHandX, leftHandY, rightHandX, rightHandY);
      gradient.addColorStop(0, "rgba(124, 200, 251, 0.05)");
      gradient.addColorStop(0.5, "rgba(124, 200, 251, 0.2)");
      gradient.addColorStop(1, "rgba(124, 200, 251, 0.05)");
      
      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.moveTo(leftHandX, leftHandY);
      ctx.lineTo(rightHandX, rightHandY);
      ctx.stroke();
      
      // Draw pulsating circles where the hands would connect
      const pulseSize = Math.sin(handCycleProgress * Math.PI * 4) * 10 + 15;
      ctx.beginPath();
      ctx.fillStyle = "rgba(124, 200, 251, 0.2)";
      ctx.arc(centerX, centerY - 60, pulseSize, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.globalAlpha = 1.0;
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);
  
  return (
    <section className="py-20 relative overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
        style={{ height: "100%" }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-primary-50 w-12 h-12 rounded-full flex items-center justify-center">
              <Heart className="h-6 w-6 text-primary-600" />
            </div>
          </div>
          
          <h2 className="heading-lg mb-6">Our Philosophy</h2>
          
          <div 
            className={`bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg border border-primary-100 transform transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <blockquote className="text-2xl md:text-3xl font-medium text-primary-700 italic mb-6">
              "Kindness is Cost-Effective"
            </blockquote>
            
            <p className="text-lg text-gray-700 mb-6">
              At ConnectHEOR, we believe that compassion and kindness are not just moral imperatives—they're economically sound principles. Our research consistently shows that healthcare systems that prioritize patient dignity and wellbeing achieve better outcomes at lower overall costs.
            </p>
            
            <p className="text-lg text-gray-700">
              This philosophy guides everything we do, from our research methodologies to our client interactions, creating a virtuous cycle where empathy drives innovation and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
