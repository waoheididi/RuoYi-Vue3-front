<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryRef" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="左经度" prop="leftLongitude">
        <el-input
            v-model="queryParams.leftLongitude"
            placeholder="请输入左经度"
            clearable
            @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="右经度" prop="rightLongitude">
        <el-input
            v-model="queryParams.rightLongitude"
            placeholder="请输入右经度"
            clearable
            @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="上纬度" prop="upLatitude">
        <el-input
            v-model="queryParams.upLatitude"
            placeholder="请输入上纬度"
            clearable
            @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="下纬度" prop="downLatitude">
        <el-input
            v-model="queryParams.downLatitude"
            placeholder="请输入下纬度"
            clearable
            @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="URL" prop="url">
        <el-input
            v-model="queryParams.url"
            placeholder="请输入URL"
            clearable
            @keyup.enter="handleQuery"
        />
      </el-form-item>
      <!--<el-form-item label="加载的搜索页面URL" prop="searchPageLoadedUrl">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.searchPageLoadedUrl"-->
      <!--      placeholder="请输入加载的搜索页面URL"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="搜索页面URL" prop="searchPageUrl">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.searchPageUrl"-->
      <!--      placeholder="请输入搜索页面URL"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="搜索字符串" prop="searchString">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.searchString"-->
      <!--      placeholder="请输入搜索字符串"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="排名" prop="rank">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.rank"-->
      <!--      placeholder="请输入排名"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="是否为广告" prop="isAdvertisement">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.isAdvertisement"-->
      <!--      placeholder="请输入是否为广告"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="标题" prop="title">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.title"-->
      <!--      placeholder="请输入标题"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="子标题" prop="subTitle">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.subTitle"-->
      <!--      placeholder="请输入子标题"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="描述" prop="description">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.description"-->
      <!--      placeholder="请输入描述"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="价格" prop="price">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.price"-->
      <!--      placeholder="请输入价格"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="分类名称" prop="categoryName">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.categoryName"-->
      <!--      placeholder="请输入分类名称"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="地址" prop="address">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.address"-->
      <!--      placeholder="请输入地址"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="邻近地区" prop="neighborhood">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.neighborhood"-->
      <!--      placeholder="请输入邻近地区"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="街道" prop="street">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.street"-->
      <!--      placeholder="请输入街道"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="城市" prop="city">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.city"-->
      <!--      placeholder="请输入城市"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <el-form-item label="邮政编码" prop="postalCode">
        <el-input
            v-model="queryParams.postalCode"
            placeholder="请输入邮政编码"
            clearable
            @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="选择显示结果" prop="postalCode" label-width="120">
        <el-select v-model="queryParams.isDelete" placeholder="选择显示结果" clearable>
          <el-option
              key="0"
              label="只显示有结果"
              value="0"
          />
          <el-option
              key="1"
              label="只显示空结果"
              value="1"
          />
        </el-select>
        <!--<el-input-->
        <!--    v-model="queryParams.isDelete"-->
        <!--    placeholder="是否排除空结果"-->
        <!--    clearable-->
        <!--    @keyup.enter="handleQuery"-->
        <!--/>-->
      </el-form-item>
      <!--<el-form-item label="州/省" prop="state">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.state"-->
      <!--      placeholder="请输入州/省"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="国家代码" prop="countryCode">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.countryCode"-->
      <!--      placeholder="请输入国家代码"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="网站" prop="website">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.website"-->
      <!--      placeholder="请输入网站"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="电话" prop="phone">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.phone"-->
      <!--      placeholder="请输入电话"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="格式化后的电话号码" prop="phoneUnformatted">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.phoneUnformatted"-->
      <!--      placeholder="请输入格式化后的电话号码"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="是否声明该业务" prop="claimThisBusiness">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.claimThisBusiness"-->
      <!--      placeholder="请输入是否声明该业务"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="位于" prop="locatedIn">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.locatedIn"-->
      <!--      placeholder="请输入位于"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="Plus Code" prop="plusCode">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.plusCode"-->
      <!--      placeholder="请输入Plus Code"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="菜单" prop="menu">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.menu"-->
      <!--      placeholder="请输入菜单"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="总评分" prop="totalScore">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.totalScore"-->
      <!--      placeholder="请输入总评分"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="永久关闭" prop="permanentlyClosed">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.permanentlyClosed"-->
      <!--      placeholder="请输入永久关闭"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="临时关闭" prop="temporarilyClosed">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.temporarilyClosed"-->
      <!--      placeholder="请输入临时关闭"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="地点ID" prop="placeId">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.placeId"-->
      <!--      placeholder="请输入地点ID"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="FID" prop="fid">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.fid"-->
      <!--      placeholder="请输入FID"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="CID" prop="cid">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.cid"-->
      <!--      placeholder="请输入CID"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="评价数量" prop="reviewsCount">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.reviewsCount"-->
      <!--      placeholder="请输入评价数量"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="评价分布" prop="reviewsDistribution">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.reviewsDistribution"-->
      <!--      placeholder="请输入评价分布"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="图片数量" prop="imagesCount">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.imagesCount"-->
      <!--      placeholder="请输入图片数量"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="抓取时间" prop="scrapedAt">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.scrapedAt"-->
      <!--      placeholder="请输入抓取时间"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="预订桌子URL" prop="reserveTableUrl">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.reserveTableUrl"-->
      <!--      placeholder="请输入预订桌子URL"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="谷歌美食URL" prop="googleFoodUrl">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.googleFoodUrl"-->
      <!--      placeholder="请输入谷歌美食URL"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="酒店星级" prop="hotelStars">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.hotelStars"-->
      <!--      placeholder="请输入酒店星级"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="酒店描述" prop="hotelDescription">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.hotelDescription"-->
      <!--      placeholder="请输入酒店描述"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="入住日期" prop="checkInDate">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.checkInDate"-->
      <!--      placeholder="请输入入住日期"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="退房日期" prop="checkOutDate">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.checkOutDate"-->
      <!--      placeholder="请输入退房日期"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="附近相似酒店" prop="similarHotelsNearby">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.similarHotelsNearby"-->
      <!--      placeholder="请输入附近相似酒店"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="酒店评价摘要" prop="hotelReviewSummary">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.hotelReviewSummary"-->
      <!--      placeholder="请输入酒店评价摘要"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="额外信息" prop="additionalInfo">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.additionalInfo"-->
      <!--      placeholder="请输入额外信息"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="来自顾客的更新" prop="updatesFromCustomers">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.updatesFromCustomers"-->
      <!--      placeholder="请输入来自顾客的更新"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="父级地点URL" prop="parentPlaceUrl">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.parentPlaceUrl"-->
      <!--      placeholder="请输入父级地点URL"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="图片数组" prop="imageUrls">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.imageUrls"-->
      <!--      placeholder="请输入图片数组"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="位置" prop="location">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.location"-->
      <!--      placeholder="请输入位置"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <el-form-item>
        <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
        <el-button icon="Refresh" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <!--<el-row :gutter="10" class="mb8">-->
    <!--  <el-col :span="1.5">-->
    <!--    <el-button-->
    <!--        type="primary"-->
    <!--        plain-->
    <!--        icon="Plus"-->
    <!--        @click="handleAdd"-->
    <!--        v-hasPermi="['system:info:add']"-->
    <!--    >新增</el-button>-->
    <!--  </el-col>-->
    <!--  <el-col :span="1.5">-->
    <!--    <el-button-->
    <!--        type="success"-->
    <!--        plain-->
    <!--        icon="Edit"-->
    <!--        :disabled="single"-->
    <!--        @click="handleUpdate"-->
    <!--        v-hasPermi="['system:info:edit']"-->
    <!--    >修改</el-button>-->
    <!--  </el-col>-->
    <!--  <el-col :span="1.5">-->
    <!--    <el-button-->
    <!--        type="danger"-->
    <!--        plain-->
    <!--        icon="Delete"-->
    <!--        :disabled="multiple"-->
    <!--        @click="handleDelete"-->
    <!--        v-hasPermi="['system:info:remove']"-->
    <!--    >删除</el-button>-->
    <!--  </el-col>-->
    <!--  <el-col :span="1.5">-->
    <!--    <el-button-->
    <!--        type="warning"-->
    <!--        plain-->
    <!--        icon="Download"-->
    <!--        @click="handleExport"-->
    <!--        v-hasPermi="['system:info:export']"-->
    <!--    >导出</el-button>-->
    <!--  </el-col>-->
    <!--  <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>-->
    <!--</el-row>-->

    <!--max-height="65vh"-->
    <el-table v-loading="loading"  border :data="infoList"  @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column fixed="left" label="ID" align="center" prop="bugInfoId" />
      <el-table-column fixed="left" label="请求经纬度" align="center" prop="leftLongitude" width="230">
        <template #default="scope">
          <div>[[{{scope.row.leftLongitude}},{{scope.row.upLatitude}}],[{{scope.row.rightLongitude}},{{scope.row.downLatitude}}]]</div>
        </template>
      </el-table-column>
      <el-table-column fixed="left" label="商店位置经纬度" align="center" prop="location" width="200">
        <template #default="scope">
          <div>{{scope.row.location}}</div>
        </template>
      </el-table-column>
      <el-table-column  label="标题" align="center" prop="title" width="250"/>
      <el-table-column  label="URL" align="center" prop="url" width="450">
        <template #default="scope">
          <a :href="scope.row.url" style="color:#1c84c6;" target="_blank">{{scope.row.url}}</a>
        </template>
      </el-table-column>
      <el-table-column label="加载的搜索页面URL" align="center" prop="searchPageLoadedUrl" width="450">
        <template #default="scope">
          <a :href="scope.row.searchPageLoadedUrl" style="color:#1c84c6;" target="_blank">{{scope.row.searchPageLoadedUrl}}</a>
        </template>
      </el-table-column>
      <el-table-column label="搜索页面URL" align="center" prop="searchPageUrl" width="450">
        <template #default="scope">
          <a :href="scope.row.searchPageUrl" style="color:#1c84c6;" target="_blank">{{scope.row.searchPageUrl}}</a>
        </template>
      </el-table-column>
      <el-table-column label="位于" align="center" prop="locatedIn" width="250"/>
      <el-table-column label="地址" align="center" prop="address" width="250"/>
      <el-table-column label="邻近地区" align="center" prop="neighborhood" width="100"/>
      <el-table-column label="街道" align="center" prop="street" width="250"/>
      <el-table-column label="城市" align="center" prop="city" width="250"/>
      <el-table-column label="邮政编码" align="center" prop="postalCode" width="150"/>
      <el-table-column label="州/省" align="center" prop="state" width="150"/>
      <el-table-column label="国家代码" align="center" prop="countryCode" width="120"/>
      <el-table-column label="网站" align="center" prop="website" width="250"/>
      <el-table-column label="电话" align="center" prop="phone" width="250"/>
      <el-table-column label="格式化后的电话号码" align="center" prop="phoneUnformatted" width="250"/>
      <el-table-column label="搜索字符串" align="center" prop="searchString" width="90"/>
      <el-table-column label="排名" align="center" prop="rank" />
      <el-table-column label="是否为广告" align="center" prop="isAdvertisement" width="90"/>
      <el-table-column label="子标题" align="center" prop="subTitle" />
      <el-table-column label="描述" align="center" prop="description" width="350"/>
      <el-table-column label="价格" align="center" prop="price" />
      <el-table-column label="分类名称" align="center" prop="categoryName" width="250"/>
      <el-table-column label="是否声明该业务" align="center" prop="claimThisBusiness" />
      <el-table-column label="Plus Code" align="center" prop="plusCode" width="250"/>
      <el-table-column label="菜单" align="center" prop="menu" />
      <el-table-column label="总评分" align="center" prop="totalScore" />
      <el-table-column label="永久关闭" align="center" prop="permanentlyClosed" />
      <el-table-column label="临时关闭" align="center" prop="temporarilyClosed" />
      <el-table-column label="地点ID" align="center" prop="placeId" width="250"/>
      <el-table-column label="FID" align="center" prop="fid" width="250"/>
      <el-table-column label="CID" align="center" prop="cid" />
      <el-table-column label="评价数量" align="center" prop="reviewsCount" />
      <el-table-column label="评价分布" align="center" prop="reviewsDistribution" />
      <el-table-column label="图片数量" align="center" prop="imagesCount" />
      <el-table-column label="抓取时间" align="center" prop="scrapedAt" :formatter="formatDate1" width="250"/>
      <el-table-column label="预订桌子URL" align="center" prop="reserveTableUrl" />
      <el-table-column label="谷歌美食URL" align="center" prop="googleFoodUrl" />
      <el-table-column label="酒店星级" align="center" prop="hotelStars" />
      <el-table-column label="酒店描述" align="center" prop="hotelDescription" />
      <el-table-column label="入住日期" align="center" prop="checkInDate" />
      <el-table-column label="退房日期" align="center" prop="checkOutDate" />
      <el-table-column label="附近相似酒店" align="center" prop="similarHotelsNearby" />
      <el-table-column label="酒店评价摘要" align="center" prop="hotelReviewSummary" />
      <el-table-column label="额外信息" align="center" prop="additionalInfo" />
      <el-table-column label="来自顾客的更新" align="center" prop="updatesFromCustomers" />
      <el-table-column label="父级地点URL" align="center" prop="parentPlaceUrl" />
      <el-table-column label="图片数组" align="center" prop="imageUrls" width="450"/>
      <!--<el-table-column label="备注" align="center" prop="remark" />-->
      <!--<el-table-column label="是否删除" align="center" prop="isDelete" />-->
      <!--<el-table-column label="创建时间" align="center" prop="createTime" />-->
      <el-table-column fixed="right" label="操作" align="center" class-name="small-padding fixed-width" width="150">
        <template #default="scope">
          <el-button link type="primary" icon="Edit" @click="handleReview(scope.row)" >预览详情</el-button>
          <!--<el-button link type="primary" icon="Edit" @click="handleUpdate(scope.row)" v-hasPermi="['system:info:edit']" >预览详情</el-button>-->
          <el-button link type="primary" icon="Delete" @click="handleDelete(scope.row)" v-hasPermi="['system:info:remove']" disabled>删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
        v-show="total>0"
        :total="total"
        :page-sizes="[10,20,100, 200, 300]"
        v-model:page="queryParams.pageNum"
        v-model:limit="queryParams.pageSize"
        @pagination="getList"
    />

    <!-- 预览爬虫结果信息对话框 -->
    <el-dialog title="预览爬虫结果详情" v-model="isReview" width="90vw" append-to-body>
      <el-form ref="infoRef" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="左经度" prop="leftLongitude" label-width="150">
          <el-input v-model="form.leftLongitude" placeholder="请输入左经度"  disabled/>
        </el-form-item>
        <el-form-item label="右经度" prop="rightLongitude" label-width="150">
          <el-input v-model="form.rightLongitude" placeholder="请输入右经度"  disabled/>
        </el-form-item>
        <el-form-item label="上纬度" prop="upLatitude" label-width="150">
          <el-input v-model="form.upLatitude" placeholder="请输入上纬度"  disabled/>
        </el-form-item>
        <el-form-item label="下纬度" prop="downLatitude" label-width="150">
          <el-input v-model="form.downLatitude" placeholder="请输入下纬度"  disabled/>
        </el-form-item>
        <el-form-item label="具体的经纬度位置" prop="location" label-width="150">
          <MyTextLable :textValue="form.location"/>
        </el-form-item>
        <el-form-item label="临时关闭" prop="temporarilyClosed" label-width="150">
          <el-tag v-if="form.temporarilyClosed" type="info">{{form.temporarilyClosed}}</el-tag>
          <el-tag v-else type="success">{{form.temporarilyClosed}}</el-tag>
        </el-form-item>
        <el-form-item label="永久关闭" prop="permanentlyClosed" label-width="150">
          <el-tag v-if="form.permanentlyClosed" type="danger">{{form.permanentlyClosed}}</el-tag>
          <el-tag v-else type="info">{{form.permanentlyClosed}}</el-tag>
        </el-form-item>
        <el-form-item label="URL" prop="url" label-width="150">
          <MyUrlJump v-if="form.url" :hrefUrl="form.url"/>
          <MySucessTag v-else :tagValue="tagData" />
        </el-form-item>
        <el-form-item label="加载的搜索页面URL" prop="searchPageLoadedUrl" label-width="150">
          <MyUrlJump v-if="form.searchPageLoadedUrl" :hrefUrl="form.searchPageLoadedUrl"/>
          <MySucessTag v-else :tagValue="tagData" />
        </el-form-item>
        <el-form-item label="搜索页面URL" prop="searchPageUrl" label-width="150">
          <MyUrlJump v-if="form.searchPageUrl" :hrefUrl="form.searchPageUrl"/>
          <MySucessTag v-else :tagValue="tagData" />
        </el-form-item>
        <el-form-item label="标题" prop="title" label-width="150">
          <MyTextLable :textValue="form.title"/>
        </el-form-item>
        <el-form-item label="排名" prop="rank" label-width="150">
          <MyTextLable :textValue="form.rank"/>
        </el-form-item>
        <el-form-item label="分类名称" prop="categoryName" label-width="150">
          <MyTextLable :textValue="form.categoryName"/>
        </el-form-item>
        <el-form-item label="地址" prop="address" label-width="150">
          <MyTextLable :textValue="form.address"/>
        </el-form-item>
        <el-form-item label="邻近地区" prop="neighborhood" label-width="150">
          <MyTextLable :textValue="form.neighborhood"/>
        </el-form-item>
        <el-form-item label="街道" prop="street" label-width="150">
          <MyTextLable :textValue="form.street"/>
        </el-form-item>
        <el-form-item label="城市" prop="city" label-width="150">
          <MyTextLable :textValue="form.city"/>
        </el-form-item>
        <el-form-item label="邮政编码" prop="postalCode" label-width="150">
          <MyTextLable :textValue="form.postalCode"/>
        </el-form-item>
        <el-form-item label="州/省" prop="state" label-width="150">
          <MyTextLable :textValue="form.state"/>
        </el-form-item>
        <el-form-item label="国家代码" prop="countryCode" label-width="150">
          <MyTextLable :textValue="form.countryCode"/>
        </el-form-item>
        <el-form-item label="网站" prop="website" label-width="150">
          <MyTextLable :textValue="form.website"/>
        </el-form-item>
        <el-form-item label="电话" prop="phone" label-width="150">
          <MyTextLable :textValue="form.phone"/>
        </el-form-item>
        <el-form-item label="格式化后的电话号码" prop="phoneUnformatted" label-width="150">
          <MyTextLable :textValue="form.phoneUnformatted"/>
        </el-form-item>
        <el-form-item label="是否声明该业务" prop="claimThisBusiness" label-width="150">
          <MyTextLable :textValue="form.claimThisBusiness"/>
        </el-form-item>
        <el-form-item label="位于" prop="locatedIn" label-width="150">
          <MyTextLable :textValue="form.locatedIn"/>
        </el-form-item>
        <el-form-item label="是否为广告" prop="isAdvertisement" label-width="150">
          <MyTextLable :textValue="form.isAdvertisement"/>
        </el-form-item>
        <el-form-item label="子标题" prop="subTitle" label-width="150">
          <MyTextLable :textValue="form.subTitle"/>
        </el-form-item>
        <el-form-item label="描述" prop="description" label-width="150">
          <MyTextLable :textValue="form.description"/>
        </el-form-item>
        <el-form-item label="搜索字符串" prop="searchString" label-width="150">
          <MyTextLable :textValue="form.searchString"/>
        </el-form-item>
        <el-form-item label="价格" prop="price" label-width="150">
          <MyTextLable :textValue="form.price"/>
        </el-form-item>
        <el-form-item label="Plus Code" prop="plusCode" label-width="150">
          <MyTextLable :textValue="form.plusCode"/>
        </el-form-item>
        <el-form-item label="菜单" prop="menu" label-width="150">
          <MyTextLable :textValue="form.menu"/>
        </el-form-item>
        <el-form-item label="总评分" prop="totalScore" label-width="150">
          <MyTextLable :textValue="form.totalScore"/>
        </el-form-item>
        <el-form-item label="地点ID" prop="placeId" label-width="150">
          <MyTextLable :textValue="form.placeId"/>
        </el-form-item>
        <el-form-item label="FID" prop="fid" label-width="150">
          <MyTextLable :textValue="form.fid"/>
        </el-form-item>
        <el-form-item label="CID" prop="cid" label-width="150">
          <MyTextLable :textValue="form.cid"/>
        </el-form-item>
        <el-form-item label="评价数量" prop="reviewsCount" label-width="150">
          <MyTextLable :textValue="form.reviewsCount"/>
        </el-form-item>
        <el-form-item label="评价分布" prop="reviewsDistribution" label-width="150">
          <MyTextLable :textValue="form.reviewsDistribution"/>
        </el-form-item>
        <el-form-item label="图片数量" prop="imagesCount" label-width="150">
          <MyTextLable :textValue="form.imagesCount"/>
        </el-form-item>
        <el-form-item label="预订桌子URL" prop="reserveTableUrl" label-width="150">
          <MyTextLable :textValue="form.reserveTableUrl"/>
        </el-form-item>
        <el-form-item label="谷歌美食URL" prop="googleFoodUrl" label-width="150">
          <MyTextLable :textValue="form.googleFoodUrl"/>
        </el-form-item>
        <el-form-item label="酒店星级" prop="hotelStars" label-width="150">
          <MyTextLable :textValue="form.hotelStars"/>
        </el-form-item>
        <el-form-item label="酒店描述" prop="hotelDescription" label-width="150">
          <MyTextLable :textValue="form.hotelDescription"/>
        </el-form-item>
        <el-form-item label="入住日期" prop="checkInDate" label-width="150">
          <MyTextLable :textValue="form.checkInDate"/>
        </el-form-item>
        <el-form-item label="退房日期" prop="checkOutDate" label-width="150">
          <MyTextLable :textValue="form.checkOutDate"/>
        </el-form-item>
        <el-form-item label="附近相似酒店" prop="similarHotelsNearby" label-width="150">
          <MyTextLable :textValue="form.similarHotelsNearby"/>
        </el-form-item>
        <el-form-item label="酒店评价摘要" prop="hotelReviewSummary" label-width="150">
          <MyTextLable :textValue="form.hotelReviewSummary"/>
        </el-form-item>
        <el-form-item label="额外信息" prop="additionalInfo" label-width="150">
          <MyTextLable :textValue="form.additionalInfo"/>
        </el-form-item>
        <el-form-item label="来自顾客的更新" prop="updatesFromCustomers" label-width="150">
          <MyTextLable :textValue="form.updatesFromCustomers"/>
        </el-form-item>
        <el-form-item label="父级地点URL" prop="parentPlaceUrl" label-width="150">
          <MyTextLable :textValue="form.parentPlaceUrl"/>
        </el-form-item>
        <el-form-item label="图片数组" prop="imageUrls" label-width="150">
          <MyTextLable :textValue="form.imageUrls"/>
        </el-form-item>
        <el-form-item label="备注" prop="remark" label-width="150">
          <MyTextLable :textValue="form.remark"/>
        </el-form-item>
        <el-form-item label="抓取时间" prop="scrapedAt" label-width="150">
          <el-input v-model="form.scrapedAt"  disabled/>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <!--<el-button type="primary" @click="submitForm">确 定</el-button>-->
          <el-button @click="onRevieCancel">取 消</el-button>
        </div>
      </template>
    </el-dialog>

    <!-- 添加或修改爬虫结果信息对话框 -->
    <el-dialog :title="title" v-model="open" width="90vw" append-to-body>
      <el-form ref="infoRef" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="左经度" prop="leftLongitude">
          <el-input v-model="form.leftLongitude" placeholder="请输入左经度" />
        </el-form-item>
        <el-form-item label="右经度" prop="rightLongitude">
          <el-input v-model="form.rightLongitude" placeholder="请输入右经度" />
        </el-form-item>
        <el-form-item label="上纬度" prop="upLatitude">
          <el-input v-model="form.upLatitude" placeholder="请输入上纬度" />
        </el-form-item>
        <el-form-item label="下纬度" prop="downLatitude">
          <el-input v-model="form.downLatitude" placeholder="请输入下纬度" />
        </el-form-item>
        <el-form-item label="URL" prop="url">
          <el-input v-model="form.url" placeholder="请输入URL" />
        </el-form-item>
        <el-form-item label="加载的搜索页面URL" prop="searchPageLoadedUrl">
          <el-input v-model="form.searchPageLoadedUrl" placeholder="请输入加载的搜索页面URL" />
        </el-form-item>
        <el-form-item label="搜索页面URL" prop="searchPageUrl">
          <el-input v-model="form.searchPageUrl" placeholder="请输入搜索页面URL" />
        </el-form-item>
        <el-form-item label="搜索字符串" prop="searchString">
          <el-input v-model="form.searchString" placeholder="请输入搜索字符串" />
        </el-form-item>
        <el-form-item label="排名" prop="rank">
          <el-input v-model="form.rank" placeholder="请输入排名" />
        </el-form-item>
        <el-form-item label="是否为广告" prop="isAdvertisement">
          <el-input v-model="form.isAdvertisement" placeholder="请输入是否为广告" />
        </el-form-item>
        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title" placeholder="请输入标题" />
        </el-form-item>
        <el-form-item label="子标题" prop="subTitle">
          <el-input v-model="form.subTitle" placeholder="请输入子标题" />
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input v-model="form.description" placeholder="请输入描述" />
        </el-form-item>
        <el-form-item label="价格" prop="price">
          <el-input v-model="form.price" placeholder="请输入价格" />
        </el-form-item>
        <el-form-item label="分类名称" prop="categoryName">
          <el-input v-model="form.categoryName" placeholder="请输入分类名称" />
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="form.address" placeholder="请输入地址" />
        </el-form-item>
        <el-form-item label="邻近地区" prop="neighborhood">
          <el-input v-model="form.neighborhood" placeholder="请输入邻近地区" />
        </el-form-item>
        <el-form-item label="街道" prop="street">
          <el-input v-model="form.street" placeholder="请输入街道" />
        </el-form-item>
        <el-form-item label="城市" prop="city">
          <el-input v-model="form.city" placeholder="请输入城市" />
        </el-form-item>
        <el-form-item label="邮政编码" prop="postalCode">
          <el-input v-model="form.postalCode" placeholder="请输入邮政编码" />
        </el-form-item>
        <el-form-item label="州/省" prop="state">
          <el-input v-model="form.state" placeholder="请输入州/省" />
        </el-form-item>
        <el-form-item label="国家代码" prop="countryCode">
          <el-input v-model="form.countryCode" placeholder="请输入国家代码" />
        </el-form-item>
        <el-form-item label="网站" prop="website">
          <el-input v-model="form.website" placeholder="请输入网站" />
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="form.phone" placeholder="请输入电话" />
        </el-form-item>
        <el-form-item label="格式化后的电话号码" prop="phoneUnformatted">
          <el-input v-model="form.phoneUnformatted" placeholder="请输入格式化后的电话号码" />
        </el-form-item>
        <el-form-item label="是否声明该业务" prop="claimThisBusiness">
          <el-input v-model="form.claimThisBusiness" placeholder="请输入是否声明该业务" />
        </el-form-item>
        <el-form-item label="位于" prop="locatedIn">
          <el-input v-model="form.locatedIn" placeholder="请输入位于" />
        </el-form-item>
        <el-form-item label="Plus Code" prop="plusCode">
          <el-input v-model="form.plusCode" placeholder="请输入Plus Code" />
        </el-form-item>
        <el-form-item label="菜单" prop="menu">
          <el-input v-model="form.menu" placeholder="请输入菜单" />
        </el-form-item>
        <el-form-item label="总评分" prop="totalScore">
          <el-input v-model="form.totalScore" placeholder="请输入总评分" />
        </el-form-item>
        <el-form-item label="永久关闭" prop="permanentlyClosed">
          <el-input v-model="form.permanentlyClosed" placeholder="请输入永久关闭" />
        </el-form-item>
        <el-form-item label="临时关闭" prop="temporarilyClosed">
          <el-input v-model="form.temporarilyClosed" placeholder="请输入临时关闭" />
        </el-form-item>
        <el-form-item label="地点ID" prop="placeId">
          <el-input v-model="form.placeId" placeholder="请输入地点ID" />
        </el-form-item>
        <el-form-item label="FID" prop="fid">
          <el-input v-model="form.fid" placeholder="请输入FID" />
        </el-form-item>
        <el-form-item label="CID" prop="cid">
          <el-input v-model="form.cid" placeholder="请输入CID" />
        </el-form-item>
        <el-form-item label="评价数量" prop="reviewsCount">
          <el-input v-model="form.reviewsCount" placeholder="请输入评价数量" />
        </el-form-item>
        <el-form-item label="评价分布" prop="reviewsDistribution">
          <el-input v-model="form.reviewsDistribution" placeholder="请输入评价分布" />
        </el-form-item>
        <el-form-item label="图片数量" prop="imagesCount">
          <el-input v-model="form.imagesCount" placeholder="请输入图片数量" />
        </el-form-item>
        <el-form-item label="抓取时间" prop="scrapedAt">
          <el-input v-model="form.scrapedAt" placeholder="请输入抓取时间" />
        </el-form-item>
        <el-form-item label="预订桌子URL" prop="reserveTableUrl">
          <el-input v-model="form.reserveTableUrl" placeholder="请输入预订桌子URL" />
        </el-form-item>
        <el-form-item label="谷歌美食URL" prop="googleFoodUrl">
          <el-input v-model="form.googleFoodUrl" placeholder="请输入谷歌美食URL" />
        </el-form-item>
        <el-form-item label="酒店星级" prop="hotelStars">
          <el-input v-model="form.hotelStars" placeholder="请输入酒店星级" />
        </el-form-item>
        <el-form-item label="酒店描述" prop="hotelDescription">
          <el-input v-model="form.hotelDescription" placeholder="请输入酒店描述" />
        </el-form-item>
        <el-form-item label="入住日期" prop="checkInDate">
          <el-input v-model="form.checkInDate" placeholder="请输入入住日期" />
        </el-form-item>
        <el-form-item label="退房日期" prop="checkOutDate">
          <el-input v-model="form.checkOutDate" placeholder="请输入退房日期" />
        </el-form-item>
        <el-form-item label="附近相似酒店" prop="similarHotelsNearby">
          <el-input v-model="form.similarHotelsNearby" placeholder="请输入附近相似酒店" />
        </el-form-item>
        <el-form-item label="酒店评价摘要" prop="hotelReviewSummary">
          <el-input v-model="form.hotelReviewSummary" placeholder="请输入酒店评价摘要" />
        </el-form-item>
        <el-form-item label="额外信息" prop="additionalInfo">
          <el-input v-model="form.additionalInfo" placeholder="请输入额外信息" />
        </el-form-item>
        <el-form-item label="来自顾客的更新" prop="updatesFromCustomers">
          <el-input v-model="form.updatesFromCustomers" placeholder="请输入来自顾客的更新" />
        </el-form-item>
        <el-form-item label="父级地点URL" prop="parentPlaceUrl">
          <el-input v-model="form.parentPlaceUrl" placeholder="请输入父级地点URL" />
        </el-form-item>
        <el-form-item label="图片数组" prop="imageUrls">
          <el-input v-model="form.imageUrls" placeholder="请输入图片数组" />
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="form.remark" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="位置" prop="location">
          <el-input v-model="form.location" placeholder="请输入位置" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <!--<el-button type="primary" @click="submitForm">确 定</el-button>-->
          <el-button @click="cancel">取 消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { listInfo, getInfo, delInfo, addInfo, updateInfo } from "@/api/apify/bugInfo";
import {formatDate} from '@/utils/formatDate.js'
import MySucessTag from '@/views/apify/bugInfo/MySucessTag';
import MyUrlJump from './MyUrlJump';
import MyTextLable from './MyTextLable';


const { proxy } = getCurrentInstance();

const infoList = ref([]);
const open = ref(false);
const isReview = ref(false);
const loading = ref(true);
const showSearch = ref(true);
const ids = ref([]);
const single = ref(true);
const multiple = ref(true);
const total = ref(0);
const title = ref("");
const tagData = ref('无');   // 没有值tag显示的值

const data = reactive({
  form: {},
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    leftLongitude: null,
    rightLongitude: null,
    upLatitude: null,
    downLatitude: null,
    url: null,
    searchPageLoadedUrl: null,
    searchPageUrl: null,
    searchString: null,
    rank: null,
    isAdvertisement: null,
    title: null,
    subTitle: null,
    description: null,
    price: null,
    categoryName: null,
    address: null,
    neighborhood: null,
    street: null,
    city: null,
    postalCode: null,
    state: null,
    countryCode: null,
    website: null,
    phone: null,
    phoneUnformatted: null,
    claimThisBusiness: null,
    locatedIn: null,
    plusCode: null,
    menu: null,
    totalScore: null,
    permanentlyClosed: null,
    temporarilyClosed: null,
    placeId: null,
    fid: null,
    cid: null,
    reviewsCount: null,
    reviewsDistribution: null,
    imagesCount: null,
    scrapedAt: null,
    reserveTableUrl: null,
    googleFoodUrl: null,
    hotelStars: null,
    hotelDescription: null,
    checkInDate: null,
    checkOutDate: null,
    similarHotelsNearby: null,
    hotelReviewSummary: null,
    additionalInfo: null,
    updatesFromCustomers: null,
    parentPlaceUrl: null,
    imageUrls: null,
    location: null,
    isDelete: null
  },
  rules: {
  }
});

const { queryParams, form, rules } = toRefs(data);

// 时间格式方法
function formatDate1(row, column) {
  // 获取单元格数据
  let data = row[column.property]
  return formatDate(data)
}

/** 查询爬虫结果信息列表 */
function getList() {
  loading.value = true;
  listInfo(queryParams.value).then(response => {
    infoList.value = response.rows;
    total.value = response.total;
    loading.value = false;
  });
}

// 取消预览按钮
function onRevieCancel() {
  isReview.value = false;
  reset();
}


// 取消按钮
function cancel() {
  open.value = false;
  reset();
}

// 表单重置
function reset() {
  form.value = {
    bugInfoId: null,
    leftLongitude: null,
    rightLongitude: null,
    upLatitude: null,
    downLatitude: null,
    url: null,
    searchPageLoadedUrl: null,
    searchPageUrl: null,
    searchString: null,
    rank: null,
    isAdvertisement: null,
    title: null,
    subTitle: null,
    description: null,
    price: null,
    categoryName: null,
    address: null,
    neighborhood: null,
    street: null,
    city: null,
    postalCode: null,
    state: null,
    countryCode: null,
    website: null,
    phone: null,
    phoneUnformatted: null,
    claimThisBusiness: null,
    locatedIn: null,
    plusCode: null,
    menu: null,
    totalScore: null,
    permanentlyClosed: null,
    temporarilyClosed: null,
    placeId: null,
    fid: null,
    cid: null,
    reviewsCount: null,
    reviewsDistribution: null,
    imagesCount: null,
    scrapedAt: null,
    reserveTableUrl: null,
    googleFoodUrl: null,
    hotelStars: null,
    hotelDescription: null,
    checkInDate: null,
    checkOutDate: null,
    similarHotelsNearby: null,
    hotelReviewSummary: null,
    additionalInfo: null,
    updatesFromCustomers: null,
    parentPlaceUrl: null,
    imageUrls: null,
    createTime: null,
    updateTime: null,
    remark: null,
    location: null,
    isDelete: null
  };
  proxy.resetForm("infoRef");
}

/** 搜索按钮操作 */
function handleQuery() {
  queryParams.value.pageNum = 1;
  getList();
}

/** 重置按钮操作 */
function resetQuery() {
  proxy.resetForm("queryRef");
  handleQuery();
}

// 多选框选中数据
function handleSelectionChange(selection) {
  ids.value = selection.map(item => item.bugInfoId);
  single.value = selection.length != 1;
  multiple.value = !selection.length;
}

/** 预览按钮操作 */
function handleReview(row) {
  reset();
  const _bugInfoId = row.bugInfoId || ids.value
  getInfo(_bugInfoId).then(response => {
    form.value = response.data;
    console.dir(form.value)
    isReview.value = true;
  });
}

/** 新增按钮操作 */
function handleAdd() {
  reset();
  open.value = true;
  title.value = "添加爬虫结果信息";
}

/** 修改按钮操作 */
function handleUpdate(row) {
  reset();
  const _bugInfoId = row.bugInfoId || ids.value
  getInfo(_bugInfoId).then(response => {
    form.value = response.data;
    open.value = true;
    title.value = "修改爬虫结果信息";
  });
}

/** 提交按钮 */
function submitForm() {
  proxy.$refs["infoRef"].validate(valid => {
    if (valid) {
      if (form.value.bugInfoId != null) {
        updateInfo(form.value).then(response => {
          proxy.$modal.msgSuccess("修改成功");
          open.value = false;
          getList();
        });
      } else {
        addInfo(form.value).then(response => {
          proxy.$modal.msgSuccess("新增成功");
          open.value = false;
          getList();
        });
      }
    }
  });
}

/** 删除按钮操作 */
function handleDelete(row) {
  const _bugInfoIds = row.bugInfoId || ids.value;
  proxy.$modal.confirm('是否确认删除爬虫结果信息编号为"' + _bugInfoIds + '"的数据项？').then(function() {
    return delInfo(_bugInfoIds);
  }).then(() => {
    getList();
    proxy.$modal.msgSuccess("删除成功");
  }).catch(() => {});
}

/** 导出按钮操作 */
function handleExport() {
  proxy.download('system/info/export', {
    ...queryParams.value
  }, `info_${new Date().getTime()}.xlsx`)
}

getList();
</script>
