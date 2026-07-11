
# CopilotDeleteRequest

删除作业仅需 id，与类型无关，故独立出 CUD 的 sealed 体系，避免要求客户端附带 type 判别字段。

## Properties

Name | Type
------------ | -------------
`id` | number

## Example

```typescript
import type { CopilotDeleteRequest } from 'zoot-plus-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
} satisfies CopilotDeleteRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CopilotDeleteRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


