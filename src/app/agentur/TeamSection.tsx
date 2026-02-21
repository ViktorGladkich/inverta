"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

const neumorphicShadow =
  "0px 0.706592px 0.706592px -0.666667px rgba(0,0,0,0.08),0px 1.80656px 1.80656px -1.33333px rgba(0,0,0,0.08),0px 3.62176px 3.62176px -2px rgba(0,0,0,0.07),0px 6.8656px 6.8656px -2.66667px rgba(0,0,0,0.07),0px 13.6468px 13.6468px -3.33333px rgba(0,0,0,0.05),0px 30px 30px -4px rgba(0,0,0,0.02),inset 0px 3px 1px 0px rgba(255,255,255,1)";

const team = [
  {
    name: "Mansur Alisultanow",
    role: "Gründer & CMO",
    image: "/team/member_2.jpeg",
    number: "01",
  },
   {
    name: "Viktor Gladkich",
    role: "Gründer & CEO",
    image: "/viktor.jpg",
    number: "02",
  },
  {
    name: "Alireza Yaghoubi",
    role: "Gründer & CTO",
    image: "/team/member_3.jpeg",
    number: "03",
  },
];

function StickyCorner({
  fill,
  className,
  style,
}: {
  fill: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M40 0 C40 22.09 22.09 40 0 40 L40 40 Z" fill={fill} />
    </svg>
  );
}

function TeamCard({ member }: { member: (typeof team)[0] }) {
  const blockColor = "#f5f5f5";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full h-[400px] md:h-[500px] rounded-[32px] overflow-hidden group"
      style={{ boxShadow: neumorphicShadow }}
    >
      {member.image ? (
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-linear-to-br from-[#e8e8e8] to-[#d0d0d0] flex items-center justify-center">
          <span className="text-[100px] font-black text-black/8 select-none">
            {member.name.charAt(0)}
          </span>
        </div>
      )}

      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

      <div className="absolute top-5 right-5 z-20">
        <span className="text-[11px] font-black tracking-widest text-white/40">
          {member.number}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 z-20">
        <div
          className="rounded-tr-[32px] rounded-tl-[32px] px-7 pt-5 pb-7 min-w-[200px] md:min-w-[220px] transition-colors duration-300 group-hover:bg-[#daff02]"
          style={{ backgroundColor: blockColor }}
        >
          <p className="text-black font-medium text-xl md:text-2xl tracking-tight mb-1 leading-tight">
            {member.name}
          </p>
          <p className="text-black/35 text-[11px] font-bold uppercase tracking-widest">
            {member.role}
          </p>
        </div>

        <StickyCorner
          fill={blockColor}
          className="absolute bottom-0 -right-[40px] w-[40px] h-[40px]"
          style={{ transform: "rotate(90deg)" }}
        />
      </div>
    </motion.div>
  );
}

export function TeamSection() {
  return (
    <section
      className="relative z-10 py-24 md:py-32 bg-[#f5f5f5] overflow-hidden"
      aria-labelledby="team-heading"
    >
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px] relative z-10">
        <FadeIn>
          <div className="flex flex-col items-center text-center gap-6 mb-16 md:mb-24">
            <div className="flex flex-col items-center gap-4">
              <div className="w-fit flex items-center justify-center px-[12px] py-[6px] gap-2 rounded-[60px] bg-[#f5f5f5] shadow-[0px_0.706592px_0.706592px_-0.541667px_rgba(0,0,0,0.1),0px_1.80656px_1.80656px_-1.08333px_rgba(0,0,0,0.09),0px_3.62176px_3.62176px_-1.625px_rgba(0,0,0,0.09),0px_6.8656px_6.8656px_-2.16667px_rgba(0,0,0,0.09),0px_13.6468px_13.6468px_-2.70833px_rgba(0,0,0,0.08),0px_30px_30px_-3.25px_rgba(0,0,0,0.05),inset_0px_3px_1px_0px_white]">
                <div className="w-[14px] h-[14px] text-black/40">
                  <svg
                    viewBox="0 0 14 14"
                    fill="none"
                    className="w-full h-full"
                  >
                    <circle cx="5" cy="5" r="2" fill="currentColor" />
                    <circle
                      cx="10"
                      cy="4"
                      r="1.5"
                      fill="currentColor"
                      opacity="0.5"
                    />
                    <circle
                      cx="3"
                      cy="10"
                      r="1.5"
                      fill="currentColor"
                      opacity="0.5"
                    />
                    <circle
                      cx="10"
                      cy="10"
                      r="2"
                      fill="currentColor"
                      opacity="0.3"
                    />
                  </svg>
                </div>
                <span className="text-[12px] font-medium text-black tracking-wider uppercase">
                  Unser Team
                </span>
              </div>

              <h2
                id="team-heading"
                className="flex flex-wrap items-center justify-center gap-x-4 text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-black"
              >
                <span className="font-medium">Die Menschen hinter</span>
                <div className="relative flex items-center h-[60px] md:h-[100px]">
                  <div className="absolute left-[-10px] md:left-[-10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-[#daff02] rounded-full z-0" />
                  <span className="relative font-bold text-[36px] sm:text-[48px] md:text-[70px] leading-none tracking-tighter text-black z-10">
                    INVERTA
                    <span className="text-[#daff02]">.</span>
                  </span>
                </div>
              </h2>
            </div>

            <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
              <p className="text-base md:text-lg text-black font-medium leading-relaxed">
                Ein kleines, fokussiertes Team mit großer Wirkung. Jeder Experte
                auf seinem Gebiet.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {team.map((member) => (
            <TeamCard key={member.number} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
