import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  BookOpen,
  Award,
  Heart,
  Users2,
  Users,
  ShieldCheck,
} from "lucide-react";

export default function HomePage() {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-slate-50 overflow-x-hidden">
      {/* HERO WITH VIDEO */}
      <section className="relative h-[78vh] md:h-screen w-full overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105 motion-reduce:scale-100 transition-transform duration-2000 ease-in-out hover:scale-110"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/TPIS.mp4" type="video/mp4" />
          <img
            src="/fallback-hero.jpg"
            alt="Hero fallback"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Light overlay so video stays clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/18 to-slate-900/60" />

        {/* MAIN HERO CONTENT */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 py-4 flex flex-col">
          {/* NAVBAR */}
          <header className="flex items-center justify-between">
            {/* Admissions badge – more eye catching */}
            <div className="px-4 py-2 rounded-full bg-black/35 backdrop-blur-xl border border-emerald-300/50 shadow-lg shadow-black/40">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-300" />
                </span>
                <p className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-emerald-100 font-semibold">
                  Admissions Open · Session 2026–27
                </p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-100/95">
              <a
                href="#highlights"
                className="hover:text-sky-300 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                Highlights
              </a>
              <a
                href="#admissions"
                className="hover:text-sky-300 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                Admissions
              </a>
              <a
                href="#gallery"
                className="hover:text-sky-300 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                Gallery
              </a>
              <Link
                href="/enquiry"
                className="rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 text-slate-950 px-6 py-2.5 text-sm font-extrabold tracking-wide hover:from-sky-300 hover:via-sky-400 hover:to-sky-500 transition-all duration-300 shadow-[0_0_25px_rgba(56,189,248,0.7)] hover:shadow-[0_0_40px_rgba(56,189,248,0.9)] transform hover:scale-105 ring-2 ring-sky-300/80 ring-offset-2 ring-offset-slate-900"
              >
                Admission Enquiry Form
              </Link>
            </nav>

            <Link
              href="/enquiry"
              className="md:hidden rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 text-slate-950 px-4 py-2.5 text-xs font-extrabold tracking-wide hover:from-sky-300 hover:via-sky-400 hover:to-sky-500 transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.7)] transform hover:scale-105"
            >
              Enquiry Form
            </Link>
          </header>

          {/* HERO MAIN – only left content now (video more visible) */}
          <div className="flex-1 flex items-end md:items-center mt-4 md:mt-0">
            <div className="w-full flex justify-start">
              <div className="space-y-5 max-w-xl">
                {/* Small label above heading emphasising enquiry */}
                <div className="inline-flex items-center gap-2 rounded-full bg-black/35 border border-sky-400/60 px-3 py-1 backdrop-blur-xl">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-sky-100">
                    Admission Enquiry – Session 2026–27
                  </span>
                </div>

                <div className="inline-block rounded-3xl bg-gradient-to-r from-black/45 to-black/20 border border-white/20 backdrop-blur-2xl px-5 md:px-6 py-3 shadow-2xl shadow-black/60">
                  <p className="text-[11px] md:text-sm uppercase tracking-[0.35em] text-sky-200 mb-1">
                    Pathseekers
                  </p>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-2xl">
                    The Pathseekers International School
                  </h1>
                  <div className="flex items-center gap-2 mt-2 text-xs md:text-sm text-slate-200/90">
                    <MapPin className="h-4 w-4 text-sky-300" />
                    Ramgarh / Vijaypur · District Samba (JKUT), India
                  </div>
                </div>

                {/* Shorter text on mobile, detailed on desktop */}
                <p className="text-sm text-slate-100/95 max-w-lg leading-relaxed drop-shadow-xl md:hidden">
                  A nurturing, disciplined school where children build strong
                  basics, good behaviour and real confidence.
                </p>
                <p className="hidden md:block text-lg md:text-xl text-slate-100/95 max-w-lg leading-relaxed drop-shadow-xl">
                  Empowering young minds in a caring environment where strong
                  foundations in academics, character and confidence shape
                  future-ready students.
                </p>

                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                  <Link
                    href="/enquiry"
                    className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 text-slate-950 px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-lg font-extrabold tracking-wide hover:from-sky-300 hover:via-sky-400 hover:to-sky-500 transition-all duration-300 shadow-[0_0_30px_rgba(56,189,248,0.8)] hover:shadow-[0_0_45px_rgba(56,189,248,1)] transform hover:scale-105 ring-2 ring-sky-300/80 ring-offset-2 ring-offset-slate-900"
                  >
                    Fill Admission Enquiry Form
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="#highlights"
                    className="text-xs md:text-base text-slate-100/90 hover:text-sky-300 underline underline-offset-4 decoration-sky-400/50 flex items-center gap-1 md:gap-2 transition-all"
                  >
                    Explore Highlights
                    <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP FLOATING STATS – transparent on video */}
        <div className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-20">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center gap-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              <Users className="h-9 w-9 text-sky-300" />
              <div className="text-sm font-semibold text-white">
                500+ Students
              </div>
              <div className="text-[11px] text-slate-200">Enrolled*</div>
            </div>
            <div className="flex flex-col items-center gap-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              <Users2 className="h-9 w-9 text-sky-300" />
              <div className="text-sm font-semibold text-white">
                25+ Educators
              </div>
              <div className="text-[11px] text-slate-200">Teaching Staff</div>
            </div>
            <div className="flex flex-col items-center gap-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              <Award className="h-9 w-9 text-sky-300" />
              <div className="text-sm font-semibold text-white">95%+</div>
              <div className="text-[11px] text-slate-200">
                Consistent Results
              </div>
            </div>
            <div className="flex flex-col items-center gap-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              <ShieldCheck className="h-9 w-9 text-sky-300" />
              <div className="text-sm font-semibold text-white">
                Safe Campus
              </div>
              <div className="text-[11px] text-slate-200">
                Disciplined & Caring
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE STATS – below hero with background so they don’t mix */}
      <section className="md:hidden bg-slate-900/85 border-t border-slate-800/70">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="grid grid-cols-2 gap-4 bg-slate-900/80 backdrop-blur-xl border border-slate-700/70 rounded-2xl py-4 px-4 shadow-lg shadow-black/50">
            <div className="flex flex-col items-center gap-1">
              <Users className="h-8 w-8 text-sky-300" />
              <div className="text-sm font-semibold text-white">
                500+ Students
              </div>
              <div className="text-[10px] text-slate-300">Enrolled*</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Users2 className="h-8 w-8 text-sky-300" />
              <div className="text-sm font-semibold text-white">
                25+ Educators
              </div>
              <div className="text-[10px] text-slate-300">Teaching Staff</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Award className="h-8 w-8 text-sky-300" />
              <div className="text-sm font-semibold text-white">95%+</div>
              <div className="text-[10px] text-slate-300">
                Consistent Results
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ShieldCheck className="h-8 w-8 text-sky-300" />
              <div className="text-sm font-semibold text-white">
                Safe Campus
              </div>
              <div className="text-[10px] text-slate-300">
                Disciplined & Caring
              </div>
            </div>
          </div>
          {/* <p className="mt-2 text-[10px] text-slate-500 text-center">
            *Figures indicative as shared by school. Exact numbers may vary by
            session.
          </p> */}
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section
        id="highlights"
        className="bg-slate-900/85 border-t border-slate-700/50 py-12 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                Why Choose Pathseekers?
              </h2>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                A structured yet caring environment that balances academics,
                discipline and exposure – so children grow steadily and
                confidently.
              </p>
            </div>
            <Link
              href="/enquiry"
              className="text-lg font-semibold text-sky-300 hover:text-sky-200 flex items-center gap-2 group"
            >
              Get Fee &amp; Process Details
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-slate-800/80 border border-slate-600/60 rounded-3xl p-6 space-y-4 hover:bg-slate-700/80 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/20">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-sky-500/20">
                  <BookOpen className="h-6 w-6 text-sky-400" />
                </div>
                <div className="font-bold text-xl text-sky-300">
                  Strong Academics
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Concept-based teaching, written work and assessments that
                continuously strengthen basics in each subject.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-600/60 rounded-3xl p-6 space-y-4 hover:bg-slate-700/80 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/20">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-sky-500/20">
                  <Award className="h-6 w-6 text-sky-400" />
                </div>
                <div className="font-bold text-xl text-sky-300">
                  Build Confidence
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Assemblies, events and stage opportunities that let students
                speak, participate and grow naturally confident.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-600/60 rounded-3xl p-6 space-y-4 hover:bg-slate-700/80 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/20">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-sky-500/20">
                  <Heart className="h-6 w-6 text-sky-400" />
                </div>
                <div className="font-bold text-xl text-sky-300">
                  Nurturing Care
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                A safe, disciplined campus with clear rules and boundaries that
                help students feel secure and focused.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-600/60 rounded-3xl p-6 space-y-4 hover:bg-slate-700/80 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/20">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-sky-500/20">
                  <Users2 className="h-6 w-6 text-sky-400" />
                </div>
                <div className="font-bold text-xl text-sky-300">
                  Holistic Growth
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Focus on values, habits, behaviour and soft skills – along with
                academics – for overall development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="bg-slate-900/85 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
              Life at Pathseekers
            </h2>
            <p className="text-sm md:text-lg text-slate-300 max-w-2xl mx-auto">
              A glimpse into daily school life – classrooms, activities and
              events that shape every child’s experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Replace these with real images when available */}
            <div className="relative rounded-3xl overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-500">
              <img
                src="/gallery-1.jpg"
                alt="Campus view"
                className="w-full h-64 object-cover group-hover:brightness-110 transition-all"
              />
              <div className="absolute inset-0 bg-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold text-sm md:text-base">
                  Classrooms &amp; Learning
                </span>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-500">
              <img
                src="/gallery-2.jpg"
                alt="Activities"
                className="w-full h-64 object-cover group-hover:brightness-110 transition-all"
              />
              <div className="absolute inset-0 bg-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold text-sm md:text-base">
                  Activities &amp; Events
                </span>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-500">
              <img
                src="/gallery-3.jpg"
                alt="Events"
                className="w-full h-64 object-cover group-hover:brightness-110 transition-all"
              />
              <div className="absolute inset-0 bg-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold text-sm md:text-base">
                  Celebrations &amp; Culture
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSIONS INFO */}
      <section
        id="admissions"
        className="bg-slate-900 border-t border-slate-700/50 py-12 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1.2fr,1fr] gap-8 lg:gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Admissions {currentYear}–{nextYear}: Next Steps
            </h2>
            <p className="text-base md:text-lg text-slate-300 mb-6 leading-relaxed">
              Share your details through the enquiry form. The school office
              will contact you with seat availability, fee structure and the
              exact process for your child’s class.
            </p>
            <ul className="text-sm md:text-base text-slate-300 space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-sky-400 mt-0.5">•</span>
                Limited seats in foundational and primary classes
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-400 mt-0.5">•</span>
                Interaction / short assessment for higher classes
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-400 mt-0.5">•</span>
                Transport facility as per school routes (if available)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-400 mt-0.5">•</span>
                Concessions only as per school policy and norms
              </li>
            </ul>

            <Link
              href="/enquiry"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 text-slate-950 px-8 py-4 text-lg font-extrabold shadow-[0_0_30px_rgba(56,189,248,0.8)] hover:from-sky-300 hover:via-sky-400 hover:to-sky-500 hover:shadow-[0_0_45px_rgba(56,189,248,1)] transition-all duration-300 transform hover:scale-105 ring-2 ring-sky-300/80 ring-offset-2 ring-offset-slate-900"
            >
              Fill Enquiry Form Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>

          <div className="bg-slate-800/75 border border-slate-600/60 rounded-3xl p-6 lg:p-8 text-sm md:text-base text-slate-200 space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-sky-400" />
              Documents Usually Required
            </h3>
            <p className="text-slate-300 mb-4">
              Exact documents will be confirmed by the school office based on
              class and latest guidelines.
            </p>
            <ul className="space-y-2">
              <li>• Birth Certificate / Aadhaar of the student</li>
              <li>• Previous school report card (for higher classes)</li>
              <li>• Transfer certificate (if applicable)</li>
              <li>• Passport size photographs (student &amp; parents)</li>
              <li>• Address / ID proof as per requirement</li>
            </ul>
            <p className="text-xs md:text-sm text-slate-400 mt-4 italic border-t border-slate-600/50 pt-4">
              *Submitting the enquiry form begins the process. Admission will be
              confirmed only after interaction, document verification and seat
              availability as per school norms.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800 text-xs md:text-sm text-slate-400 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-0">
          <div className="space-y-2">
            <p className="text-white font-bold text-lg">
              The Pathseekers International School
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-sky-400" />
              Ramgarh / Vijaypur · District Samba (JKUT) · India
            </p>
            <p className="text-xs">Nurturing tomorrow&apos;s citizens today</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4 text-[11px] md:text-xs">
            <div className="flex flex-wrap gap-4">
              <span>Office Hours: Mon–Sat, 9 AM–4 PM</span>
              <span className="text-sky-300">
                For admission queries, please use the enquiry form
              </span>
            </div>
            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="hover:text-sky-300 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-sky-300 transition-colors"
              >
                Terms
              </Link>
              <Link
                href="https://facebook.com"
                className="hover:text-sky-300 transition-colors"
              >
                Facebook
              </Link>
              <Link
                href="https://instagram.com"
                className="hover:text-sky-300 transition-colors"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-4 text-center text-[11px] text-slate-500">
          &copy; {currentYear} The Pathseekers International School. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}
