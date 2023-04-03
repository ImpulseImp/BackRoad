import { icons } from '../Data';

const Icons = ({ className }) => {
  return (
    <>
      {icons.map((icon) => {
        const { href, id, name } = icon;
        return (
          <li key={id}>
            <a href={href} target='_blank' className={className}>
              <i className={name}></i>
            </a>
          </li>
        );
      })}
    </>
  );
};
export default Icons;
