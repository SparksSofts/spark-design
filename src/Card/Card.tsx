import {Card} from 'antd';
import React from 'react';

export type CardProps = React.ComponentProps<typeof Card>;


const InternalCardWithExtras: React.ForwardRefRenderFunction<
  HTMLDivElement,
  CardProps
> = (props, ref) => {
  const {...restProps} = props;
  return (
    <>
      <Card ref={ref} {...restProps} />
    </>
  );
};

const SSCard = React.forwardRef<HTMLDivElement, CardProps>(
  InternalCardWithExtras,
);

export default SSCard;
