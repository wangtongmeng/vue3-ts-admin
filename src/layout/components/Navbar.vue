<template>
  <div class="navbar">
    <hambuger  @toggleClick="toggleSidebar" :is-active="true"/>
    <breadcrumb />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import Hambuger from '@/components/Hambuger/index.vue'

export default defineComponent({
  name: 'Navbar',
  components: {
    Breadcrumb,
    Hambuger
  },
  setup() {
    const toggleSidebar = () => {
      console.log('click')
    }

    return {
      toggleSidebar
    }
  }
})
</script>
