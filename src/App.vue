<template>
    <div class="app-container">
        <!-- 顶部 Header 区域，用Mint-UI实现--> 
        <mt-header fixed title="Vue项目"></mt-header>
        
        <!-- 中间的路由 router-view区域--> 


        <!-- 底部router-link区域，用MUI的Tabbar组件实现,Mint-UI的不好看，需要导入MUI样式-->
        <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>

    </div>
</template>
<script>

</script>

<style lang="scss" scoped>
.app-container{ //因为header是fixed定位脱离了文档流，
                //其后面元素会占据它脱离后空白部分，所以有如下操作
    padding-top:40px;
}
</style>
