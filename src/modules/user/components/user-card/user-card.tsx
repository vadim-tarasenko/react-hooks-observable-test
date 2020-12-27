import React, { FC } from 'react';

import { Props } from './user-card.interface';
import { Root, UserName, RemoveButton } from './user-card.styled';

const UserCard: FC<Props> = ({ id, firstName, lastName, onRemoveClick }) => {
  const handleRemoveClick = () => {
    onRemoveClick(id);
  };

  return (
    <Root>
      <UserName>{`${firstName} ${lastName}`}</UserName>
      <RemoveButton onClick={handleRemoveClick}>Remove user</RemoveButton>
    </Root>
  );
};

export default UserCard;
