// types
import type { User } from 'modules/user/types';

export type Props = {
  onRemoveClick: (id: string) => void;
} & User;
