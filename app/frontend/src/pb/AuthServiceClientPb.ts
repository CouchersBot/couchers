/**
 * @fileoverview gRPC-Web generated client stub for auth
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import {
  AuthRequest,
  AuthResponse,
  DeauthRequest,
  DeauthResponse} from './auth_pb';

export class AuthClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoAuthenticate = new grpcWeb.AbstractClientBase.MethodInfo(
    AuthResponse,
    (request: AuthRequest) => {
      return request.serializeBinary();
    },
    AuthResponse.deserializeBinary
  );

  authenticate(
    request: AuthRequest,
    metadata: grpcWeb.Metadata | null): Promise<AuthResponse>;

  authenticate(
    request: AuthRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AuthResponse) => void): grpcWeb.ClientReadableStream<AuthResponse>;

  authenticate(
    request: AuthRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: AuthResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.Auth/Authenticate',
        request,
        metadata || {},
        this.methodInfoAuthenticate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.Auth/Authenticate',
    request,
    metadata || {},
    this.methodInfoAuthenticate);
  }

  methodInfoDeauthenticate = new grpcWeb.AbstractClientBase.MethodInfo(
    DeauthResponse,
    (request: DeauthRequest) => {
      return request.serializeBinary();
    },
    DeauthResponse.deserializeBinary
  );

  deauthenticate(
    request: DeauthRequest,
    metadata: grpcWeb.Metadata | null): Promise<DeauthResponse>;

  deauthenticate(
    request: DeauthRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeauthResponse) => void): grpcWeb.ClientReadableStream<DeauthResponse>;

  deauthenticate(
    request: DeauthRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: DeauthResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.Auth/Deauthenticate',
        request,
        metadata || {},
        this.methodInfoDeauthenticate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.Auth/Deauthenticate',
    request,
    metadata || {},
    this.methodInfoDeauthenticate);
  }

}

