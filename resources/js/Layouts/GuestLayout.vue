<script setup>
import AethonLogo from '@/Components/AethonLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div class="relative flex min-h-screen flex-col items-center justify-center bg-aethon-navy px-4 py-16">
        <div class="pointer-events-none absolute inset-0 bg-hero-glow opacity-70" />

        <div class="relative mb-10">
            <Link href="/" class="text-aethon-cream">
                <AethonLogo stacked />
            </Link>
        </div>

        <div class="relative w-full max-w-md border border-white/10 bg-aethon-charcoal/80 px-8 py-10 backdrop-blur-sm">
            <slot />
        </div>

        <Link
            href="/"
            class="relative mt-10 font-sans text-[0.7rem] uppercase tracking-[0.22em] text-aethon-cream/40 transition hover:text-aethon-gold"
        >
            Return to Aethon Commercial Group
        </Link>
    </div>
</template>
