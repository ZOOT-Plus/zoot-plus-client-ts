
# PasswordResetVCodeDTO

通过邮件修改密码发送验证码请求

## Properties

Name | Type
------------ | -------------
`email` | string

## Example

```typescript
import type { PasswordResetVCodeDTO } from 'maa-copilot-client'

// TODO: Update the object below with actual values
const example = {
  "email": null,
} satisfies PasswordResetVCodeDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PasswordResetVCodeDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


