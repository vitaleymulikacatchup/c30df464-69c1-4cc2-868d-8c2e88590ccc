"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Star, Award } from "lucide-react";

export default function ProductsPage() {
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
            { name: "Pricing", id: "/pricing" },
            { name: "Contact", id: "/contact" }
          ]}
          brandName="F1 2026"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Exclusive F1 Experiences"
          description="Premium packages designed for the ultimate Formula 1 experience"
          tag="Packages"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "F1 Experience",
              name: "Paddock Club Premium",
              price: "$2,500",
              rating: 5,
              reviewCount: "127",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729083760-snyd4dmd.jpg",
              imageAlt: "F1 premium experience"
            },
            {
              id: "2",
              brand: "F1 Experience",
              name: "VIP Pit Lane Access",
              price: "$1,800",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729084650-lzmfcslv.jpg",
              imageAlt: "VIP F1 access"
            },
            {
              id: "3",
              brand: "F1 Experience",
              name: "Driver Meet & Greet",
              price: "$950",
              rating: 5,
              reviewCount: "203",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729085695-1ki7va33.jpg",
              imageAlt: "F1 driver meeting"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Leading F1 Teams"
          description="Join the championship-winning teams that trust our expertise"
          tag="Partners"
          tagIcon={Award}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729094730-z0yyoqdr.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729095834-j7b85mzg.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729097364-b76nsn4z.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729098589-donigduf.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729099412-stotlhh2.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729101792-npi46zfs.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729102798-zri2aqq1.jpg"
          ]
          speed={35}
          showCard={true}
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