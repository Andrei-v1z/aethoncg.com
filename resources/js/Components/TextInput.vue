<script setup>
import { onMounted, ref } from 'vue';

const model = defineModel({
    type: String,
    required: true,
});

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <input
        class="rounded-sm border-white/10 bg-aethon-black text-aethon-cream shadow-sm focus:border-aethon-gold focus:ring-aethon-gold"
        v-model="model"
        ref="input"
    />
</template>
