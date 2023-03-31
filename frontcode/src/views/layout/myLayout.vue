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
        <Menu></Menu>
        <Content></Content>
    </div>
</template>
<style scoped lang="less">
.layout {
    height: 100%;
}
</style>