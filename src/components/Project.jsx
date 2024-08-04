import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import PropTypes from "prop-types";
export default function Project({
  image,
  title,
  description,
  githubLink,
  websiteLink,
  isImageLeft,
}) {
  return (
    <div
      className={`flex ${isImageLeft ? "flex-row-reverse" : "flex-row"} mb-8 w-full items-center gap-7`}
    >
      <img
        src={image}
        alt={title}
        className="h-auto w-1/2 rounded-lg shadow-lg"
      />
      <div className="w-1/2 p-4">
        <h3 className="mb-2 text-2xl font-bold">{title}</h3>
        <p className="mb-4">{description}</p>
        <div className="flex space-x-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600"
          >
            <FaExternalLinkAlt size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  githubLink: PropTypes.string,
  websiteLink: PropTypes.string,
  isImageLeft: PropTypes.bool,
};
