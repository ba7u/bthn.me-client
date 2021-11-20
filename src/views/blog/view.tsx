import { LayoutComponent } from 'components/layout/component';
import { useRouter } from 'next/router';

export const BlogView = (): JSX.Element => {
  return (
    <LayoutComponent>
      <div className='text-black-light'>Blog View {useRouter().locale}</div>
    </LayoutComponent>
  );
};
