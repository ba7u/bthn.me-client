import { AnimateSharedLayout } from 'framer-motion';
import { NavLinkComponent } from 'components/nav-link/component';
import { linkIsActive } from 'helpers/link/is-active';
import { useTranslation } from 'helpers/translation/hook';
import { NavigationComponentPropsInterface } from './component.props.interface';
import { NavigationUnderlineComponent } from './underline.component';

export const NavigationComponent: React.FunctionComponent<NavigationComponentPropsInterface> = ({
  paths,
  activePath,
}) => {
  const { t } = useTranslation('common');

  return (
    <AnimateSharedLayout>
      <nav className='flex'>
        {paths.map(({ textNode, path }) => (
          <NavLinkComponent
            key={textNode}
            href={path}
            isActive={linkIsActive(path, activePath)}
            activeComponent={<NavigationUnderlineComponent />}
          >
            {t(textNode)}
          </NavLinkComponent>
        ))}
      </nav>
    </AnimateSharedLayout>
  );
};
