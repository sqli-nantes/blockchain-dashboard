import {OpaqueToken} from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');

export interface Config {
appSetting: string,
}

export const CONFIG: Config = {
appSetting: "my application setting"
};
