import {TsingleDevice} from "@/types";
import {Idevice, IsingleDevice} from "@/models";

export function isDeviceAvalible(device: TsingleDevice): device is IsingleDevice {
    return (device as IsingleDevice)?.name !== undefined;
}