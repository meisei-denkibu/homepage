import { Menu as AntMenu, MenuProps } from 'antd';
import { useNavigate } from 'react-router';
import { MENU_ITEMS } from '../../constants/menuItem';

type Props = {
  mode?: 'horizontal' | 'vertical';
  theme?: 'light' | 'dark';
  style: React.CSSProperties;
}

export const Menu = (props: Props) => {

  const navigate = useNavigate();
  const OnClick: MenuProps['onClick'] = e => {
    return (
      <>
        {navigate(e.key)}
      </>
    );
  };

  return (
    <AntMenu
      onClick={OnClick}
      mode={props.mode}
      items={MENU_ITEMS}
      theme={props.theme}
      style={props.style}
    />
  );
};