<script>
let id = 0;
export default {
  data() {
    return {
      barItemText: [
        { id: id++, name: '首页', icon: 'icon-tuijian' },
        { id: id++, name: '路线定制', icon: 'icon-luxian' },
        { id: id++, name: '私信', icon: 'icon-sixin' },
        { id: id++, name: '我的画像', icon: 'icon-svg-1' },
        { id: id++, name: '留言板', icon: 'icon-liuyanban-05' },
      ],
      flag: [true, false, false, false],
      size: '20px'
    }
  },
  methods: {
    barClick(id) {
      let array = [false, false, false, false, false]
      array[id] = true
      this.flag = array
    }
  }
}
</script>
<template>
  <div class="bar">
    <div class="bar_left">
      <div id="brand">Traveler</div>
      <div class="bar_item" v-for="item in barItemText" :key="item.id" :class="{ bar_bottom: flag[item.id] }"
        @click="barClick(item.id)">
        <span class="iconfont" :class="item.icon" style="font-size: 20px;"></span>
        {{ item.name }}
      </div>
    </div>
    <div class="bar_right">
      <div class="search_out">
        <form action="" class="parent">
          <input type="text" class="search" placeholder="搜索">
          <input type="button" name="" id="" class="btn">
        </form>
      </div>
      <img src="@/assets/character/boy3.png" alt="" class="character">
    </div>

  </div>
</template>
<style scoped lang="less">
.bar {
  position: fixed;
  left: 0px;
  top: 0px;
  height: 80px;
  width: 100%;
  z-index: 1;
  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 30px;
  border-bottom: 1px solid #0C1821;
  white-space: nowrap;
  background-color: #fff;
  .bar_left {
    display: inline-block;
    vertical-align: top;
    margin-top: 30px;

    #brand {
      font-family: hongkong;
      font-size: 22px;
      color: #0C1821;
      display: inline-block;
      cursor: pointer;
    }

    .bar_bottom {
      border-bottom: 2px solid #0C1821;
    }

    .bar_item {
      display: inline-block;
      margin-left: 20px;
      font-size: 20px;
      height: 25px;
      cursor: pointer;
    }
  }

  .bar_right {
    display: inline-block;
    width: 500px;
    height: 100%;
    box-sizing: border-box;
    margin-left: 800px;
    position: relative;
    margin-top: 10px;
    .search_out {
      height: 50px;
      width: 330px;
      display: inline-block;
      margin-right: 30px;
      position: absolute;
      top: 15px;

      .parent {
        position: relative;
        white-space: nowrap;
      }

      .search {
        width: 300px;
        height: 40px;
        border-radius: 18px;
        outline: none;
        border: 1px solid #ccc;
        padding-left: 20px;
        position: absolute;
        white-space: nowrap;
      }

      .btn {
        height: 35px;
        width: 35px;
        position: absolute;
        background-image: url("@/assets/search.png");
        background-size: 34px 34px;
        background-repeat: no-repeat;
        background-color: #fff;
        top: 6px;
        left: 285px;
        border-radius: 18px;
        border: none;
        outline: none;
        cursor: pointer;
      }
    }

    .character {
      width: 50px;
      height: 50px;
      display: inline-block;
      border-radius: 50%;
      position: absolute;
      top:10px;
      left: 350px;
      cursor: pointer;
    }
  }


}
</style>