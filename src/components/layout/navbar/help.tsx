import {FiHelpCircle} from 'react-icons/fi'
import DropdownLayout from './dropdown-layout';

export default function Help() {
  const options = {
    name: 'Help',
    links: [
      { title: 'FAQs', url: '/faqs' },
      { title: 'Help Center', url: '/help' },
    ],
    icon: <FiHelpCircle size={25} />,
  };

  return <DropdownLayout options={options} />
};