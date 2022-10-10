// Import Assets
import SE from '../assets/SE.png';
import SERev from '../assets/SERev.png';
import UniRev from '../assets/UniRev.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3> Sims Exchange</h3>
                    <img src={SE} alt="Sims Exchange Homepage" />
                    <p>Currently, the only way to get your hands on the ever so precious SimsCoin is through the Sims Exchange! This exchange is found on the Goerli Test Network and allows you to both buy (and sell) SimsCoin.</p>
                    <p>Exchange rate: 1 ETH for 100 SimsCoin</p>
                    <a href="https://simsexchange.on.fleek.co" target="_blank" className="button">Site</a>
                    <a href="https://github.com/simsj2/sims-exchange" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3> Sims Exchange: Brief Write-Up</h3>
                    <img src={SERev} alt="Sims Exchange Homepage" />
                    <p className="spacer">Details what the exhange is, how it works at a high level, things I've learned, and what I would change in a prospective upgrade.</p>
                    <div className="center">
                        <a href="https://docs.google.com/document/d/1wGqkpTXB3nRSycHBta4iWBXDgH09PEuRxi2bTlCM5VI/edit?usp=sharing" target="_blank" className="button center">Read</a>
                    </div>
                </div>

                <div className="projects__card">
                    <h3> Uniswap Core Contracts Review</h3>
                    <img src={UniRev} alt="Uniswap Core Contracts Review" />
                    <p className="spacer2">In an effort to better understand one of the most used and gas efficient DApps on Ethereum, I've gone through each line of the Uniswap core contracts and added comments where necessary to show my understanding of the code.</p>
                    <div className="center">
                        <a href="https://github.com/simsj2/uniswapV3core-analysis" target="_blank" className="button center">Code</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
