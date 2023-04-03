import { tours } from '../Data';

const TourList = () => {
  return (
    <>
      {tours.map((tour) => {
        const { img, title, text, country, days, price, date, id } = tour;
        return (
          <article className='tour-card' key={id}>
            <div className='tour-img-container'>
              <img src={img} className='tour-img' alt='' />
              <p className='tour-date'>{date}</p>
            </div>
            <div className='tour-info'>
              <div className='tour-title'>
                <h4>{title}</h4>
              </div>
              <p className='tour-text'>{text}</p>
              <div className='tour-footer'>
                <p>
                  <span>
                    <i className='fas fa-map'></i>
                  </span>{' '}
                  {country}
                </p>
                <p>{days}</p>
                <p>{price}</p>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};
export default TourList;
