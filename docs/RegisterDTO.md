
# RegisterDTO


## Properties

Name | Type
------------ | -------------
`email` | string
`userName` | string
`password` | string
`registrationToken` | string

## Example

```typescript
import type { RegisterDTO } from 'maa-copilot-client'

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "userName": null,
  "password": null,
  "registrationToken": null,
} satisfies RegisterDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RegisterDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


