import { Image } from '../../Commons/Atoms/Image/Image';
import WEB_TITLE from '../../Commons/static/svg/web_title.svg';
import { WEB_INFO } from './WebInfo';
import { GameIntro } from '../../Commons/Organisms/GameIntro';
import { Header } from '../../Commons/Organisms/Header';
import { Footer } from '../../Commons/Organisms/Footer';

export const Web = () => {
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

  const webData = WEB_INFO;

  return (
    <div>
      <Header />
      <div style={styles.titleImgBox}>
        <Image src={WEB_TITLE} preview={false} />
      </div>

      <div style={styles.webBox}>
        <GameIntro items={webData} />
      </div>
      <Footer />
    </div>
  );
};