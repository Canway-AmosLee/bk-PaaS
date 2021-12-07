/**
@api {get} /api/c/compapi/bk_login/get_user/ get_user
@apiName get_user
@apiGroup API-BK_LOGIN
@apiVersion 1.0.0
@apiDescription 获取用户信息
@apiParam {string} app_code 应用ID
@apiParam {string} app_secret 应用TOKEN，可以通过 蓝鲸智云开发者中心 -> 点击应用ID -> 基本信息 获取
@apiParam {string} [bk_token] 当前用户登录态，可以通过Cookie获取
@apiParam {string} [username] 当前用户用户名，白名单中app可使用
@apiParamExample {json} Request-Example:
    {
        "app_code": "esb_test",
        "app_secret": "xxx",
        "bk_token": "xxx",
    }
@apiSuccessExample {json} Success-Response
    HTTP/1.1 200 OK
    {
        "result": true,
        "code": "00",
        "message": "用户信息获取成功",
        "data": {
            "username": "admin",
            "qq": "12345",
            "phone": "12345678911",
            "role": "1",
            "email": "11@qq.com",
            "chname": "管理员"
        },
    }
@apiSuccess {Object} data 返回数据，成功返回请求数据
@apiSuccess (data) {string} role  用户角色，0：普通用户，1：超级管理员，2：开发者，3：职能化用户，4：审计员
*/