<script setup>
import { computed } from 'vue';

const props = defineProps({
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

const markSize = computed(() => {
    if (props.markOnly) {
        return 'h-10 w-10';
    }

    if (props.stacked) {
        return 'h-20 w-20 sm:h-24 sm:w-24';
    }

    return 'h-11 w-11 sm:h-12 sm:w-12';
});

const titleClass = computed(() => {
    if (props.stacked) {
        return 'text-3xl sm:text-4xl tracking-[0.34em]';
    }

    return 'text-base sm:text-lg tracking-[0.3em]';
});

const subtitleClass = computed(() => {
    if (props.stacked) {
        return 'text-[0.58rem] sm:text-[0.62rem] tracking-[0.38em]';
    }

    return 'text-[0.48rem] sm:text-[0.52rem] tracking-[0.34em]';
});
</script>

<template>
    <span
        class="inline-flex items-center"
        :class="stacked ? 'flex-col gap-4 text-center' : 'gap-3'"
        aria-label="Aethon Commercial Group"
    >
        <img
            src="/images/aethon-mark.png"
            alt=""
            :class="[markSize, 'shrink-0 object-contain']"
            aria-hidden="true"
        />

        <span
            v-if="!markOnly"
            class="flex flex-col"
            :class="[
                stacked ? 'items-center' : 'justify-center leading-none',
                inverted ? 'text-aethon-navy' : 'text-aethon-cream',
            ]"
        >
            <span class="font-display font-normal" :class="titleClass">AETHON</span>

            <span
                class="mt-1 flex items-center gap-2 font-sans font-medium uppercase text-aethon-gold/85"
                :class="subtitleClass"
            >
                <span class="h-px bg-aethon-gold/50" :class="stacked ? 'w-8' : 'w-3'" />
                <span>Commercial Group</span>
                <span class="h-px bg-aethon-gold/50" :class="stacked ? 'w-8' : 'w-3'" />
            </span>
        </span>
    </span>
</template>
