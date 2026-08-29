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
        ? 'inline-flex items-center border-b border-aethon-gold pb-1 font-sans text-[0.7rem] font-medium uppercase tracking-[0.22em] text-aethon-gold'
        : 'inline-flex items-center border-b border-transparent pb-1 font-sans text-[0.7rem] font-medium uppercase tracking-[0.22em] text-aethon-cream/50 hover:text-aethon-gold',
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
