export const APP_NAME = import.meta.env.VITE_APP_NAME;
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Type
 * ------------------------
 */
export type ConfigValue = {
  site: {
    name: string;
    assetURL: string;
    basePath: string;
  };
  backend: {
    url: string; // facebook.com
    fullUrl: string; // https://facebook.com
    prefix: string; // api -> https://facebook.com/api
    version: string; // v1 -> https://facebook.com/api/v1
  };
};

/**
 * Asign Value
 * ------------------------
 */
export const CONFIG: ConfigValue = {
  site: {
    name: import.meta.env.VITE_APP_NAME,
    assetURL: "",
    basePath: "",
  },
  backend: {
    url: import.meta.env.VITE_API_URL,
    fullUrl: import.meta.env.VITE_API_FULL_URL,
    prefix: import.meta.env.VITE_API_PREFIX,
    version: import.meta.env.VITE_API_VERSION,
  },
};
