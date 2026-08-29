<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
    as: {
        type: String,
        default: 'div',
    },
    delay: {
        type: Number,
        default: 0,
    },
    immediate: {
        type: Boolean,
        default: false,
    },
});

const root = ref(null);
const visible = ref(false);
let observer;

const reveal = () => {
    visible.value = true;
};

onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        reveal();
        return;
    }

    if (props.immediate) {
        requestAnimationFrame(() => {
            requestAnimationFrame(reveal);
        });
        return;
    }

    observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                reveal();
                observer?.disconnect();
            }
        },
        {
            threshold: 0.12,
            rootMargin: '0px 0px -6% 0px',
        },
    );

    if (root.value) {
        observer.observe(root.value);
    }
});

onUnmounted(() => {
    observer?.disconnect();
});
</script>

<template>
    <component
        :is="as"
        ref="root"
        class="blur-fade"
        :class="{ 'blur-fade-visible': visible }"
        :style="delay ? { transitionDelay: `${delay}ms` } : undefined"
    >
        <slot />
    </component>
</template>
