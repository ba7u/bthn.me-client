import { Icon } from '@iconify/react';
import classNames from 'classnames';
import { IconComponentPropsInterface } from './component.props.interface';

export const IconComponent: React.FunctionComponent<IconComponentPropsInterface> = ({ className, icon }) => (
  <Icon className={classNames(className, 'w-6', 'h-6')} icon={icon} />
);
