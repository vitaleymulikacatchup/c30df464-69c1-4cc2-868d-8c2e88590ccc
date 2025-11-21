"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Trophy, Zap, Target, Users, Rocket, Star, Ticket, Crown, BarChart3, Gauge, Timer, MessageCircle, Award, Mail, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

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
            { name: "Home", id: "/" },
            { name: "About", id: "about" },
            { name: "Features", id: "feature" },
            { name: "Packages", id: "product" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
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
            { text: "Meet Drivers", href: "about" },
            { text: "View Packages", href: "product" }
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
              button: { text: "Learn More", href: "contact" }
            },
            {
              title: "Hybrid Power Units",
              description: "State-of-the-art hybrid engines delivering unprecedented power and efficiency for sustainable racing.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729081493-vntij5jd.jpg",
              imageAlt: "F1 racing simulator",
              button: { text: "Explore", href: "contact" }
            },
            {
              title: "Data Analytics",
              description: "Real-time performance monitoring and strategic analysis systems for optimal race day decisions.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729082649-95nmxn8u.jpg",
              imageAlt: "F1 team strategy",
              button: { text: "Discover", href: "contact" }
            }
          ]}
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
                { text: "Select Package", href: "contact" },
                { text: "Learn More", href: "contact" }
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
                { text: "Select Package", href: "contact" },
                { text: "Learn More", href: "contact" }
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
                { text: "Select Package", href: "contact" },
                { text: "Learn More", href: "contact" }
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
                { icon: Twitter, url: "https://twitter.com/marcusf1" },
                { icon: Linkedin, url: "https://linkedin.com/in/marcusf1" }
              ]
            },
            {
              id: "2",
              name: "Dr. Sarah Chen",
              role: "Chief Technical Officer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729087878-wzr0u1u4.jpg",
              imageAlt: "Dr. Sarah Chen",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com/sarahf1tech" },
                { icon: Linkedin, url: "https://linkedin.com/in/sarahf1tech" }
              ]
            },
            {
              id: "3",
              name: "Alessandro Ferrari",
              role: "Performance Analyst",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763729088883-icf0q1dl.jpg",
              imageAlt: "Alessandro Ferrari",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com/alessandrof1" },
                { icon: Linkedin, url: "https://linkedin.com/in/alessandrof1" }
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

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="F1 2026"
          copyrightText="© 2025 F1 2026 Driver Presentation. All rights reserved."
          columns={[
            {
              title: "Racing",
              items: [
                { label: "Drivers", href: "about" },
                { label: "Teams", href: "team" },
                { label: "Schedule", href: "contact" }
              ]
            },
            {
              title: "Experience",
              items: [
                { label: "Packages", href: "product" },
                { label: "Pricing", href: "pricing" },
                { label: "VIP Access", href: "contact" }
              ]
            },
            {
              title: "Technology",
              items: [
                { label: "Features", href: "feature" },
                { label: "Innovation", href: "about" },
                { label: "Performance", href: "metric" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Contact", href: "contact" },
                { label: "Help", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Twitter, href: "https://twitter.com/f12026", ariaLabel: "Follow us on Twitter" },
            { icon: Instagram, href: "https://instagram.com/f12026", ariaLabel: "Follow us on Instagram" },
            { icon: Youtube, href: "https://youtube.com/f12026", ariaLabel: "Subscribe to our YouTube channel" },
            { icon: Linkedin, href: "https://linkedin.com/company/f12026", ariaLabel: "Connect with us on LinkedIn" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}