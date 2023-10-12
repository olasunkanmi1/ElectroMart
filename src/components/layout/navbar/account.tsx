import {AiOutlineUser} from 'react-icons/ai'
import DropdownLayout from './dropdown-layout';

export default function Account() {
  const options = {
    name: 'Account',
    links: [
      { title: 'My account', url: '/account' },
      { title: 'Orders', url: '/orders' },
      { title: 'Saved Items', url: '/inbox' },
      { title: 'Change Password', url: '/inbox' },
    ],
    icon: <AiOutlineUser size={25} />,
  };

  return <DropdownLayout options={options} />
};