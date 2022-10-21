<template>
    <div>
        <el-select class="autoWith" v-model="value" placeholder="请选择">
            <template slot="prefix">
                {{(options.find(s => s.value === value) ||{}).label }}
            </template>
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>
<!-- 下拉框内容宽度与input框同步宽度 -->
<script>
export default {
    data() {
        return {
            options: [{
                value: '选项1',
                label: '黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶fadfassssssssssss'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: ''
        };
    },
}
</script>
<style scoped>
.autoWith {
    min-width: 120px;
}

.autoWith>>>.el-input__prefix {
    position: relative;
    left: 0px;
    box-sizing: border-box;
    border: 1px solid #ffffff00;
    padding: 0 30px;
    height: 40px;
    line-height: 40px;
    visibility: hidden;
}

.autoWith>>>input {
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