<template>
  <Hero title="Base 64 Tools" />
  <div class="p-8">
    <h1 class="text-2xl font-bold">Encode Image</h1>
    <input type="file" @change="handleFileUpload" accept="image/*" />
    <div
      class="w-96 h-96 border-2 border-black break-words overflow-y-scroll overflow-x-hidden"
    >
      {{ image_base64 }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const image_base64 = ref<string | undefined>("");

const handleFileUpload = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    try {
      const base64String = await getBase64(file);
      image_base64.value = base64String;
      console.log(base64String); // base64 string is logged here, you can return it or set it to a ref variable
    } catch (error) {
      console.error(error);
    }
  }
};

const getBase64 = (file: File): Promise<string | undefined> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result?.toString());
    reader.onerror = (error) => reject(error);
  });
};
</script>
