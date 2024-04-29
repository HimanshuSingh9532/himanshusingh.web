export default function HeroSection() {
  return (
    <>
    
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Himanshu Singh</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front-End </span>{" "}
            <br />
            <span className="dev-style">Developer</span>
          </h1>
          <p className="hero--section-description">
          My passion for coding and development is what drives me forward. 
          I am constantly seeking opportunities to expand my knowledge and hone my 
          skills in order to become a valuable asset to any company.
          </p>
        </div>
        <button className="btn btn-primary">Resume</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/Himanshuimage.png" alt="Hero Section" />
      </div>
    </section>
  

    </>
  );
}
