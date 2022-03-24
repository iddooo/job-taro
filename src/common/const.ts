import Taro from "@tarojs/taro";
export const env = process.env.TARO_ENV;
export const timeout = 3000;
export const baseUrl = "https://niu.langcms.com/";
export const baseImgUrl = "https://img.langcms.com/";
export const version = Taro.getSystemInfoSync().SDKVersion;
export const isNew = compareVersion(version, "2.2.1") >= 0;
function compareVersion(v1: any, v2: any) {
  v1 = v1.split(".");
  v2 = v2.split(".");
  const len = Math.max(v1.length, v2.length);
  while (v1.length < len) {
    v1.push("0");
  }
  while (v2.length < len) {
    v2.push("0");
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i]);
    const num2 = parseInt(v2[i]);

    if (num1 > num2) {
      return 1; // 左大于右
    } else if (num1 < num2) {
      return -1; // 左小于右
    }
  }
  return 0; // 左等于右
}
