<template>
    <nav class="feed-meta mb-12">
        <span class="feed-meta_state">
        <i class="fa fa-eye"></i> 100
        </span>
        <span class="feed-meta_state">
        <i class="fa fa-thumbs-up"></i> 10
        </span>
        <!-- <span class="feed-meta_state">
        <i class="fa fa-comment"></i> 200
        </span> -->
        <input type="button" value="Full stats" @click="$emit('fullstat')" />
    </nav>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class FeedMeta extends Vue {
    private likeNum: number = 0;
}
</script>
<style lang="scss" scoped>
.feed-meta {
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* margin: 0 40px; */
    height: 52px;
    border-radius: 16px!important;
    background-color: #5116d0;
    color: white;
    overflow: hidden;
    position: absolute;
    bottom: -50px;
    transform: translate3d(0, 100%, 0) scale(0);
    animation: rise3 0.6s cubic-bezier(0, 0, 0.18, 0.98) forwards;

    > * {
        opacity: 0;
        transform: translate3d(0, 200%, 0);
        animation: rise2 0.6s ease forwards;

        &:nth-child(1) {
        animation-delay: 300ms;
        }
        &:nth-child(2) {
        animation-delay: 380ms;
        }
        &:nth-child(3) {
        animation-delay: 460ms;
        }
        &:nth-child(4) {
        animation-delay: 540ms;
        }
    }

    input[type='button'] {
        margin: 0;
        margin-left: 30px;
        margin-right: 10px;
        padding: 6px 10px;
        border: none;
        border-radius: 10px;
        outline: none;
        background: white;
        color: #5116d0;
        font-weight: 600;
        font-size: 13px;
        -webkit-appearance: none;
    }
}
.feed-meta_state {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;

    i {
        margin: 0 8px;
        font-size: 16px;
        opacity: 0.6;
    }
}
</style>
