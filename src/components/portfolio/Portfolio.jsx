import "./portfolio.css";
import codeXchange from "../../assets/codeXchange.jpg";
import portfolio1 from "../../assets/portfolio1.jpg";
import portfolio2 from "../../assets/portfolio2.jpg";
import portfolio3 from "../../assets/portfolio3.jpg";

const data = [
  {
    id: 1,
    title: "Project comming soon",
    image: portfolio1,
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  // {
  //   id: 1,
  //   title: "CodeXchange",
  //   image: codeXchange,
  //   github: "https://github.com/",
  //   demo: "https://code-xchange.vercel.app/",
  // },
  {
    id: 2,
    title: "Future Project 1",
    image: portfolio2,
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    id: 3,
    title: "Future Project 2",
    image: portfolio3,
    github: "https://github.com/",
    demo: "https://github.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, title, image, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="portfolio img" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {/* <a href={github} className="btn" target="_blanck">
                Github
              </a> */}
                <a href={demo} className="btn btn-primary" target="_blanck">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
