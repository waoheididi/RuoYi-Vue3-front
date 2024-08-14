import request from '@/utils/request'

// 查询webResult结果信息列表
export function listWebResult(query) {
    return request({
        url: '/apify/webResult/list',
        method: 'get',
        params: query
    })
}

// 查询webResult结果信息详细
export function getWebResult(webResultId) {
    return request({
        url: '/apify/webResult/' + webResultId,
        method: 'get'
    })
}

// 新增webResult结果信息
export function addWebResult(data) {
    return request({
        url: '/apify/webResult',
        method: 'post',
        data: data
    })
}

// 修改webResult结果信息
export function updateWebResult(data) {
    return request({
        url: '/apify/webResult',
        method: 'put',
        data: data
    })
}

// 删除webResult结果信息
export function delWebResult(webResultId) {
    return request({
        url: '/apify/webResult/' + webResultId,
        method: 'delete'
    })
}
