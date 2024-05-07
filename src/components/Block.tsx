import { CurrencyDOMINT } from '@/interface';
import type { FC } from 'react';

const Block: FC<CurrencyDOMINT> = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

export default Block;
