import weappConfig from "../../project.config.json";
import ttConfig from "../../project.config.json";
export const env = process.env.TARO_ENV;
export const appid = env === "tt" ? weappConfig.appid : ttConfig.appid;
export const timeout = 3000;
export const baseUrl = "";
