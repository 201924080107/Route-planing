<script>
let id = 0;
export default {
  data() {
    return {
      barLeftText: [
        { id: id++, name: '推荐' },
        { id: id++, name: '关注' },
        { id: id++, name: '热点' },
        { id: id++, name: '路线定制' }
      ],
      barRightText: [
        { id: id++, name: '私信' },
        { id: id++, name: '关注' },
      ],
      flag: 0
    }
  },
  methods: {
    barClick(id) {
      let oldFlag = this.flag;
      this.flag = id;
      let items = document.querySelectorAll(".bar_item");
      items[oldFlag].setAttribute('border-bottom', 'none');
      items[this.flag].setAttribute('border-bottom', '1px solid #0C1821')
    }
  }
}
</script>
<template>
  <div class="bar">
    <div id="brand">Traveler</div>
    <ul>
      <li class="bar_left" v-for="item in barLeftText" :key="item.id" @click="barClick(item.id)">{{ item.name }}
      </li>
    </ul>
  </div>
</template>
<style scoped lang="less">
.bar {
  position: fixed;
  left: 0px;
  top: 0px;
  height: 70px;
  width: 100%;
  z-index: 1;
  background: #CCC9DC;
  box-sizing: border-box;
  line-height: 70px;
  padding-left: 20px;
  padding-right: 20px;

  ul li:first-child {
    border-bottom: 1px solid #0C1821;
  }

  ul {
    display: inline-block;
  }

  li {
    display: inline-block;
    margin-left: 40px;
    font-size: 25px;
  }

  #brand {
    font-family: hongkong;
    font-size: 5ex;
    color: #0C1821;
    display: inline-block;
  }
}
</style>