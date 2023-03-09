import { MenuProps } from 'antd';
import { ELECT_PATH, GAME_PATH, HOME_URL, MEDIA_PATH, QUESTION_PATH, WEB_PATH } from './path';
import { ELECT_TEXT, GAME_TEXT, HOME_TEXT, INQUIRY_TEXT, MEDIA_TEXT, MENU_LIST, WEB_TEXT } from './text';

export const MENU_ITEMS: MenuProps['items'] = [
  {
    label: HOME_TEXT,
    key: HOME_URL,
  },
  {
    label: MENU_LIST,
    key: 'app',
    children: [
      {
        label: GAME_TEXT,
        key: GAME_PATH,
      },
      {
        label: MEDIA_TEXT,
        key: MEDIA_PATH,
      },
      {
        label: WEB_TEXT,
        key: WEB_PATH,
      },
      {
        label: ELECT_TEXT,
        key: ELECT_PATH,
      },
    ]
  },
  {
    label: INQUIRY_TEXT,
    key: QUESTION_PATH,
  }
];