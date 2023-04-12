import { app } from "./app";


app
  .listen({
    host: '0.0.0.0',
    port: 3000,
  })
  .then(() => {
    console.log('🚀 ~ file: server.ts:9 ~ http://localhot:3000/')
  })