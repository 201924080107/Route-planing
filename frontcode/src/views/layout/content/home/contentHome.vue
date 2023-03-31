<script>
let topId = 0;
export default {
    data() {
        return {
            HomeTopText: [
                { id: topId++, name: '景点列表' },
                { id: topId++, name: '活动列表' },
                { id: topId++, name: '旅游工具' },
                { id: topId++, name: '会员特权' },
            ]
        }
    },
    methods: {
        topClick() {

        }
    }
}
</script>
<template>
    <div class="main">
        <div class="top">
            <div class="sideleft">
                <div class="homeTopItem" v-for="item in HomeTopText" :key="item.id" @click="topClick(item.id)">{{
                    item.name
                }}</div>
            </div>
            <div class="center"></div>
            <div class="sideright"></div>
        </div>

        <div class="down">
            <div class="article">
                <div class="release"></div>
                <div class="text">
                    <div></div>
                    <div></div>
                </div>
                <div class="text">
                    <div></div>
                    <div></div>
                </div>
                <div class="text">
                    <div></div>
                    <div></div>
                </div>
                <div class="text">
                    <div></div>
                    <div></div>
                </div>
                <div class="text">
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class="advertisement"></div>
        </div>
    </div>
</template>
<style scoped lang="less">
.main {
    width: 70%;
    height: 100%;
    margin: 0 auto;

    .top {
        height: 280px;

        .sideleft {
            height: 100%;
            width: 15%;
            background-color: #333;
            float: left;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
        }

        .center {
            height: 100%;
            width: 63%;
            background-color: #666;
            float: left;
        }

        .sideright {
            height: 100%;
            width: 22%;
            background-color: #333;
            float: left;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
        }

        .homeTopItem {
            font-family: tb;
            font-size: 22px;
            height: 70px;
            line-height: 50px;
            text-align: center;
            cursor: pointer;
            box-sizing: border-box;
            color: aliceblue;
            border-radius: 20px;
        }
    }

    .down {
        margin-top: 10px;
        position: relative;
        .article {
            width: 77%;
            float: left;
            border-radius: 20px;

            .release {
                height: 200px;
                background-color: #333;
                border-radius: 20px;
            }

            .text {
                margin-top: 10px;
                height: 250px;
                background-color: #666;
                border-radius: 20px;
            }
        }

        .advertisement {
            margin-left: 1%;
            width: 22%;
            height: 500px;
            background-color: #333;
            border-radius: 20px;
            float: right;
            position: sticky;
            top: 300px;
        }
    }
}
</style>



