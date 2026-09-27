# ArkLevelControllerApi

All URIs are relative to *http://localhost:8848*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getLevelVersions**](ArkLevelControllerApi.md#getlevelversions) | **GET** /arknights/level/v2/version | 获取关卡数据版本号（v2） |
| [**getLevels**](ArkLevelControllerApi.md#getlevels) | **GET** /arknights/level | 获取关卡数据 |
| [**getLevelsV2**](ArkLevelControllerApi.md#getlevelsv2) | **GET** /arknights/level/v2 | 获取关卡数据（v2，内容寻址） |



## getLevelVersions

> MaaResultLevelVersions getLevelVersions()

获取关卡数据版本号（v2）

版本探测端点：一次往返取到两个变体的当前版本号，客户端据此决定是否要重新拉数据。   与内容端点都以 &#x60;lite&#x60; 为缓存键命中 [ArkLevelV2Service.snapshot] 的同一批快照，因此二者给出的  版本号**不可能互相矛盾**。

### Example

```ts
import {
  Configuration,
  ArkLevelControllerApi,
} from 'zoot-plus-client';
import type { GetLevelVersionsRequest } from 'zoot-plus-client';

async function example() {
  console.log("🚀 Testing zoot-plus-client SDK...");
  const api = new ArkLevelControllerApi();

  try {
    const data = await api.getLevelVersions();
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

[**MaaResultLevelVersions**](MaaResultLevelVersions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 关卡数据版本号 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLevels

> MaaResultListArkLevelInfo getLevels()

获取关卡数据

### Example

```ts
import {
  Configuration,
  ArkLevelControllerApi,
} from 'zoot-plus-client';
import type { GetLevelsRequest } from 'zoot-plus-client';

async function example() {
  console.log("🚀 Testing zoot-plus-client SDK...");
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


## getLevelsV2

> MaaResultLevelPayload getLevelsV2(v, lite, withSize)

获取关卡数据（v2，内容寻址）

关卡数据的版本化缓存端点（面向本站前端）。   与 v1 的差别只有两点：可用查询参数选择变体（&#x60;lite&#x60;/&#x60;withSize&#x60;），以及按「内容寻址 URL + 长缓存」  返回 —— 客户端带上本地版本号 &#x60;v&#x60;，命中时响应为 &#x60;immutable&#x60;，浏览器此后永久命中本地缓存，  不产生任何请求。版本号不匹配时返回**当前**数据（不保留历史快照）并短缓存，客户端更新本地版本号  后即进入 immutable 通道，构成自愈路径。   参数顺序与写法固定在 &#x60;v&#x60; → &#x60;lite&#x60; → &#x60;withSize&#x60;，值为 false 的开关**省略不写**：WAF 把查询串计入  缓存键且不做归一化（实测 &#x60;?a&#x3D;1&amp;b&#x3D;2&#x60; 与 &#x60;?b&#x3D;2&amp;a&#x3D;1&#x60; 是两个独立条目），放任变体写法会让同一份内容  在浏览器与 WAF 里各占多份。写法不规范的请求仍返回正确内容，只是走短缓存，不进 immutable 通道。   返回可空：请求带 &#x60;If-None-Match&#x60; 且与当前版本一致时，[ServletWebRequest.checkNotModified] 会把响应  置为 304 并返回 true，此处返回 null 让 Spring 不写响应体（若照常返回 &#x60;MaaResult&#x60;，304 也会带 body）。  返回类型可空**不影响**生成的 OpenAPI——实测 schema 仍是 &#x60;MaaResultLevelPayload&#x60;、响应仍是 &#x60;default&#x60;。

### Example

```ts
import {
  Configuration,
  ArkLevelControllerApi,
} from 'zoot-plus-client';
import type { GetLevelsV2Request } from 'zoot-plus-client';

async function example() {
  console.log("🚀 Testing zoot-plus-client SDK...");
  const api = new ArkLevelControllerApi();

  const body = {
    // string (optional)
    v: v_example,
    // boolean (optional)
    lite: true,
    // boolean (optional)
    withSize: true,
  } satisfies GetLevelsV2Request;

  try {
    const data = await api.getLevelsV2(body);
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
| **v** | `string` |  | [Optional] [Defaults to `undefined`] |
| **lite** | `boolean` |  | [Optional] [Defaults to `false`] |
| **withSize** | `boolean` |  | [Optional] [Defaults to `false`] |

### Return type

[**MaaResultLevelPayload**](MaaResultLevelPayload.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | 关卡数据（版本化缓存） |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

