import request from '@/utils/request'

// 谷歌地图渲染
export function googleMapPoints(query) {
    return request({
        url: '/apify/bugInfo/googleMapPoints',
        method: 'get',
        params: query
    })
}

// 查询爬虫结果信息列表
export function listInfo(query) {
    return request({
        url: '/apify/bugInfo/list',
        method: 'get',
        params: query
    })
}

// 查询爬虫结果信息详细
export function getInfo(bugInfoId) {
    return request({
        url: '/apify/bugInfo/' + bugInfoId,
        method: 'get'
    })
}

// 新增爬虫结果信息
export function addInfo(data) {
    return request({
        url: '/apify/bugInfo',
        method: 'post',
        data: data
    })
}

// 修改爬虫结果信息
export function updateInfo(data) {
    return request({
        url: '/apify/bugInfo',
        method: 'put',
        data: data
    })
}

// 删除爬虫结果信息
export function delInfo(bugInfoId) {
    return request({
        url: '/apify/bugInfo/' + bugInfoId,
        method: 'delete'
    })
}
