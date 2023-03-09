import { GameInfo } from '../Game/gameInfo';
import { Image } from '../../Commons/Atoms/Image/Image';
import Elect1 from '../../Commons/static/img/stakasu/stakasu2.png';

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


export const ELECT_INFO: GameInfo = {
  imageEdit: {
    name: '調光卓シミュレーター',
    explanation: '実際の舞台の調光シミュレーターができます。',
    link: 'https://ux.getuploader.com/DimmerSimulator/download/1',
    image: [<Image
      key='img1'
      src={Elect1}
      styles={styles.imgStyle}
      boxStyles={styles.boxStyles}
      preview={false}
    />
    ]
  }
};