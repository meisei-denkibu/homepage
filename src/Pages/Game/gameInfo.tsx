import delight1 from '../../Commons/static/img/hinaba/delight_1.png';
import delight2 from '../../Commons/static/img/hinaba/delight_2.png';
import delight3 from '../../Commons/static/img/hinaba/delight_3.png';
import ted1 from '../../Commons/static/img/bouyomi/Ted1.png';
import ted2 from '../../Commons/static/img/bouyomi/Ted2.png';
import ted3 from '../../Commons/static/img/bouyomi/Ted3.gif';
import aozora1 from '../../Commons/static/img/noruru/aozora1.png';
import aozora2 from '../../Commons/static/img/noruru/aozora2.png';
import rob1 from '../../Commons/static/img/massar/rob1.png';
import rob2 from '../../Commons/static/img/massar/rob2.gif';
import quad1 from '../../Commons/static/img/hasano/quad1.png';
import quad2 from '../../Commons/static/img/hasano/quad2.png';
import quad3 from '../../Commons/static/img/hasano/quad3.gif';
import mu1 from '../../Commons/static/img/nsekiguti/4mu1.png';
import mu2 from '../../Commons/static/img/nsekiguti/4mu2.gif';

import { Image } from '../../Commons/Atoms/Image/Image';
import { ReactElement } from 'react';

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

export type GameInfo = {
  [key: string]: {
    name: string;
    explanation: string;
    link: string;
    image: ReactElement[];
  }
}

export const GAME_INFO: GameInfo = {
  delight: {
    name: 'Delight Beats',
    explanation: 'PC用の7レーンの音ゲーです。\n\neasy,normal,hardの難易度をご用意。\n\nめちゃくちゃ重くてすみません!',
    link: 'https://unityroom.com/games/hiropen1414-delight',
    image: [
      <Image
        key='img1'
        src={delight1}
        styles={styles.imgStyle}
        boxStyles={styles.boxStyles}
        preview={false}
      />,
      <Image
        key='img2'
        src={delight2}
        styles={styles.imgStyle}
        boxStyles={styles.boxStyles}
        preview={false}
      />,
      <Image
        key='img3'
        src={delight3}
        styles={styles.imgStyle}
        boxStyles={styles.boxStyles}
        preview={false}
      />
    ]
  },
  ted: {
    name: 'Ted\'s Coming ',
    explanation: 'おばけの食事に興味があるというのはあなたですね？\n' +
      '近頃、この町や付近の森に現れる暴食の亡霊に我々手を焼いておりまして。\n' +
      'ぜひあの子..."テッド"\n' +
      'を本来摂るべき獲物へ導いてほしいのです。\n' +
      '難しくはありません。\n' +
      'あの子の幽体を少し強引に操ってもらうだけです..\n' +
      'できるだけ多く摂取させられればいいのですが...',
    link: 'https://unityroom.com/games/tedscoming-web',
    image: [
      <Image
        key='img1'
        src={ted1}
        styles={styles.imgStyle}
        boxStyles={styles.boxStyles}
        preview={false}
      />,
      <Image
        key='img2'
        src={ted2}
        styles={styles.imgStyle}
        boxStyles={styles.boxStyles}
        preview={false}
      />,
      <Image
        key='img2'
        src={ted3}
        styles={styles.imgStyle}
        boxStyles={styles.boxStyles}
        preview={false}
      />,
    ]
  },
  aozora: {
    name: 'あおぞら',
    explanation: '５人の神絵師とゲーオタ主による、学園青春恋愛物語が今、始まる…!!!\n\n<操作方法>' +
      '\nクリックでテキストを進めたりボタンを押したりできます。\n' +
      '右下の「≡」マークから、セーブやロード、メッセージスキップができます。\n' +
      '＊今作はメッセージウィンドウを消すことができません。ご了承ください。',
    link: 'https://novelgame.jp/games/show/5943',
    image: [
      <Image
        key='img1'
        src={aozora1}
        styles={styles.imgStyle}
        boxStyles={styles.boxStyles}
        preview={false}
      />,
      <Image
        key='img2'
        src={aozora2}
        styles={styles.imgStyle}
        boxStyles={styles.boxStyles}
        preview={false}
      />,
    ]
  },
  robot: {
    name: '二足歩行ロボット君性能テスト',
    explanation: '一人称視点でロボットくんを操作します。\nオーブを3個回収できたら性能テストは成功です。\n\n何回落下しても問題ないので、落ち着いて操作して性能テストを成功させましょう！',
    link: 'https://unityroom.com/games/246813579',
    image: [
      <Image
        key='img1'
        src={rob1}
        styles={styles.imgStyle}
        boxStyles={styles.boxStyles}
        preview={false}
      />,
      <Image
        key='img2'
        src={rob2}
        styles={styles.imgStyle}
        boxStyles={styles.boxStyles}
        preview={false}
      />,
    ]
  },
  quadline: {
    name: 'Quadline',
    explanation: '4つの列に流れてくるノーツを打つシンプルなリズムゲームです。\n' +
      'ハイスコアやフルコンボ回数を記録する機能が付いています。\n' +
      'まだ2曲しかないです。\n' +
      '想定プレイ時間は1譜面につき3分程度です。',
    link: 'https://unityroom.com/games/quadline',
    image: [
      <Image
        key='img1'
        src={quad1}
        styles={styles.imgStyle}
        boxStyles={styles.boxStyles}
        preview={false}
      />,
      <Image
        key='img2'
        src={quad2}
        styles={styles.imgStyle}
        boxStyles={styles.boxStyles}
        preview={false}
      />,
      <Image
        key='img2'
        src={quad3}
        styles={styles.imgStyle}
        boxStyles={styles.boxStyles}
        preview={false}
      />,
    ]
  },
  mu: {
    name: '4mu',
    explanation: 'シンプルな音ゲーです。\n\n初投稿なので出来栄えは目をつむっていただけたらと、、、、、',
    link: 'https://unityroom.com/games/4mu',
    image: [
      <Image
        key='img1'
        src={mu1}
        styles={styles.imgStyle}
        boxStyles={styles.boxStyles}
        preview={false}
      />,
      <Image
        key='img2'
        src={mu2}
        styles={styles.imgStyle}
        boxStyles={styles.boxStyles}
        preview={false}
      />
    ]
  },
};