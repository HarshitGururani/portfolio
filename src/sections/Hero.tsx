"use client";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import memoJiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-42 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>

      {/* Animated grid background */}
      <div className="absolute inset-0 -z-20 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Responsive floating code elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute md:top-20 top-10 md:left-10 left-4 text-blue-400/30 font-mono md:text-sm text-xs animate-float">
          React
        </div>
        <div className="absolute md:top-32 top-20 md:right-16 right-6 text-green-400/30 font-mono md:text-sm text-xs animate-float-delayed">
          Node.js
        </div>
        <div className="absolute md:bottom-40 bottom-24 md:left-20 left-6 text-purple-400/30 font-mono md:text-sm text-xs animate-float">
          useState
        </div>
        <div className="absolute md:bottom-32 bottom-20 md:right-24 right-6 text-yellow-400/30 font-mono md:text-sm text-xs animate-float-delayed">
          express()
        </div>
        <div className="absolute md:top-40 top-24 md:left-1/3 left-1/4 text-pink-400/30 font-mono md:text-sm text-xs animate-float">
          &lt;/&gt;
        </div>
        <div className="absolute md:bottom-60 bottom-36 md:right-[25%] right-10 text-cyan-400/30 font-mono md:text-sm text-xs animate-float-delayed">
          MongoDB
        </div>
        <div className="absolute md:top-60 top-36 md:left-32 left-8 text-orange-400/30 font-mono md:text-sm text-xs animate-float-delayed">
          API
        </div>
        <div className="absolute md:bottom-48 bottom-28 md:right-12 right-4 text-sky-400/30 font-mono md:text-sm text-xs animate-float">
          .map()
        </div>
        <div className="absolute md:top-16 top-8 md:right-32 right-8 text-emerald-400/30 font-mono md:text-sm text-xs animate-float">
          Next.js
        </div>
        <div className="absolute md:bottom-20 bottom-10 md:left-16 left-4 text-red-400/30 font-mono md:text-sm text-xs animate-float-delayed">
          req.body
        </div>
        <div className="absolute md:top-72 top-44 md:right-20 right-8 text-indigo-400/30 font-mono md:text-sm text-xs animate-float">
          useEffect
        </div>
        <div className="absolute md:bottom-64 bottom-36 md:left-1/4 left-8 text-violet-400/30 font-mono md:text-sm text-xs animate-float-delayed">
          async
        </div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-green-500/15 to-blue-500/15 rounded-full blur-xl animate-pulse-slow pointer-events-none"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-lg animate-pulse-delayed pointer-events-none"></div>

      <div className="container z-50">
        <div className="flex flex-col items-center">
          <Image
            src={memoJiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mt-4">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-semibold">
              Available for new projects
            </div>
          </div>

          <div className="max-w-lg lg:max-w-xl mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
              Building Exceptional User Experiences
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg">
              I specialize in transforming designs into functional, high
              performance web applications. Let&apos;s discuss next project.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
              <span className="font-semibold">Explore my Work</span>
              <ArrowDown className="size-4" />
            </button>
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
              <span>🖐️</span>
              <span className="font-semibold">Let&apos;s Connect</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-3deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes pulse-delayed {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-delayed {
          animation: pulse-delayed 3s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};
