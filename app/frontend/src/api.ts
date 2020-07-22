const URL = "http://localhost:8888"

import { AuthPromiseClient } from "./pb/auth_grpc_web_pb"
import { APIPromiseClient } from "./pb/api_grpc_web_pb"
import { SSOPromiseClient } from "./pb/sso_grpc_web_pb"
import { ConversationsPromiseClient } from "./pb/conversations_grpc_web_pb"

import interceptor from "./interceptor"

const opts = {
  unaryInterceptors: [interceptor],
  streamInterceptors: [interceptor],
}

// There seems to be an error in the `opts` parameter's type, so have to ignore that line.

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export const client = new APIPromiseClient(URL, null, opts) as APIPromiseClient

// prettier-ignore
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export const SSOclient = new SSOPromiseClient(URL, null, opts) as SSOPromiseClient

// prettier-ignore
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export const conversations = new ConversationsPromiseClient(URL, null, opts) as ConversationsPromiseClient

export const authClient = new AuthPromiseClient(URL)
