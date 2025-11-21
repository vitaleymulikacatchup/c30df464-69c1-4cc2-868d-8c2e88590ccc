"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Trophy, Zap, Target, Users, Rocket } from "lucide-react";

export default function HomePage() {
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
            { name: "Drivers", id: "/about" },
            { name: "Features", id: "/features" },
            { name: "Packages", id: "/products" },
            { name: "Pricing", id: "/pricing" },
            { name: "Contact", id: "/contact" }
          ]}
          brandName="F1 2026"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="F1 2026 Driver Presentation"
          description="Meet the next generation of Formula 1 drivers ready to dominate the 2026 racing season with cutting-edge technology and unmatched performance."
          tag="Season 2026"
          tagIcon={Trophy}
          buttons={[
            { text: "Meet Drivers", href: "/about" },
            { text: "View Packages", href: "/products" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729075288-slcqxl7c.jpg"
          imageAlt="F1 racing car on modern track"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={false}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="F1 2026 represents a new era of racing excellence with revolutionary regulations, advanced hybrid technology, and the most talented driver lineup in Formula 1 history."
          metrics={[
            { icon: Zap, label: "Race Victories", value: "150+" },
            { icon: Trophy, label: "Championships", value: "12" },
            { icon: Users, label: "Professional Drivers", value: "24" },
            { icon: Target, label: "Track Records", value: "89" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Next-Generation Racing"
          description="Discover the advanced features and technology that define F1 2026"
          tag="Innovation"
          tagIcon={Rocket}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "Advanced Aerodynamics",
              description: "Revolutionary wing designs and ground effect technology for maximum downforce and speed optimization.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729080501-yg5lqyz3.jpg",
              imageAlt: "F1 car aerodynamics",
              button: { text: "Learn More", href: "/contact" }
            },
            {
              title: "Hybrid Power Units",
              description: "State-of-the-art hybrid engines delivering unprecedented power and efficiency for sustainable racing.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729081493-vntij5jd.jpg",
              imageAlt: "F1 racing simulator",
              button: { text: "Explore", href: "/contact" }
            },
            {
              title: "Data Analytics",
              description: "Real-time performance monitoring and strategic analysis systems for optimal race day decisions.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729082649-95nmxn8u.jpg",
              imageAlt: "F1 team strategy",
              button: { text: "Discover", href: "/contact" }
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