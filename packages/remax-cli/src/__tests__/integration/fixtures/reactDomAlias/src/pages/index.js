import * as React from 'react';
import { View } from '@alipay/remix';
import { unstable_batchedUpdates } from 'react-dom';

unstable_batchedUpdates(() => {});

export default () => {
  return <View />;
};
