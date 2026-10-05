export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "No Such Place Wiki",
  shortName: "No Such Place",
  logoText: "N",
  tagline: "Weapons, Maps, Loot & Extraction Guides",
  description: "Your complete No Such Place guide: weapons, maps, loot, extraction tips, co-op, Gunsmith builds, Safe House progression and Early Access updates.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nosuchplacewiki.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nosuchplacewiki.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/3299050/No_Such_Place/",
  heroVideoId: "EeZtXZt-ebk", // No Such Place: Official Early Access Release Date Trailer
  social: {
    discord: "https://discord.com/game/no-such-place-1468444926965715147",
    youtube: "https://www.youtube.com/@NoSuchPlace_game",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
