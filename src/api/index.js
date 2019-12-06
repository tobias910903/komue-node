console.log("当前环境:", process.env.ENV_CONFIG);

import {get, post, upload} from '@/api/axios';
const URL_FREFIX = process.env.ENV_CONFIG == "dev" ? "/lanme" : "";

export default {

 }
