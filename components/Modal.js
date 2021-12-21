import React from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

function Modal() {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      Modal
      {
          open && <p>Modal is Open</p>
      }
    </div>
  );
}

export default Modal;
