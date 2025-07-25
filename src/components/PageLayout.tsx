import {ReactNode} from 'react';

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function PageLayout({children, title}: Props) {
  return <div className="h-full">{children}</div>;
}
