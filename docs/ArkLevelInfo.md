
# ArkLevelInfo


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
import type { ArkLevelInfo } from 'maa-copilot-client'

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
} satisfies ArkLevelInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ArkLevelInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


