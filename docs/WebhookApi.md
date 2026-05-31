# WebhookApi

All URIs are relative to *http://localhost:8848*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**levelOpenStatusUpdate**](WebhookApi.md#levelopenstatusupdate) | **POST** /webhook/levels/open-status/sync |  |
| [**levelsUpdate**](WebhookApi.md#levelsupdate) | **POST** /webhook/levels/sync |  |



## levelOpenStatusUpdate

> levelOpenStatusUpdate()



### Example

```ts
import {
  Configuration,
  WebhookApi,
} from 'maa-copilot-client';
import type { LevelOpenStatusUpdateRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: API_Key
    apiKey: "YOUR API KEY",
  });
  const api = new WebhookApi(config);

  try {
    const data = await api.levelOpenStatusUpdate();
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

`void` (Empty response body)

### Authorization

[API_Key](../README.md#API_Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## levelsUpdate

> levelsUpdate()



### Example

```ts
import {
  Configuration,
  WebhookApi,
} from 'maa-copilot-client';
import type { LevelsUpdateRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: API_Key
    apiKey: "YOUR API KEY",
  });
  const api = new WebhookApi(config);

  try {
    const data = await api.levelsUpdate();
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

`void` (Empty response body)

### Authorization

[API_Key](../README.md#API_Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

