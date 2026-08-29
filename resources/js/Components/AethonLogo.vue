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
        return 'h-9 w-9';
    }

    if (props.stacked) {
        return 'h-16 w-16 sm:h-20 sm:w-20';
    }

    return 'h-10 w-10';
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
        class="inline-flex items-center text-aethon-gold"
        :class="stacked ? 'flex-col gap-4 text-center' : 'gap-3'"
        aria-label="Aethon Commercial Group"
    >
        <svg
            :class="[markSize, 'shrink-0']"
            viewBox="0 0 48 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 3L44 53H36.4L32.1 40.2H15.9L11.6 53H4L24 3ZM24 15.8L29.8 31.2H18.2L24 15.8Z"
                fill="currentColor"
            />
            <path
                d="M10.5 30.5C14.2 22.8 21.8 24.2 27.5 27.2C31.8 29.5 34.6 31.8 37.2 34.2"
                stroke="currentColor"
                stroke-width="1.35"
                stroke-linecap="round"
            />
            <path
                d="M12.2 33.8C15.4 27.4 22.1 28.4 27.2 30.8C30.6 32.5 33 34.4 35.2 36.4"
                stroke="currentColor"
                stroke-width="0.95"
                stroke-linecap="round"
                opacity="0.72"
            />
            <path
                d="M14 36.8C16.6 31.8 22 32.6 26.2 34.4C28.8 35.6 30.8 37 32.6 38.4"
                stroke="currentColor"
                stroke-width="0.7"
                stroke-linecap="round"
                opacity="0.5"
            />
        </svg>

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
