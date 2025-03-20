
import { useState, useEffect, useRef } from "react";
import { Heart, HandHelping, Sparkles, Users, BrainCircuit } from "lucide-react";

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
    // Expanded color palette for more creativity
    const colors = ["#e0eefe", "#bae0fd", "#7cc8fb", "#c2eef2", "#8ce0e6", "#ffdee2", "#e5deff", "#fde1d3"];
    
    const createParticles = () => {
      const particleCount = Math.min(60, Math.floor(window.innerWidth / 20));
      
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
    const brainImg = new Image();
    const sparklesImg = new Image();
    const heartImg = new Image();
    
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
    
    brainImg.src = "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d946ef" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-circuit">
        <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0
        0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5"></path>
        <path d="m15.7 10.4-.9.4"></path>
        <path d="m9.2 13.2.9-.4"></path>
        <path d="m12.5 6-1 4"></path>
        <path d="M12 13v5"></path>
      </svg>
    `);
    
    sparklesImg.src = "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles">
        <path d="m12 3-1.9 5.7a2 2 0 0 1-1.4 1.4L3 12l5.7 1.9a2 2 0 0 1 1.4 1.4L12 21l1.9-5.7a2 2 0
        0 1 1.4-1.4L21 12l-5.7-1.9a2 2 0 0 1-1.4-1.4z"></path>
      </svg>
    `);
    
    heartImg.src = "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ff719a" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
    `);
    
    let handDistance = 200; // Initial distance between hands
    let handDirection = -1; // Direction of movement (-1: coming together, 1: moving apart)
    let handCycleProgress = 0; // 0 to 1 for a complete cycle
    
    // Create floating icons at random positions
    const floatingIcons = [];
    for (let i = 0; i < 5; i++) {
      floatingIcons.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        type: i % 3 // 0: brain, 1: sparkles, 2: heart
      });
    }
    
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
      
      // Draw connections between nearby particles with gradient colors
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y, 
              particles[j].x, particles[j].y
            );
            
            gradient.addColorStop(0, particles[i].color + "40");
            gradient.addColorStop(1, particles[j].color + "40");
            
            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Draw floating icons
      floatingIcons.forEach(icon => {
        ctx.globalAlpha = 0.2;
        
        if (icon.type === 0) {
          ctx.drawImage(brainImg, icon.x, icon.y, 48, 48);
        } else if (icon.type === 1) {
          ctx.drawImage(sparklesImg, icon.x, icon.y, 48, 48);
        } else {
          ctx.drawImage(heartImg, icon.x, icon.y, 48, 48);
        }
        
        // Update position
        icon.x += icon.speedX;
        icon.y += icon.speedY;
        
        // Bounce off edges
        if (icon.x < 0 || icon.x > canvas.width - 48) icon.speedX *= -1;
        if (icon.y < 0 || icon.y > canvas.height - 48) icon.speedY *= -1;
      });
      
      ctx.globalAlpha = 1.0;
      
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
      
      // Draw connecting light between hands - now with animated gradient
      const gradientTime = Date.now() / 1000; // Time-based animation
      const gradient = ctx.createLinearGradient(leftHandX, leftHandY, rightHandX, rightHandY);
      
      // Animated gradient using time-based offsets
      gradient.addColorStop(0, `rgba(124, 200, 251, ${0.05 + 0.1 * Math.sin(gradientTime)})`);
      gradient.addColorStop(0.3, `rgba(236, 72, 153, ${0.1 + 0.1 * Math.sin(gradientTime + 1)})`);
      gradient.addColorStop(0.7, `rgba(249, 115, 22, ${0.1 + 0.1 * Math.sin(gradientTime + 2)})`);
      gradient.addColorStop(1, `rgba(124, 200, 251, ${0.05 + 0.1 * Math.sin(gradientTime + 3)})`);
      
      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.moveTo(leftHandX, leftHandY);
      ctx.lineTo(rightHandX, rightHandY);
      ctx.stroke();
      
      // Draw additional connecting light arcs for more visual interest
      ctx.beginPath();
      ctx.strokeStyle = `rgba(236, 72, 153, ${0.05 + 0.05 * Math.sin(gradientTime * 1.5)})`;
      ctx.lineWidth = 1;
      const arcY = centerY - 60 + 15 * Math.sin(gradientTime);
      ctx.arc(centerX, arcY, baseDistance * 0.6, 0, Math.PI * 2);
      ctx.stroke();
      
      // Draw pulsating circles where the hands would connect
      const pulseSize = Math.sin(handCycleProgress * Math.PI * 4) * 10 + 15;
      
      // Central glow effect
      const glowGradient = ctx.createRadialGradient(
        centerX, centerY - 60, 0,
        centerX, centerY - 60, pulseSize * 2
      );
      
      glowGradient.addColorStop(0, "rgba(236, 72, 153, 0.4)");
      glowGradient.addColorStop(0.5, "rgba(249, 115, 22, 0.2)");
      glowGradient.addColorStop(1, "rgba(124, 200, 251, 0)");
      
      ctx.beginPath();
      ctx.fillStyle = glowGradient;
      ctx.arc(centerX, centerY - 60, pulseSize * 2, 0, Math.PI * 2);
      ctx.fill();
      
      // Bright center
      ctx.beginPath();
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.arc(centerX, centerY - 60, pulseSize / 3, 0, Math.PI * 2);
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
            <div className="bg-gradient-to-r from-pink-200 to-primary-50 w-12 h-12 rounded-full flex items-center justify-center shadow-md">
              <Heart className="h-6 w-6 text-pink-500" />
            </div>
          </div>
          
          <h2 className="heading-lg mb-6 text-gradient">Our Philosophy</h2>
          
          <div 
            className={`glass-panel p-8 md:p-12 rounded-2xl shadow-lg transform transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <blockquote className="text-2xl md:text-3xl font-medium animated-gradient-text italic mb-6">
              "Kindness is Cost-Effective"
            </blockquote>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              At ConnectHEOR, we believe that compassion and kindness are not just moral imperatives—they're economically sound principles. Our research consistently shows that healthcare systems that prioritize patient dignity and wellbeing achieve better outcomes at lower overall costs.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300">
              This philosophy guides everything we do, from our research methodologies to our client interactions, creating a virtuous cycle where empathy drives innovation and efficiency.
            </p>
            
            <div className="flex justify-center mt-8 space-x-4 opacity-70">
              <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                <BrainCircuit size={20} className="text-primary-600" />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                <Sparkles size={20} className="text-primary-600" />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                <Users size={20} className="text-primary-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
