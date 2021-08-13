import React, { useState, useRef, MutableRefObject } from "react";
import styled from "styled-components";
import { usePopper } from "react-popper";

type Props = {
  targetRef: MutableRefObject<null>;
  isVisible: boolean;
};

const Tooltip = ({ targetRef, isVisible }: Props) => {
  const popperRef = useRef(null);
  const [arrowRef, setArrowRed] = useState<HTMLDivElement | null>(null);

  const { styles, attributes } = usePopper(
    targetRef.current,
    popperRef.current,
    {
      modifiers: [
        {
          name: "arrow",
          options: {
            element: arrowRef
          }
        },
        {
          name: "offset",
          options: {
            offset: [0, 10]
          }
        }
      ]
    }
  );

  if (!isVisible) return null;

  return (
    <PopperContainer
      ref={popperRef}
      style={styles.popper}
      {...attributes.popper}
    >
      <div ref={setArrowRed} style={styles.arrow} className="arrow" />
      <p>I'm a popper</p>
    </PopperContainer>
  );
};

const PopperContainer = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: white;
  padding: 20px;
  text-align: center;

  .arrow {
    position: absolute;
    width: 10px;
    height: 10px;

    &:after {
      content: " ";
      position: absolute;
      top: -25px; // we account for the PopperContainer padding
      left: 0;
      transform: rotate(45deg);
      width: 10px;
      height: 10px;
      background-color: white;
      box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
    }
  }
  &[data-popper-placement^="top"] > .arrow {
    bottom: -30px;
    :after {
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    }
  }
`;

export default Tooltip;
