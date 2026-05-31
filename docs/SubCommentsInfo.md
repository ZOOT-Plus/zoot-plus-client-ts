
# SubCommentsInfo


## Properties

Name | Type
------------ | -------------
`commentId` | number
`uploader` | string
`uploaderId` | string
`message` | string
`uploadTime` | Date
`like` | number
`dislike` | number
`fromCommentId` | number
`mainCommentId` | number
`deleted` | boolean

## Example

```typescript
import type { SubCommentsInfo } from 'maa-copilot-client'

// TODO: Update the object below with actual values
const example = {
  "commentId": null,
  "uploader": null,
  "uploaderId": null,
  "message": null,
  "uploadTime": null,
  "like": null,
  "dislike": null,
  "fromCommentId": null,
  "mainCommentId": null,
  "deleted": null,
} satisfies SubCommentsInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubCommentsInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


