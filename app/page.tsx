import { Grid } from "@/components/Grid";
import { Hero } from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center overflow-hidden flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <span>🏠</span> },
            { name: "About", link: "/#about", icon: <span>ℹ️</span> },
            {
              name: "Testimonials",
              link: "/#Testimonials",
              icon: <span>📁</span>,
            },
            { name: "Contact", link: "/#contact", icon: <span>📧</span> },
          ]}
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
