import request from '@/utils/request'

// 执行webResult任务
export function executeWebResultTask() {
    return request({
        url: '/apify/webResultTask/executeWebResultTask',
        method: 'get',
    })
}


// 查询webResult任务切片设置列表
export function listWebResultTask(query) {
    return request({
        url: '/apify/webResultTask/list',
        method: 'get',
        params: query
    })
}

// 查询webResult任务切片设置详细
export function getWebResultTask(webResultTaskId) {
    return request({
        url: '/apify/webResultTask/' + webResultTaskId,
        method: 'get'
    })
}

// 新增webResult任务切片设置
export function addWebResultTask(data) {
    return request({
        url: '/apify/webResultTask',
        method: 'post',
        data: data
    })
}

// 修改webResult任务切片设置
export function updateWebResultTask(data) {
    return request({
        url: '/apify/webResultTask',
        method: 'put',
        data: data
    })
}

// 删除webResult任务切片设置
export function delWebResultTask(webResultTaskId) {
    return request({
        url: '/apify/webResultTask/' + webResultTaskId,
        method: 'delete'
    })
}
