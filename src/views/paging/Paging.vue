<template>
  <div class="df fd_c">
    <el-input placeholder="请输入你想搜索的名称" v-model="input" @input="search" clearable></el-input>
    <div>
      <el-col :span="8">
        <el-card shadow="never">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="NAME" label="名称" width="300"></el-table-column>
            <el-table-column prop="GOODS_SERIAL_NUMBER" label="商品编号" width="300"></el-table-column>
            <el-table-column prop="ORI_PRICE" label="原价" width="300"></el-table-column>
            <el-table-column prop="PRESENT_PRICE" label="现价" width="300"></el-table-column>
            <el-table-column fixed="right" label="操作" width="180">
              <template slot-scope="scope">
                <el-button @click="modify(scope)" size="small" type="primary">修改</el-button>

                <el-button type="danger" size="small" @click="del(scope)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </div>
    <el-dialog title="修改内容" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input v-model="form.NAME" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="原价" :label-width="formLabelWidth">
          <el-input v-model="form.ORI_PRICE" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="现价" :label-width="formLabelWidth">
          <el-input v-model="form.PRESENT_PRICE" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="num"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.tableData1.length"
      ></el-pagination>
    </div>
    <div class="df">
      <div class="mr">
        <download-excel
          class="export-excel-wrapper"
          :data="tableData"
          :fields="json_fields"
          name="filename.xls"
        >
          <el-button type="primary" >导出xls</el-button>
        </download-excel>
      </div>
      <div class="ml">
         <download-excel
          class="export-excel-wrapper"
          :data="tableData"
          :fields="json_fields"
          name="filename.csv"
          type="csv"
        >
          <el-button type="success">导出csv</el-button>
        </download-excel>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      json_fields:{
        
      },
      json_data:[],
      input: "",
      tableData: [],
      tableData1: [],
      currentPage4: 1,
      num: 10,
      dialogFormVisible: false,
      form: {
        NAME: "",
        ORI_PRICE: "",
        PRESENT_PRICE: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    modify(scope) {
      this.dialogFormVisible = true;
      this.form.NAME = scope.row.NAME;
      this.form.ORI_PRICE = scope.row.ORI_PRICE;
      this.form.PRESENT_PRICE = scope.row.PRESENT_PRICE;
    },
    gettableData() {
      axios
        .get("/api/tableData")
        .then(res => {
          if (res.data.code === 0) {
            this.tableData1 = res.data.data;
            this.tableData = this.tableData1.slice(0, 10);
            // console.log(this.tableData1);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },

    handleSizeChange(val) {
      this.num = val;
      this.currentPage4 = 1;
      this.tableData = this.tableData1.slice(0, val);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage4 = val;
      this.tableData = this.tableData1.slice(
        (this.currentPage4 - 1) * this.num,
        this.currentPage4 * this.num - 1
      );
      console.log(`当前页: ${val}`);
    },
    del(scope) {
      this.tableData1.map((item1, index) => {
        if (scope.row.NAME === item1.NAME) {
          this.tableData1.splice(index, 1);
        }
      });
      this.tableData = this.tableData1.slice(
        (this.currentPage4 - 1) * this.num,
        this.currentPage4 * this.num - 1
      );
    },

    search() {
      if (this.input === "") {
        this.tableData = this.tableData1.slice(
          (this.currentPage4 - 1) * this.num,
          this.currentPage4 * this.num - 1
        );
      } else {
        this.tableData = this.tableData1.filter(item => {
          return JSON.stringify(item).indexOf(this.input) > -1;
        });
      }
    },
  },
  mounted() {
    this.gettableData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-col {
  width: 100%;
}
.el-input {
  width: 500px;
}
</style>