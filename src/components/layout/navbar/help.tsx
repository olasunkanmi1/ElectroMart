import {FiHelpCircle} from 'react-icons/fi'
import DropdownLayout from './dropdown-layout';

export default function Help() {
  const options = {
    name: 'Help',
    links: [
      { title: 'Help Center', url: '/help' },
      { title: 'Order Cancellation', url: '/faqs' },
      { title: 'Delivery Timelines', url: '/faqs' }
    ],
    icon: <FiHelpCircle size={25} />,
  };

  return <DropdownLayout options={options} />
};