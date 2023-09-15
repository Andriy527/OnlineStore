import {$auth, $base} from "@/http";
import {Itag} from "@/models";

export const getDevices = async (typeId: number | null, brandId: number | null, page: number, limit: number) => {
     const {data} = await $base.get('api/device', {
         params: { typeId, brandId, page, limit }
     })

     return data;
}
export const setTag = async (tag: Itag) => {
    const {data} = await $auth.post('api/type', tag)
    return data
}

export const getTags = async () => {
    const {data} = await $base.get('api/type')
    return data
}

export const setBrand = async (brand: Itag) => {
    const {data} = await $auth.post('api/brand', brand)
    return data
}

export const getBrands = async () => {
    const {data} = await $base.get('api/brand', )
    return data
}

export const setDevice = async (device: FormData) => {
    const {data} = await $auth.post('api/device', device)
    return data
}

export const getDevice = async (id: number) => {
   const {data} = await $base.get(`api/device/${id}`)

   return data
}