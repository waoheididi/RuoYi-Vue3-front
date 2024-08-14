<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryRef" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="左上角经度" prop="topLeftLongitude">
        <el-input
            v-model="queryParams.topLeftLongitude"
            placeholder="请输入左上角经度"
            clearable
            @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="左上角维度" prop="topLeftLatitude">
        <el-input
            v-model="queryParams.topLeftLatitude"
            placeholder="请输入左上角维度"
            clearable
            @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="右上角经度" prop="topRightLongitude">
        <el-input
            v-model="queryParams.topRightLongitude"
            placeholder="请输入右上角经度"
            clearable
            @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="右上角维度" prop="topRightLatitude">
        <el-input
            v-model="queryParams.topRightLatitude"
            placeholder="请输入右上角维度"
            clearable
            @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="左下角经度" prop="bottomLeftLongitude">
        <el-input
            v-model="queryParams.bottomLeftLongitude"
            placeholder="请输入左下角经度"
            clearable
            @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="左下角维度" prop="bottomLeftLatitude">
        <el-input
            v-model="queryParams.bottomLeftLatitude"
            placeholder="请输入左下角维度"
            clearable
            @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="右下角经度" prop="bottomRightLongitude">
        <el-input
            v-model="queryParams.bottomRightLongitude"
            placeholder="请输入右下角经度"
            clearable
            @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="右下角维度" prop="bottomRightLatitude">
        <el-input
            v-model="queryParams.bottomRightLatitude"
            placeholder="请输入右下角维度"
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
            v-hasPermi="['apify:module:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
            type="success"
            plain
            icon="Edit"
            :disabled="single"
            @click="handleUpdate"
            v-hasPermi="['apify:module:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
            type="danger"
            plain
            icon="Delete"
            :disabled="multiple"
            @click="handleDelete"
            v-hasPermi="['apify:module:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
            type="warning"
            plain
            icon="Download"
            @click="handleExport"
            v-hasPermi="['apify:module:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="moduleList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="经纬度小模块ID" align="center" prop="moduleId" />
      <el-table-column label="左上角经度" align="center" prop="topLeftLongitude" />
      <el-table-column label="左上角维度" align="center" prop="topLeftLatitude" />
      <el-table-column label="右上角经度" align="center" prop="topRightLongitude" />
      <el-table-column label="右上角维度" align="center" prop="topRightLatitude" />
      <el-table-column label="左下角经度" align="center" prop="bottomLeftLongitude" />
      <el-table-column label="左下角维度" align="center" prop="bottomLeftLatitude" />
      <el-table-column label="右下角经度" align="center" prop="bottomRightLongitude" />
      <el-table-column label="右下角维度" align="center" prop="bottomRightLatitude" />
      <el-table-column label="是否删除" align="center" prop="isDelete" />
      <el-table-column label="备注" align="center" prop="remark" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template #default="scope">
          <el-button link type="primary" icon="Edit" @click="handleUpdate(scope.row)" v-hasPermi="['apify:module:edit']">修改</el-button>
          <el-button link type="primary" icon="Delete" @click="handleDelete(scope.row)" v-hasPermi="['apify:module:remove']">删除</el-button>
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

    <!-- 添加或修改经纬度小模块信息对话框 -->
    <el-dialog :title="title" v-model="open" width="500px" append-to-body>
      <el-form ref="moduleRef" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="左上角经度" prop="topLeftLongitude">
          <el-input v-model="form.topLeftLongitude" placeholder="请输入左上角经度" />
        </el-form-item>
        <el-form-item label="左上角维度" prop="topLeftLatitude">
          <el-input v-model="form.topLeftLatitude" placeholder="请输入左上角维度" />
        </el-form-item>
        <el-form-item label="右上角经度" prop="topRightLongitude">
          <el-input v-model="form.topRightLongitude" placeholder="请输入右上角经度" />
        </el-form-item>
        <el-form-item label="右上角维度" prop="topRightLatitude">
          <el-input v-model="form.topRightLatitude" placeholder="请输入右上角维度" />
        </el-form-item>
        <el-form-item label="左下角经度" prop="bottomLeftLongitude">
          <el-input v-model="form.bottomLeftLongitude" placeholder="请输入左下角经度" />
        </el-form-item>
        <el-form-item label="左下角维度" prop="bottomLeftLatitude">
          <el-input v-model="form.bottomLeftLatitude" placeholder="请输入左下角维度" />
        </el-form-item>
        <el-form-item label="右下角经度" prop="bottomRightLongitude">
          <el-input v-model="form.bottomRightLongitude" placeholder="请输入右下角经度" />
        </el-form-item>
        <el-form-item label="右下角维度" prop="bottomRightLatitude">
          <el-input v-model="form.bottomRightLatitude" placeholder="请输入右下角维度" />
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

<script setup name="Module">
import { listModule, getModule, delModule, addModule, updateModule } from "@/api/apify/locationType";

const { proxy } = getCurrentInstance();

const moduleList = ref([]);
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
    topLeftLongitude: null,
    topLeftLatitude: null,
    topRightLongitude: null,
    topRightLatitude: null,
    bottomLeftLongitude: null,
    bottomLeftLatitude: null,
    bottomRightLongitude: null,
    bottomRightLatitude: null,
    isDelete: null,
  },
  rules: {
    topLeftLongitude: [
      { required: true, message: "左上角经度不能为空", trigger: "blur" }
    ],
    topLeftLatitude: [
      { required: true, message: "左上角维度不能为空", trigger: "blur" }
    ],
    topRightLongitude: [
      { required: true, message: "右上角经度不能为空", trigger: "blur" }
    ],
    topRightLatitude: [
      { required: true, message: "右上角维度不能为空", trigger: "blur" }
    ],
    bottomLeftLongitude: [
      { required: true, message: "左下角经度不能为空", trigger: "blur" }
    ],
    bottomLeftLatitude: [
      { required: true, message: "左下角维度不能为空", trigger: "blur" }
    ],
    bottomRightLongitude: [
      { required: true, message: "右下角经度不能为空", trigger: "blur" }
    ],
    bottomRightLatitude: [
      { required: true, message: "右下角维度不能为空", trigger: "blur" }
    ],
  }
});

const { queryParams, form, rules } = toRefs(data);

/** 查询经纬度小模块信息列表 */
function getList() {
  loading.value = true;
  listModule(queryParams.value).then(response => {
    moduleList.value = response.rows;
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
    moduleId: null,
    topLeftLongitude: null,
    topLeftLatitude: null,
    topRightLongitude: null,
    topRightLatitude: null,
    bottomLeftLongitude: null,
    bottomLeftLatitude: null,
    bottomRightLongitude: null,
    bottomRightLatitude: null,
    createTime: null,
    updateTime: null,
    isDelete: null,
    remark: null
  };
  proxy.resetForm("moduleRef");
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
  ids.value = selection.map(item => item.moduleId);
  single.value = selection.length != 1;
  multiple.value = !selection.length;
}

/** 新增按钮操作 */
function handleAdd() {
  reset();
  open.value = true;
  title.value = "添加经纬度小模块信息";
}

/** 修改按钮操作 */
function handleUpdate(row) {
  reset();
  const _moduleId = row.moduleId || ids.value
  getModule(_moduleId).then(response => {
    form.value = response.data;
    open.value = true;
    title.value = "修改经纬度小模块信息";
  });
}

/** 提交按钮 */
function submitForm() {
  proxy.$refs["moduleRef"].validate(valid => {
    if (valid) {
      if (form.value.moduleId != null) {
        updateModule(form.value).then(response => {
          proxy.$modal.msgSuccess("修改成功");
          open.value = false;
          getList();
        });
      } else {
        addModule(form.value).then(response => {
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
  const _moduleIds = row.moduleId || ids.value;
  proxy.$modal.confirm('是否确认删除经纬度小模块信息编号为"' + _moduleIds + '"的数据项？').then(function() {
    return delModule(_moduleIds);
  }).then(() => {
    getList();
    proxy.$modal.msgSuccess("删除成功");
  }).catch(() => {});
}

/** 导出按钮操作 */
function handleExport() {
  proxy.download('apify/module/export', {
    ...queryParams.value
  }, `module_${new Date().getTime()}.xlsx`)
}

getList();
</script>
