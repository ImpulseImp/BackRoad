import { links } from '../Data';

const PageLinks = () => {
  return (
    <>
      {links.map((item) => {
        const { id, href, text } = item;
        return (
          <li key={id}>
            <a href={href} className='nav-link'>
              {' '}
              {text}{' '}
            </a>
          </li>
        );
      })}
    </>
  );
};
export default PageLinks;
