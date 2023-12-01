<script setup>
</script>

<template>

<div class="banner">
    <div class="slogan">
        <span class="cn">我们专业，你们放心</span>
        <span class="en">We are professional, you can rest assured</span>
    </div>
   </div>
</template>

<style lang="less" scoped>
  .banner{
    height: 600px;
    background: url('/img/banner.jpg') no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    .slogan{
        display: flex;
        flex-direction: column;
        .cn{
            margin-bottom: 16px;
            font-size: 66px;
        }
        .en{
            font-size: 30px;
        }
    }
  }
</style>
