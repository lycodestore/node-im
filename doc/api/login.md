>url: /login
>method: post
>params: 
```
{
    username: string,
    password: string
}
```
success return:
```
{
    stateCode: 200,
    stateMsg: '成功',
    result: {
        token: 'xxxxxx'
    }
}
```

fail return:
```
{
    stateCode: 401,
    stateMsg: '未获取授权',
    result: null
}
```