<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryRef" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="webResultUrlId" prop="webResultUrlId">
        <el-input
          v-model="queryParams.webResultUrlId"
          placeholder="请输入webResultUrlId"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="webResultId" prop="webResultId">
        <el-input
          v-model="queryParams.webResultId"
          placeholder="请输入webResultId"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="Bug信息ID" prop="bugInfoId">
        <el-input
          v-model="queryParams.bugInfoId"
          placeholder="请输入Bug信息ID"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="webResultUrl1" prop="webResultUrl1">
        <el-input
          v-model="queryParams.webResultUrl1"
          placeholder="请输入webResultUrl1"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="webResultUrl2" prop="webResultUrl2">
        <el-input
          v-model="queryParams.webResultUrl2"
          placeholder="请输入webResultUrl2"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="webResultUrl3" prop="webResultUrl3">
        <el-input
          v-model="queryParams.webResultUrl3"
          placeholder="请输入webResultUrl3"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="webResultUrl4" prop="webResultUrl4">
        <el-input
          v-model="queryParams.webResultUrl4"
          placeholder="请输入webResultUrl4"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="webResultUrl5" prop="webResultUrl5">
        <el-input
          v-model="queryParams.webResultUrl5"
          placeholder="请输入webResultUrl5"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
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
          v-hasPermi="['apify:webResultUrls:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="Edit"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['apify:webResultUrls:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="Delete"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['apify:webResultUrls:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="Download"
          @click="handleExport"
          v-hasPermi="['apify:webResultUrls:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="webResultUrlsList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="webResultUrlId" align="center" prop="webResultUrlId" />
      <el-table-column label="webResultId" align="center" prop="webResultId" />
      <el-table-column label="Bug信息ID" align="center" prop="bugInfoId" />
      <el-table-column label="webResultUrl1" align="center" prop="webResultUrl1" >
        <template #default="scope">
            <a :href="scope.row.webResultUrl1" style="color:#1c84c6;" target="_blank">{{scope.row.webResultUrl1}}</a>
        </template>
      </el-table-column>
      <el-table-column label="webResultUrl2" align="center" prop="webResultUrl2" >
         <template #default="scope">
              <a :href="scope.row.webResultUrl2" style="color:#1c84c6;" target="_blank">{{scope.row.webResultUrl2}}</a>
          </template>
      </el-table-column>
      <el-table-column label="webResultUrl3" align="center" prop="webResultUrl3" >
         <template #default="scope">
              <a :href="scope.row.webResultUrl3" style="color:#1c84c6;" target="_blank">{{scope.row.webResultUrl3}}</a>
          </template>
      </el-table-column>
      <el-table-column label="webResultUrl4" align="center" prop="webResultUrl4" >
         <template #default="scope">
              <a :href="scope.row.webResultUrl4" style="color:#1c84c6;" target="_blank">{{scope.row.webResultUrl4}}</a>
          </template>
      </el-table-column>
      <el-table-column label="webResultUrl5" align="center" prop="webResultUrl5" >
         <template #default="scope">
              <a :href="scope.row.webResultUrl5" style="color:#1c84c6;" target="_blank">{{scope.row.webResultUrl5}}</a>
          </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template #default="scope">
          <el-button link type="primary" icon="Edit" @click="handleUpdate(scope.row)" v-hasPermi="['apify:webResultUrls:edit']">修改</el-button>
          <el-button link type="primary" icon="Delete" @click="handleDelete(scope.row)" v-hasPermi="['apify:webResultUrls:remove']">删除</el-button>
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

    <!-- 添加或修改webResult的URL列对话框 -->
    <el-dialog :title="title" v-model="open" width="500px" append-to-body>
      <el-form ref="webResultUrlsRef" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="webResultId" prop="webResultId">
          <el-input v-model="form.webResultId" placeholder="请输入webResultId" />
        </el-form-item>
        <el-form-item label="Bug信息ID" prop="bugInfoId">
          <el-input v-model="form.bugInfoId" placeholder="请输入Bug信息ID" />
        </el-form-item>
        <el-form-item label="webResultUrl1" prop="webResultUrl1">
          <el-input v-model="form.webResultUrl1" placeholder="请输入webResultUrl1" />
        </el-form-item>
        <el-form-item label="webResultUrl2" prop="webResultUrl2">
          <el-input v-model="form.webResultUrl2" placeholder="请输入webResultUrl2" />
        </el-form-item>
        <el-form-item label="webResultUrl3" prop="webResultUrl3">
          <el-input v-model="form.webResultUrl3" placeholder="请输入webResultUrl3" />
        </el-form-item>
        <el-form-item label="webResultUrl4" prop="webResultUrl4">
          <el-input v-model="form.webResultUrl4" placeholder="请输入webResultUrl4" />
        </el-form-item>
        <el-form-item label="webResultUrl5" prop="webResultUrl5">
          <el-input v-model="form.webResultUrl5" placeholder="请输入webResultUrl5" />
        </el-form-item>
        <el-form-item label="是否删除" prop="isDelete">
          <el-input v-model="form.isDelete" placeholder="请输入是否删除" />
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

<script setup name="WebResultUrls">
import { listWebResultUrls, getWebResultUrls, delWebResultUrls, addWebResultUrls, updateWebResultUrls } from "@/api/apify/webResultUrls";

const { proxy } = getCurrentInstance();

const webResultUrlsList = ref([]);
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
    webResultUrlId: null,
    webResultId: null,
    bugInfoId: null,
    webResultUrl1: null,
    webResultUrl2: null,
    webResultUrl3: null,
    webResultUrl4: null,
    webResultUrl5: null,
  },
  rules: {
  }
});

const { queryParams, form, rules } = toRefs(data);

/** 查询webResult的URL列列表 */
function getList() {
  loading.value = true;
  listWebResultUrls(queryParams.value).then(response => {
    webResultUrlsList.value = response.rows;
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
    webResultUrlId: null,
    webResultId: null,
    bugInfoId: null,
    webResultUrl1: null,
    webResultUrl2: null,
    webResultUrl3: null,
    webResultUrl4: null,
    webResultUrl5: null,
    createTime: null,
    updateTime: null,
    isDelete: null,
    remark: null
  };
  proxy.resetForm("webResultUrlsRef");
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
  ids.value = selection.map(item => item.webResultUrlId);
  single.value = selection.length != 1;
  multiple.value = !selection.length;
}

/** 新增按钮操作 */
function handleAdd() {
  reset();
  open.value = true;
  title.value = "添加webResult的URL列";
}

/** 修改按钮操作 */
function handleUpdate(row) {
  reset();
  const _webResultUrlId = row.webResultUrlId || ids.value
  getWebResultUrls(_webResultUrlId).then(response => {
    form.value = response.data;
    open.value = true;
    title.value = "修改webResult的URL列";
  });
}

/** 提交按钮 */
function submitForm() {
  proxy.$refs["webResultUrlsRef"].validate(valid => {
    if (valid) {
      if (form.value.webResultUrlId != null) {
        updateWebResultUrls(form.value).then(response => {
          proxy.$modal.msgSuccess("修改成功");
          open.value = false;
          getList();
        });
      } else {
        addWebResultUrls(form.value).then(response => {
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
  const _webResultUrlIds = row.webResultUrlId || ids.value;
  proxy.$modal.confirm('是否确认删除webResult的URL列编号为"' + _webResultUrlIds + '"的数据项？').then(function() {
    return delWebResultUrls(_webResultUrlIds);
  }).then(() => {
    getList();
    proxy.$modal.msgSuccess("删除成功");
  }).catch(() => {});
}

/** 导出按钮操作 */
function handleExport() {
  proxy.download('apify/webResultUrls/export', {
    ...queryParams.value
  }, `webResultUrls_${new Date().getTime()}.xlsx`)
}

getList();
</script>
