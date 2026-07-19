
# SiteMessageInfo


## Properties

Name | Type
------------ | -------------
`id` | number
`type` | string
`title` | string
`content` | string
`senderId` | number
`senderName` | string
`copilotId` | number
`createdAt` | Date
`readAt` | Date
`isRead` | boolean

## Example

```typescript
import type { SiteMessageInfo } from 'zoot-plus-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "type": null,
  "title": null,
  "content": null,
  "senderId": null,
  "senderName": null,
  "copilotId": null,
  "createdAt": null,
  "readAt": null,
  "isRead": null,
} satisfies SiteMessageInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SiteMessageInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


