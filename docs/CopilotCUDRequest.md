
# CopilotCUDRequest

作业 CUD 请求 (ADT)。作业类型由请求子类型决定，`type` 为 kotlinx/Jackson 的判别字段。   - 运行时反序列化使用 kotlinx-serialization，判别字段默认为 `type`，   值由子类的 [SerialName] 提供。为兼容不携带 `type` 的旧客户端，   缺失/为 null 的 `type` 默认视作 PRTS（见 [CopilotCUDRequestSerializer]）。  - OpenAPI/TS 客户端生成由 SpringDoc 通过 Jackson 反射完成，因此同时挂载 Jackson   的 [JsonTypeInfo]/[JsonSubTypes]，与 kotlinx 保持相同的判别字段与取值。   两套注解互不干扰：Jackson 忽略 [SerialName]，kotlinx 忽略 Jackson 注解。

## Properties

Name | Type
------------ | -------------
`id` | number
`content` | string
`status` | [CopilotSetStatus](CopilotSetStatus.md)
`type` | string

## Example

```typescript
import type { CopilotCUDRequest } from 'zoot-plus-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "content": null,
  "status": null,
  "type": null,
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


