"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Ticket, Crown, MessageCircle } from "lucide-react";

export default function PricingPage() {
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
            { name: "Contact", id: "/contact" }
          ]}
          brandName="F1 2026"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="F1 2026 Season Packages"
          description="Choose your perfect Formula 1 experience package for the 2026 season"
          tag="Season Tickets"
          tagIcon={Ticket}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "basic",
              price: "$1,200",
              name: "Fan Zone Access",
              buttons: [
                { text: "Select Package", href: "/contact" },
                { text: "Learn More", href: "/contact" }
              ],
              features: [
                "General admission to all race weekends",
                "Fan zone activities and displays",
                "Merchandise store access",
                "Live timing screens",
                "Paddock walk tours"
              ]
            },
            {
              id: "premium",
              badge: "Most Popular",
              badgeIcon: Crown,
              price: "$3,500",
              name: "Grandstand Premium",
              buttons: [
                { text: "Select Package", href: "/contact" },
                { text: "Learn More", href: "/contact" }
              ],
              features: [
                "Reserved grandstand seating",
                "Pit lane walk access",
                "Driver autograph sessions",
                "Premium hospitality suite",
                "Official race programs",
                "Exclusive merchandise"
              ]
            },
            {
              id: "vip",
              price: "$8,900",
              name: "Paddock Club Elite",
              buttons: [
                { text: "Select Package", href: "/contact" },
                { text: "Learn More", href: "/contact" }
              ],
              features: [
                "Paddock Club access all weekend",
                "Meet and greet with drivers",
                "VIP hospitality and dining",
                "Exclusive behind-the-scenes tours",
                "Championship trophy viewing",
                "Personalized race experience"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardFour
          title="What Industry Leaders Say"
          description="Hear from those who've experienced our F1 2026 presentation firsthand"
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "James Hamilton",
              role: "Sports Director",
              company: "Global Racing Media",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729090292-6khscf8t.jpg",
              imageAlt: "James Hamilton"
            },
            {
              id: "2",
              name: "Marina Rossi",
              role: "Executive Producer",
              company: "Speed Channel International",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729091419-auksalpk.jpg",
              imageAlt: "Marina Rossi"
            },
            {
              id: "3",
              name: "David Chen",
              role: "Racing Analyst",
              company: "Formula Sports Network",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729092722-r6hglu4i.jpg",
              imageAlt: "David Chen"
            },
            {
              id: "4",
              name: "Sophie Laurent",
              role: "Brand Manager",
              company: "Motorsport Marketing",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729093810-aj4mc5qd.jpg",
              imageAlt: "Sophie Laurent"
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