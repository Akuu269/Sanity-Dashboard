// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'util-DDTSReport',
      title: 'DDTS Report',
      type: 'item',
      url: '/DDTSReport',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'util-color',
      title: 'Incidents',
      type: 'item',
      url: '/color',
      icon: icons.BgColorsOutlined
    },
    {
      id: 'util-shadow',
      title: 'Alert',
      type: 'item',
      url: '/shadow',
      icon: icons.BarcodeOutlined
    }
    
  ]
};

export default utilities;
