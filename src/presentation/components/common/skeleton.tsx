import React from "react";

export function Skeleton({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`animate-pulse rounded-md bg-slate-800/50 ${className}`} style={style} />
  );
}