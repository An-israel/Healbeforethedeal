import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  Calendar,
  Clock,
  Monitor,
  Shield,
  ArrowRight,
  X,
  Heart,
  Target,
  Brain,
  Compass,
  Map,
  Key,
  BookOpen,
  Video,
  UserCheck,
  Users,
  Star,
  Award,
  CheckCircle,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: HealBeforeTheDeal,
  head: () => ({
    meta: [
      { title: "Heal Before The Deal — Dr. Peter Obichukwu" },
      {
        name: "description",
        content:
          "A 3 Day Masterclass on Emotional Healing, Breaking Traumatic Patterns & Relationship Readiness with Dr. Peter Obichukwu. May 28–30 · 9PM WAT · Online.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
});

/* ───────── Countdown Hook ───────── */
function useCountdown(targetDate: Date) {
  const calc = useCallback(() => {
    const diff = Math.max(0, targetDate.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      mins: Math.floor((diff % 3600000) / 60000),
      secs: Math.floor((diff % 60000) / 1000),
    };
  }, [targetDate]);

  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    setTime(calc);
    const id = setInterval(() => setTime(calc), 1000);
    return () => clearInterval(id);
  }, [calc]);

  return time;
}

/* ───────── Fade-up on scroll ───────── */
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-7");
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function FadeUp({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useFadeUp();
  return (
    <div ref={ref} className={`opacity-0 translate-y-7 transition-all duration-700 ease-out ${className}`}>
      {children}
    </div>
  );
}

/* ───────── MAIN PAGE ───────── */
function HealBeforeTheDeal() {
  const targetDate = new Date("2026-05-28T21:00:00+01:00");
  const countdown = useCountdown(targetDate);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="relative z-[1] min-h-screen font-sans">
      {/* ── Announcement Bar ── */}
      <div className="bg-gold text-background text-center py-3 px-5 font-bold text-[13px] tracking-wide">
        <span className="inline-block animate-nudge">
          ⚡ Only 3 Days of Pure Transformation — May 28–30 · 9PM WAT · Online · ₦10,000 Only
        </span>
      </div>

      {/* ── Hero ── */}
      <section className="min-h-screen flex items-center py-[90px] pb-20 border-b border-border relative overflow-hidden bg-background">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />
        <div className="max-w-[780px] mx-auto px-7 text-center flex flex-col items-center">
          <h1 className="font-serif font-black text-foreground leading-none mb-5" style={{ fontSize: "clamp(44px,6.5vw,78px)" }}>
            Heal<br />Before<br /><em className="italic text-gold">The Deal.</em>
          </h1>

          <p className="font-serif italic text-muted-foreground text-[19px] max-w-[560px] mb-9 leading-relaxed">
            You're not unlucky in love. You're carrying wounds that keep choosing for you.
            <br /><br />
            Join Dr. Peter Obichukwu for a 3 day live masterclass designed to help you understand your emotional triggers, break toxic cycles, and become truly ready for a healthy relationship.
          </p>

          <div className="flex flex-wrap gap-5 mb-10 justify-center">
            <MetaChip icon={<Calendar className="w-[18px] h-[18px] text-gold" />} text="May 28th – 30th" />
            <MetaChip icon={<Clock className="w-[18px] h-[18px] text-gold" />} text="9PM WAT · Every Night" />
            <MetaChip icon={<Monitor className="w-[18px] h-[18px] text-gold" />} text="Live Online" />
          </div>

          <div className="flex flex-col gap-3 items-center">
            <a href="https://www.teaketer.online/events/heal-before-the-deal" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2.5 bg-gold text-background font-bold text-base px-10 py-[18px] rounded-md no-underline shadow-[0_4px_24px_rgba(201,168,76,0.3)] hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(201,168,76,0.5)] transition-all relative overflow-hidden">
              Secure My Spot for ₦10,000
              <ArrowRight className="w-[18px] h-[18px]" />
            </a>
            <div className="flex items-center gap-2 text-[13px] text-muted-foreground font-medium">
              <Shield className="w-[14px] h-[14px] text-teal-lt" />
              100% Secure Checkout · Instant Access Confirmed
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div className="bg-card border-b border-border py-8">
        <div className="flex justify-center flex-wrap">
          <StatItem num="3" label="Nights of Transformation" />
          <StatItem num="6" label="Life Changing Modules" />
          <StatItem num="1" label="Expert Guide" />
          <StatItem num="∞" label="Impact on Your Future" />
        </div>
      </div>

      {/* ── Speaker (moved up as requested) ── */}
      <section className="bg-dark border-t border-b border-border py-24">
        <FadeUp>
          <div className="max-w-[960px] mx-auto px-7">
            <div className="grid md:grid-cols-[340px_1fr] gap-16 items-center">
              <div className="rounded-[20px] overflow-hidden border border-gold/20 shadow-[0_24px_64px_rgba(0,0,0,0.5)] aspect-[4/5]">
              <img
                  src="/images/dr-peter.jpg"
                  alt="Dr. Peter Obichukwu"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <p className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-3.5">Your Guide for 3 Nights</p>
                <h2 className="font-serif font-black text-foreground leading-[1.1] mb-2" style={{ fontSize: "clamp(28px,4vw,44px)" }}>
                  Dr. Peter<br />Obichukwu
                </h2>
                <p className="text-[15px] font-semibold text-teal-lt mb-6">Relationship Coach · Author, Impostor Love</p>
                <p className="text-base text-foreground/70 leading-[1.8] mb-5">
                  Dr. Peter Obichukwu is a Relationship Coach and author of Impostor Love, a compelling and eye opening book that exposes the counterfeit emotional patterns people mistake for genuine love, and how those patterns silently destroy relationships before they even begin.
                </p>
                <p className="text-base text-foreground/70 leading-[1.8] mb-6">
                  With years of experience in counselling and coaching, Dr. Peter has guided hundreds of men and women through the difficult but liberating process of understanding their emotional wounds, identifying destructive cycles, and building the kind of inner wholeness that healthy, lasting relationships require. He does not just talk about healing. He walks people through it.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <Tag text="Relationship Coach" />
                  <Tag text="Author, Impostor Love" />
                  <Tag text="Emotional Intelligence" />
                  <Tag text="@thepastorpeter" />
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── Pain Points ── */}
      <section className="bg-background py-24">
        <FadeUp>
          <div className="max-w-[960px] mx-auto px-7">
            <p className="eyebrow text-xs font-bold tracking-[2.5px] uppercase text-gold mb-4 text-center">Does This Sound Like You?</p>
            <h2 className="font-serif font-black text-center text-foreground mb-4 leading-[1.15]" style={{ fontSize: "clamp(30px,4.5vw,50px)" }}>
              You Are Ready for Love.<br />But Are You Healed Enough to <em className="italic text-gold">Receive It?</em>
            </h2>
            <p className="text-center text-[17px] text-muted-foreground max-w-[580px] mx-auto mb-14 leading-relaxed">
              Most people enter relationships carrying invisible wounds and wonder why love always seems to hurt. If any of these resonate, you need this masterclass.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <PainCard text="You keep attracting the same kind of emotionally unavailable or toxic partners; different faces, same story, and you don't know how to break the cycle." />
              <PainCard text="You know your past affected you, but you don't know how to stop it from showing up in your relationships today." />
              <PainCard text="You get triggered in relationships; anxiety, anger, withdrawal, and afterward, you don't even recognize your own reactions." />
              <PainCard text="You've been hurt before, and while you want love again, a part of you is guarded, skeptical, and afraid to fully open up." />
              <PainCard text="You're single and waiting for the right person, but deep down, you question whether you're truly ready for a healthy relationship." />
              <PainCard text="You push away good people, settle for less than you deserve, or create patterns that quietly ruin something that could have been right." />
            </div>

            <div className="mt-10 bg-gradient-to-br from-teal/[0.12] to-teal/[0.04] border border-teal/25 rounded-[14px] py-9 px-10 text-center">
              <p className="font-serif italic text-foreground leading-[1.5]" style={{ fontSize: "clamp(19px,2.5vw,26px)" }}>
                The problem is rarely who you choose.<br />
                The problem is the wounds you carry into the choosing.<br />
                <span className="text-teal-lt">It's time to heal before you deal.</span>
              </p>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── Curriculum ── */}
      <section className="bg-dark py-24">
        <FadeUp>
          <div className="max-w-[960px] mx-auto px-7">
            <p className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-4 text-center">The Curriculum</p>
            <h2 className="font-serif font-black text-center text-foreground mb-4 leading-[1.15]" style={{ fontSize: "clamp(30px,4.5vw,50px)" }}>
              What You'll Discover<br />Over 3 <em className="italic text-gold">Powerful Nights</em>
            </h2>
            <p className="text-center text-[17px] text-muted-foreground max-w-[580px] mx-auto mb-14 leading-relaxed">
              Each session is designed to move you from wounded to whole, from reactive to ready, from broken patterns to breakthrough.
            </p>

            <div className="flex flex-col gap-0.5">
              <DiscoverItem day="01" night="Night 1" icon={<Heart className="w-5 h-5 text-gold" />}
                title="Emotional Health Check: Where Are You?"
                desc="Before you can heal, you need an honest diagnosis. We'll walk through a powerful self assessment to reveal your true emotional state and what it means for your relationships right now." />
              <DiscoverItem day="02" night="Night 1" icon={<Brain className="w-5 h-5 text-gold" />}
                title="Navigating Subtle and Complex Traumas"
                desc="Not all trauma looks like a crisis. Many of the deepest wounds are quiet, hidden, and subtle, passed down through family, religion, or culture. Learn to identify them before they derail your next relationship." />
              <DiscoverItem day="03" night="Night 2" icon={<Target className="w-5 h-5 text-gold" />}
                title="Break Free: Stop Dating Your Wounds"
                desc="Why do we keep choosing people who reflect our pain? Dr. Peter reveals the mechanism behind wound based attraction and the exact steps to interrupt it for good." />
              <DiscoverItem day="04" night="Night 2" icon={<Compass className="w-5 h-5 text-gold" />}
                title="Unpack the Past, Prepare the Future"
                desc="Your past relationships are not baggage. They're data. Learn how to mine them for insight, close old chapters with grace, and use what you've learned to build something beautiful ahead." />
              <DiscoverItem day="05" night="Night 3" icon={<Map className="w-5 h-5 text-gold" />}
                title="Know Yourself: Identify Your Emotional Triggers and Wound Map"
                desc="You'll leave with a personalised Wound Map, a clear picture of your emotional triggers, attachment patterns, and blind spots, so you never walk into a relationship blind again." />
              <DiscoverItem day="06" night="Night 3" icon={<Key className="w-5 h-5 text-gold" />}
                title="Proven Keys to Emotional Readiness"
                desc="The final session is pure activation. Dr. Peter shares the practical, spiritual, and psychological keys to genuine relationship readiness, so you can move forward with clarity, confidence, and wholeness." />
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── Countdown ── */}
      <section className="bg-background text-center py-[72px]">
        <FadeUp>
          <div className="max-w-[960px] mx-auto px-7">
            <p className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-4">Time Is Running Out</p>
            <h2 className="font-serif font-black text-foreground mb-4" style={{ fontSize: "clamp(30px,4.5vw,50px)" }}>
              The Masterclass Begins In
            </h2>
            <div className="flex justify-center gap-4 my-9 flex-wrap">
              <CountdownUnit value={pad(countdown.days)} label="Days" />
              <span className="font-serif text-[52px] font-black text-gold/30 self-start pt-5 animate-blink">:</span>
              <CountdownUnit value={pad(countdown.hours)} label="Hours" />
              <span className="font-serif text-[52px] font-black text-gold/30 self-start pt-5 animate-blink">:</span>
              <CountdownUnit value={pad(countdown.mins)} label="Mins" />
              <span className="font-serif text-[52px] font-black text-gold/30 self-start pt-5 animate-blink">:</span>
              <CountdownUnit value={pad(countdown.secs)} label="Secs" />
            </div>
            <p className="text-[15px] text-muted-foreground mb-8">May 28th, 2026 · 9:00PM West Africa Time</p>
            <a href="https://www.teaketer.online/events/heal-before-the-deal" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2.5 bg-gold text-background font-bold text-base px-10 py-[18px] rounded-md no-underline shadow-[0_4px_24px_rgba(201,168,76,0.3)] hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(201,168,76,0.5)] transition-all">
              Reserve My Seat Now <ArrowRight className="w-[18px] h-[18px]" />
            </a>
          </div>
        </FadeUp>
      </section>

      {/* ── Bonuses ── */}
      <section className="bg-dark py-24">
        <FadeUp>
          <div className="max-w-[960px] mx-auto px-7">
            <p className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-4 text-center">Exclusive Bonuses Included</p>
            <h2 className="font-serif font-black text-center text-foreground mb-4 leading-[1.15]" style={{ fontSize: "clamp(30px,4.5vw,50px)" }}>
              Register Today. Get These<br /><em className="italic text-gold">Powerful Gifts Free.</em>
            </h2>
            <p className="text-center text-[17px] text-muted-foreground max-w-[580px] mx-auto mb-14 leading-relaxed">
              When you invest in your growth, we invest in your journey. Every bonus was chosen to deepen what you experience in the masterclass.
            </p>

            <div className="grid sm:grid-cols-2 gap-[18px]">
              <BonusCard num="Bonus 01" icon={<BookOpen className="w-6 h-6 text-gold" />}
                title="The Healing Journal and Wound Map Workbook"
                desc="A guided fillable workbook to help you identify your emotional triggers, attachment patterns, and wound map so the masterclass doesn't just stay in your head."
                value="₦15,000" />
              <BonusCard num="Bonus 02" icon={<Video className="w-6 h-6 text-gold" />}
                title="Full 3 Night Replay Access"
                desc="Can't catch a night live? Or want to revisit a session that hit deep? You'll have 72 hour replay access to all three nights so nothing slips through."
                value="₦12,000" />
              <BonusCard num="Bonus 03" icon={<UserCheck className="w-6 h-6 text-gold" />}
                title="One-on-One"
                desc="You get a direct and personal access to Dr. Peter. Bring your most pressing questions and get real, honest answers in a safe and supportive space."
                value="₦25,000" />
              <BonusCard num="Bonus 04" icon={<Users className="w-6 h-6 text-gold" />}
                title="Heal Before the Deal Community"
                desc="You're not walking this road alone. Join an exclusive community of men and women on the same healing journey — for support, accountability, and genuine connection."
                value="₦8,000" />
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── Value Stack ── */}
      <section className="bg-background py-24">
        <FadeUp>
          <div className="max-w-[960px] mx-auto px-7">
            <p className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-4 text-center">The Full Package</p>
            <h2 className="font-serif font-black text-center text-foreground mb-14 leading-[1.15]" style={{ fontSize: "clamp(30px,4.5vw,50px)" }}>
              Everything Inside, <em className="italic text-gold">Stacked Up</em>
            </h2>

            <div className="max-w-[680px] mx-auto">
              <ValueRow icon={<Zap className="w-5 h-5 text-gold" />}
                title="3 Night Live Masterclass — Heal Before the Deal"
                sub="Full access to all 3 live sessions with Dr. Peter Obichukwu"
                amount="₦30,000" />
              <ValueRow icon={<BookOpen className="w-5 h-5 text-gold" />}
                title="Healing Journal and Wound Map Workbook"
                sub="Personalised guided workbook for deep self discovery"
                amount="₦15,000" />
              <ValueRow icon={<Video className="w-5 h-5 text-gold" />}
                title="Full 3 Night Replay Access (72 Hours)"
                sub="Rewatch every session at your own pace"
                amount="₦12,000" />
              <ValueRow icon={<UserCheck className="w-5 h-5 text-gold" />}
                title="One-on-One with Dr. Peter — All 3 Nights"
                sub="Direct personal access to Dr. Peter for your deepest questions"
                amount="₦25,000" />
              <ValueRow icon={<Users className="w-5 h-5 text-gold" />}
                title="Heal Before the Deal Community"
                sub="Ongoing support network of healing peers"
                amount="₦8,000" last />
            </div>

            <div className="flex justify-between items-center mt-7 py-6 px-7 bg-card border border-border rounded-xl max-w-[680px] mx-auto">
              <span className="text-[15px] font-semibold text-muted-foreground">Total Combined Value</span>
              <span className="font-serif font-black text-[28px] text-gold/40 line-through">₦90,000+</span>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── Price ── */}
      <section id="price" className="bg-dark border-t border-b border-border py-24">
        <FadeUp>
          <div className="max-w-[560px] mx-auto px-7">
            <div className="bg-card border border-gold/25 rounded-[20px] py-[52px] px-11 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-dk via-gold via-gold-lt via-gold to-gold-dk" />
              <div className="absolute bottom-[-80px] right-[-80px] w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_70%)] pointer-events-none" />

              <div className="inline-block bg-gold/10 border border-gold/30 rounded-full px-[18px] py-1.5 text-xs font-bold tracking-[1.5px] uppercase text-gold mb-7">
                ✦ Early Registration — Limited Spots
              </div>
              <p className="text-[15px] text-muted-foreground line-through mb-2">Total value: ₦90,000+</p>
              <p className="font-serif font-black text-[80px] leading-none text-foreground mb-3">
                <sup className="text-[0.45em] align-super text-gold">₦</sup>10,000
              </p>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-9 max-w-[380px] mx-auto">
                One investment. Three nights of real work. Four powerful bonuses. Over ₦80,000 in total value — yours for just ₦10,000.
                <br /><br />
                This price is only available until we hit capacity. Once the seats are gone, they're gone.
              </p>
              <a href="https://www.teaketer.online/events/heal-before-the-deal" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2.5 bg-gold text-background font-bold text-base px-10 py-[18px] rounded-md no-underline shadow-[0_4px_24px_rgba(201,168,76,0.3)] hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(201,168,76,0.5)] transition-all w-full justify-center">
                Yes — I'm Ready. Register Now <ArrowRight className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── Scarcity Bar ── */}
      <div className="bg-[#1a0a0a] border-t-2 border-b-2 border-red-accent/40 py-[22px] px-7 text-center">
        <p className="font-bold text-foreground" style={{ fontSize: "clamp(14px,2vw,17px)" }}>
          <strong className="text-[#ff7070]">76% of seats claimed.</strong> Only a handful of spots remain at this price.
        </p>
        <div className="max-w-[380px] mx-auto mt-3.5 h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
          <div className="h-full w-[76%] bg-gradient-to-r from-red-accent to-[#ff7070] rounded-full" />
        </div>
        <p className="text-xs text-muted-foreground mt-2 font-medium">
          Registration closes when capacity is reached or at the stroke of midnight before May 28th.
        </p>
      </div>

      {/* ── Guarantee ── */}
      <section className="bg-background py-24">
        <FadeUp>
          <div className="max-w-[960px] mx-auto px-7">
            <p className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-4 text-center">Our Promise</p>
            <h2 className="font-serif font-black text-center text-foreground mb-14 leading-[1.15]" style={{ fontSize: "clamp(30px,4.5vw,50px)" }}>
              We Stand Behind <em className="italic text-gold">Every Night</em>
            </h2>

            <div className="max-w-[680px] mx-auto flex sm:flex-row flex-col gap-9 items-start sm:items-center bg-card border border-border rounded-[18px] p-11">
              {/* Seal */}
              <div className="w-[110px] h-[110px] shrink-0 rounded-full bg-gradient-to-br from-teal to-[#0a4a43] border-[3px] border-gold/50 flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(26,140,126,0.25)] mx-auto sm:mx-0">
                <span className="text-[9px] font-bold tracking-[1.5px] text-gold-lt">OUR</span>
                <span className="font-serif text-lg font-black text-white leading-[1.1] my-0.5">FULL<br />PROMISE</span>
                <span className="text-[9px] font-bold tracking-[1.5px] text-gold-lt">TO YOU</span>
              </div>
              <div>
                <h3 className="font-serif font-extrabold text-2xl text-foreground mb-3">We Stand Behind Every Night</h3>
                <p className="text-[15px] text-foreground/70 leading-[1.8]">
                  We are committed to delivering a masterclass that genuinely helps you understand your patterns, confront what has been holding you back, and move toward healthier relationships.
                  <br /><br />
                  Show up. Engage fully. Do the work.
                  <br /><br />
                  And if, after attending and applying what you have learned, you feel it did not give you real clarity or value, reach out to us. We will make it right. Because this is not just another webinar to us. It is your growth, and that matters.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-[110px] text-center border-t border-border"
        style={{ background: `radial-gradient(ellipse 70% 60% at 50% 100%, rgba(201,168,76,0.06) 0%, transparent 70%), var(--dark)` }}
      >
        <FadeUp>
          <div className="max-w-[960px] mx-auto px-7">
            <h2 className="font-serif font-black text-foreground mb-[18px] leading-[1.1]" style={{ fontSize: "clamp(32px,5.5vw,58px)" }}>
              Your <em className="italic text-gold">Healed Self</em><br />Is Waiting on This Decision.
            </h2>
            <p className="text-lg text-muted-foreground max-w-[520px] mx-auto mb-11 leading-relaxed">
              Every great relationship starts with a healed person. You have the information. You have the opportunity. The only thing standing between you and your breakthrough is one decision.
            </p>
            <a href="https://www.teaketer.online/events/heal-before-the-deal" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2.5 bg-gold text-background font-bold text-base px-10 py-[18px] rounded-md no-underline shadow-[0_4px_24px_rgba(201,168,76,0.3)] hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(201,168,76,0.5)] transition-all">
              Register for Heal Before the Deal <ArrowRight className="w-[18px] h-[18px]" />
            </a>

            <div className="max-w-[620px] mx-auto mt-16 border-t border-border pt-8 text-[15px] text-muted-foreground leading-[1.8] text-left">
              <strong className="text-gold">P.S.</strong> — If you're still reading this, something in you knows this is for you. The part of you that's tired of carrying old wounds into new relationships. The part of you that wants to show up whole. Don't let that part be silenced by hesitation. The 3 nights of May 28–30 will pass regardless. The question is whether you'll be in the room when they do. Secure your spot now for ₦10,000 before it's gone.
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-background border-t border-border py-9 px-7 text-center">
        <p className="text-[13px] text-muted-foreground/70 mb-1.5">
          © 2026 Dr. Peter Obichukwu · All Rights Reserved
        </p>
        <p className="text-[13px] text-muted-foreground/70 mb-1.5">
          Online Webinar · May 28–30, 2026 · 9PM WAT · <span className="text-teal-lt font-semibold">@thepastorpeter</span>
        </p>
        <p className="text-[13px] text-muted-foreground/70">
          Questions? Reach out via <a href="https://www.teaketer.online/events/heal-before-the-deal" target="_blank" rel="noopener noreferrer" className="text-gold no-underline">@thepastorpeter</a> on social media.
        </p>
      </footer>

      {/* ── Sticky CTA ── */}
      <div className={`fixed bottom-0 left-0 right-0 bg-dark/[0.96] backdrop-blur-xl border-t border-gold/20 py-4 px-7 z-[999] flex items-center justify-between gap-5 transition-transform duration-500 ${showSticky ? "translate-y-0" : "translate-y-full"} max-[520px]:flex-col max-[520px]:text-center`}>
        <div>
          <strong className="font-serif font-extrabold text-[17px] text-foreground block">Heal Before the Deal — May 28–30</strong>
          <span className="text-[13px] text-muted-foreground">9PM WAT · Online · Only ₦10,000</span>
        </div>
        <a href="https://www.teaketer.online/events/heal-before-the-deal" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-gold text-background font-bold text-[15px] px-8 py-3.5 rounded-md no-underline shadow-[0_4px_24px_rgba(201,168,76,0.3)] hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(201,168,76,0.5)] transition-all max-[520px]:w-full max-[520px]:justify-center">
          Register Now <ArrowRight className="w-[18px] h-[18px]" />
        </a>
      </div>
    </div>
  );
}

/* ───────── Sub-components ───────── */

function MetaChip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
      <div className="w-8 h-8 rounded-full bg-gold/[0.12] border border-gold/25 grid place-items-center">
        {icon}
      </div>
      {text}
    </div>
  );
}

function StatItem({ num, label }: { num: string; label: string }) {
  return (
    <div className="text-center px-10 py-3 border-r border-border last:border-r-0 max-[600px]:border-r-0 max-[600px]:border-b max-[600px]:last:border-b-0">
      <div className="font-serif font-black text-4xl text-gold leading-none">{num}</div>
      <div className="text-[13px] font-medium text-muted-foreground mt-1.5">{label}</div>
    </div>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <span className="bg-gold/[0.08] border border-gold/20 rounded-full px-4 py-1.5 text-[13px] font-semibold text-gold-lt">
      {text}
    </span>
  );
}

function PainCard({ text }: { text: string }) {
  return (
    <div className="bg-card border border-border rounded-[14px] p-7 flex gap-4 hover:border-gold/25 transition-colors">
      <div className="w-7 h-7 rounded-full bg-red-accent/[0.12] border border-red-accent/30 grid place-items-center text-red-accent shrink-0 mt-0.5">
        <X className="w-3.5 h-3.5" />
      </div>
      <p className="text-[15px] text-foreground/75 leading-relaxed">{text}</p>
    </div>
  );
}

function DiscoverItem({ day, night, icon, title, desc }: { day: string; night: string; icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="grid grid-cols-[64px_1fr] bg-card border border-border rounded-xl overflow-hidden hover:border-gold/30 hover:translate-x-1 transition-all">
      <div className="bg-gold/[0.08] border-r border-border flex flex-col items-center justify-center py-5 px-2.5 text-center">
        <span className="font-serif font-black text-[22px] text-gold leading-none">{day}</span>
        <small className="text-[9px] font-bold tracking-[1px] uppercase text-muted-foreground mt-1">{night}</small>
      </div>
      <div className="py-[22px] px-7">
        <h3 className="font-serif font-extrabold text-[19px] text-foreground mb-1.5 leading-[1.3]">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function CountdownUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-[90px] bg-card border border-border rounded-[14px] py-5 px-4 text-center">
      <div className="font-serif font-black text-[52px] text-gold leading-none" style={{ textShadow: "0 0 30px rgba(201,168,76,0.3)" }}>
        {value}
      </div>
      <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-muted-foreground mt-2">{label}</div>
    </div>
  );
}

function BonusCard({ num, icon, title, desc, value }: { num: string; icon: React.ReactNode; title: string; desc: string; value: string }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-8 hover:border-gold/30 hover:-translate-y-1 transition-all">
      <p className="text-[11px] font-bold tracking-[2px] uppercase text-teal-lt mb-3.5">{num}</p>
      <div className="w-12 h-12 rounded-xl bg-gold/[0.08] border border-gold/15 grid place-items-center mb-4">
        {icon}
      </div>
      <h3 className="font-serif font-extrabold text-lg text-foreground mb-2.5 leading-[1.3]">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
      <div className="text-sm font-bold text-gold">
        <small className="text-[11px] font-medium text-muted-foreground block mb-0.5">Valued at</small>
        {value}
      </div>
    </div>
  );
}

function ValueRow({ icon, title, sub, amount, last = false }: { icon: React.ReactNode; title: string; sub: string; amount: string; last?: boolean }) {
  return (
    <div className={`flex items-center gap-[18px] py-5 ${last ? "" : "border-b border-border"}`}>
      <div className="w-10 h-10 rounded-[10px] bg-gold/[0.06] border border-gold/[0.12] grid place-items-center shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <strong className="block text-[15px] font-semibold text-foreground mb-0.5">{title}</strong>
        <span className="text-[13px] text-muted-foreground">{sub}</span>
      </div>
      <span className="font-serif font-bold text-[17px] text-gold whitespace-nowrap">{amount}</span>
    </div>
  );
}
