# CopilotSetApi

All URIs are relative to *http://localhost:8848*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addCopilotIds**](CopilotSetApi.md#addcopilotids) | **POST** /set/add | 添加作业集作业列表 |
| [**createSet**](CopilotSetApi.md#createset) | **POST** /set/create | 创建作业集 |
| [**deleteCopilotSet**](CopilotSetApi.md#deletecopilotset) | **POST** /set/delete | 删除作业集 |
| [**getSet**](CopilotSetApi.md#getset) | **GET** /set/get | 查询作业集详情 |
| [**querySets**](CopilotSetApi.md#querysets) | **POST** /set/query | 查询作业集列表 |
| [**removeCopilotIds**](CopilotSetApi.md#removecopilotids) | **POST** /set/remove | 添加作业集作业列表 |
| [**updateCopilotSet**](CopilotSetApi.md#updatecopilotset) | **POST** /set/update | 更新作业集信息 |



## addCopilotIds

> MaaResultUnit addCopilotIds(copilotSetModCopilotsReq)

添加作业集作业列表

### Example

```ts
import {
  Configuration,
  CopilotSetApi,
} from 'maa-copilot-client';
import type { AddCopilotIdsRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CopilotSetApi(config);

  const body = {
    // CopilotSetModCopilotsReq
    copilotSetModCopilotsReq: ...,
  } satisfies AddCopilotIdsRequest;

  try {
    const data = await api.addCopilotIds(body);
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
| **copilotSetModCopilotsReq** | [CopilotSetModCopilotsReq](CopilotSetModCopilotsReq.md) |  | |

### Return type

[**MaaResultUnit**](MaaResultUnit.md)

### Authorization

[Jwt](../README.md#Jwt)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createSet

> MaaResultLong createSet(copilotSetCreateReq)

创建作业集

### Example

```ts
import {
  Configuration,
  CopilotSetApi,
} from 'maa-copilot-client';
import type { CreateSetRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CopilotSetApi(config);

  const body = {
    // CopilotSetCreateReq
    copilotSetCreateReq: ...,
  } satisfies CreateSetRequest;

  try {
    const data = await api.createSet(body);
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
| **copilotSetCreateReq** | [CopilotSetCreateReq](CopilotSetCreateReq.md) |  | |

### Return type

[**MaaResultLong**](MaaResultLong.md)

### Authorization

[Jwt](../README.md#Jwt)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 作业集id |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCopilotSet

> MaaResultUnit deleteCopilotSet(commonIdReqLong)

删除作业集

### Example

```ts
import {
  Configuration,
  CopilotSetApi,
} from 'maa-copilot-client';
import type { DeleteCopilotSetRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CopilotSetApi(config);

  const body = {
    // CommonIdReqLong
    commonIdReqLong: ...,
  } satisfies DeleteCopilotSetRequest;

  try {
    const data = await api.deleteCopilotSet(body);
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
| **commonIdReqLong** | [CommonIdReqLong](CommonIdReqLong.md) |  | |

### Return type

[**MaaResultUnit**](MaaResultUnit.md)

### Authorization

[Jwt](../README.md#Jwt)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSet

> MaaResultCopilotSetRes getSet(id)

查询作业集详情

### Example

```ts
import {
  Configuration,
  CopilotSetApi,
} from 'maa-copilot-client';
import type { GetSetRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const api = new CopilotSetApi();

  const body = {
    // number | 作业集id
    id: 789,
  } satisfies GetSetRequest;

  try {
    const data = await api.getSet(body);
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
| **id** | `number` | 作业集id | [Defaults to `undefined`] |

### Return type

[**MaaResultCopilotSetRes**](MaaResultCopilotSetRes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 作业集详情 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## querySets

> MaaResultPagedDTOCopilotSetListRes querySets(copilotSetQuery)

查询作业集列表

### Example

```ts
import {
  Configuration,
  CopilotSetApi,
} from 'maa-copilot-client';
import type { QuerySetsRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const api = new CopilotSetApi();

  const body = {
    // CopilotSetQuery
    copilotSetQuery: ...,
  } satisfies QuerySetsRequest;

  try {
    const data = await api.querySets(body);
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
| **copilotSetQuery** | [CopilotSetQuery](CopilotSetQuery.md) |  | |

### Return type

[**MaaResultPagedDTOCopilotSetListRes**](MaaResultPagedDTOCopilotSetListRes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 作业集id |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeCopilotIds

> MaaResultUnit removeCopilotIds(copilotSetModCopilotsReq)

添加作业集作业列表

### Example

```ts
import {
  Configuration,
  CopilotSetApi,
} from 'maa-copilot-client';
import type { RemoveCopilotIdsRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CopilotSetApi(config);

  const body = {
    // CopilotSetModCopilotsReq
    copilotSetModCopilotsReq: ...,
  } satisfies RemoveCopilotIdsRequest;

  try {
    const data = await api.removeCopilotIds(body);
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
| **copilotSetModCopilotsReq** | [CopilotSetModCopilotsReq](CopilotSetModCopilotsReq.md) |  | |

### Return type

[**MaaResultUnit**](MaaResultUnit.md)

### Authorization

[Jwt](../README.md#Jwt)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCopilotSet

> MaaResultUnit updateCopilotSet(copilotSetUpdateReq)

更新作业集信息

### Example

```ts
import {
  Configuration,
  CopilotSetApi,
} from 'maa-copilot-client';
import type { UpdateCopilotSetRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CopilotSetApi(config);

  const body = {
    // CopilotSetUpdateReq
    copilotSetUpdateReq: ...,
  } satisfies UpdateCopilotSetRequest;

  try {
    const data = await api.updateCopilotSet(body);
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
| **copilotSetUpdateReq** | [CopilotSetUpdateReq](CopilotSetUpdateReq.md) |  | |

### Return type

[**MaaResultUnit**](MaaResultUnit.md)

### Authorization

[Jwt](../README.md#Jwt)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

