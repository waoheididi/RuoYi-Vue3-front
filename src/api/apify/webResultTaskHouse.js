import request from '@/utils/request'

// 查询webResult任务仓库列表
export function listWebResultTaskHouse(query) {
    return request({
        url: '/apify/webResultTaskHouse/list',
        method: 'get',
        params: query
    })
}

// 查询webResult任务仓库详细
export function getWebResultTaskHouse(webResultTaskHouseId) {
    return request({
        url: '/apify/webResultTaskHouse/' + webResultTaskHouseId,
        method: 'get'
    })
}

// 新增webResult任务仓库
export function addWebResultTaskHouse(data) {
    return request({
        url: '/apify/webResultTaskHouse',
        method: 'post',
        data: data
    })
}

// 修改webResult任务仓库
export function updateWebResultTaskHouse(data) {
    return request({
        url: '/apify/webResultTaskHouse',
        method: 'put',
        data: data
    })
}

// 删除webResult任务仓库
export function delWebResultTaskHouse(webResultTaskHouseId) {
    return request({
        url: '/apify/webResultTaskHouse/' + webResultTaskHouseId,
        method: 'delete'
    })
}
