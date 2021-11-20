import { useTranslation } from 'helpers/translation/hook';

export const DemoComponent = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div>
      <span>DemoComponent - Desktop</span>
      <span>{t('test')}</span>
    </div>
  );
};
