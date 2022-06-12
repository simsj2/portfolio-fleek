// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="John Doe" />

            <div className='header__content'>
                <h1>Jared Sims</h1>
                <p>Aspiring Blockchain Developer</p>
                <a href="mailto:sims.j2siu@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;