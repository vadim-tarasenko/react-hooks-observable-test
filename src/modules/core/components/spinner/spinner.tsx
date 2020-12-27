import React, { FC } from 'react';

import { Props } from './spinner.interface';

const Spinner: FC<Props> = ({ isLoading, children }) => (
  <>{isLoading ? 'Loading...' : <>{children}</>}</>
);

export default Spinner;
