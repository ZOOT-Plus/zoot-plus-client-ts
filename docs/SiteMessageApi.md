# SiteMessageApi

All URIs are relative to *http://localhost:8848*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**list**](SiteMessageApi.md#list) | **GET** /message/list | 分页查询站内信 |
| [**read**](SiteMessageApi.md#read) | **POST** /message/read/{id} | 标记单条站内信已读 |
| [**readAll**](SiteMessageApi.md#readall) | **POST** /message/readAll | 标记全部站内信已读 |
| [**unreadCount**](SiteMessageApi.md#unreadcount) | **GET** /message/unreadCount | 查询未读站内信数量 |



## list

> MaaResultPagedDTOSiteMessageInfo list(page, size, unreadOnly)

分页查询站内信

### Example

```ts
import {
  Configuration,
  SiteMessageApi,
} from 'zoot-plus-client';
import type { ListRequest } from 'zoot-plus-client';

async function example() {
  console.log("🚀 Testing zoot-plus-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SiteMessageApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    size: 56,
    // boolean (optional)
    unreadOnly: true,
  } satisfies ListRequest;

  try {
    const data = await api.list(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` |  | [Optional] [Defaults to `undefined`] |
| **size** | `number` |  | [Optional] [Defaults to `undefined`] |
| **unreadOnly** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**MaaResultPagedDTOSiteMessageInfo**](MaaResultPagedDTOSiteMessageInfo.md)

### Authorization

[Jwt](../README.md#Jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 站内信列表 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## read

> MaaResultBoolean read(id)

标记单条站内信已读

### Example

```ts
import {
  Configuration,
  SiteMessageApi,
} from 'zoot-plus-client';
import type { ReadRequest } from 'zoot-plus-client';

async function example() {
  console.log("🚀 Testing zoot-plus-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SiteMessageApi(config);

  const body = {
    // number
    id: 789,
  } satisfies ReadRequest;

  try {
    const data = await api.read(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` |  | [Defaults to `undefined`] |

### Return type

[**MaaResultBoolean**](MaaResultBoolean.md)

### Authorization

[Jwt](../README.md#Jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 标记结果，true&#x3D;确实标记成功，false&#x3D;该消息不存在/已读/不属于当前用户 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## readAll

> MaaResultInteger readAll()

标记全部站内信已读

### Example

```ts
import {
  Configuration,
  SiteMessageApi,
} from 'zoot-plus-client';
import type { ReadAllRequest } from 'zoot-plus-client';

async function example() {
  console.log("🚀 Testing zoot-plus-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SiteMessageApi(config);

  try {
    const data = await api.readAll();
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

[**MaaResultInteger**](MaaResultInteger.md)

### Authorization

[Jwt](../README.md#Jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 本次实际标记已读的条数 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## unreadCount

> MaaResultUnreadMessageCountInfo unreadCount()

查询未读站内信数量

### Example

```ts
import {
  Configuration,
  SiteMessageApi,
} from 'zoot-plus-client';
import type { UnreadCountRequest } from 'zoot-plus-client';

async function example() {
  console.log("🚀 Testing zoot-plus-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SiteMessageApi(config);

  try {
    const data = await api.unreadCount();
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

[**MaaResultUnreadMessageCountInfo**](MaaResultUnreadMessageCountInfo.md)

### Authorization

[Jwt](../README.md#Jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 未读站内信数量 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

