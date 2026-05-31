
# CopilotSetQuery


## Properties

Name | Type
------------ | -------------
`page` | number
`limit` | number
`keyword` | string
`creatorId` | string
`onlyFollowing` | boolean
`copilotIds` | Array&lt;number&gt;
`desc` | boolean
`orderBy` | string

## Example

```typescript
import type { CopilotSetQuery } from 'maa-copilot-client'

// TODO: Update the object below with actual values
const example = {
  "page": null,
  "limit": null,
  "keyword": null,
  "creatorId": null,
  "onlyFollowing": null,
  "copilotIds": null,
  "desc": null,
  "orderBy": null,
} satisfies CopilotSetQuery

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CopilotSetQuery
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


