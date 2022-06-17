<script setup>
	import { ref, computed } from 'vue'
	// This starter template is using Vue 3 <script setup> SFCs
	// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
	import HelloWorld from './components/HelloWorld.vue'
	import Select from './components/common/Select.vue'
	import Input from './components/common/Input.vue'

	const routes = {
		'/': HelloWorld,
		'/input': Input,
		'/select': Select,
	}
	const currentPath = ref(window.location.hash)

	window.addEventListener('hashchange', () => {
		currentPath.value = window.location.hash
	})

	const currentView = computed(() => {
		return routes[currentPath.value.slice(1) || '/']
	})
</script>

<template>
	<div>
		<template
			v-for="(item, index) in routes"
			:key="item.__name"
		>
			<div>
				<a :href="`#${index}`">{{item.__name || item.__file}}</a>
			</div>
		</template>
	</div>
	<component :is="currentView" />
</template>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>
