import { links } from '../Data';
import { icons } from '../Data';
import Icons from './Icons';
const Footer = () => {
  return (
    <>
      <footer className='section footer'>
        <ul className='footer-links'>
          {links.map((link) => {
            const { href, id, text } = link;
            return (
              <li key={id * 20}>
                <a href={href} className='footer-link'>
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className='footer-icons'>
          <Icons className='footer-icon' />
        </ul>
        <p className='copyright'>
          copyright &copy; Backroads travel tours company
          <span id='date'>{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </>
  );
};
export default Footer;
