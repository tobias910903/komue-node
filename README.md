> Nodejs + express + pm2 + vuecli2 
> 本地开发跨域处理

```
******* 本地开发 ********
> npm install 

先启动Node服务
> npm run start:test

再启动WEB
> npm run dev

******* 测试环境Node服务 ********
安装依赖 && 打包 && 启动
> npm install 
> npm run build:test
> npm run start:test

重启 && 停止 && 清除
> npm run restart:test
> npm run stop
> npm run delete

******* 生产环境Node服务 ********
安装依赖 && 打包 && 启动
> npm install 
> npm run build
> npm run start

重启 && 停止 && 清除
> npm run restart
> npm run stop
> npm run delete

******* 其他 ********
查看日志
> pm2 logs

查看当前进程
> pm2 list

```