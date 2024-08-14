// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'To-Do Page',
      type: 'item',
      url: '/sample-page',
      icon: icons.ChromeOutlined
    },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      // url: 'https://codedthemes.gitbook.io/mantis/',
      url: 'https://wiki.cisco.com/collector/pages.action?key=CEND',
      icon: icons.QuestionOutlined,
      external: true,
      target: true
    }
  ]
};

export default support;
