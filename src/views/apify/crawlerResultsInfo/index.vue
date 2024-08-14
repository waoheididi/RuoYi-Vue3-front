<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryRef" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="小版块ID" prop="latitudeLongitudeModuleId">
        <el-input
            v-model="queryParams.latitudeLongitudeModuleId"
            placeholder="请输入经纬度小模块ID"
            clearable
            @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="Address" prop="address">
        <el-input
            v-model="queryParams.address"
            placeholder="请输入Address"
            clearable
            @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="Category_Name" prop="categoryName">
        <el-input
            v-model="queryParams.categoryName"
            placeholder="请输入Category_Name"
            clearable
            @keyup.enter="handleQuery"
        />
      </el-form-item>
      <!--<el-form-item label="CidCity" prop="cidCity">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.cidCity"-->
      <!--      placeholder="请输入CidCity"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="Claim_This_Business" prop="claimThisBusiness">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.claimThisBusiness"-->
      <!--      placeholder="请输入Claim_This_Business"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="Country_CodeDescription" prop="countryCodeDescription">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.countryCodeDescription"-->
      <!--      placeholder="请输入Country_CodeDescription"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="FidGas_Prices" prop="fidGasPrices">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.fidGasPrices"-->
      <!--      placeholder="请输入FidGas_Prices"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="Is_Advertisement" prop="isAdvertisement">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.isAdvertisement"-->
      <!--      placeholder="请输入Is_Advertisement"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="Located InLocation" prop="locatedInLocation">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.locatedInLocation"-->
      <!--      placeholder="请输入Located InLocation"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="Parent Place URL" prop="parentPlaceUrl">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.parentPlaceUrl"-->
      <!--      placeholder="请输入Parent Place URL"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="Permanently Closed" prop="permanentlyClosed">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.permanentlyClosed"-->
      <!--      placeholder="请输入Permanently Closed"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="Phone" prop="phone">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.phone"-->
      <!--      placeholder="请输入Phone"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="Phone Unformatted" prop="phoneUnformatted">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.phoneUnformatted"-->
      <!--      placeholder="请输入Phone Unformatted"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="Place ID" prop="placeId">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.placeId"-->
      <!--      placeholder="请输入Place ID"-->
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
      <!--<el-form-item label="Postal Code" prop="postalCode">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.postalCode"-->
      <!--      placeholder="请输入Postal Code"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="Search Page Loaded URL" prop="searchPageLoadedUrl">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.searchPageLoadedUrl"-->
      <!--      placeholder="请输入Search Page Loaded URL"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="Search Page URL" prop="searchPageUrl">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.searchPageUrl"-->
      <!--      placeholder="请输入Search Page URL"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="Search String" prop="searchString">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.searchString"-->
      <!--      placeholder="请输入Search String"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="State" prop="state">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.state"-->
      <!--      placeholder="请输入State"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="Street" prop="street">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.street"-->
      <!--      placeholder="请输入Street"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="Temporarily Closed" prop="temporarilyClosed">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.temporarilyClosed"-->
      <!--      placeholder="请输入Temporarily Closed"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="Title" prop="title">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.title"-->
      <!--      placeholder="请输入Title"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="URL" prop="url">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.url"-->
      <!--      placeholder="请输入URL"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="Website" prop="website">-->
      <!--  <el-input-->
      <!--      v-model="queryParams.website"-->
      <!--      placeholder="请输入Website"-->
      <!--      clearable-->
      <!--      @keyup.enter="handleQuery"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="Scraped At" prop="scrapedAt">-->
      <!--  <el-date-picker clearable-->
      <!--                  v-model="queryParams.scrapedAt"-->
      <!--                  type="date"-->
      <!--                  value-format="YYYY-MM-DD"-->
      <!--                  placeholder="请选择Scraped At">-->
      <!--  </el-date-picker>-->
      <!--</el-form-item>-->
      <el-form-item>
        <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
        <el-button icon="Refresh" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
            type="primary"
            plain
            icon="Plus"
            @click="handleAdd"
            v-hasPermi="['CrawlerResultsInfo:CrawlerResultsInfo:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
            type="success"
            plain
            icon="Edit"
            :disabled="single"
            @click="handleUpdate"
            v-hasPermi="['CrawlerResultsInfo:CrawlerResultsInfo:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
            type="danger"
            plain
            icon="Delete"
            :disabled="multiple"
            @click="handleDelete"
            v-hasPermi="['CrawlerResultsInfo:CrawlerResultsInfo:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
            type="warning"
            plain
            icon="Download"
            @click="handleExport"
            v-hasPermi="['CrawlerResultsInfo:CrawlerResultsInfo:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="CrawlerResultsInfoList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column width="80" label="ID" align="center" prop="crawlerResultInfoId" />
      <el-table-column  width="100"   label="小版块ID" align="center" prop="latitudeLongitudeModuleId" />
      <el-table-column  width="150"   label="Additional_Info" align="center" prop="additionalInfo" />
      <el-table-column  width="150"   label="Address" align="center" prop="address" />
      <el-table-column  width="150"   label="Categories" align="center" prop="categories" />
      <el-table-column  width="180"   label="Category_Name" align="center" prop="categoryName" />
      <el-table-column  width="180"   label="Check_In_Date" align="center" prop="checkInDate" />
      <el-table-column  width="180"   label="Check_Out_Date" align="center" prop="checkOutDate" />
      <el-table-column  width="180"   label="CidCity" align="center" prop="cidCity" />
      <el-table-column  width="180"   label="Claim_This_Business" align="center" prop="claimThisBusiness" />
      <el-table-column  width="250"   label="Country_CodeDescription" align="center" prop="countryCodeDescription" />
      <el-table-column  width="180"   label="FidGas_Prices" align="center" prop="fidGasPrices" />
      <el-table-column  width="180"   label="Image Urls" align="center" prop="imageUrls" />
      <el-table-column  width="180"   label="Images" align="center" prop="images" />
      <el-table-column  width="220"   label="Is_Advertisement" align="center" prop="isAdvertisement" />
      <el-table-column  width="220"   label="Located InLocation" align="center" prop="locatedInLocation" />
      <el-table-column  width="220"   label="Opening Hours" align="center" prop="openingHours" />
      <el-table-column  width="220"   label="Parent Place URL" align="center" prop="parentPlaceUrl" />
      <el-table-column  width="250"   label="People Also Search" align="center" prop="peopleAlsoSearch" />
      <el-table-column  width="220"   label="Permanently Closed" align="center" prop="permanentlyClosed" />
      <el-table-column  width="100"   label="Phone" align="center" prop="phone" />
      <el-table-column  width="220"   label="Phone Unformatted" align="center" prop="phoneUnformatted" />
      <el-table-column  width="100"   label="Place ID" align="center" prop="placeId" />
      <el-table-column  width="100"   label="Plus Code" align="center" prop="plusCode" />
      <el-table-column  width="100"   label="Postal Code" align="center" prop="postalCode" />
      <el-table-column  width="250"   label="Search Page Loaded URL" align="center" prop="searchPageLoadedUrl" />
      <el-table-column  width="220"   label="Search Page URL" align="center" prop="searchPageUrl" />
      <el-table-column  width="220"   label="Search String" align="center" prop="searchString" />
      <el-table-column  width="100"   label="State" align="center" prop="state" />
      <el-table-column  width="100"   label="Street" align="center" prop="street" />
      <el-table-column  width="220"   label="Temporarily Closed" align="center" prop="temporarilyClosed" />
      <el-table-column  width="100"   label="Title" align="center" prop="title" />
      <el-table-column  width="100"   label="URL" align="center" prop="url" />
      <el-table-column  width="100"   label="Website" align="center" prop="website" />
      <el-table-column   label="Scraped At" align="center" prop="scrapedAt" width="180">
        <template #default="scope">
          <span>{{ parseTime(scope.row.scrapedAt, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column  width="100"   label="备注" align="center" prop="remark" />
      <el-table-column  width="100"   label="操作" align="center" class-name="small-padding fixed-width">
        <template #default="scope">
          <el-button link type="primary" icon="Edit" @click="handleUpdate(scope.row)" v-hasPermi="['CrawlerResultsInfo:CrawlerResultsInfo:edit']">修改</el-button>
          <el-button link type="primary" icon="Delete" @click="handleDelete(scope.row)" v-hasPermi="['CrawlerResultsInfo:CrawlerResultsInfo:remove']">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
        v-show="total>0"
        :total="total"
        v-model:page="queryParams.pageNum"
        v-model:limit="queryParams.pageSize"
        @pagination="getList"
    />

    <!-- 添加或修改爬虫结果信息对话框 -->
    <el-dialog :title="title" v-model="open" width="95vw" append-to-body>
      <el-form ref="CrawlerResultsInfoRef" :model="form" :rules="rules" label-width="180px">
        <el-form-item label="经纬度小模块ID" prop="latitudeLongitudeModuleId">
          <el-input v-model="form.latitudeLongitudeModuleId" placeholder="请输入经纬度小模块ID" />
        </el-form-item>
        <el-form-item label="Additional_Info" prop="additionalInfo">
          <el-input v-model="form.additionalInfo" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="Address" prop="address">
          <el-input v-model="form.address" placeholder="请输入Address" />
        </el-form-item>
        <el-form-item label="Categories" prop="categories">
          <el-input v-model="form.categories" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="Category_Name" prop="categoryName">
          <el-input v-model="form.categoryName" placeholder="请输入Category_Name" />
        </el-form-item>
        <el-form-item label="Check_In_Date" prop="checkInDate">
          <el-input v-model="form.checkInDate" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="Check_Out_Date" prop="checkOutDate">
          <el-input v-model="form.checkOutDate" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="CidCity" prop="cidCity">
          <el-input v-model="form.cidCity" placeholder="请输入CidCity" />
        </el-form-item>
        <el-form-item label="Claim_This_Business" prop="claimThisBusiness">
          <el-input v-model="form.claimThisBusiness" placeholder="请输入Claim_This_Business" />
        </el-form-item>
        <el-form-item label="Country_CodeDescription" prop="countryCodeDescription">
          <el-input v-model="form.countryCodeDescription" placeholder="请输入Country_CodeDescription" />
        </el-form-item>
        <el-form-item label="FidGas_Prices" prop="fidGasPrices">
          <el-input v-model="form.fidGasPrices" placeholder="请输入FidGas_Prices" />
        </el-form-item>
        <el-form-item label="Image Urls" prop="imageUrls">
          <el-input v-model="form.imageUrls" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="Images" prop="images">
          <el-input v-model="form.images" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="Is_Advertisement" prop="isAdvertisement">
          <el-input v-model="form.isAdvertisement" placeholder="请输入Is_Advertisement" />
        </el-form-item>
        <el-form-item label="Located InLocation" prop="locatedInLocation">
          <el-input v-model="form.locatedInLocation" placeholder="请输入Located InLocation" />
        </el-form-item>
        <el-form-item label="Opening Hours" prop="openingHours">
          <el-input v-model="form.openingHours" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="Parent Place URL" prop="parentPlaceUrl">
          <el-input v-model="form.parentPlaceUrl" placeholder="请输入Parent Place URL" />
        </el-form-item>
        <el-form-item label="People Also Search" prop="peopleAlsoSearch">
          <el-input v-model="form.peopleAlsoSearch" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="Permanently Closed" prop="permanentlyClosed">
          <el-input v-model="form.permanentlyClosed" placeholder="请输入Permanently Closed" />
        </el-form-item>
        <el-form-item label="Phone" prop="phone">
          <el-input v-model="form.phone" placeholder="请输入Phone" />
        </el-form-item>
        <el-form-item label="Phone Unformatted" prop="phoneUnformatted">
          <el-input v-model="form.phoneUnformatted" placeholder="请输入Phone Unformatted" />
        </el-form-item>
        <el-form-item label="Place ID" prop="placeId">
          <el-input v-model="form.placeId" placeholder="请输入Place ID" />
        </el-form-item>
        <el-form-item label="Plus Code" prop="plusCode">
          <el-input v-model="form.plusCode" placeholder="请输入Plus Code" />
        </el-form-item>
        <el-form-item label="Postal Code" prop="postalCode">
          <el-input v-model="form.postalCode" placeholder="请输入Postal Code" />
        </el-form-item>
        <el-form-item label="Search Page Loaded URL" prop="searchPageLoadedUrl">
          <el-input v-model="form.searchPageLoadedUrl" placeholder="请输入Search Page Loaded URL" />
        </el-form-item>
        <el-form-item label="Search Page URL" prop="searchPageUrl">
          <el-input v-model="form.searchPageUrl" placeholder="请输入Search Page URL" />
        </el-form-item>
        <el-form-item label="Search String" prop="searchString">
          <el-input v-model="form.searchString" placeholder="请输入Search String" />
        </el-form-item>
        <el-form-item label="State" prop="state">
          <el-input v-model="form.state" placeholder="请输入State" />
        </el-form-item>
        <el-form-item label="Street" prop="street">
          <el-input v-model="form.street" placeholder="请输入Street" />
        </el-form-item>
        <el-form-item label="Temporarily Closed" prop="temporarilyClosed">
          <el-input v-model="form.temporarilyClosed" placeholder="请输入Temporarily Closed" />
        </el-form-item>
        <el-form-item label="Title" prop="title">
          <el-input v-model="form.title" placeholder="请输入Title" />
        </el-form-item>
        <el-form-item label="URL" prop="url">
          <el-input v-model="form.url" placeholder="请输入URL" />
        </el-form-item>
        <el-form-item label="Website" prop="website">
          <el-input v-model="form.website" placeholder="请输入Website" />
        </el-form-item>
        <el-form-item label="Scraped At" prop="scrapedAt">
          <el-date-picker clearable
                          v-model="form.scrapedAt"
                          type="date"
                          value-format="YYYY-MM-DD"
                          placeholder="请选择Scraped At">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="form.remark" type="textarea" placeholder="请输入内容" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="submitForm">确 定</el-button>
          <el-button @click="cancel">取 消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup name="CrawlerResultsInfo">
import { listCrawlerResultsInfo, getCrawlerResultsInfo, delCrawlerResultsInfo, addCrawlerResultsInfo, updateCrawlerResultsInfo } from "@/api/apify/crawlerResultsInfo";

const { proxy } = getCurrentInstance();

const CrawlerResultsInfoList = ref([]);
const open = ref(false);
const loading = ref(true);
const showSearch = ref(true);
const ids = ref([]);
const single = ref(true);
const multiple = ref(true);
const total = ref(0);
const title = ref("");

const data = reactive({
  form: {},
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    latitudeLongitudeModuleId: null,
    additionalInfo: null,
    address: null,
    categories: null,
    categoryName: null,
    checkInDate: null,
    checkOutDate: null,
    cidCity: null,
    claimThisBusiness: null,
    countryCodeDescription: null,
    fidGasPrices: null,
    imageUrls: null,
    images: null,
    isAdvertisement: null,
    locatedInLocation: null,
    openingHours: null,
    parentPlaceUrl: null,
    peopleAlsoSearch: null,
    permanentlyClosed: null,
    phone: null,
    phoneUnformatted: null,
    placeId: null,
    plusCode: null,
    postalCode: null,
    searchPageLoadedUrl: null,
    searchPageUrl: null,
    searchString: null,
    state: null,
    street: null,
    temporarilyClosed: null,
    title: null,
    url: null,
    website: null,
    scrapedAt: null,
    isDelete: null,
  },
  rules: {
  }
});

const { queryParams, form, rules } = toRefs(data);

/** 查询爬虫结果信息列表 */
function getList() {
  loading.value = true;
  listCrawlerResultsInfo(queryParams.value).then(response => {
    CrawlerResultsInfoList.value = response.rows;
    total.value = response.total;
    loading.value = false;
  });
}

// 取消按钮
function cancel() {
  open.value = false;
  reset();
}

// 表单重置
function reset() {
  form.value = {
    crawlerResultInfoId: null,
    latitudeLongitudeModuleId: null,
    additionalInfo: null,
    address: null,
    categories: null,
    categoryName: null,
    checkInDate: null,
    checkOutDate: null,
    cidCity: null,
    claimThisBusiness: null,
    countryCodeDescription: null,
    fidGasPrices: null,
    imageUrls: null,
    images: null,
    isAdvertisement: null,
    locatedInLocation: null,
    openingHours: null,
    parentPlaceUrl: null,
    peopleAlsoSearch: null,
    permanentlyClosed: null,
    phone: null,
    phoneUnformatted: null,
    placeId: null,
    plusCode: null,
    postalCode: null,
    searchPageLoadedUrl: null,
    searchPageUrl: null,
    searchString: null,
    state: null,
    street: null,
    temporarilyClosed: null,
    title: null,
    url: null,
    website: null,
    scrapedAt: null,
    createTime: null,
    updateTime: null,
    isDelete: null,
    remark: null
  };
  proxy.resetForm("CrawlerResultsInfoRef");
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
  ids.value = selection.map(item => item.crawlerResultInfoId);
  single.value = selection.length != 1;
  multiple.value = !selection.length;
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
  const _crawlerResultInfoId = row.crawlerResultInfoId || ids.value
  getCrawlerResultsInfo(_crawlerResultInfoId).then(response => {
    form.value = response.data;
    open.value = true;
    title.value = "修改爬虫结果信息";
  });
}

/** 提交按钮 */
function submitForm() {
  proxy.$refs["CrawlerResultsInfoRef"].validate(valid => {
    if (valid) {
      if (form.value.crawlerResultInfoId != null) {
        updateCrawlerResultsInfo(form.value).then(response => {
          proxy.$modal.msgSuccess("修改成功");
          open.value = false;
          getList();
        });
      } else {
        addCrawlerResultsInfo(form.value).then(response => {
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
  const _crawlerResultInfoIds = row.crawlerResultInfoId || ids.value;
  proxy.$modal.confirm('是否确认删除爬虫结果信息编号为"' + _crawlerResultInfoIds + '"的数据项？').then(function() {
    return delCrawlerResultsInfo(_crawlerResultInfoIds);
  }).then(() => {
    getList();
    proxy.$modal.msgSuccess("删除成功");
  }).catch(() => {});
}

/** 导出按钮操作 */
function handleExport() {
  proxy.download('CrawlerResultsInfo/CrawlerResultsInfo/export', {
    ...queryParams.value
  }, `CrawlerResultsInfo_${new Date().getTime()}.xlsx`)
}

getList();
</script>
