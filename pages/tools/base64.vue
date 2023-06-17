<template>
  <Hero title="Base 64 Tools" />
  <div class="p-8 max-w-7xl mx-auto grid grid-cols-2 gap-4">
    <div class="border border-slate-700">
      <h1 class="text-2xl font-bold w-full border-b px-3 py-4 text-center">
        Encode Image
      </h1>
      <div class="p-2 flex flex-col gap-4">
        <input
          type="file"
          @change="handleFileUpload"
          class="file-input file-input-bordered file-input-accent w-full my-4"
          accept="image/*"
        />
        <h1 class="text-lg font-bold w-full mt-6 mb-1">Output:</h1>
        <div class="w-full overflow-scroll font-mono h-full break-words">
          {{ image_base64 }}
        </div>
      </div>
    </div>
    <div class="border border-slate-700">
      <h1 class="text-2xl font-bold w-full border-b px-3 py-4 text-center">
        Encode Text
      </h1>
      <div class="p-2">
        <textarea
          class="w-full h-36 bg-[#141414] border-2 border-black break-words overflow-y-scroll overflow-x-hidden p-4 rounded-lg"
          v-model="encode_text_base64"
          placeholder="Enter text to encode here"
        >
        </textarea>
        <h1 class="text-lg font-bold w-full mt-6 mb-1">Output:</h1>
        <div class="w-full overflow-scroll font-mono h-full break-words">
          {{ encoded_text }}
        </div>
      </div>
    </div>
    <div class="border border-slate-700">
      <h1 class="text-2xl font-bold w-full border-b px-3 py-4 text-center">
        Decode Image
      </h1>
      <div class="p-2">
        <textarea
          class="w-full h-36 bg-[#141414] border-2 border-black break-words overflow-y-scroll overflow-x-hidden p-4 rounded-lg"
          v-model="decode_image_base64"
          placeholder="Paste a base64 image string here"
        >
        </textarea>

        <img
          v-if="decode_image_base64"
          :src="decode_image_base64"
          alt=""
          class="w-full"
        />
      </div>
    </div>
    <div class="border border-slate-700">
      <h1 class="text-2xl font-bold w-full border-b px-3 py-4 text-center">
        Decode Text
      </h1>
      <div class="p-2">
        <textarea
          class="w-full h-36 bg-[#141414] border-2 border-black break-words overflow-y-scroll overflow-x-hidden p-4 rounded-lg"
          v-model="decode_text_base64"
          placeholder="Paste a base64 text string here"
        >
        </textarea>
        <h1 class="text-lg font-bold w-full mt-6 mb-1">Output:</h1>
        <div class="w-full overflow-scroll font-mono h-full break-words">
          {{ decoded_text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const image_base64 = ref<string | undefined>("");
const decode_image_base64 = ref<string | undefined>("");

const decode_text_base64 = ref<string | undefined>("");
const decoded_text = computed(() => {
  if (!decode_text_base64.value) return;
  return window.atob(decode_text_base64.value);
});

const encode_text_base64 = ref<string | undefined>("");
const encoded_text = computed(() => {
  if (!encode_text_base64.value) return;
  return window.btoa(encode_text_base64.value);
});

const handleFileUpload = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    try {
      const base64String = await getBase64(file);
      image_base64.value = base64String;
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
