
# CommentsAreaInfo


## Properties

Name | Type
------------ | -------------
`hasNext` | boolean
`page` | number
`total` | number
`data` | [Array&lt;CommentsInfo&gt;](CommentsInfo.md)

## Example

```typescript
import type { CommentsAreaInfo } from 'maa-copilot-client'

// TODO: Update the object below with actual values
const example = {
  "hasNext": null,
  "page": null,
  "total": null,
  "data": null,
} satisfies CommentsAreaInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CommentsAreaInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


