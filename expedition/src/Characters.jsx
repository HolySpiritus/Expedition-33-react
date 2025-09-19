import './characters.css';
import gustave from './assets/Gustave.jpg'
import lune from './assets/Lune.jpg'
import maelle from './assets/Maelle.jpg'



function Characters() {
    return (
        <>
            <div className="background-c"> </div>
            <div id="characters">
                <h1 className="c-intro">Characters</h1>
                <div className="card-row">
                    <div className="card">
                        <img
                            src={gustave}
                            alt="Gustave stands confidently in a workshop setting, surrounded by mechanical tools and blueprints. The environment is filled with warm light and a sense of innovation. Gustave appears focused and determined."
                        />
                        <h3>Gustave</h3>
                        <p>A skilled engineer and the inventor of the Lumina Converter.</p>
                    </div>
                    <div className="card">
                        <img
                            src={lune}
                            alt="Lune gazes thoughtfully while holding a glowing staff, set against a mystical forest backdrop. The atmosphere is serene and magical, with soft light filtering through trees. Lune's expression is calm and compassionate."
                        />
                        <h3>Lune</h3>
                        <p>Archetypal spellcaster who can heal and cause great damage.</p>
                    </div>
                    <div className="card">
                        <img
                            src={maelle}
                            alt="Maelle smiles energetically in an outdoor expedition camp, with tents and maps visible in the background. The scene is lively and adventurous, and Maelle's youthful enthusiasm is evident."
                        />
                        <h3>Maelle</h3>
                        <p>Youngest Expeditioner (16) who has great skill of difrence</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Characters;