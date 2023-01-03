/* eslint-disable max-len */
import styles from './AboutPage.module.css';
import ScrollButton from '../../components/ScrollButton/ScrollButton';

export default function AboutPage() {
  return (
    <>
      <div className={styles.main}>
        <div className={`${styles.header} ${styles.gradient}`}>
          <div className={styles.inner_content}>
            <div className={styles.content}>
              <h2>Hi there,</h2>
              <img src="https://www.themoviedb.org/assets/2/v4/marketing/deadpool-06f2a06d7a418ec887300397b6861383bf1e3b72f604ddd5f75bce170e81dce9.png" width="451" height="149" alt="pictureT" />

              <h3>Let&lsquo;s talk about TMDB</h3>
              <p>
                The Movie Database (TMDB) is a
                <em>community built</em>
                {' '}
                movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. TMDB&lsquo;s strong
                <em>international focus</em>
                {' '}
                and breadth of data is largely unmatched and something we&lsquo;re incredibly proud of. Put simply, we live and breathe community and that&lsquo;s precisely what makes us different.
              </p>

              <h4>The TMDB advantage</h4>
              <div className={styles.wrapper}>
                <div>
                  <div>1</div>
                  <p>Every year since 2008, the number of contributions to our database has increased. With over 750,000 developers and companies using our platform, TMDB has become a premiere source for metadata.</p>
                </div>

                <div>
                  <div>2</div>
                  <p>Along with extensive metadata for movies, TV shows and people, we also offer one of the best selections of high resolution posters and fanart. On average, over 1,000 images are added every single day.</p>
                </div>

                <div>
                  <div>3</div>
                  <p>We&lsquo;re international. While we officially support 39 languages we also have extensive regional data. Every single day TMDB is used in over 180 countries.</p>
                </div>

                <div>
                  <div>4</div>
                  <p>Our community is second to none. Between our staff and community moderators, we&lsquo;re always here to help. We&lsquo;re passionate about making sure your experience on TMDB is nothing short of amazing.</p>
                </div>

                <div>
                  <div>5</div>
                  <p>Trusted platform. Every single day our service is used by millions of people while we process over 3 billion requests. We&lsquo;ve proven for years that this is a service that can be trusted and relied on.</p>
                </div>
              </div>

              <a href="https://www.themoviedb.org/" target="_blank" className={`${styles.contact} ${styles.button} ${styles.white}`} rel="noreferrer">Contact TMDB</a>
            </div>
          </div>
        </div>
      </div>
      <ScrollButton />
    </>
  );
}
