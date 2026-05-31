
# CopilotSetRes


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`description` | string
`copilotIds` | Array&lt;number&gt;
`creatorId` | string
`creator` | string
`createTime` | Date
`updateTime` | Date
`status` | [CopilotSetStatus](CopilotSetStatus.md)

## Example

```typescript
import type { CopilotSetRes } from 'maa-copilot-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "description": null,
  "copilotIds": null,
  "creatorId": null,
  "creator": null,
  "createTime": null,
  "updateTime": null,
  "status": null,
} satisfies CopilotSetRes

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CopilotSetRes
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


