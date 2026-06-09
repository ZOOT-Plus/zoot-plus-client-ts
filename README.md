# maa-copilot-client@0.1.0

A TypeScript SDK client for the localhost API.

## Usage

First, install the SDK from npm.

```bash
npm install maa-copilot-client --save
```

Next, try it out.


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


## Documentation

### API Endpoints

All URIs are relative to *http://localhost:8848*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*ArkLevelControllerApi* | [**getLevels**](docs/ArkLevelControllerApi.md#getlevels) | **GET** /arknights/level | 获取关卡数据
*CommentAreaApi* | [**deleteComments**](docs/CommentAreaApi.md#deletecomments) | **POST** /comments/delete | 删除评论
*CommentAreaApi* | [**modifyStatus1**](docs/CommentAreaApi.md#modifystatus1) | **GET** /comments/status | 设置通知接收状态
*CommentAreaApi* | [**queriesCommentsArea**](docs/CommentAreaApi.md#queriescommentsarea) | **GET** /comments/query | 分页查询评论
*CommentAreaApi* | [**ratesComments**](docs/CommentAreaApi.md#ratescomments) | **POST** /comments/rating | 为评论点赞
*CommentAreaApi* | [**sendComments**](docs/CommentAreaApi.md#sendcomments) | **POST** /comments/add | 发送评论
*CommentAreaApi* | [**toppingComments**](docs/CommentAreaApi.md#toppingcomments) | **POST** /comments/topping | 为评论置顶/取消置顶
*CopilotControllerApi* | [**banComments**](docs/CopilotControllerApi.md#bancomments) | **GET** /copilot/ban | 禁用评论区/开启评论区
*CopilotControllerApi* | [**deleteCopilot**](docs/CopilotControllerApi.md#deletecopilot) | **POST** /copilot/delete | 删除作业
*CopilotControllerApi* | [**getCopilotById**](docs/CopilotControllerApi.md#getcopilotbyid) | **GET** /copilot/get/{id} | 获取作业
*CopilotControllerApi* | [**modifyStatus**](docs/CopilotControllerApi.md#modifystatus) | **GET** /copilot/status | 修改通知状态
*CopilotControllerApi* | [**queriesCopilot**](docs/CopilotControllerApi.md#queriescopilot) | **GET** /copilot/query | 分页查询作业，提供登录凭据时查询用户自己的作业
*CopilotControllerApi* | [**ratesCopilotOperation**](docs/CopilotControllerApi.md#ratescopilotoperation) | **POST** /copilot/rating | 为作业评分
*CopilotControllerApi* | [**updateCopilot**](docs/CopilotControllerApi.md#updatecopilot) | **POST** /copilot/update | 更新作业
*CopilotControllerApi* | [**uploadCopilot**](docs/CopilotControllerApi.md#uploadcopilot) | **POST** /copilot/upload | 上传作业
*CopilotSetApi* | [**addCopilotIds**](docs/CopilotSetApi.md#addcopilotids) | **POST** /set/add | 添加作业集作业列表
*CopilotSetApi* | [**createSet**](docs/CopilotSetApi.md#createset) | **POST** /set/create | 创建作业集
*CopilotSetApi* | [**deleteCopilotSet**](docs/CopilotSetApi.md#deletecopilotset) | **POST** /set/delete | 删除作业集
*CopilotSetApi* | [**getSet**](docs/CopilotSetApi.md#getset) | **GET** /set/get | 查询作业集详情
*CopilotSetApi* | [**querySets**](docs/CopilotSetApi.md#querysets) | **POST** /set/query | 查询作业集列表
*CopilotSetApi* | [**removeCopilotIds**](docs/CopilotSetApi.md#removecopilotids) | **POST** /set/remove | 添加作业集作业列表
*CopilotSetApi* | [**updateCopilotSet**](docs/CopilotSetApi.md#updatecopilotset) | **POST** /set/update | 更新作业集信息
*CopilotUserApi* | [**getBatchUserInfo**](docs/CopilotUserApi.md#getbatchuserinfo) | **GET** /user/batch | 批量获取用户信息
*CopilotUserApi* | [**getMe**](docs/CopilotUserApi.md#getme) | **GET** /user/me | 获取当前登录用户信息
*CopilotUserApi* | [**getUserInfo**](docs/CopilotUserApi.md#getuserinfo) | **GET** /user/info | 查询用户信息
*CopilotUserApi* | [**login**](docs/CopilotUserApi.md#login) | **POST** /user/login | 用户登录
*CopilotUserApi* | [**passwordReset**](docs/CopilotUserApi.md#passwordreset) | **POST** /user/password/reset | 重置密码
*CopilotUserApi* | [**passwordResetRequest**](docs/CopilotUserApi.md#passwordresetrequest) | **POST** /user/password/reset_request | 发送用于重置密码的验证码
*CopilotUserApi* | [**refresh**](docs/CopilotUserApi.md#refresh) | **POST** /user/refresh | 刷新token
*CopilotUserApi* | [**register**](docs/CopilotUserApi.md#register) | **POST** /user/register | 用户注册
*CopilotUserApi* | [**searchUsers**](docs/CopilotUserApi.md#searchusers) | **GET** /user/search | 用户模糊搜索
*CopilotUserApi* | [**sendRegistrationToken**](docs/CopilotUserApi.md#sendregistrationtoken) | **POST** /user/sendRegistrationToken | 注册时发送验证码
*CopilotUserApi* | [**updateInfo**](docs/CopilotUserApi.md#updateinfo) | **POST** /user/update/info | 更新用户详细信息
*CopilotUserApi* | [**updatePassword**](docs/CopilotUserApi.md#updatepassword) | **POST** /user/update/password | 修改当前用户密码
*SystemApi* | [**getIntraProcessCacheStat**](docs/SystemApi.md#getintraprocesscachestat) | **GET** /cache/stat | 返回进程内缓存统计信息
*SystemApi* | [**getSystemVersion**](docs/SystemApi.md#getsystemversion) | **GET** /version | Gets the current version of the server.
*SystemApi* | [**test**](docs/SystemApi.md#test) | **GET** / | Tests if the server is ready.
*UserFollowApi* | [**follow**](docs/UserFollowApi.md#follow) | **POST** /follow/follow/{followUserId} | 关注用户
*UserFollowApi* | [**getFansList**](docs/UserFollowApi.md#getfanslist) | **GET** /follow/fansList | 获取粉丝列表
*UserFollowApi* | [**getFollowingList**](docs/UserFollowApi.md#getfollowinglist) | **GET** /follow/followingList | 获取关注列表
*UserFollowApi* | [**unfollow**](docs/UserFollowApi.md#unfollow) | **POST** /follow/unfollow/{followUserId} | 取消关注
*WebhookApi* | [**levelOpenStatusUpdate**](docs/WebhookApi.md#levelopenstatusupdate) | **POST** /webhook/levels/open-status/sync | 
*WebhookApi* | [**levelsUpdate**](docs/WebhookApi.md#levelsupdate) | **POST** /webhook/levels/sync | 


### Models

- [ArkLevelInfo](docs/ArkLevelInfo.md)
- [CacheStatInfo](docs/CacheStatInfo.md)
- [CommentsAddDTO](docs/CommentsAddDTO.md)
- [CommentsAreaInfo](docs/CommentsAreaInfo.md)
- [CommentsDeleteDTO](docs/CommentsDeleteDTO.md)
- [CommentsInfo](docs/CommentsInfo.md)
- [CommentsRatingDTO](docs/CommentsRatingDTO.md)
- [CommentsToppingDTO](docs/CommentsToppingDTO.md)
- [CommonIdReqLong](docs/CommonIdReqLong.md)
- [CopilotCUDRequest](docs/CopilotCUDRequest.md)
- [CopilotInfo](docs/CopilotInfo.md)
- [CopilotPageInfo](docs/CopilotPageInfo.md)
- [CopilotRatingReq](docs/CopilotRatingReq.md)
- [CopilotSetCreateReq](docs/CopilotSetCreateReq.md)
- [CopilotSetListRes](docs/CopilotSetListRes.md)
- [CopilotSetModCopilotsReq](docs/CopilotSetModCopilotsReq.md)
- [CopilotSetQuery](docs/CopilotSetQuery.md)
- [CopilotSetRes](docs/CopilotSetRes.md)
- [CopilotSetStatus](docs/CopilotSetStatus.md)
- [CopilotSetUpdateReq](docs/CopilotSetUpdateReq.md)
- [GitInfo](docs/GitInfo.md)
- [LoginDTO](docs/LoginDTO.md)
- [MaaLoginRsp](docs/MaaLoginRsp.md)
- [MaaResult](docs/MaaResult.md)
- [MaaResultCommentsAreaInfo](docs/MaaResultCommentsAreaInfo.md)
- [MaaResultCopilotInfo](docs/MaaResultCopilotInfo.md)
- [MaaResultCopilotPageInfo](docs/MaaResultCopilotPageInfo.md)
- [MaaResultCopilotSetRes](docs/MaaResultCopilotSetRes.md)
- [MaaResultListArkLevelInfo](docs/MaaResultListArkLevelInfo.md)
- [MaaResultListMaaUserInfo](docs/MaaResultListMaaUserInfo.md)
- [MaaResultLong](docs/MaaResultLong.md)
- [MaaResultMaaLoginRsp](docs/MaaResultMaaLoginRsp.md)
- [MaaResultMaaSystemInfo](docs/MaaResultMaaSystemInfo.md)
- [MaaResultMaaUserInfo](docs/MaaResultMaaUserInfo.md)
- [MaaResultMapStringCacheStatInfo](docs/MaaResultMapStringCacheStatInfo.md)
- [MaaResultPagedDTOCopilotSetListRes](docs/MaaResultPagedDTOCopilotSetListRes.md)
- [MaaResultPagedDTOMaaUserInfo](docs/MaaResultPagedDTOMaaUserInfo.md)
- [MaaResultString](docs/MaaResultString.md)
- [MaaResultUnit](docs/MaaResultUnit.md)
- [MaaSystemInfo](docs/MaaSystemInfo.md)
- [MaaUserInfo](docs/MaaUserInfo.md)
- [PagedDTOCopilotSetListRes](docs/PagedDTOCopilotSetListRes.md)
- [PagedDTOMaaUserInfo](docs/PagedDTOMaaUserInfo.md)
- [PasswordResetDTO](docs/PasswordResetDTO.md)
- [PasswordResetVCodeDTO](docs/PasswordResetVCodeDTO.md)
- [PasswordUpdateDTO](docs/PasswordUpdateDTO.md)
- [RefreshReq](docs/RefreshReq.md)
- [RegisterDTO](docs/RegisterDTO.md)
- [SendRegistrationTokenDTO](docs/SendRegistrationTokenDTO.md)
- [SubCommentsInfo](docs/SubCommentsInfo.md)
- [UserInfoUpdateDTO](docs/UserInfoUpdateDTO.md)

### Authorization


Authentication schemes defined for the API:
<a id="Jwt"></a>
#### Jwt


- **Type**: HTTP Bearer Token authentication
<a id="API_Key"></a>
#### API_Key


- **Type**: API key
- **API key parameter name**: `X-API-Key`
- **Location**: HTTP header

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `v2.0.0`
- Package version: `0.1.0`
- Generator version: `7.22.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0.html)
