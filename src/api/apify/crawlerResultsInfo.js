import request from '@/utils/request'

// 查询爬虫结果信息列表
export function listCrawlerResultsInfo(query) {
    return request({
        url: '/CrawlerResultsInfo/CrawlerResultsInfo/list',
        method: 'get',
        params: query
    })
}

// 查询爬虫结果信息详细
export function getCrawlerResultsInfo(crawlerResultInfoId) {
    return request({
        url: '/CrawlerResultsInfo/CrawlerResultsInfo/' + crawlerResultInfoId,
        method: 'get'
    })
}

// 新增爬虫结果信息
export function addCrawlerResultsInfo(data) {
    return request({
        url: '/CrawlerResultsInfo/CrawlerResultsInfo',
        method: 'post',
        data: data
    })
}

// 修改爬虫结果信息
export function updateCrawlerResultsInfo(data) {
    return request({
        url: '/CrawlerResultsInfo/CrawlerResultsInfo',
        method: 'put',
        data: data
    })
}

// 删除爬虫结果信息
export function delCrawlerResultsInfo(crawlerResultInfoId) {
    return request({
        url: '/CrawlerResultsInfo/CrawlerResultsInfo/' + crawlerResultInfoId,
        method: 'delete'
    })
}
