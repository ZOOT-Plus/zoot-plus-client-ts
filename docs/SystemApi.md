# SystemApi

All URIs are relative to *http://localhost:8848*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getIntraProcessCacheStat**](SystemApi.md#getintraprocesscachestat) | **GET** /cache/stat | 返回进程内缓存统计信息 |
| [**getSystemVersion**](SystemApi.md#getsystemversion) | **GET** /version | Gets the current version of the server. |
| [**test**](SystemApi.md#test) | **GET** / | Tests if the server is ready. |



## getIntraProcessCacheStat

> MaaResultMapStringCacheStatInfo getIntraProcessCacheStat()

返回进程内缓存统计信息

返回进程内缓存统计信息

### Example

```ts
import {
  Configuration,
  SystemApi,
} from 'maa-copilot-client';
import type { GetIntraProcessCacheStatRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const api = new SystemApi();

  try {
    const data = await api.getIntraProcessCacheStat();
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

[**MaaResultMapStringCacheStatInfo**](MaaResultMapStringCacheStatInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | [MaaResult&lt;Map&lt;String, CacheStatInfo&gt;&gt;] |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSystemVersion

> MaaResultMaaSystemInfo getSystemVersion()

Gets the current version of the server.

Gets the current version of the server.

### Example

```ts
import {
  Configuration,
  SystemApi,
} from 'maa-copilot-client';
import type { GetSystemVersionRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const api = new SystemApi();

  try {
    const data = await api.getSystemVersion();
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

[**MaaResultMaaSystemInfo**](MaaResultMaaSystemInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 系统版本信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## test

> MaaResult test()

Tests if the server is ready.

Tests if the server is ready.

### Example

```ts
import {
  Configuration,
  SystemApi,
} from 'maa-copilot-client';
import type { TestRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const api = new SystemApi();

  try {
    const data = await api.test();
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

[**MaaResult**](MaaResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 系统启动信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

