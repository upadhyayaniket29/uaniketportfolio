import { ArrowRight, ExternalLink, Github } from "lucide-react";
import RhymoImg from "../assets/Rhymo.png";
import VaultXImg from "../assets/VaultX.png";
import ConnectEdImg from "../assets/connectEd.png";


const projects = [
  {
    id: 1,
    title: "Rhymo- A Song Lyrics Search App ",
    description: " Rhymo is a music lyrics search app built with React and Tailwind CSS, allowing users to search for Taylor Swift songs and view lyrics via the Lyrics.ovh API.",
    image: RhymoImg,
    tags: ["React", "API Integration", "Tailwind CSS"],
    demoUrl: "https://rhymomusic.netlify.app/",
    githubUrl: "https://github.com/upadhyayaniket29/Rhymo",
  },
  {
    id: 2,
    title: "VaultX-A Crypto Listing Platform",
    description:
      "VaultX is a powerful crypto listing platform that brings you real-time cryptocurrency data, live market prices, and breaking crypto news , all in one place. ",
    image:VaultXImg,
    tags: ["React", "TailwindCSS", "API"],
    demoUrl: "https://vaultxcrypto.netlify.app/",
    githubUrl: "https://github.com/upadhyayaniket29/VaultX",
  },
  {
    id: 3,
    title: "ConnectEd - An Interactive Edtech Platform",
    description:
      "ConnectEd is a modern edtech platform that helps students and professionals discover, explore, and enroll in top-quality courses from trusted educational providers , all in one place.",
    image: ConnectEdImg,
    tags: ["React", "Vite", "TailwindCSS"],
    demoUrl: "https://xconnected.netlify.app/",
    githubUrl: "https://github.com/upadhyayaniket29/ConnectEd",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/upadhyayaniket29"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};