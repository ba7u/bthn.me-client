import { LayoutComponent } from 'components/layout/component';
import { useRouter } from 'next/router';

export const BlogContentView = (): JSX.Element => {
  return (
    <LayoutComponent>
      <div className='text-black-light'>BlogContentView {useRouter().locale}</div>
    </LayoutComponent>
  );
};
