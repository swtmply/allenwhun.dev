import { GlobeIcon, MailIcon, PhoneIcon } from "~/components/icons";
import { Badge } from "~/components/ui/badge";
import { RESUME_DATA } from "~/data/resume-data";

export default function Home() {
  return (
    <main className="container mx-auto my-12">
      <section className="mx-auto w-full max-w-2xl space-y-8">
        <section className="space-y-2">
          <h1 className="scroll-m-20 font-sans text-2xl font-bold tracking-tight">
            {RESUME_DATA.name}
          </h1>
          <p className="max-w-sm text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.about}
          </p>

          <div className="space-y-2 font-mono text-sm text-muted-foreground [&>*]:flex [&>*]:items-center [&>*]:gap-2">
            <p>
              <GlobeIcon /> {RESUME_DATA.contact.location}
            </p>
            <p>
              <MailIcon />
              <a href={`mailto:${RESUME_DATA.contact.email}`} target="_blank">
                {RESUME_DATA.contact.email}
              </a>
            </p>
            <p>
              <PhoneIcon /> {RESUME_DATA.contact.phone}
            </p>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="scroll-m-20 text-xl font-bold tracking-tight">
            About
          </h2>
          <p className="text-pretty font-mono text-sm leading-6 text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="scroll-m-20 text-xl font-bold tracking-tight">
            Education
          </h2>
          <div>
            {RESUME_DATA.education.map((education) => (
              <div key={`${education.school}-${education.year}`}>
                <div className="flex items-center justify-between font-medium">
                  <h3 className="text-lg">{education.school}</h3>
                  <p className="text-sm">{education.year}</p>
                </div>
                <p className="font-mono text-sm text-muted-foreground">
                  {education.degree}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="scroll-m-20 text-xl font-bold tracking-tight">
            Work Experience
          </h2>
          <div className="flex flex-col-reverse gap-y-2">
            {RESUME_DATA.work.map((work) => (
              <div key={`${work.company}-${work.start}`} className="space-y-2">
                <div className="flex items-center justify-between font-medium">
                  <h3 className="text-lg">{work.company}</h3>
                  <p className="text-sm">
                    {work.start} - {work.end}
                  </p>
                </div>
                <p className="font-mono text-sm">{work.title}</p>
                <p className="whitespace-pre-wrap text-pretty font-mono text-sm text-muted-foreground">
                  {work.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="scroll-m-20 text-xl font-bold tracking-tight">
            Skills
          </h2>
          <div className="space-y-2">
            {RESUME_DATA.skills.map((skill) => (
              <div key={skill.title} className="flex flex-col gap-1">
                <h4 className="font-medium">{skill.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="scroll-m-20 text-xl font-bold tracking-tight">
            Projects
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {RESUME_DATA.projects.map((project) => (
              <div
                key={project.title}
                className="flex flex-col space-y-2 rounded-md border p-3"
              >
                <h4 className="font-semibold">{project.title}</h4>
                <p className="text-pretty font-mono text-xs text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
