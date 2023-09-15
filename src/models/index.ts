export interface IuseInfo {
   id: number,
   email: string,
   role: string
}

export interface IuserState {
    isAuth: boolean
    userInfo: null | IuseInfo
}

export interface Idevice {
    brandId: number
    createdAt?: string
    id: number
    img: string
    name: string
    price: number
    rating: number
    typeId: number
    updatedAt?: string
}

export interface IdeviceState {
    count: number,
    selectedBrand: null | Ibrand,
    selectedTag: null | Itag,
    page: number,
    limit: number,
    rows: Idevice[]
}

export interface Ibrand {
    id: number,
    name: string,
    createdAt?: string,
    updatedAt?: string
}

export interface IbrandState {
    brands: Ibrand[]
}


export interface Itag {
    id: number,
    name: string,
    createdAt?: string,
    updatedAt?: string
}

export interface ItagState {
    tags: Itag[]
}

export interface IdeviceInfo {
    description: string
    deviceId: number
    id: number
    title: string
}

export interface Iproperty {
    title: string,
    description: string,
    number: number
}

export interface Itag {
    name: string
}

export interface IsingleDevice extends Idevice{
    info?: IdeviceInfo[]
}