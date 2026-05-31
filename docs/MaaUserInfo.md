
# MaaUserInfo

用户可对外公开的信息

## Properties

Name | Type
------------ | -------------
`id` | string
`userName` | string
`activated` | boolean
`followingCount` | number
`fansCount` | number
`relation` | string
`followedAt` | Date

## Example

```typescript
import type { MaaUserInfo } from 'maa-copilot-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "userName": null,
  "activated": null,
  "followingCount": null,
  "fansCount": null,
  "relation": null,
  "followedAt": null,
} satisfies MaaUserInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MaaUserInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


