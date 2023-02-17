<template>
  <div>
    <el-select class="autoWith" v-model="value" placeholder="请选择">
      <template slot="prefix">
        {{ (options.find((s) => s.value === value) || {}).label }}
      </template>
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <div>
      <el-form ref="form">
        <el-input v-model="input"></el-input>

        <div>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
          </el-table>
        </div>

        <el-buttom @click="handerbtn">
            提交
        </el-buttom>
      </el-form>
    </div>
  </div>
</template>
<!-- 下拉框内容宽度与input框同步宽度 -->
<script>
export default {
  data() {
    return {
        input:'',
        formInfo:{
            input:""
        },
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      options: [
        {
          value: "选项1",
          label:
            "黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶fadfassssssssssss",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
    };
  },
  methods:{
    handerbtn(){
        this.$refs.form.validate((valid) => {
            if(valid){
                console.log(valid);
            }
        })
    }
  }
};
</script>
<style scoped>
.autoWith {
  min-width: 120px;
}

.autoWith >>> .el-input__prefix {
  position: relative;
  left: 0px;
  box-sizing: border-box;
  border: 1px solid #ffffff00;
  padding: 0 30px;
  height: 40px;
  line-height: 40px;
  visibility: hidden;
}

.autoWith >>> input {
  position: absolute;
}
</style>

<!-- <style>
.autoWith {
    min-width: 120px;
}

.autoWith .el-input__prefix {
    position: relative;
    left: 0px;
    box-sizing: border-box;
    border: 1px solid #ffffff00;
    padding: 0 30px;
    height: 40px;
    line-height: 40px;
    visibility: hidden;
}

.autoWith input {
    position: absolute;
}
</style> -->