# CommentAreaApi

All URIs are relative to *http://localhost:8848*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteComments**](CommentAreaApi.md#deletecomments) | **POST** /comments/delete | 删除评论 |
| [**modifyStatus1**](CommentAreaApi.md#modifystatus1) | **GET** /comments/status | 设置通知接收状态 |
| [**queriesCommentsArea**](CommentAreaApi.md#queriescommentsarea) | **GET** /comments/query | 分页查询评论 |
| [**ratesComments**](CommentAreaApi.md#ratescomments) | **POST** /comments/rating | 为评论点赞 |
| [**sendComments**](CommentAreaApi.md#sendcomments) | **POST** /comments/add | 发送评论 |
| [**toppingComments**](CommentAreaApi.md#toppingcomments) | **POST** /comments/topping | 为评论置顶/取消置顶 |



## deleteComments

> MaaResultString deleteComments(commentsDeleteDTO)

删除评论

### Example

```ts
import {
  Configuration,
  CommentAreaApi,
} from 'maa-copilot-client';
import type { DeleteCommentsRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CommentAreaApi(config);

  const body = {
    // CommentsDeleteDTO
    commentsDeleteDTO: ...,
  } satisfies DeleteCommentsRequest;

  try {
    const data = await api.deleteComments(body);
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
| **commentsDeleteDTO** | [CommentsDeleteDTO](CommentsDeleteDTO.md) |  | |

### Return type

[**MaaResultString**](MaaResultString.md)

### Authorization

[Jwt](../README.md#Jwt)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 评论删除结果 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## modifyStatus1

> MaaResultString modifyStatus1(id, status)

设置通知接收状态

### Example

```ts
import {
  Configuration,
  CommentAreaApi,
} from 'maa-copilot-client';
import type { ModifyStatus1Request } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CommentAreaApi(config);

  const body = {
    // number
    id: 789,
    // boolean
    status: true,
  } satisfies ModifyStatus1Request;

  try {
    const data = await api.modifyStatus1(body);
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
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## queriesCommentsArea

> MaaResultCommentsAreaInfo queriesCommentsArea(copilotId, page, limit, desc, orderBy, justSeeId)

分页查询评论

### Example

```ts
import {
  Configuration,
  CommentAreaApi,
} from 'maa-copilot-client';
import type { QueriesCommentsAreaRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const api = new CommentAreaApi();

  const body = {
    // number
    copilotId: 789,
    // number (optional)
    page: 56,
    // number (optional)
    limit: 56,
    // boolean (optional)
    desc: true,
    // string (optional)
    orderBy: orderBy_example,
    // number (optional)
    justSeeId: 789,
  } satisfies QueriesCommentsAreaRequest;

  try {
    const data = await api.queriesCommentsArea(body);
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
| **page** | `number` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |
| **desc** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **orderBy** | `string` |  | [Optional] [Defaults to `undefined`] |
| **justSeeId** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**MaaResultCommentsAreaInfo**](MaaResultCommentsAreaInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 评论区信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## ratesComments

> MaaResultString ratesComments(commentsRatingDTO)

为评论点赞

### Example

```ts
import {
  Configuration,
  CommentAreaApi,
} from 'maa-copilot-client';
import type { RatesCommentsRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CommentAreaApi(config);

  const body = {
    // CommentsRatingDTO
    commentsRatingDTO: ...,
  } satisfies RatesCommentsRequest;

  try {
    const data = await api.ratesComments(body);
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
| **commentsRatingDTO** | [CommentsRatingDTO](CommentsRatingDTO.md) |  | |

### Return type

[**MaaResultString**](MaaResultString.md)

### Authorization

[Jwt](../README.md#Jwt)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 点赞结果 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sendComments

> MaaResultString sendComments(commentsAddDTO)

发送评论

### Example

```ts
import {
  Configuration,
  CommentAreaApi,
} from 'maa-copilot-client';
import type { SendCommentsRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CommentAreaApi(config);

  const body = {
    // CommentsAddDTO
    commentsAddDTO: ...,
  } satisfies SendCommentsRequest;

  try {
    const data = await api.sendComments(body);
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
| **commentsAddDTO** | [CommentsAddDTO](CommentsAddDTO.md) |  | |

### Return type

[**MaaResultString**](MaaResultString.md)

### Authorization

[Jwt](../README.md#Jwt)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 发送评论结果 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## toppingComments

> MaaResultString toppingComments(commentsToppingDTO)

为评论置顶/取消置顶

### Example

```ts
import {
  Configuration,
  CommentAreaApi,
} from 'maa-copilot-client';
import type { ToppingCommentsRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CommentAreaApi(config);

  const body = {
    // CommentsToppingDTO
    commentsToppingDTO: ...,
  } satisfies ToppingCommentsRequest;

  try {
    const data = await api.toppingComments(body);
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
| **commentsToppingDTO** | [CommentsToppingDTO](CommentsToppingDTO.md) |  | |

### Return type

[**MaaResultString**](MaaResultString.md)

### Authorization

[Jwt](../README.md#Jwt)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 置顶/取消置顶结果 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

