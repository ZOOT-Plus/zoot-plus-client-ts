
# MaaResultMapStringCacheStatInfo


## Properties

Name | Type
------------ | -------------
`statusCode` | number
`message` | string
`data` | [{ [key: string]: CacheStatInfo; }](CacheStatInfo.md)

## Example

```typescript
import type { MaaResultMapStringCacheStatInfo } from 'maa-copilot-client'

// TODO: Update the object below with actual values
const example = {
  "statusCode": null,
  "message": null,
  "data": null,
} satisfies MaaResultMapStringCacheStatInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MaaResultMapStringCacheStatInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


