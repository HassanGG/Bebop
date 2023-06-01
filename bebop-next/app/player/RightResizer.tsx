'use client';
import { useCallback, useRef, useState } from 'react';

type RightResizerProps = {
  parentDefaultWidth: number;
  parentSetWidth: React.Dispatch<React.SetStateAction<number>>;
};

enum ResizerColors {
  DEFAULT = 'black',
  INTERACTING = '#C1F2BB',
}

const RightResizer = ({ parentDefaultWidth, parentSetWidth }: RightResizerProps) => {
  const isMouseDown = useRef(false);
  const [borderColor, setBorderColor] = useState<string>(ResizerColors.DEFAULT);

  const onMouseDownHandler = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    isMouseDown.current = true;
    setBorderColor(ResizerColors.INTERACTING);
    window.addEventListener('mouseup', onMouseUpHandler, { once: true });
    window.addEventListener('mousemove', onMouseMoveHandler);
  }, []);

  const onMouseMoveHandler = useCallback((event: MouseEvent) => {
    const mousePos = event.clientX;
    const windowMidPos = window.innerWidth / 2;
    const minWidth = parentDefaultWidth / 3;
    if (mousePos > windowMidPos) {
      parentSetWidth(windowMidPos);
    } else if (mousePos < minWidth) {
      parentSetWidth(minWidth);
    } else {
      parentSetWidth(mousePos);
    }
  }, []);

  const onMouseUpHandler = useCallback((event: MouseEvent) => {
    isMouseDown.current = false;
    setBorderColor(ResizerColors.DEFAULT);
    window.removeEventListener('mousemove', onMouseMoveHandler);
  }, []);

  const onMouseEnterHandler = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    setBorderColor(ResizerColors.INTERACTING);
  }, []);

  const onMouseLeaveHandler = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown.current) {
      setBorderColor(ResizerColors.DEFAULT);
    }
  }, []);

  return (
    <div
      className="h-[calc(100%-1rem)] w-[0.5rem] cursor-ew-resize float-right mt-2 "
      style={{
        borderLeft: 1,
        borderLeftColor: borderColor,
        borderStyle: 'solid',
      }}
      onMouseDown={onMouseDownHandler}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    ></div>
  );
};

export { RightResizer };
