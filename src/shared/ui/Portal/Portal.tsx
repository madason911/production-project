import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

// eslint-disable-next-line max-len
export const Portal = ({ children, element = document.body }: PortalProps) => ReactDOM.createPortal(children, element);
