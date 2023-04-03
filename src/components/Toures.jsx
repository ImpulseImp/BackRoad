import Title from './Title';
import TourList from './TourList';
const Toures = () => {
  return (
    <>
      <section className='section' id='tours'>
        <div className='section-title'>
          <Title title={'featured'} subTitle={'tours'} />
        </div>

        <div className='section-center featured-center'>
          <TourList />
        </div>
      </section>
    </>
  );
};
export default Toures;
