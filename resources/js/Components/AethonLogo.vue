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
    <span
        class="inline-flex items-center"
        :class="stacked ? 'flex-col items-center gap-3' : 'gap-3'"
        aria-label="Aethon"
    >
        <svg
            class="h-8 w-8 shrink-0"
            :class="stacked ? 'h-10 w-10' : 'h-8 w-8'"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 3L36 37H29.8L26.2 28.4H13.8L10.2 37H4L20 3ZM20 13.6L24.6 24.6H15.4L20 13.6Z"
                fill="currentColor"
            />
            <rect x="12.4" y="21.8" width="15.2" height="1.5" fill="#C9A962" />
        </svg>

        <span
            v-if="!markOnly"
            class="flex flex-col"
            :class="stacked ? 'items-center text-center' : 'leading-none'"
        >
            <span
                class="font-display tracking-[0.28em] text-current"
                :class="stacked ? 'text-3xl font-light' : 'text-[1.05rem] font-normal'"
            >
                AETHON
            </span>
            <span
                class="mt-0.5 font-sans text-[0.55rem] font-medium uppercase tracking-[0.32em]"
                :class="inverted ? 'text-aethon-black/50' : 'text-aethon-gold/80'"
            >
                Consulting
            </span>
        </span>
    </span>
</template>
