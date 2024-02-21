<template>
    <Hero title="Aspect Ratio Tools" />
    <div class="space-y-4 px-12">
        <h1>asdf</h1>
        <div class="flex flex-col space-y-2">
            <label class="text-gray-300">Height:</label>
            <input v-model.number="height" type="number" class="input" placeholder="Height">

            <label class="text-gray-300">Width:</label>
            <input v-model.number="width" type="number" class="input" placeholder="Width">

            <div class="text-5xl">{{ reducedAspectRatio }}</div>
        </div>
        <div class="py-24"></div>
        <div class="flex flex-col space-y-2">
            <label class="text-gray-300">Aspect Ratio (e.g., 16:9):</label>
            <input v-model="inputAspectRatio" type="text" class="input" placeholder="Aspect Ratio">

            <label class="text-gray-300">Enter Width:</label>
            <input v-model.number="inputValue" type="number" class="input" placeholder="Value">

            <button @click="calculateMissingValue" class="btn">Calculate</button>
            <div v-if="outputValue" class="text-5xl">{{ inputValue }} x {{ outputValue }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const height = ref<number>(0);
const width = ref<number>(0);

const gcd = (a: number, b: number): number => {
    return b ? gcd(b, a % b) : a;
};

const reducedAspectRatio = computed(() => {
    const divisor = gcd(width.value, height.value);
    return width.value && height.value ? `${height.value / divisor}:${width.value / divisor}` : 'N/A';
});

const inputAspectRatio = ref<string>('');
const inputValue = ref<number | null>(null);
const outputValue = ref<number | null>(null);

const calculateMissingValue = () => {
    const [aspectWidth, aspectHeight] = inputAspectRatio.value.split(':').map(Number);
    if (!aspectWidth || !aspectHeight || !inputValue.value) return;

    // If width is provided, calculate height
    if (aspectWidth > aspectHeight) {
        outputValue.value = (inputValue.value * aspectHeight) / aspectWidth;
    } else {
        outputValue.value = (inputValue.value * aspectWidth) / aspectHeight;
    }
};
</script>

<style scoped>
.input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
}

.btn {
    padding: 0.5rem 1rem;
    background-color: #4f46e5;
    /* Indigo */
    color: white;
    border-radius: 0.25rem;
    cursor: pointer;
}

.btn:hover {
    background-color: #4338ca;
    /* Darker Indigo */
}
</style>
