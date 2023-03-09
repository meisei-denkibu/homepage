
import { Carousel } from '../../Commons/Molecules/Carousel/carousel';
import { Header } from '../../Commons/Organisms/Header';
import { Introduction } from '../../Commons/Organisms/Introduction';
import { Footer } from '../../Commons/Organisms/Footer';
import { topCarouselNode } from './TopCarouselNode';

const styles = {
  carousel: {
    background: '#f5f5f5',
    width: '100%',
    maxWidth: '100vw',
    margin: 'auto',
  },
  font: {
    fontSize: '3.5em',
    margin: '1.5em',
  },
  text: {
    fontSize: '1.25em',
    marginLeft: '4em',
    marginTop: '-2em',
    paddingBottom: '1.5em',
    textDecoration: 'underline',
    textUnderlineOffset: 8,
  },
  intro: {
    width: '100%',
    maxWidth: '100%',
    margin: 'auto'
  },
  carouselBox: {
    margin: 'auto',
    width: '1400px',
    maxWidth: '100%'
  }
};

const Top = () => {
  return (
    <div style={{ width: '1400px', maxWidth: '100%', margin: 'auto' }}>
      <Header />
      <div style={styles.carouselBox}>
        <Carousel
          autoplay={true}
          fade={false}
          components={topCarouselNode.node}
          styles={styles.carousel}
        />
      </div>
      <div style={styles.intro}>
        <Introduction headline={{
          style: styles.text
        }} />
      </div>
      <Footer />
    </div>
  );
};

export default Top;