import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Aurora from "./components/Aurora/Aurora";
import AOS from 'aos';
import ChatRoom from "./components/ChatRoom";
import 'aos/dist/aos.css';
AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  useEffect(() => {
    const isReload = performance.getEntriesByType("navigation")[0]?.type === "reload";
    if (isReload) {
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
      },
      { threshold: 0.2 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Aurora
          colorStops={["#1a3a4a", "#0F6E56", "#185FA5"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HERO */}
        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
              <span className="text-xl">⚡</span>
              <q>Build things that matter.</q>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText text="Hi, I'm Luis Gabriel Romero" disabled={false} speed={3} className='custom-class' />
            </h1>
            <BlurText
              text="Full Stack Developer & Co-founder of Exa. I build modern, scalable web applications with React, Spring Boot and Node.js — turning ideas into impactful digital products."
              delay={150}
              animateBy="words"
              direction="top"
              className="mb-6"
            />
            <div className="flex items-center sm:gap-4 gap-2">
              <a
                href="./assets/CV.pdf"
                download="Luis_Gabriel_Romero_CV.pdf"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
              </a>
              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>
          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Luis Gabriel R."
              title="Full Stack Developer"
              handle="Chakerr"
              status="Open to work"
              contactText="Contact Me"
              avatarUrl="./assets/hero-img.webp"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        </div>

        {/* ABOUT */}
        <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">About Me</h2>
                <BlurText
                  text="I'm Luis Gabriel Romero Castro, a Full Stack Developer and Systems Engineering student at Universidad Piloto de Colombia (9th semester). Co-founder of Exa, a software startup where I design and build scalable applications using React, Spring Boot and PostgreSQL. Passionate about innovation, agile methodologies and creating technology that generates real impact."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />
                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">2<span className="text-violet-500">+</span></h1>
                    <p>Years of Experience</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">2<span className="text-violet-500"></span></h1>
                    <p>Professional Roles</p>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                    <h1 className="text-3xl md:text-4xl mb-1">9<span className="text-violet-500">°</span></h1>
                    <p>Semester · U. Piloto</p>
                  </div>
                </div>
                <ShinyText
                  text="Code with purpose, build with passion."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-violet-400"
                />
              </div>
            </div>
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>

        {/* TOOLS */}
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools & Technologies</h1>
          <p className="w-2/5 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">My Technical Stack</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText text={tool.nama} disabled={false} speed={3} className="text-lg font-semibold block" />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="mt-32" id="experience">
          <h1 className="text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Experience</h1>
          <p className="text-base/loose opacity-50 mb-14" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">My professional journey so far.</p>
          <div className="flex flex-col gap-6">
            <div className="border border-zinc-700 rounded-2xl p-6 bg-zinc-900/60 backdrop-blur-md" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <div>
                  <ShinyText text="Co-founder & Full Stack Developer" disabled={false} speed={3} className="text-xl font-bold" />
                  <p className="text-violet-400 font-medium mt-1">Exa — Software Startup</p>
                </div>
                <span className="text-sm text-zinc-400 bg-zinc-800 px-3 py-1 rounded-full w-fit">Jan 2025 — Present</span>
              </div>
              <ul className="list-none space-y-2 text-zinc-300 text-sm mt-4">
                <li className="flex gap-2"><span className="text-violet-500 mt-1">▹</span>Full Stack development with React, Spring Boot & PostgreSQL</li>
                <li className="flex gap-2"><span className="text-violet-500 mt-1">▹</span>JWT authentication & secure authorization management</li>
                <li className="flex gap-2"><span className="text-violet-500 mt-1">▹</span>Payment gateway integration & real-time transactional flows</li>
                <li className="flex gap-2"><span className="text-violet-500 mt-1">▹</span>Cloud deployment on Render & Vercel</li>
              </ul>
            </div>
            <div className="border border-zinc-700 rounded-2xl p-6 bg-zinc-900/60 backdrop-blur-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <div>
                  <ShinyText text="Systems Engineer & Data Analyst" disabled={false} speed={3} className="text-xl font-bold" />
                  <p className="text-violet-400 font-medium mt-1">Jardín Infantil Construyendo con Gepetto</p>
                </div>
                <span className="text-sm text-zinc-400 bg-zinc-800 px-3 py-1 rounded-full w-fit">Jan 2023 — Nov 2025</span>
              </div>
              <ul className="list-none space-y-2 text-zinc-300 text-sm mt-4">
                <li className="flex gap-2"><span className="text-violet-500 mt-1">▹</span>Design & implementation of institutional educational platform</li>
                <li className="flex gap-2"><span className="text-violet-500 mt-1">▹</span>Database modeling for academic and administrative data</li>
                <li className="flex gap-2"><span className="text-violet-500 mt-1">▹</span>Automation of reports and internal workflow digitalization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="proyek mt-32 py-10" id="project" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"></div>
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Projects</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">A selection of projects that reflect my skills and passion for building meaningful digital experiences.</p>
        <div className="proyek-box mt-14">
          <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick}
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>

        {/* CONTACT */}
        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Contact & Chat</h1>
          <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Get in touch or send me a message directly</p>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-zinc-800 p-6 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
              <ChatRoom />
            </div>
            <div className="flex-1">
              <form
                action="https://formsubmit.co/luisgas012@gmail.com"
                method="POST"
                className="bg-zinc-800 p-10 w-full rounded-md"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Full Name</label>
                    <input type="text" name="Name" placeholder="Your name..." className="border border-zinc-500 p-2 rounded-md" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input type="email" name="Email" placeholder="Your email..." className="border border-zinc-500 p-2 rounded-md" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold">Message</label>
                    <textarea name="message" id="message" cols="45" rows="7" placeholder="Your message..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors">
                      <ShinyText text="Send Message" disabled={false} speed={3} className="custom-class" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  )
}

export default App
