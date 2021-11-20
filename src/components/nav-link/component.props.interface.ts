import { LinkProps } from 'next/link';

export interface NavLinkComponentPropsInterface extends LinkProps {
  isActive?: boolean;
  activeComponent?: React.ReactNode;
}
