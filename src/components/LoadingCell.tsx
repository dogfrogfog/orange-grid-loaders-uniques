import React, { useState, useEffect } from 'react';

interface LoadingCellProps {
  id: number;
  name: string;
  type: string;
  emoji: string | null;
  animation: string;
  style: string;
}

export const LoadingCell: React.FC<LoadingCellProps> = ({
  id,
  name,
  type,
  emoji,
  animation,
  style
}) => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const newCount = prev + Math.floor(Math.random() * 5) + 1;
        if (newCount >= 100) {
          setIsLoading(false);
          return 100;
        }
        return newCount;
      });
    }, 150 + Math.random() * 100);

    return () => clearInterval(interval);
  }, []);

  const renderLoader = () => {
    switch (style) {
      case 'orbital':
        return (
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-primary-glow animate-spin-slow"></div>
          </div>
        );

      case 'emoji-pulse':
        return (
          <div className="text-4xl animate-fire-flicker filter drop-shadow-[0_0_25px_rgba(255,165,0,0.8)]">
            {emoji}
          </div>
        );

      case 'morphing':
        return (
          <div className="w-12 h-12 bg-gradient-warm animate-morph shadow-orange"></div>
        );

      case 'emoji-bounce':
        return (
          <div className="text-4xl animate-rocket-launch filter drop-shadow-[0_0_25px_rgba(255,165,0,0.8)]">
            {emoji}
          </div>
        );

      case 'wave-bars':
        return (
          <div className="flex items-end space-x-1 h-16">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-2 bg-gradient-sunset animate-wave"
                style={{
                  height: `${20 + Math.sin(count / 10 + i) * 15}px`,
                  animationDelay: `${i * 0.1}s`
                }}
              ></div>
            ))}
          </div>
        );

      case 'emoji-lightning':
        return (
          <div className="text-4xl animate-lightning-zap filter drop-shadow-[0_0_30px_rgba(255,255,0,0.9)]">
            {emoji}
          </div>
        );

      case 'gradient-ring':
        return (
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full bg-gradient-sunset animate-spin">
              <div className="absolute inset-2 rounded-full bg-background"></div>
            </div>
          </div>
        );

      case 'emoji-star':
        return (
          <div className="text-4xl animate-star-twinkle filter drop-shadow-[0_0_25px_rgba(255,215,0,0.8)]">
            {emoji}
          </div>
        );

      case 'sliding-cube':
        return (
          <div className="relative w-16 h-4 overflow-hidden">
            <div className="absolute w-4 h-4 bg-primary rounded animate-slide-rotate"></div>
          </div>
        );

      case 'emoji-heart':
        return (
          <div className="text-4xl animate-heart-beat filter drop-shadow-[0_0_25px_rgba(255,105,180,0.8)]">
            {emoji}
          </div>
        );

      case 'ripple-effect':
        return (
          <div className="relative w-16 h-16">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border-2 border-primary animate-pulse"
                style={{
                  animationDelay: `${i * 0.5}s`,
                  scale: `${1 + i * 0.2}`
                }}
              ></div>
            ))}
          </div>
        );

      case 'emoji-hourglass':
        return (
          <div className="text-4xl animate-hourglass-flip filter drop-shadow-[0_0_25px_rgba(255,165,0,0.8)]">
            {emoji}
          </div>
        );

      case 'particle-storm':
        return (
          <div className="relative w-16 h-16">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary-glow rounded-full animate-bounce"
                style={{
                  left: `${10 + (i % 3) * 20}px`,
                  top: `${10 + Math.floor(i / 3) * 20}px`,
                  animationDelay: `${i * 0.1}s`
                }}
              ></div>
            ))}
          </div>
        );

      case 'emoji-gear':
        return (
          <div className="text-4xl animate-gear-spin filter drop-shadow-[0_0_25px_rgba(128,128,128,0.8)]">
            {emoji}
          </div>
        );

      case 'pulsing-dots':
        return (
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-3 h-3 bg-primary rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        );

      case 'emoji-diamond':
        return (
          <div className="text-4xl animate-diamond-sparkle filter drop-shadow-[0_0_30px_rgba(185,242,255,0.9)]">
            {emoji}
          </div>
        );

      default:
        return (
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        );
    }
  };

  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-warm rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
      <div className="relative bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-orange">
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center h-20">
            {renderLoader()}
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-sm text-foreground/80">{name}</h3>
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Progress</span>
                <span className="font-mono">{count}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-warm transition-all duration-300 ease-out"
                  style={{ width: `${count}%` }}
                ></div>
              </div>
            </div>
            {!isLoading && (
              <div className="text-xs text-primary font-medium animate-pulse">
                Complete! ✨
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};