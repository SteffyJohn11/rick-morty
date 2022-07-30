import React from 'react';
import { DividerWrapper,Title,Divider } from './styles';

interface TitleProps {
  title:string;
}
export default function DividerComponent(props:TitleProps) {
  const { title } = props;
  return (
    <DividerWrapper>
      <Title>{title}</Title>
      <Divider />
    </DividerWrapper>
  )
}