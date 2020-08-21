<template>
	<div>
    <client-only>
		  <nuxt class="page" keep-alive :keep-alive-props="{include: includeArr}"/>
    </client-only>
	</div>
</template>

<script>
export default {
	data() {
		return {
			includeArr: ['index', 'about'] // 组件的 name
		}
	}
}
</script>
