<script>
import Content from './content/myContent.vue'
import Menu from './menu/myMenu.vue'
export default {
    components: {
        Menu,
        Content
    }
}
</script>
<template>
    <div class='layout'>
        <div class='menu'>
            <Menu></Menu>
        </div>
        <div class="content">
            <Content></Content>
        </div>
    </div>
</template>
<style lang="less">
.layout{
    .menu{
        background: #666;
    }
    .content{
        background: red;
    }
}

</style>