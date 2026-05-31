
# CopilotCUDRequest


## Properties

Name | Type
------------ | -------------
`content` | string
`id` | number
`status` | [CopilotSetStatus](CopilotSetStatus.md)

## Example

```typescript
import type { CopilotCUDRequest } from 'maa-copilot-client'

// TODO: Update the object below with actual values
const example = {
  "content": null,
  "id": null,
  "status": null,
} satisfies CopilotCUDRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CopilotCUDRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


