
# GitInfo


## Properties

Name | Type
------------ | -------------
`branch` | string
`commitId` | string
`shortCommitId` | string
`commitTime` | Date

## Example

```typescript
import type { GitInfo } from 'maa-copilot-client'

// TODO: Update the object below with actual values
const example = {
  "branch": null,
  "commitId": null,
  "shortCommitId": null,
  "commitTime": null,
} satisfies GitInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GitInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


