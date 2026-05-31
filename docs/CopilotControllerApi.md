# CopilotControllerApi

All URIs are relative to *http://localhost:8848*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**banComments**](CopilotControllerApi.md#bancomments) | **GET** /copilot/ban | 禁用评论区/开启评论区 |
| [**deleteCopilot**](CopilotControllerApi.md#deletecopilot) | **POST** /copilot/delete | 删除作业 |
| [**getCopilotById**](CopilotControllerApi.md#getcopilotbyid) | **GET** /copilot/get/{id} | 获取作业 |
| [**modifyStatus**](CopilotControllerApi.md#modifystatus) | **GET** /copilot/status | 修改通知状态 |
| [**queriesCopilot**](CopilotControllerApi.md#queriescopilot) | **GET** /copilot/query | 分页查询作业，提供登录凭据时查询用户自己的作业 |
| [**ratesCopilotOperation**](CopilotControllerApi.md#ratescopilotoperation) | **POST** /copilot/rating | 为作业评分 |
| [**updateCopilot**](CopilotControllerApi.md#updatecopilot) | **POST** /copilot/update | 更新作业 |
| [**uploadCopilot**](CopilotControllerApi.md#uploadcopilot) | **POST** /copilot/upload | 上传作业 |



## banComments

> MaaResultString banComments(copilotId, status)

禁用评论区/开启评论区

### Example

```ts
import {
  Configuration,
  CopilotControllerApi,
} from 'maa-copilot-client';
import type { BanCommentsRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CopilotControllerApi(config);

  const body = {
    // number
    copilotId: 789,
    // 'ENABLED' | 'DISABLED'
    status: status_example,
  } satisfies BanCommentsRequest;

  try {
    const data = await api.banComments(body);
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
| **copilotId** | `number` |  | [Defaults to `undefined`] |
| **status** | `ENABLED`, `DISABLED` |  | [Defaults to `undefined`] [Enum: ENABLED, DISABLED] |

### Return type

[**MaaResultString**](MaaResultString.md)

### Authorization

[Jwt](../README.md#Jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCopilot

> MaaResultUnit deleteCopilot(copilotCUDRequest)

删除作业

### Example

```ts
import {
  Configuration,
  CopilotControllerApi,
} from 'maa-copilot-client';
import type { DeleteCopilotRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CopilotControllerApi(config);

  const body = {
    // CopilotCUDRequest
    copilotCUDRequest: ...,
  } satisfies DeleteCopilotRequest;

  try {
    const data = await api.deleteCopilot(body);
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
| **copilotCUDRequest** | [CopilotCUDRequest](CopilotCUDRequest.md) |  | |

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
| **0** | 删除作业结果 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCopilotById

> MaaResultCopilotInfo getCopilotById(id)

获取作业

### Example

```ts
import {
  Configuration,
  CopilotControllerApi,
} from 'maa-copilot-client';
import type { GetCopilotByIdRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const api = new CopilotControllerApi();

  const body = {
    // number | 作业id
    id: 789,
  } satisfies GetCopilotByIdRequest;

  try {
    const data = await api.getCopilotById(body);
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
| **id** | `number` | 作业id | [Defaults to `undefined`] |

### Return type

[**MaaResultCopilotInfo**](MaaResultCopilotInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 作业信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## modifyStatus

> MaaResultString modifyStatus(id, status)

修改通知状态

### Example

```ts
import {
  Configuration,
  CopilotControllerApi,
} from 'maa-copilot-client';
import type { ModifyStatusRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CopilotControllerApi(config);

  const body = {
    // number
    id: 789,
    // boolean
    status: true,
  } satisfies ModifyStatusRequest;

  try {
    const data = await api.modifyStatus(body);
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
| **status** | `boolean` |  | [Defaults to `undefined`] |

### Return type

[**MaaResultString**](MaaResultString.md)

### Authorization

[Jwt](../README.md#Jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## queriesCopilot

> MaaResultCopilotPageInfo queriesCopilot(page, limit, levelKeyword, operator, content, document, uploaderId, desc, orderBy, language, copilotIds, status, onlyFollowing)

分页查询作业，提供登录凭据时查询用户自己的作业

### Example

```ts
import {
  Configuration,
  CopilotControllerApi,
} from 'maa-copilot-client';
import type { QueriesCopilotRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const api = new CopilotControllerApi();

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    limit: 56,
    // string (optional)
    levelKeyword: levelKeyword_example,
    // string (optional)
    operator: operator_example,
    // string (optional)
    content: content_example,
    // string (optional)
    document: document_example,
    // string (optional)
    uploaderId: uploaderId_example,
    // boolean (optional)
    desc: true,
    // string (optional)
    orderBy: orderBy_example,
    // string (optional)
    language: language_example,
    // Array<number> (optional)
    copilotIds: ...,
    // 'PRIVATE' | 'PUBLIC' (optional)
    status: status_example,
    // boolean (optional)
    onlyFollowing: true,
  } satisfies QueriesCopilotRequest;

  try {
    const data = await api.queriesCopilot(body);
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
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |
| **levelKeyword** | `string` |  | [Optional] [Defaults to `undefined`] |
| **operator** | `string` |  | [Optional] [Defaults to `undefined`] |
| **content** | `string` |  | [Optional] [Defaults to `undefined`] |
| **document** | `string` |  | [Optional] [Defaults to `undefined`] |
| **uploaderId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **desc** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **orderBy** | `string` |  | [Optional] [Defaults to `undefined`] |
| **language** | `string` |  | [Optional] [Defaults to `undefined`] |
| **copilotIds** | `Array<number>` |  | [Optional] |
| **status** | `PRIVATE`, `PUBLIC` |  | [Optional] [Defaults to `undefined`] [Enum: PRIVATE, PUBLIC] |
| **onlyFollowing** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**MaaResultCopilotPageInfo**](MaaResultCopilotPageInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 作业信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## ratesCopilotOperation

> MaaResultString ratesCopilotOperation(copilotRatingReq)

为作业评分

### Example

```ts
import {
  Configuration,
  CopilotControllerApi,
} from 'maa-copilot-client';
import type { RatesCopilotOperationRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const api = new CopilotControllerApi();

  const body = {
    // CopilotRatingReq
    copilotRatingReq: ...,
  } satisfies RatesCopilotOperationRequest;

  try {
    const data = await api.ratesCopilotOperation(body);
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
| **copilotRatingReq** | [CopilotRatingReq](CopilotRatingReq.md) |  | |

### Return type

[**MaaResultString**](MaaResultString.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 评分结果 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCopilot

> MaaResultUnit updateCopilot(copilotCUDRequest)

更新作业

### Example

```ts
import {
  Configuration,
  CopilotControllerApi,
} from 'maa-copilot-client';
import type { UpdateCopilotRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CopilotControllerApi(config);

  const body = {
    // CopilotCUDRequest
    copilotCUDRequest: ...,
  } satisfies UpdateCopilotRequest;

  try {
    const data = await api.updateCopilot(body);
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
| **copilotCUDRequest** | [CopilotCUDRequest](CopilotCUDRequest.md) |  | |

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
| **0** | 更新结果 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadCopilot

> MaaResultLong uploadCopilot(copilotCUDRequest)

上传作业

### Example

```ts
import {
  Configuration,
  CopilotControllerApi,
} from 'maa-copilot-client';
import type { UploadCopilotRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CopilotControllerApi(config);

  const body = {
    // CopilotCUDRequest
    copilotCUDRequest: ...,
  } satisfies UploadCopilotRequest;

  try {
    const data = await api.uploadCopilot(body);
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
| **copilotCUDRequest** | [CopilotCUDRequest](CopilotCUDRequest.md) |  | |

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
| **0** | 上传作业结果 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

