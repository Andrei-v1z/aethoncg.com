<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
    },
});

const classes = computed(() =>
    props.active
        ? 'block w-full px-4 py-3 text-start font-sans text-[0.7rem] font-medium uppercase tracking-[0.2em] text-aethon-gold border-l border-aethon-gold'
        : 'block w-full px-4 py-3 text-start font-sans text-[0.7rem] font-medium uppercase tracking-[0.2em] text-aethon-cream/50 hover:text-aethon-gold border-l border-transparent',
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
