"use client";

import React from "react";
import { Marquee } from "@/components/ui/marquee";

const testimonials = [
  {
    text: "The redesigned platform immediately increased our conversion rates by 40%. Absolutely stellar work.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    name: "Elena Rodriguez",
    role: "Marketing Director at TechFlow",
  },
  {
    text: "A rare mix of design brilliance and technical excellence. They delivered exactly what we needed.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    name: "David Kim",
    role: "Founder, Nova Startup",
  },
  {
    text: "Their creative vision transformed our brand identity completely. We saw a 3x increase in engagement.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    name: "James Carter",
    role: "CEO, Brandwave",
  },
  {
    text: "From concept to execution, the quality was unmatched. Our users love the new experience.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    name: "Priya Sharma",
    role: "Product Lead, Elevate",
  },
  {
    text: "Exceptional attention to detail. Every pixel feels intentional and premium.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    name: "Marcus Lee",
    role: "Design Director, Axis",
  },
  {
    text: "They don't just design — they solve problems. Our onboarding drop-off decreased by 60%.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    name: "Sofia Andersen",
    role: "Head of Growth, Lumino",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(0, 3).reverse();

const ReviewCard = ({
  text,
  image,
  name,
  role,
}: {
  text: string;
  image: string;
  name: string;
  role: string;
}) => {
  return (
    <div className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border shadow-lg shadow-primary/10 max-w-[280px] sm:max-w-xs w-full">
      <div className="text-sm sm:text-base text-foreground/90">&ldquo;{text}&rdquo;</div>
      <div className="flex items-center gap-2 mt-5">
        <img
          width={40}
          height={40}
          src={image}
          alt={name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <div className="font-medium tracking-tight leading-5 text-sm sm:text-base">{name}</div>
          <div className="leading-5 opacity-60 tracking-tight text-xs sm:text-sm">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 mb-8 sm:mb-12 md:mb-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">Client Reviews</h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Hear from the teams and founders we&apos;ve partnered with.
        </p>
      </div>
      <div className="relative flex h-[400px] sm:h-[500px] md:h-[600px] w-full items-center justify-center overflow-hidden">
        <Marquee pauseOnHover vertical className="[--duration:25s]">
          {firstColumn.map((testimonial) => (
            <ReviewCard key={testimonial.name} {...testimonial} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:30s]">
          {secondColumn.map((testimonial) => (
            <ReviewCard key={testimonial.name} {...testimonial} />
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:22s] hidden md:flex">
          {thirdColumn.map((testimonial) => (
            <ReviewCard key={testimonial.name} {...testimonial} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-background" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background" />
      </div>
    </section>
  );
}
