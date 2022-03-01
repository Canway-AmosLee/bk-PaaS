### 功能描述

用于对执行的实例的步骤进行操作，例如重试，忽略错误等。

### 请求参数

{{ common_args_desc }}

#### 接口参数

| 字段      |  类型      | 必选   |  描述      |
|-----------|------------|--------|------------|
| bk_biz_id   |  long       | 是     | 业务ID |
| job_instance_id   |  long       | 是     | 作业实例ID |
| step_instance_id |  long     | 是     | 步骤实例ID |
| operation_code |  int     | 是     | 操作类型：2、失败IP重做，3、忽略错误 6、确认继续 8、全部重试，9、终止确认流程，10-重新发起确认，11、进入下一步，12、强制跳过 |


##### operation_code 详细说明
| operation_code | 操作类型 | 适用步骤 | 描述 |
|-----------|------------|--------|------------|
| 2  | 失败IP重做   | 脚本执行，文件分发步骤 | 对失败的IP重新下发任务 |
| 3  | 忽略错误     | 脚本执行，文件分发步骤 | 忽略错误，继续执行     |
| 6  | 确认继续     | 人工确认步骤           | 确认继续执行           |
| 8  | 全部重试     | 脚本执行，文件分发步骤 | 对所有的IP重新下发任务 |
| 9  | 终止确认流程 | 人工确认步骤           | 确认终止执行           |
| 10 | 重新发起确认 | 人工确认步骤           | 重新发起确认           |
| 11 | 进入下一步   | 脚本执行，文件分发步骤 | 当步骤状态为终止成功，用于继续执行后续步骤 |
| 12 | 强制跳过     | 脚本执行，文件分发步骤 | 当步骤状态为终止中，用于强制跳过当前步骤，执行后续步骤|

### 请求参数示例

```json
{
    "bk_app_code": "esb_test",
    "bk_app_secret": "xxx",
    "bk_token": "xxx",
    "bk_biz_id": 1,
    "job_instance_id": 100,
    "step_instance_id": 200,
    "operation_code": 2
}
```

### 返回结果示例

```json
{
    "result": true,
    "code": 0,
    "message": "success",
    "data": {
        "step_instance_id": 200,
        "job_instance_id": 100
    }
}
```