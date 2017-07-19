<template>
  <div class="order-wrap">
    <h3>您的产品</h3>
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品：

      </div>

      <div class="order-list-option">
        开始日期：

      </div>

      <div class="order-list-option">
        结束日期：

      </div>

      <div class="order-list-option">
        关键词：
        <input type="text" class="order-query">
      </div>
    </div>
    <div class="order-list-table">
      <table>
        <tr>
          <th></th>
        </tr>
        <tr>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
.order-wrap {
  width: 1200px;
  min-height: 800px;
  margin: 20px auto;
  overflow: hidden;
}

.order-wrap h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.order-query {
  height: 25px;
  line-height: 25px;
  border: 1px solid #e3e3e3;
  outline: none;
  text-indent: 10px;
}

.order-list-option {
  display: inline-block;
  padding-left: 15px;
}

.order-list-option:first-child {
  padding-left: 0;
}

.order-list-table {
  margin-top: 20px;
}

.order-list-table table {
  width: 100%;
  background: #fff;
}

.order-list-table td,
.order-list-table th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 10px 0;
}

.order-list-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
  cursor: pointer;
}

.order-list-table th.active {
  background: #35495e;
}
</style>

