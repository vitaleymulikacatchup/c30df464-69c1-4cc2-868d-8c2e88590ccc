"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import MetricCardThree from '@/components/sections/metric/MetricCardThree';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Users, BarChart3, Gauge, Timer, Zap, Target } from "lucide-react";

export default function AboutPage() {
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
            { name: "Features", id: "/features" },
            { name: "Packages", id: "/products" },
            { name: "Pricing", id: "/pricing" },
            { name: "Contact", id: "/contact" }
          ]}
          brandName="F1 2026"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Meet the F1 2026 Team"
          description="Our world-class team of professionals dedicated to racing excellence"
          tag="Team"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Marcus Rodriguez",
              role: "Team Principal",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729086868-pkz98yc9.jpg",
              imageAlt: "Marcus Rodriguez",
              socialLinks: [
                { icon: "Twitter", url: "https://twitter.com/marcusf1" },
                { icon: "Linkedin", url: "https://linkedin.com/in/marcusf1" }
              ]
            },
            {
              id: "2",
              name: "Dr. Sarah Chen",
              role: "Chief Technical Officer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729087878-wzr0u1u4.jpg",
              imageAlt: "Dr. Sarah Chen",
              socialLinks: [
                { icon: "Twitter", url: "https://twitter.com/sarahf1tech" },
                { icon: "Linkedin", url: "https://linkedin.com/in/sarahf1tech" }
              ]
            },
            {
              id: "3",
              name: "Alessandro Ferrari",
              role: "Performance Analyst",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729088883-icf0q1dl.jpg",
              imageAlt: "Alessandro Ferrari",
              socialLinks: [
                { icon: "Twitter", url: "https://twitter.com/alessandrof1" },
                { icon: "Linkedin", url: "https://linkedin.com/in/alessandrof1" }
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardThree
          title="F1 2026 Performance Stats"
          description="Key performance indicators showcasing the excellence of our racing program"
          tag="Statistics"
          tagIcon={BarChart3}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              icon: Gauge,
              title: "Top Speed",
              value: "360km/h"
            },
            {
              id: "2",
              icon: Timer,
              title: "Lap Record",
              value: "1:14.260"
            },
            {
              id: "3",
              icon: Zap,
              title: "Power Output",
              value: "1000HP"
            },
            {
              id: "4",
              icon: Target,
              title: "Accuracy",
              value: "98.7%"
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