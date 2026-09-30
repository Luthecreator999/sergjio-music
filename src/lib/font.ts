import { Big_Shoulders } from "next/font/google";

/** Brand display font — shared by the locale layout and the root 404 so the
 *  document shell (which now lives in the locale layout) and the fallback
 *  not-found page both apply the same --font-display variable. */
export const display = Big_Shoulders({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--font-display",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
});
