// Shared scroll-reveal: a short, quiet fade with a tiny lift.
// No scale pops, no spins, no long staggers.
const ease = [0.25, 0.1, 0.25, 1] as const;

export const reveal = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.4, ease },
};

// For grids/lists: tiny stagger, capped so later items never lag.
export const revealAt = (index: number) => ({
  ...reveal,
  transition: { duration: 0.4, ease, delay: Math.min(index, 3) * 0.05 },
});
