import Link from 'next/link';
import { NavLinkComponentPropsInterface } from './component.props.interface';

export const NavLinkComponent: React.FunctionComponent<NavLinkComponentPropsInterface> = ({
  isActive,
  children,
  activeComponent,
  ...props
}) => (
  <Link {...props} scroll={false}>
    <a className='mr-6 sm:mr-8 flex flex-col relative'>
      {children}
      {isActive && activeComponent}
    </a>
  </Link>
);
