import { Title } from '../Atoms/Typography/Title';
import { Option } from '../Atoms/Typography/option';
import { CSSProperties, useEffect, useState } from 'react';
import { CardType, TRANS_RESTRICT_BOOL, TRANS_RESTRICT_VALUES } from './constants/CardContents';
import { isEqual } from 'lodash';
import { Space } from 'antd';
import { ADJACENT_CARD, RIGHT } from '../constants/text';
import { ACTIVITIES, TITLE } from '../constants/text';
import { useNavigate } from 'react-router';
import { makeNewLine } from '../static/function/makeNewLine';
import { IntroduceCard } from '../Molecules/introduceCard';

type Props = {
  headline: {
    style?: CSSProperties;
  }
}

export const Introduction = (props: Props) => {

  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const navigate = useNavigate();
  const toggleVisibility = () => {
    const transLabels = Object.keys(TRANS_RESTRICT_BOOL).map((key) => key);
    const isTrans = Object.values(TRANS_RESTRICT_BOOL).reduce((obj, item, index) => {
      return ({ ...obj, [item.key]: (TRANS_RESTRICT_VALUES[transLabels[index]] <= window.scrollY) });
    }, {});
    setIsVisible(isTrans);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const styles = {
    text: {
      fontSize: '1.25em',
      marginLeft: '4em',
      marginTop: '-2.5em',
      paddingBottom: '1.5em',
    },
    font: {
      fontSize: '3.5em',
      margin: '1.5em',
      marginTop: 56,
      paddingLeft: 28,
      height: 100,
      width: 528,
      lineHeight: 2,
      background: 'rgb(230,230,230,0.5)',
      borderLeft: 'solid 15px black'
    },
    bodyStyleAction: {
      width: 600,
      height: 300,
      padding: 0,
      marginRight: 0,
      marginTop: 24
    },
    boxStyleAction: {
      width: 600,
      position: 'relative' as const,
      marginTop: -16,
      marginBottom: 88,
      marginLeft: 56,
      opacity: 0,
      transition: '0s',
      border: 'solid 3px rgba(30,30,130,0.4)',
      borderRadius: 5,
      zIndex: 10000,
    },
    boxStylePhilosophy: {
      width: 324,
      padding: 0,
      marginRight: 0,
      marginTop: 32,
      marginLeft: 8,
      opacity: 0,
      transition: '0s',
      border: 'solid 3px rgba(30,30,30,0.4)',
      borderRadius: 5,
      filter: 'drop-shadow(10px 10px 10px rgba(0,0,0,0.2))',
    },
    bodyStylePhilosophy: {
      width: '100%',
      height: 200,
      marginTop: 32,
    },
    cardTextStyle: {
      width: 296,
      wordWrap: 'break-word' as const,
      paddingRight: 24,
      fontSize: '1.3em',
      marginTop: 16
    },
    titleStyle: {
      textAlign: 'center' as const,
    }

  };
  const titleOption: Option = {
    level: 1,
  };

  const navigateFromCard = (path: string) => {
    navigate(path);
  };
  return (
    <>
      {Object.keys(CardType).map((value, cardTypeId) => {
        return (
          <div key={cardTypeId}>
            {Object.keys(CardType[value]).map((cardId) => {
              if (isEqual(CardType[value][cardId].type, TITLE)) {
                return (
                  <div key={cardId}>
                    <Title
                      text={CardType[value][cardId].titleText || ''}
                      optionProps={titleOption}
                      style={styles.font}
                    />
                    <p style={props.headline.style}>
                      {makeNewLine(CardType[value][cardId].text)}
                    </p>
                  </div>
                );
              } else {
                const transitionStyle = {
                  transition: CardType[value][cardId].transition,
                  opacity: (isVisible[cardId]) ? 1 : 0
                };
                return (
                  <Space key={cardId}>
                    <div style={{
                      width: isEqual(CardType[value][cardId].side, RIGHT)
                        ? 536 : isEqual(CardType[value][cardId].side, ADJACENT_CARD) ? 64 : 0
                    }}>
                    </div>
                    <IntroduceCard
                      title={
                        <Title
                          optionProps={titleOption}
                          text={CardType[value][cardId].titleText}
                          style={styles.titleStyle}
                        />
                      }
                      text={makeNewLine(CardType[value][cardId].text)}
                      border={true}
                      style={isEqual(value, ACTIVITIES)
                        ? styles.bodyStyleAction
                        : styles.bodyStylePhilosophy
                      }
                      cardTextStyle={styles.cardTextStyle}
                      element={CardType[value][cardId].icon}
                      boxStyle={isEqual(value, ACTIVITIES)
                        ? { ...styles.boxStyleAction, ...transitionStyle }
                        : { ...styles.boxStylePhilosophy, ...transitionStyle }
                      }
                      hoverAble={CardType[value][cardId].hoverAble}
                      onClick={() => navigateFromCard(CardType[value][cardId].path ?? '')}
                      isTransition={!isEqual(CardType[value][cardId].path, undefined)}
                    />
                  </Space>
                );
              }
            })}
          </div>
        );
      })}
    </>
  );
};