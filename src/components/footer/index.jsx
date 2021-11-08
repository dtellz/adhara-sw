import './style.css';
import swlog from '../../assets/footer.png'



const Footer = () => {
    return (
        <footer position="static" className='footer__display'>
            <img src={swlog} alt='May the force be with you' className='sw__logo'></img>
        </footer>

    )
}

export default Footer;