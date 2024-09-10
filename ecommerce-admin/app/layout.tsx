import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Inter} from 'next/font/google'
import { clerkMiddleware } from "@clerk/nextjs/server";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter ({subsets: ['latin']})
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Admin DahBoard",
  description: "Admin DahBoard",
};
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import { ModalProvider } from "@/providers/modal-providers";
import { ToasterProvider } from "@/providers/toast-provider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <ToasterProvider/>
          <ModalProvider/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
