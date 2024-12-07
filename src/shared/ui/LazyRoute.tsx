import { FC, ReactNode, Suspense } from 'react';
import Spinner from './Spinner';
type ILazyRoute = {
    Comp : ReactNode;
}
export const LazyRoute:FC<ILazyRoute> = ({ Comp }) => {
    return (
      <Suspense fallback={<Spinner />}>
        {Comp}
      </Suspense>
    );
  };