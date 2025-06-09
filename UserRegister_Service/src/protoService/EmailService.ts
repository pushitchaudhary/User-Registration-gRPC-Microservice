
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import * as path from 'path'

const PROTO_PATH = path.resolve(__dirname, '../proto/email.proto')

const packageDef = protoLoader.loadSync(PROTO_PATH)
const grpcObj = grpc.loadPackageDefinition(packageDef) as any;
const emailPackage = grpcObj.email

const emailServer = new grpc.Server()


