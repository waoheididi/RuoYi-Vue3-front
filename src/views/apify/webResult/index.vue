<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryRef" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="Bug信息ID" prop="bugInfoId">
        <el-input
            v-model="queryParams.bugInfoId"
            placeholder="请输入Bug信息ID"
            clearable
            @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="webResultUrl" prop="webResultUrl">
        <el-input
            v-model="queryParams.webResultUrl"
            placeholder="请输入webResultUrl"
            clearable
            @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="是否删除" prop="isDelete">
        <el-input
            v-model="queryParams.isDelete"
            placeholder="请输入是否删除"
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
            v-hasPermi="['apify:webResult:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
            type="success"
            plain
            icon="Edit"
            :disabled="single"
            @click="handleUpdate"
            v-hasPermi="['apify:webResult:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
            type="danger"
            plain
            icon="Delete"
            :disabled="multiple"
            @click="handleDelete"
            v-hasPermi="['apify:webResult:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
            type="warning"
            plain
            icon="Download"
            @click="handleExport"
            v-hasPermi="['apify:webResult:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="webResultList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="webResultId" align="center" prop="webResultId" />
      <el-table-column label="Bug信息ID" align="center" prop="bugInfoId" />
      <el-table-column label="webResultUrl" align="center" prop="webResultUrl">
        <template #default="scope">
          <a :href="scope.row.webResultUrl" style="color:#1c84c6;" target="_blank">{{scope.row.webResultUrl}}</a>
        </template>
      </el-table-column>
      <!--<el-table-column label="是否删除" align="center" prop="isDelete" />-->
      <!--<el-table-column label="备注" align="center" prop="remark" />-->
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template #default="scope">
          <el-button link type="primary" icon="Edit" @click="handleUpdate(scope.row)" v-hasPermi="['apify:webResult:edit']">修改</el-button>
          <el-button link type="primary" icon="Delete" @click="handleDelete(scope.row)" v-hasPermi="['apify:webResult:remove']">删除</el-button>
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

    <!-- 添加或修改webResult结果信息对话框 -->
    <el-dialog :title="title" v-model="open" width="500px" append-to-body>
      <el-form ref="webResultRef" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="Bug信息ID" prop="bugInfoId">
          <el-input v-model="form.bugInfoId" placeholder="请输入Bug信息ID" />
        </el-form-item>
        <el-form-item label="webResultUrl" prop="webResultUrl">
          <el-input v-model="form.webResultUrl" placeholder="请输入webResultUrl" />
        </el-form-item>
        <!--<el-form-item label="是否删除" prop="isDelete">-->
        <!--  <el-input v-model="form.isDelete" placeholder="请输入是否删除" />-->
        <!--</el-form-item>-->
        <!--<el-form-item label="备注" prop="remark">-->
        <!--  <el-input v-model="form.remark" type="textarea" placeholder="请输入内容" />-->
        <!--</el-form-item>-->
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

<script setup name="WebResult">
import { listWebResult, getWebResult, delWebResult, addWebResult, updateWebResult } from "@/api/apify/webResult";

const { proxy } = getCurrentInstance();

const webResultList = ref([]);
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
    bugInfoId: null,
    webResultUrl: null,
    isDelete: null,
  },
  rules: {
  }
});

const { queryParams, form, rules } = toRefs(data);

/** 查询webResult结果信息列表 */
function getList() {
  loading.value = true;
  listWebResult(queryParams.value).then(response => {
    webResultList.value = response.rows;
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
    webResultId: null,
    bugInfoId: null,
    webResultUrl: null,
    createTime: null,
    updateTime: null,
    isDelete: null,
    remark: null
  };
  proxy.resetForm("webResultRef");
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
  ids.value = selection.map(item => item.webResultId);
  single.value = selection.length != 1;
  multiple.value = !selection.length;
}

/** 新增按钮操作 */
function handleAdd() {
  reset();
  open.value = true;
  title.value = "添加webResult结果信息";
}

/** 修改按钮操作 */
function handleUpdate(row) {
  reset();
  const _webResultId = row.webResultId || ids.value
  getWebResult(_webResultId).then(response => {
    form.value = response.data;
    open.value = true;
    title.value = "修改webResult结果信息";
  });
}

/** 提交按钮 */
function submitForm() {
  proxy.$refs["webResultRef"].validate(valid => {
    if (valid) {
      if (form.value.webResultId != null) {
        updateWebResult(form.value).then(response => {
          proxy.$modal.msgSuccess("修改成功");
          open.value = false;
          getList();
        });
      } else {
        addWebResult(form.value).then(response => {
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
  const _webResultIds = row.webResultId || ids.value;
  proxy.$modal.confirm('是否确认删除webResult结果信息编号为"' + _webResultIds + '"的数据项？').then(function() {
    return delWebResult(_webResultIds);
  }).then(() => {
    getList();
    proxy.$modal.msgSuccess("删除成功");
  }).catch(() => {});
}

/** 导出按钮操作 */
function handleExport() {
  proxy.download('apify/webResult/export', {
    ...queryParams.value
  }, `webResult_${new Date().getTime()}.xlsx`)
}

getList();
</script>
