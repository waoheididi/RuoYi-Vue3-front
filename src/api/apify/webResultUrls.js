import request from '@/utils/request'

// 查询webResult的URL列列表
export function listWebResultUrls(query) {
    return request({
        url: '/apify/webResultUrls/list',
        method: 'get',
        params: query
    })
}

// 查询webResult的URL列详细
export function getWebResultUrls(webResultUrlId) {
    return request({
        url: '/apify/webResultUrls/' + webResultUrlId,
        method: 'get'
    })
}

// 新增webResult的URL列
export function addWebResultUrls(data) {
    return request({
        url: '/apify/webResultUrls',
        method: 'post',
        data: data
    })
}

// 修改webResult的URL列
export function updateWebResultUrls(data) {
    return request({
        url: '/apify/webResultUrls',
        method: 'put',
        data: data
    })
}

// 删除webResult的URL列
export function delWebResultUrls(webResultUrlId) {
    return request({
        url: '/apify/webResultUrls/' + webResultUrlId,
        method: 'delete'
    })
}
