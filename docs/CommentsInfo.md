
# CommentsInfo


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
`topping` | boolean
`subCommentsInfos` | [Array&lt;SubCommentsInfo&gt;](SubCommentsInfo.md)

## Example

```typescript
import type { CommentsInfo } from 'maa-copilot-client'

// TODO: Update the object below with actual values
const example = {
  "commentId": null,
  "uploader": null,
  "uploaderId": null,
  "message": null,
  "uploadTime": null,
  "like": null,
  "dislike": null,
  "topping": null,
  "subCommentsInfos": null,
} satisfies CommentsInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CommentsInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


