import { RESUME_DATA } from "~/data/resume-data";

export default function Home() {
  return (
    <main className="container mx-auto">
      <section>
        <h1 className="scroll-m-20 text-2xl font-bold tracking-tight">
          {RESUME_DATA.name}
        </h1>
      </section>
    </main>
  );
}
