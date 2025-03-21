import PropTypes from 'prop-types';

import useAnimatedUnmount from '../../hooks/useAnimatedUnmount';
import Button from '../Button';
import ReactPortal from '../ReactPortal';

import { Container, Footer, Overlay } from './styles';

export default function Modal({
  danger = false,
  visible,
  isLoading = false,
  title,
  children,
  cancelLabel = 'Cancelar',
  confirmLabel = 'Confirmar',
  onCancel,
  onConfirm,
}) {
  const { animatedElementRef, shouldRender } = useAnimatedUnmount(visible);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="modal-root">
      <Overlay ref={animatedElementRef} $isLeaving={!visible}>
        <Container $danger={danger}>
          <h1>{title}</h1>
          <div className="modal-body">{children}</div>
          <Footer>
            <button
              className="cancel-button"
              type="button"
              onClick={onCancel}
              disabled={isLoading}
            >
              {cancelLabel}
            </button>
            <Button danger={danger} onClick={onConfirm} isLoading={isLoading}>
              {confirmLabel}
            </Button>
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
  visible: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};
