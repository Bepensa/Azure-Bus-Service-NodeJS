# Azure Service Bus with NodeJS

## Docs

How to send and receive messages with azure bus services

https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-nodejs-how-to-use-queues

Azure Service Bus trigger for Azure Functions

https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-service-bus-trigger?tabs=in-process%2Cextensionv5&pivots=programming-language-javascript

How To Create Node.js Azure Functions in Visual Studio Code

https://azurelessons.com/how-to-create-node-js-azure-functions/

## Install

Install dependencies

```
npm install
```

Install Azure Functions  Core Tools

```
npm install -g azure-functions-core-tools@4
```

Azure Storage Emulator

https://docs.microsoft.com/en-us/azure/storage/common/storage-use-emulator

Install Azure Storage Emulator

https://go.microsoft.com/fwlink/?linkid=717179&clcid=0x409

# Test

Url

http://localhost:7071/api/SendMessage

Method: POST

Body

```
{
    "to": "9991656778",
    "body": "Hello World!"
}
```