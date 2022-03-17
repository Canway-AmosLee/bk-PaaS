### 功能描述

根据md文档名查询文档链接

### 请求参数

{{ common_args_desc }}

#### 接口参数

| 字段      |  类型      | 必选   |  描述      |
|-----------|------------|--------|------------|
| version         |  string    | 是     | 查询版本 |
| md_path         |  string    | 是     | md文档所在结构路径（如：ITSM/产品白皮书/FAQ/FAQ.md）|



### 请求参数示例

```json
{
    "bk_app_code": "esb_test",
    "bk_app_secret": "xxx",
    "bk_username": "xxx",
    "bk_token": "xxx",
    "version":"2.6",
    "md_path": "ITSM/产品白皮书/FAQ/FAQ.md"
}
```

### 返回结果示例

```json
{
    "result": true,
    "code": 0,
    "message": "success",
    "data": "document/2.6/2/1"
}
```

### 返回结果参数说明


| 名称    | 类型   | 描述                                    |
| ------- | ------ | ------------------------------------- |
| result  | bool   | 请求成功与否。true:请求成功；false请求失败 |
| code    | int    | 错误编码。 0表示success，>0表示失败错误    |
| message | string | 请求失败返回的错误信息                    |
| data    | object | 请求返回的数据，文档中心的URL及ID         |
