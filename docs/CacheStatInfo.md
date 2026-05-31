
# CacheStatInfo


## Properties

Name | Type
------------ | -------------
`hitRate` | number
`missRate` | number
`hitCount` | number
`missCount` | number
`loadCount` | number
`evictionCount` | number
`averageLoadPenalty` | number

## Example

```typescript
import type { CacheStatInfo } from 'maa-copilot-client'

// TODO: Update the object below with actual values
const example = {
  "hitRate": null,
  "missRate": null,
  "hitCount": null,
  "missCount": null,
  "loadCount": null,
  "evictionCount": null,
  "averageLoadPenalty": null,
} satisfies CacheStatInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CacheStatInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


