import {
  Fira_Code as FontMono,
  Inter as FontSans,
  MedievalSharp,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontMedievalSharp = MedievalSharp({
  subsets: ["latin"],
  variable: "--font-medieval",
  weight: "400",
});
