import { Image } from '../../Commons/Atoms/Image/Image';
import ELECT_TITLE from '../../Commons/static/svg/elect_title.svg';
import { ELECT_INFO } from './ElectInfo';
import { GameIntro } from '../../Commons/Organisms/GameIntro';
import { Header } from '../../Commons/Organisms/Header';
import { Footer } from '../../Commons/Organisms/Footer';

export const Elect = () => {
  const styles = {
    title: {
      fontSize: '3em',
      marginTop: 40,
      textAlign: 'center' as const,
    },
    titleImgBox: {
      width: 400,
      margin: 'auto',
      marginTop: 24,
    },
    webBox: {
      width: '100%',
      maxWidth: '100%',
    }
  };

  const electData = ELECT_INFO;

  return (
    <div>
      <Header />
      <div style={styles.titleImgBox}>
        <Image src={ELECT_TITLE} preview={false} />
      </div>

      <div style={styles.webBox}>
        <GameIntro items={electData} />
      </div>
      <Footer />
    </div>
  );
};