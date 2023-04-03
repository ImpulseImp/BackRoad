import { services } from '../Data';

const ServicesList = () => {
  return (
    <>
      {services.map((service) => {
        const { id, title, text, name } = service;
        return (
          <article className='service' key={id}>
            <span className='service-icon'>
              <i className={name}></i>
            </span>
            <div className='service-info'>
              <h4 className='service-title'>{title}</h4>
              <p className='service-text'>{text}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};
export default ServicesList;
