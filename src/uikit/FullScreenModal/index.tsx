import { ReactElement, PropsWithChildren } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import styled from 'styled-components';

import CloseSVG from 'public/media/common/cross.svg';
interface IProps {
  className?: string;
}

function FullScreenModalBase({
  className,
  children,
}: PropsWithChildren<IProps>): ReactElement {
  return (
    <Dialog.Portal className={className}>
      <DialogOverlay />
      <DialogContentWrapper>
        <DialogContent>
          <DialogCloseWrapper>
            <DialogClose>
              <CloseIcon src={CloseSVG} alt="close dialog" />
            </DialogClose>
          </DialogCloseWrapper>
          {children}
        </DialogContent>
      </DialogContentWrapper>
    </Dialog.Portal>
  );
}

const FullScreenModal = styled(FullScreenModalBase)`
  z-index: 50;
`;

const CloseIcon = styled(Image)`
  width: 25px;
  height: 25px;
`;

const DialogCloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const DialogClose = styled(Dialog.Close)`
  z-index: 20;
  background-color: transparent;
  border: 0;

  cursor: pointer;
  margin-bottom: 20px;
`;

const DialogOverlay = styled(Dialog.Overlay)`
  background-color: ${(p) => p.theme['modal-overlay']};
  position: fixed;
  inset: 0;
`;

const DialogContentWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  padding: 130px 25px;
  top: 0;
  left: 0;
`;

const DialogContent = styled(Dialog.Content)`
  height: 100%;
`;

export default FullScreenModal;
