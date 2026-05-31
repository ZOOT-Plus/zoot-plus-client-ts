
# CopilotInfo


## Properties

Name | Type
------------ | -------------
`id` | number
`uploadTime` | Date
`uploaderId` | string
`uploader` | string
`views` | number
`hotScore` | number
`available` | boolean
`ratingLevel` | number
`notEnoughRating` | boolean
`ratingRatio` | number
`ratingType` | number
`commentsCount` | number
`content` | string
`like` | number
`dislike` | number
`commentStatus` | string
`status` | [CopilotSetStatus](CopilotSetStatus.md)

## Example

```typescript
import type { CopilotInfo } from 'maa-copilot-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "uploadTime": null,
  "uploaderId": null,
  "uploader": null,
  "views": null,
  "hotScore": null,
  "available": null,
  "ratingLevel": null,
  "notEnoughRating": null,
  "ratingRatio": null,
  "ratingType": null,
  "commentsCount": null,
  "content": null,
  "like": null,
  "dislike": null,
  "commentStatus": null,
  "status": null,
} satisfies CopilotInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CopilotInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


