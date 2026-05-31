# CopilotUserApi

All URIs are relative to *http://localhost:8848*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getBatchUserInfo**](CopilotUserApi.md#getbatchuserinfo) | **GET** /user/batch | 批量获取用户信息 |
| [**getMe**](CopilotUserApi.md#getme) | **GET** /user/me | 获取当前登录用户信息 |
| [**getUserInfo**](CopilotUserApi.md#getuserinfo) | **GET** /user/info | 查询用户信息 |
| [**login**](CopilotUserApi.md#login) | **POST** /user/login | 用户登录 |
| [**passwordReset**](CopilotUserApi.md#passwordreset) | **POST** /user/password/reset | 重置密码 |
| [**passwordResetRequest**](CopilotUserApi.md#passwordresetrequest) | **POST** /user/password/reset_request | 发送用于重置密码的验证码 |
| [**refresh**](CopilotUserApi.md#refresh) | **POST** /user/refresh | 刷新token |
| [**register**](CopilotUserApi.md#register) | **POST** /user/register | 用户注册 |
| [**searchUsers**](CopilotUserApi.md#searchusers) | **GET** /user/search | 用户模糊搜索 |
| [**sendRegistrationToken**](CopilotUserApi.md#sendregistrationtoken) | **POST** /user/sendRegistrationToken | 注册时发送验证码 |
| [**updateInfo**](CopilotUserApi.md#updateinfo) | **POST** /user/update/info | 更新用户详细信息 |
| [**updatePassword**](CopilotUserApi.md#updatepassword) | **POST** /user/update/password | 修改当前用户密码 |



## getBatchUserInfo

> MaaResultListMaaUserInfo getBatchUserInfo(ids)

批量获取用户信息

批量获取用户信息

### Example

```ts
import {
  Configuration,
  CopilotUserApi,
} from 'maa-copilot-client';
import type { GetBatchUserInfoRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const api = new CopilotUserApi();

  const body = {
    // Array<number>
    ids: ...,
  } satisfies GetBatchUserInfoRequest;

  try {
    const data = await api.getBatchUserInfo(body);
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
| **ids** | `Array<number>` |  | |

### Return type

[**MaaResultListMaaUserInfo**](MaaResultListMaaUserInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 用户信息列表 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMe

> MaaResultMaaUserInfo getMe()

获取当前登录用户信息

获取当前登录用户信息

### Example

```ts
import {
  Configuration,
  CopilotUserApi,
} from 'maa-copilot-client';
import type { GetMeRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CopilotUserApi(config);

  try {
    const data = await api.getMe();
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

[**MaaResultMaaUserInfo**](MaaResultMaaUserInfo.md)

### Authorization

[Jwt](../README.md#Jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 当前用户详情信息 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserInfo

> MaaResultMaaUserInfo getUserInfo(userId)

查询用户信息

查询用户信息（附带与当前用户的关系）

### Example

```ts
import {
  Configuration,
  CopilotUserApi,
} from 'maa-copilot-client';
import type { GetUserInfoRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const api = new CopilotUserApi();

  const body = {
    // string
    userId: userId_example,
  } satisfies GetUserInfoRequest;

  try {
    const data = await api.getUserInfo(body);
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
| **userId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**MaaResultMaaUserInfo**](MaaResultMaaUserInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 用户详情信息 |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## login

> MaaResultMaaLoginRsp login(loginDTO)

用户登录

用户登录

### Example

```ts
import {
  Configuration,
  CopilotUserApi,
} from 'maa-copilot-client';
import type { LoginRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const api = new CopilotUserApi();

  const body = {
    // LoginDTO | 登录参数
    loginDTO: ...,
  } satisfies LoginRequest;

  try {
    const data = await api.login(body);
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
| **loginDTO** | [LoginDTO](LoginDTO.md) | 登录参数 | |

### Return type

[**MaaResultMaaLoginRsp**](MaaResultMaaLoginRsp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 登录结果 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## passwordReset

> MaaResultUnit passwordReset(passwordResetDTO)

重置密码

邮箱重置密码

### Example

```ts
import {
  Configuration,
  CopilotUserApi,
} from 'maa-copilot-client';
import type { PasswordResetRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const api = new CopilotUserApi();

  const body = {
    // PasswordResetDTO | 通过邮箱修改密码请求
    passwordResetDTO: ...,
  } satisfies PasswordResetRequest;

  try {
    const data = await api.passwordReset(body);
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
| **passwordResetDTO** | [PasswordResetDTO](PasswordResetDTO.md) | 通过邮箱修改密码请求 | |

### Return type

[**MaaResultUnit**](MaaResultUnit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 重置密码结果 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## passwordResetRequest

> MaaResultUnit passwordResetRequest(passwordResetVCodeDTO)

发送用于重置密码的验证码

验证码重置密码功能：  发送验证码用于重置

### Example

```ts
import {
  Configuration,
  CopilotUserApi,
} from 'maa-copilot-client';
import type { PasswordResetRequestRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const api = new CopilotUserApi();

  const body = {
    // PasswordResetVCodeDTO
    passwordResetVCodeDTO: ...,
  } satisfies PasswordResetRequestRequest;

  try {
    const data = await api.passwordResetRequest(body);
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
| **passwordResetVCodeDTO** | [PasswordResetVCodeDTO](PasswordResetVCodeDTO.md) |  | |

### Return type

[**MaaResultUnit**](MaaResultUnit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 验证码发送结果 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## refresh

> MaaResultMaaLoginRsp refresh(refreshReq)

刷新token

刷新token

### Example

```ts
import {
  Configuration,
  CopilotUserApi,
} from 'maa-copilot-client';
import type { RefreshRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const api = new CopilotUserApi();

  const body = {
    // RefreshReq | http请求，用于获取请求头
    refreshReq: ...,
  } satisfies RefreshRequest;

  try {
    const data = await api.refresh(body);
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
| **refreshReq** | [RefreshReq](RefreshReq.md) | http请求，用于获取请求头 | |

### Return type

[**MaaResultMaaLoginRsp**](MaaResultMaaLoginRsp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 刷新token结果 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## register

> MaaResultMaaUserInfo register(registerDTO)

用户注册

用户注册

### Example

```ts
import {
  Configuration,
  CopilotUserApi,
} from 'maa-copilot-client';
import type { RegisterRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const api = new CopilotUserApi();

  const body = {
    // RegisterDTO | 传入用户参数
    registerDTO: ...,
  } satisfies RegisterRequest;

  try {
    const data = await api.register(body);
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
| **registerDTO** | [RegisterDTO](RegisterDTO.md) | 传入用户参数 | |

### Return type

[**MaaResultMaaUserInfo**](MaaResultMaaUserInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 注册结果 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchUsers

> MaaResultListMaaUserInfo searchUsers(userName, page, size)

用户模糊搜索

用户模糊搜索

### Example

```ts
import {
  Configuration,
  CopilotUserApi,
} from 'maa-copilot-client';
import type { SearchUsersRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const api = new CopilotUserApi();

  const body = {
    // string
    userName: userName_example,
    // number (optional)
    page: 56,
    // number (optional)
    size: 56,
  } satisfies SearchUsersRequest;

  try {
    const data = await api.searchUsers(body);
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
| **userName** | `string` |  | [Defaults to `undefined`] |
| **page** | `number` |  | [Optional] [Defaults to `undefined`] |
| **size** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**MaaResultListMaaUserInfo**](MaaResultListMaaUserInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 模糊搜索匹配结果 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sendRegistrationToken

> MaaResultUnit sendRegistrationToken(sendRegistrationTokenDTO)

注册时发送验证码

获得注册时的验证码

### Example

```ts
import {
  Configuration,
  CopilotUserApi,
} from 'maa-copilot-client';
import type { SendRegistrationTokenRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const api = new CopilotUserApi();

  const body = {
    // SendRegistrationTokenDTO
    sendRegistrationTokenDTO: ...,
  } satisfies SendRegistrationTokenRequest;

  try {
    const data = await api.sendRegistrationToken(body);
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
| **sendRegistrationTokenDTO** | [SendRegistrationTokenDTO](SendRegistrationTokenDTO.md) |  | |

### Return type

[**MaaResultUnit**](MaaResultUnit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | 发送验证码结果 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateInfo

> MaaResultUnit updateInfo(userInfoUpdateDTO)

更新用户详细信息

更新用户详细信息

### Example

```ts
import {
  Configuration,
  CopilotUserApi,
} from 'maa-copilot-client';
import type { UpdateInfoRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CopilotUserApi(config);

  const body = {
    // UserInfoUpdateDTO | 用户信息参数
    userInfoUpdateDTO: ...,
  } satisfies UpdateInfoRequest;

  try {
    const data = await api.updateInfo(body);
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
| **userInfoUpdateDTO** | [UserInfoUpdateDTO](UserInfoUpdateDTO.md) | 用户信息参数 | |

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


## updatePassword

> MaaResultUnit updatePassword(passwordUpdateDTO)

修改当前用户密码

根据原密码

### Example

```ts
import {
  Configuration,
  CopilotUserApi,
} from 'maa-copilot-client';
import type { UpdatePasswordRequest } from 'maa-copilot-client';

async function example() {
  console.log("🚀 Testing maa-copilot-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Jwt
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CopilotUserApi(config);

  const body = {
    // PasswordUpdateDTO
    passwordUpdateDTO: ...,
  } satisfies UpdatePasswordRequest;

  try {
    const data = await api.updatePassword(body);
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
| **passwordUpdateDTO** | [PasswordUpdateDTO](PasswordUpdateDTO.md) |  | |

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
| **0** | 修改密码结果 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

