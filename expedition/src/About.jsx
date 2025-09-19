import './about.css';

function About() {
    return (<>
      <div id="about"></div>
        <section className="about">
      <div className="about-container">
        
        {/* Left side Text */}
        <div className="about-text">
          <h2>About the Game</h2>
          <p>
            "Expedition 33" is an immersive adventure game that takes players on a thrilling journey through uncharted territories. Set in a richly detailed world, players assume the role of an intrepid explorer tasked with uncovering ancient secrets and navigating treacherous landscapes. The game features a blend of action, puzzle-solving, and strategic decision-making, challenging players to adapt to dynamic environments and overcome formidable obstacles. With its captivating storyline, stunning visuals, and engaging gameplay mechanics, "Expedition 33" offers an unforgettable experience for gamers seeking excitement and discovery.
          </p>
        </div>

        {/* Right side Video */}
        <div className="about-video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-qgOZDRDynw?si=FfQAcrjvtt1ErzlC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </section>
    </>);
}

export default About;