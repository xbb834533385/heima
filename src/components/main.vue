<template>
    <div>
        main
        <el-button type="danger" @click="logout">退出登录</el-button>
    </div>
</template>

<script>
export default {
    // 声明一个周期函数，来判断当页面刚加载的时候有没有登录——简单来说就是判断有没有token
    beforeCreate() {
        // 判断是否有token
        let token = window.sessionStorage.getItem('token');
        if(token){
            // 登录成功-----什么都不做
        }else{
            // 提示请先登录，然后跳转到登录界面
            this.$message.error('请先登录');
            this.$router.push('/login');
        }
    },
    methods: {
        logout(){
            window.sessionStorage.removeItem('token');
            this.$router.push('/login');
        }
    },
}
</script>

<style>

</style>
