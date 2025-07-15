import React, { useState, useEffect } from 'react';
import { LoadingCell } from './LoadingCell';

const loaderConfigs = [
  {
    id: 1,
    name: "Orbital Spinner",
    type: "spinner",
    emoji: null,
    animation: "spin-slow",
    style: "orbital"
  },
  {
    id: 2,
    name: "Fire Emoji Counter",
    type: "emoji",
    emoji: "🔥",
    animation: "pulse-glow",
    style: "emoji-pulse"
  },
  {
    id: 3,
    name: "Morphing Blob",
    type: "blob",
    emoji: null,
    animation: "morph",
    style: "morphing"
  },
  {
    id: 4,
    name: "Rocket Launch",
    type: "emoji",
    emoji: "🚀",
    animation: "bounce-soft",
    style: "emoji-bounce"
  },
  {
    id: 5,
    name: "Wave Bars",
    type: "bars",
    emoji: null,
    animation: "wave",
    style: "wave-bars"
  },
  {
    id: 6,
    name: "Lightning Bolt",
    type: "emoji",
    emoji: "⚡",
    animation: "pulse",
    style: "emoji-lightning"
  },
  {
    id: 7,
    name: "Gradient Ring",
    type: "ring",
    emoji: null,
    animation: "spin",
    style: "gradient-ring"
  },
  {
    id: 8,
    name: "Star Magic",
    type: "emoji",
    emoji: "⭐",
    animation: "spin-slow",
    style: "emoji-star"
  },
  {
    id: 9,
    name: "Slide Cube",
    type: "cube",
    emoji: null,
    animation: "slide-rotate",
    style: "sliding-cube"
  },
  {
    id: 10,
    name: "Heart Beat",
    type: "emoji",
    emoji: "❤️",
    animation: "pulse-glow",
    style: "emoji-heart"
  },
  {
    id: 11,
    name: "Ripple Effect",
    type: "ripple",
    emoji: null,
    animation: "pulse",
    style: "ripple-effect"
  },
  {
    id: 12,
    name: "Hourglass Time",
    type: "emoji",
    emoji: "⏳",
    animation: "spin",
    style: "emoji-hourglass"
  },
  {
    id: 13,
    name: "Particle Storm",
    type: "particles",
    emoji: null,
    animation: "bounce",
    style: "particle-storm"
  },
  {
    id: 14,
    name: "Gear Spinner",
    type: "emoji",
    emoji: "⚙️",
    animation: "spin-slow",
    style: "emoji-gear"
  },
  {
    id: 15,
    name: "Pulsing Dots",
    type: "dots",
    emoji: null,
    animation: "pulse",
    style: "pulsing-dots"
  },
  {
    id: 16,
    name: "Diamond Glow",
    type: "emoji",
    emoji: "💎",
    animation: "pulse-glow",
    style: "emoji-diamond"
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