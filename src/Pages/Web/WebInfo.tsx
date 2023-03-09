import { GameInfo } from '../Game/gameInfo';
import { Image } from '../../Commons/Atoms/Image/Image';
import web1 from '../../Commons/static/img/hinaba/web1.png';
import web2 from '../../Commons/static/img/hinaba/web2.png';

const styles = {
  boxStyles: {
    height: '100%',
    width: '100%',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  imgStyle: {
    height: '100%',
    width: '100%',
    display: 'block',
    backgroundSize: 'contain',
  },
};


export const WEB_INFO: GameInfo = {
  imageEdit: {
    name: '画像加工サイト',
    explanation: 'web上で簡単に画像の加工ができるサイトです。\n\n色調反転、上下反転、左右反転、90度回転、モノクロ化等々、多機能を備えておりますので良ければ使ってみて下さい。',
    link: 'https://hiropen1414.github.io/Image_conversion_site/',
    image: [<Image
      key='img1'
      src={web1}
      styles={styles.imgStyle}
      boxStyles={styles.boxStyles}
      preview={false}
    />,
    < Image
      key='img2'
      src={web2}
      styles={styles.imgStyle}
      boxStyles={styles.boxStyles}
      preview={false}
    />,
    ],
  }
};