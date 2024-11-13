"use client"
import React, { useEffect, useRef } from 'react';
import Particles from 'react-particles-js';

interface WebsiteLoaderProps {
  text?: string;
  size?: number;
  particlesOptions?: object;
}

const WebsiteLoader: React.FC<WebsiteLoaderProps> = ({
  text = 'Loading...',
  size = 80,
  particlesOptions = {},
}) => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (particlesRef.current) {
      particlesRef.current.innerHTML = '';
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50">
      <div
        className="relative rounded-full flex items-center justify-center"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          border: '8px solid #e5e7eb',
        }}
      >
        <div className="text-4xl font-bold text-gray-800">{text}</div>
        <Particles
          id="particles"
          ref={particlesRef}
          width="100%"
          height="100%"
          params={{
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: '#9b59b6',
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#000000',
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: 'img/github.svg',
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: true,
                  speed: 2,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: '#9b59b6',
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
                onclick: {
                  enable: true,
                  mode: 'push',
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            ...particlesOptions,
            retina_detect: true,
          }}
        />
      </div>
    </div>
  );
};

export default WebsiteLoader;