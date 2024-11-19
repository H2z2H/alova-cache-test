import { xhrRequestAdapter } from '@alova/adapter-xhr'
import { createAlova } from 'alova'
import VueHook from 'alova/vue'
export const alovaInstance = createAlova({
    baseURL: 'https://uapis.cn',
    statesHook: VueHook,
    cacheLogger: import.meta.env.DEV,
    requestAdapter: xhrRequestAdapter(),
    shareRequest: true,
    // 设置为null即可全局关闭全部请求缓存
    cacheFor: null,
    // 使用数组的两个项，分别指定请求成功的拦截器和请求失败的拦截器
    responded: {
        // 请求成功的拦截器
        // 第二个参数为当前请求的method实例，你可以用它同步请求前后的配置信息
        onSuccess: async (response, method) => {

            // 解析的响应数据将传给method实例的transformData钩子函数，这些函数将在后续讲解
            return await response.data
        },
    },
})

