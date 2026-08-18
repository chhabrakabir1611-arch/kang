import { Layers, Brush, PaintRoller, Home, Grid3x3, Triangle, Sparkles, Leaf, type LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = {
  Layers,
  Brush,
  PaintRoller,
  Home,
  Grid3x3,
  Triangle,
  Sparkles,
  Leaf,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = map[name] ?? Layers;
  return <Icon className={className} aria-hidden="true" />;
}
