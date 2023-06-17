<script setup lang="ts">
import { generateColorPalette, ColorPaletteType } from "@/utils/color";

const palette_type = ref<ColorPaletteType>("complementary");
const palette_color = ref("FF2C3C");
const palette = ref<string[]>([]);

const generatePalette = () => {
  palette.value = [];
  const result = generateColorPalette(palette_color.value, palette_type.value);
  palette.value = result.map((element) => "#" + element);
};
</script>

<template>
  <Hero title="Color Tools" />
  <div class="p-8 max-w-7xl mx-auto grid grid-cols-2 gap-4">
    <div class="border border-slate-700">
      <h1 class="text-2xl font-bold w-full border-b px-3 py-4 text-center">
        Color Palette Generator
      </h1>
      <div class="p-2 flex flex-col gap-4">
        <div class="flex items-center justify-center gap-4 my-4">
          <input
            type="text"
            placeholder="#FF2C3C"
            class="input input-bordered"
            v-model="palette_color"
          />
          <select v-model="palette_type" class="select select-primary">
            <option>complementary</option>
            <option>analogous</option>
            <option>triadic</option>
          </select>
          <button class="btn" @click="generatePalette()">Generate</button>
        </div>
        <div class="flex flex-wrap justify-center mb-8 gap-4">
          <div
            v-for="(color, index) in palette"
            :key="index"
            class="w-16 h-16 rounded-lg"
            :style="{ backgroundColor: color }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
