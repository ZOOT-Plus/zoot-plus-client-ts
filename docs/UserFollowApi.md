# UserFollowApi

All URIs are relative to *http://localhost:8848*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**follow**](UserFollowApi.md#follow) | **POST** /follow/follow/{followUserId} | 关注用户 |
| [**getFansList**](UserFollowApi.md#getfanslist) | **GET** /follow/fansList | 获取粉丝列表 |
| [**getFollowingList**](UserFollowApi.md#getfollowinglist) | **GET** /follow/followingList | 获取关注列表 |
| [**unfollow**](UserFollowApi.md#unfollow) | **POST** /follow/unfollow/{followUserId} | 取消关注 |



## follow

> MaaResultUnit follow(followUserId)

关注用户

### Example

```ts
import {
  Configuration,
  UserFollowApi,
} from 'maa-copilot-client';
import type { FollowRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserFollowApi(config);

  const body = {
    // number
    followUserId: 789,
  } satisfies FollowRequest;

  try {
    const data = await api.follow(body);
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
| **followUserId** | `number` |  | [Defaults to `undefined`] |

### Return type

[**MaaResultUnit**](MaaResultUnit.md)

### Authorization

[Jwt](../README.md#Jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 关注结果 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFansList

> MaaResultPagedDTOMaaUserInfo getFansList(page, size)

获取粉丝列表

### Example

```ts
import {
  Configuration,
  UserFollowApi,
} from 'maa-copilot-client';
import type { GetFansListRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserFollowApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    size: 56,
  } satisfies GetFansListRequest;

  try {
    const data = await api.getFansList(body);
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

### Return type

[**MaaResultPagedDTOMaaUserInfo**](MaaResultPagedDTOMaaUserInfo.md)

### Authorization

[Jwt](../README.md#Jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 粉丝列表 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFollowingList

> MaaResultPagedDTOMaaUserInfo getFollowingList(page, size)

获取关注列表

### Example

```ts
import {
  Configuration,
  UserFollowApi,
} from 'maa-copilot-client';
import type { GetFollowingListRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserFollowApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    size: 56,
  } satisfies GetFollowingListRequest;

  try {
    const data = await api.getFollowingList(body);
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

### Return type

[**MaaResultPagedDTOMaaUserInfo**](MaaResultPagedDTOMaaUserInfo.md)

### Authorization

[Jwt](../README.md#Jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 关注列表 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## unfollow

> MaaResultUnit unfollow(followUserId)

取消关注

### Example

```ts
import {
  Configuration,
  UserFollowApi,
} from 'maa-copilot-client';
import type { UnfollowRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserFollowApi(config);

  const body = {
    // number
    followUserId: 789,
  } satisfies UnfollowRequest;

  try {
    const data = await api.unfollow(body);
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
| **followUserId** | `number` |  | [Defaults to `undefined`] |

### Return type

[**MaaResultUnit**](MaaResultUnit.md)

### Authorization

[Jwt](../README.md#Jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 取消关注结果 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

