import Taro from "@tarojs/taro";
import md5 from "js-md5";
import { appid, env, timeout, baseUrl } from "../common/const";
import { ResponseType } from "../interface/interface";
let token = "";
export function setToken(newToken: string): void {
  token = newToken;
}
function getSign(data: Object): string {
  const dataJson = JSON.stringify(data);
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
    Taro.request({
      url: baseUrl + url,
      method: "POST",
      header: {
        "Content-Type": "application/json",
        "X-BrandId": "",
        "X-AppId": appid,
        "X-Platform": env,
        "X-Token": token,
        "X-Sign": getSign(data),
      },
      timeout,
      data,
      success: (res) => {
        if (res.statusCode === 200) {
          if (res.data.code === 0) {
            reslove(res.data);
          } else {
            reject(res.data);
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
