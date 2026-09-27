
# LevelVersions

`/arknights/level/v2/version` 的响应体：一次往返拿到两个变体的当前版本号。

## Properties

Name | Type
------------ | -------------
`full` | string
`lite` | string

## Example

```typescript
import type { LevelVersions } from 'zoot-plus-client'

// TODO: Update the object below with actual values
const example = {
  "full": null,
  "lite": null,
} satisfies LevelVersions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LevelVersions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


