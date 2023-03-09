import { GameInfo, GAME_INFO } from '../../Pages/Game/gameInfo';
import { Anchor } from '../Atoms/Anchor/Anchor';
import { Button } from '../Atoms/Button/Button';
import { DESCRIBE, GAME_CAUTION, PLAY } from '../constants/text';
import { SubImage } from '../Molecules/SubImage/SubImage';
import { makeNewLine } from '../static/function/makeNewLine';

type Props = {
  items: GameInfo;
}

export const GameIntro = (props: Props) => {
  const styles = {
    describeBox: {
      display: 'block',
    },
    titleBox: {
      width: 400,
      display: 'inline-block',
      position: 'relative' as const,
      left: 88,
      height: 'auto',
      lineHeight: 60,
      textAlign: 'center' as const,
      padding: '7px 0',
      fontSize: 18,
      background: 'rgb(32 255 180)',
      color: '#ffffff',
      boxSizing: 'border-box' as const,
    },
    explanationBox: {
      display: 'table',
      position: 'relative' as const,
      top: 54,
      left: 64,
      height: 236,
      width: 440,
      border: 'solid 3px rgb(100,100,128,0.8)',
    },
    introBox: {
      display: 'flex',
      marginTop: 32,
      marginLeft: 17,
      paddingTop: 88,
      paddingBottom: 64,
      borderTop: 'dashed 4px black',
    },
    gameTitle: {
      textAlign: 'center' as const,
      fontSize: '2em',
      marginBottom: 48,
      margin: 0,
      padding: '0 30px',
      borderTop: 'dashed 2px rgba(255, 255, 255, 0.5)',
      borderBottom: 'dashed 2px rgba(255, 255, 255, 0.5)',
      lineHeight: '42px',
    },
    subImage: {
      position: 'relative' as const,
      left: 192,
    },
    boxTitle: {
      position: 'absolute' as const,
      display: 'inline-block',
      top: -27,
      left: -3,
      padding: '0 9px',
      height: 25,
      fontSize: '1.25em',
      background: 'rgb(100,100,128,0.8)',
      color: '#fff',
      fontWeight: 'bold',
      borderRadius: '5px 5px 0 0',
    },
    explanation: {
      display: ' table-cell',
      textAlign: 'center' as const,
      margin: '1em 1em',
      verticalAlign: 'middle',
      fontSize: '1.25em',
    },
    anchorBox: {
      position: 'relative' as const,
      width: 440,
      height: 64,
      top: 104,
      left: 64,
      display: 'block',
      transition: '0.5s',
    },
    button: {
      width: '100%',
      height: '100%',
      borderRadius: 15,
      background: 'linear-gradient(90deg, #1E90FF, rgb(70,180,255))',
      color: 'white',
      fontSize: '2em',
    },
    caution: {
      textAlign: 'right' as const
    },
    gameBox: {
      width: '100%',
      maxWidth: '1400px',
      margin: 'auto'
    }
  };

  const { items } = props;

  return (
    <>
      {Object.keys(items).map((key, index) => {
        return (
          <div key={key} style={styles.gameBox}>
            <div style={styles.introBox}>
              <div style={styles.describeBox}>
                <div style={styles.titleBox} className='titleBox'>
                  <p style={styles.gameTitle}>{items[key].name}</p>
                </div>
                <div style={styles.explanationBox}>
                  <span style={styles.boxTitle}>{DESCRIBE}</span>
                  <p style={styles.explanation}>{makeNewLine(items[key].explanation)}</p>
                </div>
                <div style={styles.anchorBox} className='gameAnchor'>
                  <Anchor
                    content={
                      <Button style={styles.button} label={PLAY} />
                    }
                    link={items[key].link}
                    blank={true}
                  />
                  <p style={styles.caution}>{GAME_CAUTION}</p>
                </div>
              </div>
              <div style={styles.subImage}>
                <SubImage gameImageNode={items[key].image} gameIndex={index} gameInfo={items} />
              </div>
            </div>
          </div>
        );
      })
      }
    </>
  );
};