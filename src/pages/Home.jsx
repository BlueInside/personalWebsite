import Project from "../components/Project";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div className="">
      <section
        id="about"
        className="m-auto flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8"
      >
        <div
          style={{ zIndex: "1" }}
          className="mx-auto flex max-w-3xl flex-col items-center"
        >
          <img
            src="https://res.cloudinary.com/dhjzutfu9/image/upload/v1721645517/odin-book-profilePictures/ylpz2z5cjhywc2hl04lt.jpg"
            alt="karol pulawski"
            className="h-48 w-48 rounded-full border-4 border-gray-300 object-cover shadow-lg"
          />
          <h1 className="mb-4 text-4xl font-bold">
            JavaScript, React enthusiast
          </h1>
          <p className="mb-4 text-xl">
            Open to new technologies and development opportunities
          </p>
          <p>
            Visit my{" "}
            <a href="" className="text-blue-500">
              LinkedIn
            </a>{" "}
            profile for more information or just{" "}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer text-blue-500"
              href=""
            >
              contact{" "}
            </Link>
            me
          </p>
        </div>
      </section>

      <section id="work" className="min-h-screen bg-white p-8">
        {" "}
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6">
          <h2 className="mb-4 text-4xl font-bold">My projects</h2>
          <h3>
            Here are a few past design projects I&apos;ve worked on. Want to see
            more?{" "}
            <a className="text-blue-500" href="#">
              Click here
            </a>
          </h3>
          <Project
            image="public/images/social.jpg"
            title="Facebook Replica"
            description=" A dynamic clone of Facebook featuring core functionalities like posts, likes, and comments, built to demonstrate proficiency in handling complex web architectures."
            githubLink="https://github.com/yourusername/project1"
            websiteLink="https://project1.com"
            isImageLeft={false}
          />
          <Project
            image="public/images/chat.jpg"
            title="Chat Application"
            description="A straightforward chat application designed to refine backend development skills. This project focuses on creating a reliable messaging platform without the use of WebSocket technology, emphasizing robust server-side functionalities."
            githubLink="https://github.com/yourusername/project2"
            websiteLink="https://project2.com"
            isImageLeft={true}
          />
          <Project
            image="public/images/waldo.webp"
            title="Interactive 'Where's Waldo?' Game"
            description="A fun, interactive game that challenges users to find Waldo in crowded scene, developed to showcase skills in user interface design and attention to detail."
            githubLink="https://github.com/yourusername/project3"
            websiteLink="https://project3.com"
            isImageLeft={false}
          />
        </div>
      </section>

      <section
        id="contact"
        className="flex min-h-screen items-center justify-center bg-white p-8"
      >
        <div className="z-10 mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
          <h2 className="mb-4 text-4xl font-bold">Contact</h2>
          <p className="text-xl">Do you want to talk?</p>
          <p className="text-xl">
            Let&apos;s make something incredible together!
          </p>
          <a
            className="text-xl text-blue-500"
            href="mailto:karolpulawski@hotmail.com"
          >
            karolpulawski@hotmail.com
          </a>
        </div>
      </section>
    </div>
  );
}
