import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

type Props = {
  containerId?: string;
  children: ReactNode;
};

export default function ReactPortal({
  containerId = 'portal-root',
  children,
}: Props) {
  let container = document.getElementById('loader-root');

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', containerId);
    document.body.appendChild(container);
  }

  return ReactDOM.createPortal(children, container);
}
