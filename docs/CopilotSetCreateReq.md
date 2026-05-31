
# CopilotSetCreateReq


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`copilotIds` | Array&lt;number&gt;
`status` | [CopilotSetStatus](CopilotSetStatus.md)

## Example

```typescript
import type { CopilotSetCreateReq } from 'maa-copilot-client'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "description": null,
  "copilotIds": null,
  "status": null,
} satisfies CopilotSetCreateReq

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CopilotSetCreateReq
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


