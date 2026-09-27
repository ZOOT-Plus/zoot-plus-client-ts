
# LevelPayload

`/arknights/level/v2` 的响应体。   `version` 放在**响应体**而不是响应头：当前 `CorsConfig` 没有配 `exposedHeaders`，  跨域下前端读不到自定义响应头；放 body 不用动 CORS，也不会因将来有人调整 CORS 而静默失效。

## Properties

Name | Type
------------ | -------------
`version` | string
`levels` | [Array&lt;ArkLevelInfoV2&gt;](ArkLevelInfoV2.md)

## Example

```typescript
import type { LevelPayload } from 'zoot-plus-client'

// TODO: Update the object below with actual values
const example = {
  "version": null,
  "levels": null,
} satisfies LevelPayload

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LevelPayload
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


