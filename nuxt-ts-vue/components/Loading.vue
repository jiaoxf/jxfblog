<template>
    <div class="loading">
        <div class="sk-wave">
        <div class="sk-wave-rect"></div>
        <div class="sk-wave-rect"></div>
        <div class="sk-wave-rect"></div>
        <div class="sk-wave-rect"></div>
        <div class="sk-wave-rect"></div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class LoadingCustom extends Vue {}
</script>
<style scoped>
.loading {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 30px;
}

.sk-wave {
    font-size: 40px;
    color: #ccc;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: space-between;
}

.sk-wave-rect {
    background-color: #03ccbb;
    height: 100%;
    width: 15%;
    animation: sk-wave 1.2s infinite ease-in-out; 
}

.sk-wave-rect:nth-child(1) { background:#93dbe9; animation-delay: -1.2s; }
.sk-wave-rect:nth-child(2) { background:#689cc5; animation-delay: -1.1s; }
.sk-wave-rect:nth-child(3) { background:#5e6fa3; animation-delay: -1.0s; }
.sk-wave-rect:nth-child(4) { background:#3e4669; animation-delay: -0.9s; }
.sk-wave-rect:nth-child(5) { background:#b3b7e2; animation-delay: -0.8s; }

@keyframes sk-wave {
    0%, 40%, 100% {
        transform: scaleY(0.4); 
    } 20% {
        transform: scaleY(1); 
    } 
}
</style>
