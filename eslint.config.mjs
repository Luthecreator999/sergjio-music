import next from "eslint-config-next";

/** Flat ESLint config for Next.js 16 (eslint-config-next ships a native flat config). */
const eslintConfig = [
  { ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts"] },
  ...next,
];

export default eslintConfig;
