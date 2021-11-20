import { SwitchLanguageComponentPropsInterface } from './component.props.interface';
import { IconComponent } from 'components/icon/component';
import { localeGetAlternative } from 'helpers/locale/get-alternative';
import { NavLinkComponent } from 'components/nav-link/component';

export const SwitchLanguageComponent: React.FunctionComponent<SwitchLanguageComponentPropsInterface> = ({ router }) => {
  return (
    <NavLinkComponent href={router.asPath} locale={localeGetAlternative(router.locale, router.locales)}>
      {router.locale === router.defaultLocale ? (
        <IconComponent icon='emojione-v1:flag-for-turkey' />
      ) : (
        <IconComponent icon='emojione-v1:flag-for-united-kingdom' />
      )}
    </NavLinkComponent>
  );
};
