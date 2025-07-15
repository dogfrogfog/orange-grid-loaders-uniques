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
      case 'emoji-fire':
        return (
          <div className="text-5xl animate-fire-flicker filter drop-shadow-[0_0_25px_rgba(255,165,0,0.8)]">
            {emoji}
          </div>
        );

      case 'emoji-rocket':
        return (
          <div className="text-5xl animate-rocket-launch filter drop-shadow-[0_0_25px_rgba(255,165,0,0.8)]">
            {emoji}
          </div>
        );

      case 'emoji-lightning':
        return (
          <div className="text-5xl animate-lightning-zap filter drop-shadow-[0_0_30px_rgba(255,255,0,0.9)]">
            {emoji}
          </div>
        );

      case 'emoji-star':
        return (
          <div className="text-5xl animate-star-twinkle filter drop-shadow-[0_0_25px_rgba(255,215,0,0.8)]">
            {emoji}
          </div>
        );

      case 'emoji-heart':
        return (
          <div className="text-5xl animate-heart-beat filter drop-shadow-[0_0_25px_rgba(255,105,180,0.8)]">
            {emoji}
          </div>
        );

      case 'emoji-hourglass':
        return (
          <div className="text-5xl animate-hourglass-flip filter drop-shadow-[0_0_25px_rgba(255,165,0,0.8)]">
            {emoji}
          </div>
        );

      case 'emoji-gear':
        return (
          <div className="text-5xl animate-gear-spin filter drop-shadow-[0_0_25px_rgba(128,128,128,0.8)]">
            {emoji}
          </div>
        );

      case 'emoji-diamond':
        return (
          <div className="text-5xl animate-diamond-sparkle filter drop-shadow-[0_0_30px_rgba(185,242,255,0.9)]">
            {emoji}
          </div>
        );

      case 'emoji-zombie':
        return (
          <div className="text-5xl animate-zombie-walk filter drop-shadow-[0_0_25px_rgba(144,238,144,0.8)]">
            {emoji}
          </div>
        );

      case 'emoji-pumpkin':
        return (
          <div className="text-5xl animate-pumpkin-glow filter drop-shadow-[0_0_30px_rgba(255,140,0,0.9)]">
            {emoji}
          </div>
        );

      case 'emoji-stock':
        return (
          <div className="text-5xl animate-stock-rise filter drop-shadow-[0_0_25px_rgba(0,255,0,0.8)]">
            {emoji}
          </div>
        );

      case 'emoji-pizza':
        return (
          <div className="text-5xl animate-pizza-spin filter drop-shadow-[0_0_25px_rgba(255,69,0,0.8)]">
            {emoji}
          </div>
        );

      case 'emoji-cat':
        return (
          <div className="text-5xl animate-cat-bounce filter drop-shadow-[0_0_25px_rgba(255,192,203,0.8)]">
            {emoji}
          </div>
        );

      case 'emoji-rainbow':
        return (
          <div className="text-5xl animate-rainbow-wave filter drop-shadow-[0_0_30px_rgba(255,0,255,0.7)]">
            {emoji}
          </div>
        );

      case 'emoji-ufo':
        return (
          <div className="text-5xl animate-ufo-hover filter drop-shadow-[0_0_30px_rgba(0,255,255,0.8)]">
            {emoji}
          </div>
        );

      case 'emoji-party':
        return (
          <div className="text-5xl animate-party-burst filter drop-shadow-[0_0_35px_rgba(255,20,147,0.9)]">
            {emoji}
          </div>
        );

      default:
        return (
          <div className="text-5xl animate-pulse filter drop-shadow-lg">
            {emoji}
          </div>
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