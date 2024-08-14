import request from '@/utils/request'

// 查询经纬度小模块信息列表
export function listModule(query) {
    return request({
        url: '/apify/module/list',
        method: 'get',
        params: query
    })
}

// 查询经纬度小模块信息详细
export function getModule(moduleId) {
    return request({
        url: '/apify/module/' + moduleId,
        method: 'get'
    })
}

// 新增经纬度小模块信息
export function addModule(data) {
    return request({
        url: '/apify/module',
        method: 'post',
        data: data
    })
}

// 修改经纬度小模块信息
export function updateModule(data) {
    return request({
        url: '/apify/module',
        method: 'put',
        data: data
    })
}

// 删除经纬度小模块信息
export function delModule(moduleId) {
    return request({
        url: '/apify/module/' + moduleId,
        method: 'delete'
    })
}
