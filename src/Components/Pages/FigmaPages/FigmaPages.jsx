import React, { useState } from "react";
import {
  FaFigma,
  FaPalette,
  FaLayers,
  FaCode,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaCompressAlt,
  FaExpandAlt,
  FaTools,
  FaLightbulb,
  FaProjectDiagram,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Import modules
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../FigmaPages/FigmaPages.css"; // Link to your CSS file

const FigmaPages = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionName) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  const projectExamples = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/736x/2c/49/b4/2c49b48e7ad735006775016444008c6e.jpg",
      description:
        "A sleek corporate website design showcasing modern UI/UX principles. Pay attention to consistent spacing and typography.",
    },
    {
      id: 2,
      image: "https://s.tmimgcdn.com/scr/41800/41864_01main_original.jpg",
      description:
        "An intuitive mobile application interface focusing on user-friendly navigation and clear call-to-actions. Examine component states.",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/originals/fe/66/df/fe66df46d55eeeabe81cbfadd3d98234.jpg",
      description:
        "An e-commerce platform design with a focus on product presentation and streamlined checkout flow. Note the use of grids and responsive layouts.",
    },
    {
      id: 4,
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/7653fc85395389.5d7f34c61d0b3.jpg",
      description:
        "A complex dashboard UI designed for data visualization and management. Observe how interactive elements are organized.",
    },
  ];

  return (
    <div className="figma-page-container">
      <h1 className="figma-page-title">
        <FaFigma style={{ marginRight: "10px", color: "#F24E1E" }} /> Figma -
        Design & Prototyping
      </h1>

      {/* Introduction */}
      <section
        className={`figma-section ${openSection === "intro" ? "open" : ""}`}
      >
        <h2 onClick={() => toggleSection("intro")} className="section-header">
          <FaInfoCircle style={{ marginRight: "10px" }} /> What is Figma?
          <span className="toggle-icon">
            {openSection === "intro" ? "▼" : "►"}
          </span>
        </h2>
        <div className="section-content">
          <p>
            **Figma** is a web-based interface design and prototyping tool,
            primarily with vector editing capabilities. It allows designers and
            developers to collaborate in real-time to create interfaces,
            websites, and mobile applications.
          </p>
          <p>
            Figma's advantage is that it runs in the browser, which simplifies
            collaboration and doesn't require installing heavy software.
          </p>
          <ul>
            <li>
              **Real-time Collaboration:** Multiple users can work on the same
              file simultaneously.
            </li>
            <li>**Cloud Storage:** All files are stored in the cloud.</li>
            <li>
              **Prototyping:** Create interactive prototypes to demonstrate user
              flows.
            </li>
            <li>
              **Design Systems:** Allows the creation of reusable components.
            </li>
          </ul>
          <p>
            **Official Figma Website:**{" "}
            <a
              href="https://www.figma.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              figma.com <FaExternalLinkAlt />
            </a>
          </p>
        </div>
      </section>

      <section
        className={`figma-section ${
          openSection === "dev-features" ? "open" : ""
        }`}
      >
        <h2
          onClick={() => toggleSection("dev-features")}
          className="section-header"
        >
          <FaCode style={{ marginRight: "10px" }} /> Features for Developers
          <span className="toggle-icon">
            {openSection === "dev-features" ? "▼" : "►"}
          </span>
        </h2>
        <div className="section-content">
          <p>
            Developers can effectively use Figma to transform designs into code.
          </p>
          <h3>1. Inspect Panel</h3>
          <p>
            This is Figma's most important feature for developers. It allows you
            to get CSS, iOS, or Android code from selected design elements.
          </p>
          <div className="code-example">
            <p>CSS example from Inspect Panel:</p>
            <pre>
              <code>
                .button &#123;
                <br />
                &nbsp;&nbsp;width: 150px;
                <br />
                &nbsp;&nbsp;height: 40px;
                <br />
                &nbsp;&nbsp;background-color: #1a73e8;
                <br />
                &nbsp;&nbsp;color: white;
                <br />
                &nbsp;&nbsp;border-radius: 8px;
                <br />
                &nbsp;&nbsp;font-family: 'Roboto', sans-serif;
                <br />
                &nbsp;&nbsp;font-size: 16px;
                <br />
                &#125;
              </code>
            </pre>
          </div>
          <h4>How to use:</h4>
          <ul>
            <li>Select any element on the design (button, text, image).</li>
            <li>In the right-hand panel, navigate to the **"Inspect"** tab.</li>
            <li>
              Choose the desired code type (CSS, Swift, Android XML) and copy
              the code.
            </li>
          </ul>

          <h3>2. Exporting Assets</h3>
          <p>
            Developers can export images, icons, and other graphic elements in
            various formats (PNG, JPG, SVG, PDF) and sizes.
          </p>
          <h4>How to use:</h4>
          <ul>
            <li>Select the element to be exported.</li>
            <li>
              In the **"Export"** section at the bottom of the right-hand panel,
              click "<strong>+</strong>".
            </li>
            <li>
              Choose the format and size, then click "Export". SVG format is
              preferable for icons as it is scalable.
            </li>
          </ul>

          <h3>3. Components & Variants</h3>
          <p>
            Figma's components allow you to create reusable UI elements.
            Developers should understand their structure to create corresponding
            components in code.
          </p>
          <h4>How to leverage:</h4>
          <ul>
            <li>
              Pay attention to component names and their variants (e.g.,
              "Button/Primary/Hover"). This will help you create a similar
              structure in your code.
            </li>
          </ul>

          <h3>4. Auto Layout</h3>
          <p>
            Auto Layout allows designers to create dynamic structures that
            automatically adjust based on content. This is directly related to
            Flexbox or Grid in CSS.
          </p>
          <h4>How to leverage:</h4>
          <ul>
            <li>
              If you see a Frame using Auto Layout, it's likely that you should
              use CSS Flexbox or Grid to create a similar layout.
            </li>
            <li>
              Pay attention to `padding`, `spacing between items`, and
              `direction` (horizontal/vertical) properties.
            </li>
          </ul>
        </div>
      </section>

      <section className="figma-section">
        <h2 className="section-header">
          <FaProjectDiagram style={{ marginRight: "10px" }} /> Projects Designed
          with Figma
          <span className="toggle-icon"></span>{" "}
        </h2>
        <div
          className="section-content open"
          style={{ maxHeight: "max-content", padding: "15px 20px" }}
        >
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            className="mySwiper"
          >
            {projectExamples.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="project-slide">
                  <img
                    src={project.image}
                    alt={`Project Example ${project.id}`}
                    className="project-image"
                  />
                  <p className="project-description">{project.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section
        className={`figma-section ${openSection === "tips" ? "open" : ""}`}
      >
        <h2 onClick={() => toggleSection("tips")} className="section-header">
          <FaLightbulb style={{ marginRight: "10px" }} /> Tips for Developers
          <span className="toggle-icon">
            {openSection === "tips" ? "▼" : "►"}
          </span>
        </h2>
        <div className="section-content">
          <ul>
            <li>
              Always talk to the designer if there are unclear or impractical
              sections in the design.
            </li>
            <li>
              Understand the design system and its components to improve code
              reusability.
            </li>
            <li>
              Check different design sizes (responsive design) to ensure it
              looks good on all devices.
            </li>
            <li>
              Use Figma plugins (e.g., "Zeplin" or "Figma to Code") to
              facilitate code export.
            </li>
            <li>
              Learn the basic concepts of Figma to communicate effectively with
              designers.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default FigmaPages;
