import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>
            MyFlix Application built with Angular, using my API hosted on Heroku
          </h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/ColetteJParker91/myFlix-Angular-client"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://colettejparker91.github.io/myFlix-Angular-app/welcome"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>
            Pokemon-app built with Javascript displays pokemons fetched from
            pokeApi.
          </h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/ColetteJParker91/Pokedex"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://colettejparker91.github.io/Pokedex/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Mobile Chat Native Application built with React Native</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/ColetteJParker91/Chat-app"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://youtube.com/shorts/zjKhR2W4Elc?feature=share"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
