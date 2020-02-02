
// tslint:disable: object-literal-key-quotes
const schema = {
  "version": "tynder/1.0",
  "ns": {
    ".": {
      "GreetingRequestMessage": {
        "kind": "object",
        "members": [
          [
            "name",
            {
              "kind": "primitive",
              "primitiveName": "string",
              "pattern": "/^[A-Z].+$/",
              "name": "name"
            },
            false,
            "My name"
          ]
        ],
        "docComment": "Greeting API request message",
        "typeName": "GreetingRequestMessage",
        "name": "GreetingRequestMessage"
      },
      "GreetingResponseMessage": {
        "kind": "object",
        "members": [
          [
            "greeting",
            {
              "kind": "primitive",
              "primitiveName": "string",
              "pattern": "/^H.+$/",
              "name": "greeting"
            },
            false,
            "Greeting words"
          ],
          [
            "to",
            {
              "kind": "primitive",
              "primitiveName": "string",
              "name": "to"
            },
            false,
            "Greeting to"
          ]
        ],
        "docComment": "Greeting API response message",
        "typeName": "GreetingResponseMessage",
        "name": "GreetingResponseMessage"
      }
    }
  }
};
export default schema;
// tslint:enable: object-literal-key-quotes
