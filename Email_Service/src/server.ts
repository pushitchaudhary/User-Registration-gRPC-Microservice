import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import * as path from 'path'

const PORTO_PATH = path.resolve(__dirname, './proto/email.proto')

const packageDef = protoLoader.loadSync(PORTO_PATH)
const grpcObj = grpc.loadPackageDefinition(packageDef) as any;
const emailPackage = grpcObj.email



function sendEmail(
    call: grpc.ServerUnaryCall<any, any>,
    callback: grpc.sendUnaryData<any>
) {
    const { name, email } = call.request;
    console.log('Received user:', { name, email });

    callback(null, { message: `User ${name} with email ${email} created!` });
}

const emailServer = new grpc.Server();
emailServer.addService(emailPackage.Email.service, {
    SendEmail : sendEmail
})

emailServer.bindAsync('0.0.0.0:3002', grpc.ServerCredentials.createInsecure(), () => {
    console.log('📡 Server A gRPC running on port 3002')
    emailServer.start()  
})

// npx ts-node src/server.ts