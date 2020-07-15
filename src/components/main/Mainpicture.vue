<template>
        <div class="df ai_c mt mb" >
          <div class="flx">
            <el-col :span="8">
              <el-card shadow="always">
                <ve-radar :data="chartData2" :settings="chartSettings2"></ve-radar>
              </el-card>
            </el-col>
          </div>
          <div class="flx">
            <el-col :span="8">
              <el-card shadow="always">
                    <ve-pie :data="chartData1" :settings="chartSettings1" ></ve-pie>
              </el-card>
            </el-col>
          </div>
          <div class="flx">
            <el-col :span="8">
              <el-card shadow="always">
                <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
              </el-card>
            </el-col>
          </div>
        </div>
</template>

<script>
export default {
  name: "",
  props: {
    chat: {
      type: Array
    },
    ring: {
      type: Array
    },
    radar: {
      type: Array
    }
  },
  components: {},
  data() {
    this.chartSettings = {
      metrics: ["expected", "actual"],
      dimension: ["date"]
    };
    this.chartSettings1 = {
      dimension: "name",
      metrics: "data"
    };
    this.chartSettings2 = {
      dimension: ["name"],
      metrics: ["sales", "ministration", "techology", "delelopmer", "marketing"]
    };
    return {
      chartData: {
        columns: ["date", "expected", "actual"],
        rows: []
      },
      chartData1: {
        columns: ["name", "data"],
        rows: []
      },
      chartData2: {
        columns: [
          "name",
          "sales",
          "ministration",
          "techology",
          "delelopmer",
          "marketing"
        ],
        rows: []
      }
    };
  },
  methods: {},
  mounted() {
    this.chartData.rows = this.chat;
    this.chartData1.rows = this.ring;
    this.chartData2.rows = this.radar;
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-col{
    width: 100%;
}
canvas{
    height: 400px;
}
</style>