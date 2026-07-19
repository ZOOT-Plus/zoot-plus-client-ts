
# FollowStatusInfo


## Properties

Name | Type
------------ | -------------
`following` | boolean
`specialFollow` | boolean
`relation` | string
`followedAt` | Date

## Example

```typescript
import type { FollowStatusInfo } from 'zoot-plus-client'

// TODO: Update the object below with actual values
const example = {
  "following": null,
  "specialFollow": null,
  "relation": null,
  "followedAt": null,
} satisfies FollowStatusInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FollowStatusInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


