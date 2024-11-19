import {alovaInstance} from "@/apis/index.js";

export function getWeather(params) {
    return alovaInstance.Get(`api/weather`, {
        params,
        cacheFor: {
          mode: 'memory',
          expire: 60 * 10 * 1000,
        },
    })
}