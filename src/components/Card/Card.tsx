import React, { useState } from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types'; // Ensure this path is correct

const CardContainer = styled.div<{ isDisabled: boolean }>`
  position: relative;
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'auto')};
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div<{ isPrimary: boolean; backgroundColor?: string }>`
  position: absolute;
  bottom: 0;
  background: ${({ isPrimary, backgroundColor }) =>
    isPrimary ? backgroundColor || 'rgba(0, 0, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'};
  color: white;
  width: 100%;
  transition: 0.5s ease;
  opacity: 0;
  padding: 20px;
  text-align: center;

  ${CardContainer}:hover & {
    opacity: 1;
  }
`;

const Text = styled.div`
  color: white;
`;

const Card: React.FC<CardProps> = ({ imageUrl, name, email, isPrimary = false, isDisabled = false }) => {
  const [backgroundColor] = useState<string | undefined>();

  return (
    <CardContainer isDisabled={isDisabled}>
      <CardImage src={imageUrl} alt={name} />
      <Overlay isPrimary={isPrimary} backgroundColor={backgroundColor}>
        <Text>
          <h2>{name}</h2>
          <p>{email}</p>
        </Text>
      </Overlay>
    </CardContainer>
  );
};

export default Card;
