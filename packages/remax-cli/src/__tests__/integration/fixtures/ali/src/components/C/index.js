import * as React from 'react';
import { View } from '@alipay/remix';
import './index.css';

// 测试 case: 样式引入先后顺序
export default ({ className }) => <View className={`c ${className}`}>c</View>;
