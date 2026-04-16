import { createFileRoute } from "@tanstack/react-router";
import {
  Heart,
  Shield,
  Target,
  Users,
  CheckCircle,
  Calendar,
  Clock,
  Star,
  ArrowRight,
  BookOpen,
  MessageCircle,
  Video,
  Award,
  Sparkles,
  UserCheck,
  Globe,
  Mic,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Heal Before The Deal | 3 Day Live Masterclass with Dr. Peter Obichukwu" },
      { name: "description", content: "Join Dr. Peter Obichukwu for a 3-day live masterclass to understand your emotional triggers, break toxic cycles, and become truly ready for a healthy relationship." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
            <Calendar className="h-4 w-4" />
            <span>3 Day Live Masterclass</span>
          </div>
          <h1 className="mb-8 text-5xl font-bold leading-tight md:text-7xl">
            Heal Before{" "}
            <span className="text-primary">The Deal</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            You're not unlucky in love. You're carrying wounds that keep choosing for you. Join Dr. Peter Obichukwu for a 3 day live masterclass designed to help you understand your emotional triggers, break toxic cycles, and become truly ready for a healthy relationship.
          </p>
          <a
            href="#register"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            Reserve Your Spot Now
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* About Dr. Peter — placed high as requested */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl bg-card">
              <img
                src="https://xoqriqoswijgbmunypbb.supabase.co/storage/v1/object/public/product-images/site-content/1775672031553-v9so7x.jpg"
                alt="Dr. Peter Obichukwu"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
                Your Guide
              </p>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Dr. Peter Obichukwu
              </h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Dr. Peter Obichukwu is a globally recognized relationship expert, certified love therapist, and bestselling author of "Impostor Love." For over two decades, he has dedicated his life to helping individuals and couples uncover hidden emotional patterns, confront self sabotaging behaviors, and build genuinely healthy relationships.
              </p>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                As the founder of Ideal Life City, Dr. Peter has impacted over 50,000 lives across more than 30 countries through his conferences, coaching, books, and online programs. His approach is rooted in practical wisdom, emotional intelligence, and a deep understanding of what it truly takes to be ready for love.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-card p-4 text-center">
                  <Globe className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <p className="text-2xl font-bold text-primary">30+</p>
                  <p className="text-xs text-muted-foreground">Countries</p>
                </div>
                <div className="rounded-xl bg-card p-4 text-center">
                  <Users className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <p className="text-2xl font-bold text-primary">50K+</p>
                  <p className="text-xs text-muted-foreground">Lives Impacted</p>
                </div>
                <div className="rounded-xl bg-card p-4 text-center">
                  <Mic className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <p className="text-2xl font-bold text-primary">20+</p>
                  <p className="text-xs text-muted-foreground">Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="bg-card/50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              3 Day Masterclass Breakdown
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              What You Will Learn
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Each night is carefully designed to guide you through a transformational process.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">Night 1</p>
              <h3 className="mb-3 text-xl font-bold">Uncover Your Wounds</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Discover the hidden emotional wounds that have been silently shaping your choices in relationships. Learn to identify the patterns you did not even know you were repeating.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">Night 2</p>
              <h3 className="mb-3 text-xl font-bold">Break The Cycle</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Understand why you keep attracting or tolerating the wrong relationships. Get practical tools to break free from toxic cycles and begin making healthier choices.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">Night 3</p>
              <h3 className="mb-3 text-xl font-bold">Become Relationship Ready</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Build the emotional foundation you need to attract and sustain a healthy, loving relationship. Walk away with a clear roadmap for your growth journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses — corrected */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              Exclusive Bonuses
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              What You Get When You Register
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Video className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold">3 Nights of Live Teaching</h3>
                <p className="text-sm text-muted-foreground">
                  Real time, interactive sessions with Dr. Peter Obichukwu where you learn, ask questions, and grow together with a community.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <UserCheck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold">One on One Access to Dr. Peter</h3>
                <p className="text-sm text-muted-foreground">
                  Get personal guidance and clarity directly from Dr. Peter on your specific situation.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold">Masterclass Workbook</h3>
                <p className="text-sm text-muted-foreground">
                  A downloadable workbook to help you reflect, journal, and track your progress through each session.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MessageCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold">Access to Private Community</h3>
                <p className="text-sm text-muted-foreground">
                  Join a supportive community of like minded individuals on the same journey toward healthier relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise — corrected */}
      <section className="bg-card/50 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Promise</h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Guide you through a clear, practical process to understand your emotional wounds, break unhealthy patterns, and move toward genuine relationship readiness.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center gap-3">
              <CheckCircle className="h-8 w-8 text-primary" />
              <p className="font-semibold">Understand Your Patterns</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <CheckCircle className="h-8 w-8 text-primary" />
              <p className="font-semibold">Confront What Holds You Back</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <CheckCircle className="h-8 w-8 text-primary" />
              <p className="font-semibold">Move Toward Healthier Relationships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee — corrected */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center md:p-16">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              We Stand Behind Every Night
            </h2>
            <p className="mx-auto mb-4 max-w-2xl leading-relaxed text-muted-foreground">
              We are committed to delivering a masterclass that genuinely helps you understand your patterns, confront what has been holding you back, and move toward healthier relationships.
            </p>
            <p className="mx-auto mb-4 max-w-2xl font-semibold text-foreground">
              Show up, engage fully, and do the work.
            </p>
            <p className="mx-auto mb-4 max-w-2xl leading-relaxed text-muted-foreground">
              And if, after attending and applying what you have learned, you feel it did not give you real clarity or value, reach out to us. We will make it right.
            </p>
            <p className="mx-auto max-w-2xl text-primary font-medium italic">
              Because this is not just another webinar to us, it is your growth, and that matters.
            </p>
          </div>
        </div>
      </section>

      {/* CTA / Register */}
      <section id="register" className="bg-card/50 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Begin Your Journey?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-muted-foreground">
            Take the first step toward understanding yourself and building the relationship you truly deserve. Dr. Peter will guide you through the process.
          </p>
          <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8">
            <div className="mb-6 flex items-center justify-center gap-2 text-primary">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">Limited Spots Available</span>
            </div>
            <div className="mb-6">
              <p className="mb-1 text-sm text-muted-foreground">Masterclass Investment</p>
              <p className="text-4xl font-bold text-primary">Free</p>
            </div>
            <ul className="mb-8 space-y-3 text-left text-sm">
              <li className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                <span>3 nights of live teaching with Dr. Peter</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                <span>One on one access to Dr. Peter</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                <span>Downloadable masterclass workbook</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                <span>Private community access</span>
              </li>
            </ul>
            <a
              href="#"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Register Now
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Dr. Peter Obichukwu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
