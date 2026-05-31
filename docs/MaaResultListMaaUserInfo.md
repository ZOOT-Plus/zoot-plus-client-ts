
# MaaResultListMaaUserInfo


## Properties

Name | Type
------------ | -------------
`statusCode` | number
`message` | string
`data` | [Array&lt;MaaUserInfo&gt;](MaaUserInfo.md)

## Example

```typescript
import type { MaaResultListMaaUserInfo } from 'maa-copilot-client'

// TODO: Update the object below with actual values
const example = {
  "statusCode": null,
  "message": null,
  "data": null,
} satisfies MaaResultListMaaUserInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MaaResultListMaaUserInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


