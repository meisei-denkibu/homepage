import { Image } from '../../Commons/Atoms/Image/Image';
import { Footer } from '../../Commons/Organisms/Footer';
import { GameIntro } from '../../Commons/Organisms/GameIntro';
import { Header } from '../../Commons/Organisms/Header';
import GAME_TITLE from '../../Commons/static/svg/game_title.svg';
import { GAME_INFO } from './gameInfo';

export const Game = () => {
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
    gameBox: {
      width: '100%',
      maxWidth: '100%',
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '100%', margin: 'auto' }}>
      <Header />
      <div style={styles.titleImgBox}>
        <Image src={GAME_TITLE} preview={false} />
      </div>
      <div style={styles.gameBox}>
        <GameIntro items={GAME_INFO} />
      </div>
      <Footer />
    </div >
  );
};