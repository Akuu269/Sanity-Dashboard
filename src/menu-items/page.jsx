// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Features',
  type: 'group',
  children: [
    {
      id: 'login1',
      title: 'DDTS Report',
      type: 'item',
      url: '/login',
      icon: icons.LoginOutlined,
      target: true
    },
    {
      id: 'register1',
      title: 'Incidents',
      type: 'item',
      url: '/register',
      icon: icons.ProfileOutlined,
      target: true
    }
  ]
};

export default pages;
