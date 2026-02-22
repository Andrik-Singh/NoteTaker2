import { auth } from "@/lib/auth";
import {
  Edit2Icon,
  EditIcon,
  Flower,
  FolderOpen,
  Heart,
  MousePointer2,
  TextIcon,
  Feather,
  Leaf,
  Moon,
  Users,
} from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
const testimonials = [
  {
    quote:
      "I used to feel 'hunted' by my to-do lists. FlowNotes gives me permission to think, breathe, and write without the anxiety.",
    name: "Maya",
    role: "Writer",
    color: "bg-accent-peach",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuATqoPjPqou3Wj4hpcyrdtUKvzJddjTQ8co23Z29Nqe-yGwPdbyUx7gtp7KOkI9AnotdUwf4ZwXgrUe64-YO3KDmu0X-mxfwgSDdYvoG6HvzyCH4ciLy4E3cym7brvNOFwyZEZzC-Hib1yAZBlDKFilLoFtpvQm31PhX1KQtpgvYvAR-2ZH-cj56QQlVWqlWs5d3CTApTjbYeLGe3M-vU_jIssOZPvj_QO1xSgVT7eCP51BfWQy5kS4clVqVlWzf743SIrwmNkNryNc",
  },
  {
    quote:
      "It's our digital 'third space'—somewhere between work and home where we can just be present with our ideas together.",
    name: "Liam",
    role: "Student",
    color: "bg-accent-sage",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1SDgicGHy6m9nSXBZFbQFzhzWyTGYsByBDnkVWd1b3uEyxdqhbigINpCoR9jw5i4nxg2bJy6W7DCx326ourEyBRY6f52_W-3yU126vmgzcZfgGCSjHNR58m_BsNpp-R1WmgxYiw7o5f_33EtzrZhbaxNXvDno0QUaLUWOOyWRe6y0uRDgHM8CRZPIfM_6rQVEsewqDERU9i5N-bkOWykoGmTfcCL1NfYNEzwZ66MnSDwxsEUnVANzscsc3sATe97pmx_EQWnBFaJF",
  },
  {
    quote:
      "Most apps are built for speed. This one is built for depth. It reminds me why I started designing in the first place.",
    name: "Elena",
    role: "Designer",
    color: "bg-blue-100",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsxxp2Da-lIQkFDlgLyuT7uVcguCe-cWaxRdSJyfxZvUPg3JQpKFrWzkEuiG6sfCHg_cM0XKDDtkNy2-6h5h7xAKGh27P755LGEIzGXpQImU15NBTqfp0mxVSAiXyTOckNnbbgEUTaSJxv4C4BiEtgjCnhIAokDAbkfiX82flplum-L63yIOYgVJBmwFbnkvOEoahtWXuxD617vlwdz8BxJsolg6KcJDZZZbV5Rz5ldMKOyId12IPfIEaRzC1aV1oO58UbuejLEEhZ",
  },
];
export default async function Home() {
  const authData = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-[#f3f2f1]">
        <div className="layout-container flex justify-center w-full px-4 md:px-10 py-4">
          <div className="flex items-center justify-between w-full max-w-7xl">
            <div className="flex items-center gap-3 text-primary cursor-pointer">
              <h2 className="text-xl font-bold tracking-tight">FlowNotes</h2>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link
                className="text-primary/80 hover:text-primary text-sm font-medium transition-colors"
                href="#features"
              >
                Features
              </Link>
              <Link
                className="text-primary/80 hover:text-primary text-sm font-medium transition-colors"
                href="#manifesto"
              >
                Manifesto
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link
                className="hidden sm:block text-primary/80 hover:text-primary text-sm font-medium"
                href={authData ? "/home" : "/sign-in"}
              >
                <button className="flex items-center justify-center rounded-full h-10 px-6 bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-lg shadow-primary/10 transition-all transform hover:-translate-y-0.5">
                  {authData ? "Open App" : "Sign in"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-20">
        <section className="relative flex flex-col items-center justify-center min-h-[85vh] w-full bg-cozy-gradient px-4 py-16 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent-peach/20 rounded-full blur-3xl opacity-60 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-sage/20 rounded-full blur-3xl opacity-60"></div>

          <div className="relative z-10 flex flex-col items-center max-w-4xl text-center space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/60 border border-white/50 backdrop-blur-sm text-xs font-medium text-primary/70 mb-2">
              Quiet collaboration is here
            </div>

            <h1 className="text-primary text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              A softer space
              <br />
              <span className="italic font-light">for your thoughts.</span>
            </h1>

            <p className="text-primary/70 text-lg md:text-xl font-normal max-w-2xl leading-relaxed">
              Escape the noise of traditional productivity. FlowNotes is a
              digital sanctuary where ideas grow at their own pace—whether
              you're journaling solo or thinking deeply with friends.
            </p>

            <Link href={"/home"}>
              <button className="group flex items-center justify-center gap-3 rounded-full h-14 px-8 bg-primary hover:bg-primary-hover text-white text-base font-bold shadow-xl shadow-primary/20 transition-all transform hover:scale-105">
                <Flower
                  className="group-hover:rotate-12 transition-transform"
                  size={20}
                />
                <span>Step inside</span>
              </button>
            </Link>
          </div>
          <div className="mt-16 relative w-full max-w-5xl px-4">
            <div className="relative bg-white rounded-t-2xl shadow-2xl border border-white/60 p-2 md:p-4 pb-0 overflow-hidden opacity-90 hover:opacity-100 transition-all duration-700 ease-out">
              <div className="bg-background-warm rounded-t-xl w-full aspect-[16/9] flex flex-col relative overflow-hidden p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8 opacity-50">
                  <div className="w-3 h-3 rounded-full bg-red-300"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
                  <div className="w-3 h-3 rounded-full bg-green-300"></div>
                </div>
                <div className="flex flex-col gap-4 max-w-2xl mx-auto w-full">
                  <div className="h-8 w-3/4 bg-primary/5 rounded mb-4"></div>
                  <div className="h-4 w-full bg-primary/5 rounded"></div>
                  <div className="h-4 w-5/6 bg-primary/5 rounded relative">
                    <div className="absolute -right-2 -top-3 flex flex-col items-center z-20">
                      <div className="px-2 py-1 bg-accent-peach rounded-md text-[10px] font-bold text-primary shadow-sm mb-1">
                        Maya
                      </div>
                      <MousePointer2 size={16} className="text-accent-peach" />
                    </div>
                  </div>
                  <div className="h-4 w-4/6 bg-primary/5 rounded"></div>
                  <div className="h-4 w-full bg-primary/5 rounded relative mt-2">
                    <div className="absolute left-1/3 -top-3 flex flex-col items-center z-20">
                      <div className="px-2 py-1 bg-accent-sage rounded-md text-[10px] font-bold text-primary shadow-sm mb-1">
                        Liam
                      </div>
                      <MousePointer2 size={16} className="text-accent-sage" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-24 px-4 bg-white" id="features">
          <div className="layout-container flex flex-col gap-16 max-w-7xl mx-auto">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-primary text-3xl md:text-4xl font-bold tracking-tight">
                Together, softly
              </h2>
              <p className="text-primary/60 text-lg">
                Experience a new kind of quiet collaboration where presence is
                felt, not forced. No pings, just flow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group flex flex-col gap-6 p-8 rounded-2xl bg-background-warm border border-[#efeae6] hover:border-accent-peach/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Heart size={20} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-primary">
                    Presence without Pressure
                  </h3>
                  <p className="text-primary/70 leading-relaxed">
                    See your friends' cursors drift across the page like shadows
                    in a garden. Know they are there without the demand for
                    immediate reply.
                  </p>
                </div>
                <div className="mt-auto pt-4 flex justify-center opacity-60">
                  <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-primary/5">
                    <Heart size={12} fill="red" className="text-red-300" />
                    <span className="text-xs font-medium text-primary/60">
                      Lovely thought
                    </span>
                  </div>
                </div>
              </div>

              <div className="group flex flex-col gap-6 p-8 rounded-2xl bg-background-warm border border-[#efeae6] hover:border-accent-sage/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Edit2Icon size={20} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-primary">
                    Mindful Reactions
                  </h3>
                  <p className="text-primary/70 leading-relaxed">
                    Replace loud 'likes' with gentle nods. Leave thoughts that
                    whisper in the margins, encouraging reflection rather than
                    reaction.
                  </p>
                </div>
                <div className="mt-auto pt-4 relative h-16 w-full bg-white rounded-lg border border-primary/5 overflow-hidden">
                  <div className="absolute top-3 left-3 right-3 h-2 bg-primary/5 rounded-full"></div>
                  <div className="absolute top-7 left-3 w-1/2 h-2 bg-primary/5 rounded-full"></div>
                </div>
              </div>

              <div className="group flex flex-col gap-6 p-8 rounded-2xl bg-background-warm border border-[#efeae6] hover:border-[#e0d6c9] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <EditIcon size={20} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-primary">
                    The Tactile Editor
                  </h3>
                  <p className="text-primary/70 leading-relaxed">
                    Experience an interface that feels like high-quality
                    stationery. Every keystroke is cushioned by thoughtful
                    design and warm aesthetics.
                  </p>
                </div>
                <div className="mt-auto pt-4 flex justify-center">
                  <div className="relative h-12 w-24">
                    <TextIcon
                      size={36}
                      className="absolute bottom-0 left-4 text-primary/20 rotate-12"
                    />
                    <FolderOpen
                      size={36}
                      className="absolute bottom-0 left-0 text-primary/40 -rotate-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group flex flex-col gap-6 p-8 rounded-2xl bg-background-warm border border-[#efeae6] hover:border-accent-peach/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Moon size={20} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-primary">Focus Mode</h3>
                  <p className="text-primary/70 leading-relaxed">
                    Slip into a distraction-free writing environment with a
                    single keystroke. The interface fades away, leaving only you
                    and your words under soft ambient light.
                  </p>
                </div>
              </div>

              <div className="group flex flex-col gap-6 p-8 rounded-2xl bg-background-warm border border-[#efeae6] hover:border-accent-sage/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Feather size={20} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-primary">
                    Slow Notifications
                  </h3>
                  <p className="text-primary/70 leading-relaxed">
                    Nothing interrupts you mid-thought. Collaborator activity is
                    collected into a gentle daily digest—a letter, not a ping.
                    Read it when you're ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 px-4 bg-[#fcf9f6]">
          <div className="layout-container max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="flex-1 space-y-6">
              <div className="inline-block p-3 bg-white rounded-full shadow-sm mb-2">
                <Leaf size={20} className="text-primary" />
              </div>
              <h2 className="text-primary text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                The comfort of a<br />
                shared desk, anywhere.
              </h2>
              <p className="text-primary/70 text-lg leading-relaxed max-w-md">
                FlowNotes isn't about clearing a queue; it's about the rhythm of
                the work itself. Find joy in the process of creation, unburdened
                by the pressure to produce.
              </p>
              <div className="pt-4">
                <a href="#manifesto">
                  <button className="text-primary font-bold border-b-2 border-primary/20 hover:border-primary pb-1 transition-colors">
                    Read our philosophy →
                  </button>
                </a>
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <div className="relative aspect-square md:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl bg-[#e8dccf]">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-80"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNn44qfyE3M0rFXsy9uLd4G56zEprxVdLaVWXaBlDOTxmnGPWyT_YCaTgfTha7cXcMNewLKlQm0K1zXrPAsDa91CiEO0Ht248ImvjGvJ0WAyPnzH2hLMAD6P62Ydtcsqu264b3_Vc-rehKy-hAST6q_7EOmHx7AGwSQVUztN9c34sSC-o4slntk3Ft6LOzb519htmH_eaCKfiN56YON51FqVqZ3CnOd6iWYyh271OeQetRSkaT6hjgpcGOPPAIkPYbctG14163_9zE')`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white rounded-xl shadow-lg border-4 border-gray-800 p-4 rotate-3 flex flex-col">
                  <div className="w-full h-full border border-gray-100 rounded flex flex-col p-4 bg-background-warm">
                    <div className="w-1/3 h-4 bg-primary/10 rounded mb-6"></div>
                    <div className="space-y-3">
                      <div className="w-full h-2 bg-primary/5 rounded"></div>
                      <div className="w-5/6 h-2 bg-primary/5 rounded"></div>
                      <div className="w-4/5 h-2 bg-primary/5 rounded"></div>
                      <div className="w-full h-2 bg-primary/5 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MANIFESTO ── */}
        <section className="py-32 px-4 bg-background-warm" id="manifesto">
          <div className="max-w-3xl mx-auto space-y-16">
            <div className="space-y-4 text-center">
              <p className="text-black text-xs uppercase tracking-[0.3em] font-medium">
                Our Manifesto
              </p>
              <h2 className="text-black text-4xl md:text-5xl font-bold leading-tight">
                We believe productivity culture
                <br />
                <span className="italic font-light text-black/70">
                  has made us strangers to ourselves.
                </span>
              </h2>
            </div>

            <div className="space-y-10 text-black/80 text-lg leading-relaxed">
              <p>
                Somewhere along the way, our tools started optimising us.
                Dashboards told us we weren't writing fast enough. Notifications
                interrupted our best ideas. "Done" became the only metric that
                mattered, and the journey—the thinking, the wondering, the
                wandering—became an inconvenience.
              </p>
              <p>
                We built FlowNotes because we missed the feeling of a long
                afternoon with a notebook. The kind where you don't know what
                you'll write when you sit down, but you trust the act of
                sitting. Where a margin doodle is as valid as a finished
                paragraph. Where a friend's handwriting in the corner of your
                page feels like company, not interruption.
              </p>

              <div className="border-l-2 border-white/20 pl-8 space-y-6">
                {[
                  {
                    icon: <Leaf size={16} />,
                    text: "Slow is not a failure mode. Depth takes time.",
                  },
                  {
                    icon: <Moon size={16} />,
                    text: "Distraction-free is not a feature—it's a right.",
                  },
                  {
                    icon: <Users size={16} />,
                    text: "Collaboration should feel like sharing a cup of tea, not a status update.",
                  },
                  {
                    icon: <Feather size={16} />,
                    text: "Your thoughts deserve a beautiful home, not a database.",
                  },
                  {
                    icon: <Heart size={16} />,
                    text: "The process is the product.",
                  },
                ].map(({ icon, text }, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="mt-1 text-black/40 flex-shrink-0">
                      {icon}
                    </span>
                    <p className="text-black/80 font-medium">{text}</p>
                  </div>
                ))}
              </div>

              <p>
                FlowNotes is our answer: a tool that trusts you. One that steps
                back so you can step forward. We will never add a streaks
                counter. We will never send a "you haven't written in 3 days"
                email. We will never gamify the sacred act of thinking.
              </p>
              <p className="text-black font-semibold text-xl">
                We make space. You fill it—or you don't. Either way, we'll be
                here.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
                <Flower size={18} className="text-black/70" />
              </div>
              <div>
                <p className="text-black font-bold text-sm">
                  The FlowNotes Team
                </p>
                <p className="text-black/40 text-xs">
                  Written on a slow Tuesday morning
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 px-4 bg-gradient-to-b from-[#fcf9f6] to-[#fff2e8]">
          <div className="layout-container max-w-7xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-primary text-3xl font-bold">
                Loved by quiet thinkers
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map(({ quote, name, role, color, src }, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-[#efeae6] flex flex-col gap-6 transform hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="flex gap-1 text-[#eebb4d]">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-primary text-lg font-medium leading-relaxed">
                    "{quote}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto pt-2 border-t border-primary/5">
                    <div
                      className={`w-10 h-10 rounded-full ${color} overflow-hidden`}
                    >
                      <img
                        alt={`Avatar of ${name}`}
                        className="w-full h-full object-cover"
                        src={src}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">{name}</p>
                      <p className="text-xs text-primary/60">{role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-24 px-4 bg-white relative overflow-hidden">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-accent-peach/30 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-accent-sage/30 rounded-full blur-3xl opacity-60"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
            <h2 className="text-primary text-4xl md:text-5xl font-bold tracking-tight">
              Take a deep breath.
              <br />
              Your sanctuary is ready.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
              href={"/home"}
              >
                <button className="flex items-center justify-center h-12 px-8 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-base shadow-lg transition-all w-full sm:w-auto">
                  Begin for free
                </button>
              </Link>
            </div>
            <p className="text-primary/50 text-sm">
              No credit cards, no timers, no pressure. Just peace.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-[#f3f2f1] py-12 px-4">
        <div className="layout-container flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-primary opacity-80">
            <span className="font-bold text-lg">FlowNotes</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-primary/60">
            <a className="hover:text-primary transition-colors" href="#">
              Privacy
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Terms
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Twitter
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Instagram
            </a>
          </div>
          <div className="text-sm text-primary/40">
            Made with care for quiet moments.
          </div>
        </div>
      </footer>
    </div>
  );
}
