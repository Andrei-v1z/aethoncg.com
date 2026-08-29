<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import BlurFade from '@/Components/BlurFade.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-display text-xl font-light leading-tight text-aethon-cream">
                Client Portal
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <BlurFade>
                    <div class="overflow-hidden rounded-sm border border-white/10 bg-aethon-charcoal shadow-sm">
                        <div class="p-6 text-aethon-cream/70">
                            <p class="section-label mb-2">Welcome</p>
                            <p class="font-display text-2xl text-aethon-cream">
                                Your client portal is ready.
                            </p>
                            <p class="mt-3 text-sm text-aethon-cream/50">
                                Portfolio analytics, asset reviews, and commercial briefings will appear here.
                            </p>
                        </div>
                    </div>
                </BlurFade>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
