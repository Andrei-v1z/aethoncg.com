<script setup>
defineProps({
    markOnly: {
        type: Boolean,
        default: false,
    },
    stacked: {
        type: Boolean,
        default: false,
    },
    inverted: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <span class="inline-flex items-center" aria-label="Aethon Commercial Group">
        <img
            v-if="markOnly"
            src="/images/aethon-logo.jpg"
            alt=""
            class="h-10 w-10 shrink-0 rounded-sm object-cover object-top"
            aria-hidden="true"
        />
        <img
            v-else
            src="/images/aethon-logo.jpg"
            alt="Aethon Commercial Group"
            class="w-auto shrink-0 object-contain"
            :class="stacked ? 'h-36 sm:h-44' : 'h-12 sm:h-14'"
        />
    </span>
</template>
