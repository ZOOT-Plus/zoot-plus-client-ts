
# MaaLoginRsp


## Properties

Name | Type
------------ | -------------
`token` | string
`validBefore` | Date
`validAfter` | Date
`refreshToken` | string
`refreshTokenValidBefore` | Date
`refreshTokenValidAfter` | Date
`userInfo` | [MaaUserInfo](MaaUserInfo.md)

## Example

```typescript
import type { MaaLoginRsp } from 'maa-copilot-client'

// TODO: Update the object below with actual values
const example = {
  "token": null,
  "validBefore": null,
  "validAfter": null,
  "refreshToken": null,
  "refreshTokenValidBefore": null,
  "refreshTokenValidAfter": null,
  "userInfo": null,
} satisfies MaaLoginRsp

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MaaLoginRsp
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


