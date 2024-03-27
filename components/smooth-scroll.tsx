"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis root options={{ lerp: 0.05, syncTouch: true }}>
      {children}
    </ReactLenis>
  );
};
export default SmoothScroll;
