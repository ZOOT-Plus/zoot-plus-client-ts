
# ArkLevelInfoV2

`/arknights/level/v2` 的关卡数据。   与 v1 的 [ArkLevelInfo] 相比只有一处差别：`width`/`height` 可空，默认不返回，  由 `withSize=true` 开启。null 由全局 Json 配置的 `explicitNulls = false` 整个省略键  （不是 `\"width\": null`），该行为由 `ArkLevelSerializationTest` 锁死。

## Properties

Name | Type
------------ | -------------
`levelId` | string
`stageId` | string
`catOne` | string
`catTwo` | string
`catThree` | string
`name` | string
`width` | number
`height` | number

## Example

```typescript
import type { ArkLevelInfoV2 } from 'zoot-plus-client'

// TODO: Update the object below with actual values
const example = {
  "levelId": null,
  "stageId": null,
  "catOne": null,
  "catTwo": null,
  "catThree": null,
  "name": null,
  "width": null,
  "height": null,
} satisfies ArkLevelInfoV2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ArkLevelInfoV2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


