import Title from './Title';
import ServicesList from './ServicesList';
const Services = () => {
  return (
    <>
      {' '}
      <section className='section services' id='services'>
        <div className='section-title'>
          <Title title={'our'} subTitle={'services'} />
        </div>
        <div className='section-center services-center'>
          <ServicesList />
        </div>
      </section>
    </>
  );
};
export default Services;
