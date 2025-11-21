"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="large"
      background="plain"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "/" },
            { name: "Drivers", id: "/about" },
            { name: "Features", id: "/features" },
            { name: "Packages", id: "/products" },
            { name: "Pricing", id: "/pricing" }
          ]}
          brandName="F1 2026"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Ready for the F1 2026 Experience?"
          description="Contact us to learn more about our driver presentation and exclusive racing packages. Join the future of Formula 1."
          tagIcon={Mail}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729104232-hi9px0ci.jpg"
          imageAlt="F1 paddock contact"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Join F1 2026"
          termsText="By subscribing, you agree to receive updates about F1 2026 driver presentations and exclusive racing content."
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about F1 2026 driver presentations"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What makes the F1 2026 season special?",
              content: "The 2026 season introduces revolutionary new regulations, hybrid power units with increased electrical power, and enhanced safety features that will transform Formula 1 racing."
            },
            {
              id: "2",
              title: "How are drivers selected for F1 2026?",
              content: "Drivers are selected based on their racing performance, technical skills, adaptability to new regulations, and proven track record in lower formula categories."
            },
            {
              id: "3",
              title: "What technology will be featured in F1 2026?",
              content: "The 2026 season will showcase advanced aerodynamics, sustainable fuel technology, enhanced hybrid systems, and revolutionary safety innovations."
            },
            {
              id: "4",
              title: "How can I attend F1 2026 race events?",
              content: "Various packages are available ranging from general admission to VIP paddock access. Contact us for personalized recommendations based on your preferences."
            },
            {
              id: "5",
              title: "Are there opportunities to meet drivers?",
              content: "Yes, our premium packages include meet and greet sessions, autograph opportunities, and exclusive access to driver events throughout the race weekend."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="F1 2026"
          copyrightText="© 2025 F1 2026 Driver Presentation. All rights reserved."
          columns={[
            {
              title: "Racing",
              items: [
                { label: "Drivers", href: "/about" },
                { label: "Teams", href: "/team" },
                { label: "Schedule", href: "/contact" }
              ]
            },
            {
              title: "Experience",
              items: [
                { label: "Packages", href: "/products" },
                { label: "Pricing", href: "/pricing" },
                { label: "VIP Access", href: "/contact" }
              ]
            },
            {
              title: "Technology",
              items: [
                { label: "Features", href: "/features" },
                { label: "Innovation", href: "/about" },
                { label: "Performance", href: "/metrics" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
                { label: "Help", href: "/contact" }
              ]
            }
          ]}
          socialLinks={[
            { icon: "Twitter", href: "https://twitter.com/f12026", ariaLabel: "Follow us on Twitter" },
            { icon: "Instagram", href: "https://instagram.com/f12026", ariaLabel: "Follow us on Instagram" },
            { icon: "Youtube", href: "https://youtube.com/f12026", ariaLabel: "Subscribe to our YouTube channel" },
            { icon: "Linkedin", href: "https://linkedin.com/company/f12026", ariaLabel: "Connect with us on LinkedIn" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}