import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ResponseINT {
  success: boolean;
  data: any;
  errCode: number;
  errMsg: string;
}

export interface CurrencyDOMINT
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: React.ReactNode;
}
