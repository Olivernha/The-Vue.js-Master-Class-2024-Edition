<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';

const getProjects = async () => {
  const { data, error } = await supabase.from('projects').select('*');
  if(error) console.log('error', error);
  console.log('data', data);
}

</script>
<template>
  <div>
    <h1>Welcome to the Home Page</h1>
    <router-link :to="{ name: '/projects/[id]', params: { id: 1 } }">Go to page 1 built with Vue 3 and
      TypeScript.</router-link>
  </div>
</template>
