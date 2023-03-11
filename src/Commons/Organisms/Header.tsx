import { HORIZONTAL } from '../constants/text';
import { Menu } from '../Molecules/Menu/Menu';
import { Image } from '../Atoms/Image/Image';
import logo from '../static/svg/icon_header.svg';

type Props = {
  delete?: boolean;
}

export const Header = (props: Props) => {
  const style = {
    headerDesign: {
      margin: 'auto',
      display: 'flex',
      width: '100%',
    },
    defaultImage: {
      height: 80,
      margin: 'auto',
      display: 'block',
      float: 'left' as const,
      width: 304,
    },
    menu: {
      boxShadow: 'rgba(122,122,122,0.0588235) 0px 0px 24px 20px',
    },
    menuBox: {
      display: 'table',
      width: '100%',
      maxWidth: '100%',
    },
    imgBox: {
      marginLeft: 48,
    },
    headerBox: {
      width: '100%',
      margin: 'auto'
    }
  };

  return (
    <div style={style.headerBox}>
      <div style={style.headerDesign}>
        <div style={style.imgBox}>
          <Image src={logo} styles={style.defaultImage} preview={false} />
        </div>
      </div>
      {!(props.delete) &&
        <div style={style.menuBox}>
          <Menu theme='light' mode={HORIZONTAL} style={style.menu} />
        </div>
      }
    </div>
  );
};