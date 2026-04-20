import React from 'react';
import {
  Coffee,
  Wine,
  ShoppingBag,
  Palette,
  CakeSlice,
  UtensilsCrossed,
  GlassWater,
  Calendar,
  Clock,
  HelpCircle } from
'lucide-react';
export function getIcon(iconName: string, props?: any) {
  switch (iconName) {
    case 'Coffee':
      return <Coffee {...props} />;
    case 'Wine':
      return <Wine {...props} />;
    case 'ShoppingBag':
      return <ShoppingBag {...props} />;
    case 'Palette':
      return <Palette {...props} />;
    case 'CakeSlice':
      return <CakeSlice {...props} />;
    case 'UtensilsCrossed':
      return <UtensilsCrossed {...props} />;
    case 'GlassWater':
      return <GlassWater {...props} />;
    case 'Calendar':
      return <Calendar {...props} />;
    case 'Clock':
      return <Clock {...props} />;
    default:
      return <HelpCircle {...props} />;
  }
}