# 符号运算工具库

一个包含多个基于位运算的高性能实用函数的集合。

## 函数

| 函数名         | 描述                                | 参数类型               |
| -------------- | ----------------------------------- | ---------------------- |
| toInteger      | 将数字转换为整数，去除小数部分      | (x: number)            |
| round          | 将数字四舍五入到最接近的整数        | (x: number)            |
| ceil           | 将数字向上取整到最接近的整数        | (x: number)            |
| floor          | 将数字向下取整到最接近的整数        | (x: number)            |
| positiveModulo | 计算两个数字的正模运算结果          | (x: number, y: number) |
| negate         | 求一个数字的相反数                  | (x: number)            |
| abs            | 计算一个数字的绝对值                | (x: number)            |
| min            | 获取两个数字中的较小值              | (x: number, y: number) |
| max            | 获取两个数字中的较大值              | (x: number, y: number) |
| swap           | 交换两个数字的值                    | (x: number, y: number) |
| isOdd          | 检查一个数字是否为奇数              | (x: number)            |
| isEven         | 检查一个数字是否为偶数              | (x: number)            |
| average        | 计算两个数字的平均值                | (x: number, y: number) |
| isPowerOfTwo   | 检查一个数字是否是2的幂             | (x: number)            |
| nextPowerOfTwo | 获取大于或等于给定数字的最近的2的幂 | (x: number)            |

## 安装

要安装此库，请运行：
```sh
npm install symbolic-operation
```


## 使用

要在项目中使用这个库的函数，请导入它们：

```javascript
import { round, isOdd } from 'symbolic-operation';

console.log(round(4.7)); // 输出: 5
console.log(isOdd(3));   // 输出: true
```
## 许可证
此项目采用 MIT 许可证。
