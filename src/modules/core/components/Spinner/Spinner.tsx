import React, { FC } from 'react';

import { Props } from './Spinner.interface';

const Spinner: FC<Props> = ({ isLoading, children }) => (
  <>{isLoading ? 'Loading...' : <>{children}</>}</>
);

export default Spinner;
