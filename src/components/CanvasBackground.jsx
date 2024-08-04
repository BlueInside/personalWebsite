import { useEffect, useRef } from "react";

export default function CanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const colors = [
      "rgba(255, 255, 255, 0.8)",
      "rgba(255, 204, 204, 0.8)",
      "rgba(153, 204, 255, 0.8)",
    ];

    const maxParticles = 50;
    const particleSize = 5;
    const maxSpeed = 2;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() * maxSpeed + 1;
        this.radius = Math.random() * particleSize + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.angle = Math.random() * 2 * Math.PI;
        this.spin = Math.random() < 0.5 ? -1 : 1;
        this.rotationRate = Math.random() * 0.02 * this.spin;
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.angle += this.rotationRate;
        if (this.x > canvas.width + this.radius) this.x = -this.radius;
        if (this.y > canvas.height + this.radius) this.y = -this.radius;
        if (this.x < -this.radius) this.x = canvas.width + this.radius;
        if (this.y < -this.radius) this.y = canvas.height + this.radius;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    function init() {
      for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    init();
    animate();

    // Handle resizing
    const resizeListener = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
