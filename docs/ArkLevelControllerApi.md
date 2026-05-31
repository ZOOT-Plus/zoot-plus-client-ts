# ArkLevelControllerApi

All URIs are relative to *http://localhost:8848*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getLevels**](ArkLevelControllerApi.md#getlevels) | **GET** /arknights/level | 获取关卡数据 |



## getLevels

> MaaResultListArkLevelInfo getLevels()

获取关卡数据

### Example

```ts
import {
  Configuration,
  ArkLevelControllerApi,
} from 'maa-copilot-client';
import type { GetLevelsRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const api = new ArkLevelControllerApi();

  try {
    const data = await api.getLevels();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**MaaResultListArkLevelInfo**](MaaResultListArkLevelInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 关卡数据 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

