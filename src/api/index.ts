import Taro from "@tarojs/taro";
// @ts-ignore
import md5 from "js-md5";
import { env, timeout, baseUrl } from "../common/const";
import { ResponseType } from "../interface/interface";
let token = Taro.getStorageSync("token");
export function setToken(newToken: string): void {
  token = newToken;
  Taro.setStorageSync("token", token);
}
export function getToken() {
  return token || Taro.getStorageSync("token");
}
function getSign(data: Object): any {
  const dataJson = JSON.stringify(data);
  // @ts-ignore
  return md5(`${dataJson}&token=${token}`);
}
export function post({
  url,
  data,
}: {
  url: string;
  data: Object;
}): Promise<ResponseType> {
  return new Promise((reslove, reject) => {
    const brandInfo = Taro.getStorageSync("brandInfo");
    const { appId, brandId } = brandInfo;
    const header = {
      "Content-Type": "application/json",
      "X-BrandId": brandId,
      "X-AppId": appId,
      "X-Platform": env,
      "X-Token": token,
      "X-Sign": getSign(data),
    };
    if (url === "api/wechat/token.html") {
      delete header["X-Token"];
    }
    Taro.request({
      url: baseUrl + url,
      method: "POST",
      header,
      timeout,
      data,
      success: (res) => {
        if (res.statusCode === 200) {
          if (res.data.code === 0) {
            reslove(res.data.body);
          } else {
            reject(res.data.body);
          }
        } else {
          reject(res);
        }
      },
      fail: (err) => {
        reject(err);
      },
    });
  });
}
