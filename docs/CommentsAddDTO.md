
# CommentsAddDTO


## Properties

Name | Type
------------ | -------------
`message` | string
`copilotId` | number
`fromCommentId` | number
`notification` | boolean
`commentStatus` | string

## Example

```typescript
import type { CommentsAddDTO } from 'maa-copilot-client'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "copilotId": null,
  "fromCommentId": null,
  "notification": null,
  "commentStatus": null,
} satisfies CommentsAddDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CommentsAddDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


