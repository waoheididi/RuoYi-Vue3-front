<!--webResult任务切片设置-->
<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryRef" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item>
        <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
        <el-button icon="Refresh" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <!--<el-col :span="1.5">-->
      <!--  <el-button-->
      <!--      type="primary"-->
      <!--      plain-->
      <!--      icon="Plus"-->
      <!--      @click="handleAdd"-->
      <!--      v-hasPermi="['apify:webResultTask:add']"-->
      <!--  >新增</el-button>-->
      <!--</el-col>-->
      <!--<el-col :span="1.5">-->
      <!--  <el-button-->
      <!--      type="success"-->
      <!--      plain-->
      <!--      icon="Edit"-->
      <!--      :disabled="single"-->
      <!--      @click="handleUpdate"-->
      <!--      v-hasPermi="['apify:webResultTask:edit']"-->
      <!--  >修改</el-button>-->
      <!--</el-col>-->
      <!--<el-col :span="1.5">-->
      <!--  <el-button-->
      <!--      type="danger"-->
      <!--      plain-->
      <!--      icon="Delete"-->
      <!--      :disabled="multiple"-->
      <!--      @click="handleDelete"-->
      <!--      v-hasPermi="['apify:webResultTask:remove']"-->
      <!--  >删除</el-button>-->
      <!--</el-col>-->
      <el-col :span="1.5">
        <!--<el-button-->
        <!--    type="warning"-->
        <!--    plain-->
        <!--    icon="Download"-->
        <!--    @click="handleExport"-->
        <!--    v-hasPermi="['apify:webResultTask:export']"-->
        <!--&gt;导出</el-button>-->
        <el-button
            :disabled="isDisabled"
            type="warning"
            plain
            icon="Download"
            @click="handleExecuteTask"
            v-hasPermi="['apify:webResultTask:handleExecuteTask']"
        >任务执行</el-button>
      </el-col>
      <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="webResultTaskList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="ID" align="center" prop="webResultTaskId" />
      <el-table-column label="起始切片下标" align="center" prop="taskStartIndex" />
      <el-table-column label="任务切片长度" align="center" prop="sliceLen" />
      <el-table-column label="任务执行次数" align="center" prop="taskNum" />
      <el-table-column label="切片间的sleep时间(秒)" align="center" prop="sliceSleep" />
      <el-table-column label="循环间的sleep时间(秒)" align="center" prop="taskSleep" />
      <!--<el-table-column label="执行状态" align="center" prop="isSuccess">-->
      <!--  <template #default="scope">-->
      <!--    <el-tag v-if="scope.row.temporarilyClosed" type="success">成功</el-tag>-->
      <!--    <el-tag v-else type="danger">失败</el-tag>-->
      <!--  </template>-->
      <!--</el-table-column>-->
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template #default="scope">
          <el-button link type="primary" icon="Edit" @click="handleUpdate(scope.row)" v-hasPermi="['apify:webResultTask:edit']">修改</el-button>
          <!--<el-button link type="primary" icon="Delete" @click="handleDelete(scope.row)" v-hasPermi="['apify:webResultTask:remove']">删除</el-button>-->
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

    <!-- 添加或修改webResult任务切片设置对话框 -->
    <el-dialog :title="title" v-model="open" width="500px" append-to-body>
      <el-form ref="webResultTaskRef" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="起始切片下标" prop="taskStartIndex" label-width="135">
          <el-input v-model="form.taskStartIndex" placeholder="请输入起始切片下标(从1开始)" />
        </el-form-item>
        <el-form-item label="任务切片长度" prop="sliceLen" label-width="135">
          <el-input v-model="form.sliceLen" placeholder="请输入任务切片slice长度(bug信息个数)" />
        </el-form-item>
        <el-form-item label="任务执行次数" prop="taskNum" label-width="135">
          <el-input v-model="form.taskNum" placeholder="请输入任务执行次数(循环多少次)" />
        </el-form-item>
        <el-form-item label="切片间的sleep时间" prop="sliceSleep" label-width="135">
          <el-input v-model="form.sliceSleep" placeholder="请输入切片slice间的sleep时间(秒；Python)" />
        </el-form-item>
        <el-form-item label="循环间的sleep时间" prop="taskSleep" label-width="135">
          <el-input v-model="form.taskSleep" placeholder="请输入循环间的sleep时间(秒；Java)" />
        </el-form-item>
        <el-form-item label="备注" prop="remark" label-width="135">
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

<script setup name="WebResultTask">
import { listWebResultTask, getWebResultTask, delWebResultTask, addWebResultTask, updateWebResultTask } from "@/api/apify/webResultTask";
import {executeWebResultTask} from "../../../api/apify/webResultTask.js";
import {ElLoading, ElMessage} from "element-plus";

const { proxy } = getCurrentInstance();

const webResultTaskList = ref([]);
const open = ref(false);
const loading = ref(true);
const showSearch = ref(true);
const ids = ref([]);
const single = ref(true);
const multiple = ref(true);
const total = ref(0);
const title = ref("");
const isDisabled = ref(false)

const data = reactive({
  form: {},
  queryParams: {
    pageNum: 1,
    pageSize: 10,
  },
  rules: {
  }
});

const { queryParams, form, rules } = toRefs(data);

/** 查询webResult任务切片设置列表 */
function getList() {
  loading.value = true;
  listWebResultTask(queryParams.value).then(response => {
    webResultTaskList.value = response.rows;
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
    webResultTaskId: null,
    taskStartIndex: null,
    sliceLen: null,
    taskNum: null,
    sliceSleep: null,
    taskSleep: null,
    isSuccess: null,
    createTime: null,
    updateTime: null,
    isDelete: null,
    remark: null
  };
  proxy.resetForm("webResultTaskRef");
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
  ids.value = selection.map(item => item.webResultTaskId);
  single.value = selection.length != 1;
  multiple.value = !selection.length;
}

/** 任务执行操作 */
function handleExecuteTask() {
  isDisabled.value = true;
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  executeWebResultTask().then(res=>{
    if (res.code === 200) {
      ElMessage.success(res.msg)
    }else {
      ElMessage.success(res.msg)
    }
    isDisabled.value = false;
    loading.close()
  })
}

/** 新增按钮操作 */
// function handleAdd() {
//   reset();
//   open.value = true;
//   title.value = "添加webResult任务切片设置";
// }

/** 修改按钮操作 */
function handleUpdate(row) {
  reset();
  const _webResultTaskId = row.webResultTaskId || ids.value
  getWebResultTask(_webResultTaskId).then(response => {
    form.value = response.data;
    open.value = true;
    title.value = "修改webResult任务切片设置";
  });
}

/** 提交按钮 */
function submitForm() {
  proxy.$refs["webResultTaskRef"].validate(valid => {
    if (valid) {
      if (form.value.webResultTaskId != null) {
        updateWebResultTask(form.value).then(response => {
          proxy.$modal.msgSuccess("修改成功");
          open.value = false;
          getList();
        });
      }
      // else {
      //   addWebResultTask(form.value).then(response => {
      //     proxy.$modal.msgSuccess("新增成功");
      //     open.value = false;
      //     getList();
      //   });
      // }
    }
  });
}

/** 删除按钮操作 */
// function handleDelete(row) {
//   const _webResultTaskIds = row.webResultTaskId || ids.value;
//   proxy.$modal.confirm('是否确认删除webResult任务切片设置编号为"' + _webResultTaskIds + '"的数据项？').then(function() {
//     return delWebResultTask(_webResultTaskIds);
//   }).then(() => {
//     getList();
//     proxy.$modal.msgSuccess("删除成功");
//   }).catch(() => {});
// }

/** 导出按钮操作 */
function handleExport() {
  proxy.download('apify/webResultTask/export', {
    ...queryParams.value
  }, `webResultTask_${new Date().getTime()}.xlsx`)
}

getList();
</script>

