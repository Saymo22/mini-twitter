import fastify from 'fastify'
import { userRouter } from './resources/users/user.router'
import { appRouter } from './app.router'
import { twitteRouter } from './resources/twitte/twitte.router'
import { commentRouter } from './resources/comment/comment.router'

export const app = fastify()

app.register(appRouter)
app.register(userRouter)
app.register(twitteRouter)
app.register(commentRouter)