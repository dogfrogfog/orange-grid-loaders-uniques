import React, { useState, useEffect } from 'react';
import { LoadingCell } from './LoadingCell';

const loaderConfigs = [
  {
    id: 1,
    name: "Fire Storm",
    type: "emoji",
    emoji: "🔥",
    animation: "fire-flicker",
    style: "emoji-fire"
  },
  {
    id: 2,
    name: "Rocket Launch",
    type: "emoji",
    emoji: "🚀",
    animation: "rocket-launch",
    style: "emoji-rocket"
  },
  {
    id: 3,
    name: "Lightning Strike",
    type: "emoji",
    emoji: "⚡",
    animation: "lightning-zap",
    style: "emoji-lightning"
  },
  {
    id: 4,
    name: "Star Magic",
    type: "emoji",
    emoji: "⭐",
    animation: "star-twinkle",
    style: "emoji-star"
  },
  {
    id: 5,
    name: "Heart Beat",
    type: "emoji",
    emoji: "❤️",
    animation: "heart-beat",
    style: "emoji-heart"
  },
  {
    id: 6,
    name: "Time Flip",
    type: "emoji",
    emoji: "⏳",
    animation: "hourglass-flip",
    style: "emoji-hourglass"
  },
  {
    id: 7,
    name: "Gear Works",
    type: "emoji",
    emoji: "⚙️",
    animation: "gear-spin",
    style: "emoji-gear"
  },
  {
    id: 8,
    name: "Diamond Sparkle",
    type: "emoji",
    emoji: "💎",
    animation: "diamond-sparkle",
    style: "emoji-diamond"
  },
  {
    id: 9,
    name: "Zombie Walk",
    type: "emoji",
    emoji: "🧟",
    animation: "zombie-walk",
    style: "emoji-zombie"
  },
  {
    id: 10,
    name: "Pumpkin Glow",
    type: "emoji",
    emoji: "🎃",
    animation: "pumpkin-glow",
    style: "emoji-pumpkin"
  },
  {
    id: 11,
    name: "Stock Rising",
    type: "emoji",
    emoji: "📈",
    animation: "stock-rise",
    style: "emoji-stock"
  },
  {
    id: 12,
    name: "Pizza Spin",
    type: "emoji",
    emoji: "🍕",
    animation: "pizza-spin",
    style: "emoji-pizza"
  },
  {
    id: 13,
    name: "Cat Bounce",
    type: "emoji",
    emoji: "🐱",
    animation: "cat-bounce",
    style: "emoji-cat"
  },
  {
    id: 14,
    name: "Rainbow Wave",
    type: "emoji",
    emoji: "🌈",
    animation: "rainbow-wave",
    style: "emoji-rainbow"
  },
  {
    id: 15,
    name: "UFO Hover",
    type: "emoji",
    emoji: "🛸",
    animation: "ufo-hover",
    style: "emoji-ufo"
  },
  {
    id: 16,
    name: "Party Time",
    type: "emoji",
    emoji: "🎉",
    animation: "party-burst",
    style: "emoji-party"
  }
];

export const LoaderGrid: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-secondary p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-sunset bg-clip-text text-transparent mb-4">
            Award-Winning Loaders
          </h1>
          <p className="text-xl text-muted-foreground">
            16 unique loading indicators with animated counting
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loaderConfigs.map((config) => (
            <LoadingCell
              key={config.id}
              {...config}
            />
          ))}
        </div>
      </div>
    </div>
  );
};