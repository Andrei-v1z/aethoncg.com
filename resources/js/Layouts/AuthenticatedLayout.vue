<script setup>
import { ref } from 'vue';
import AethonLogo from '@/Components/AethonLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/vue3';

const showingNavigationDropdown = ref(false);
</script>

<template>
    <div class="min-h-screen bg-aethon-black">
        <nav class="sticky top-0 z-40 border-b border-white/10 bg-aethon-black/90 backdrop-blur-xl">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="flex h-[4.5rem] items-center justify-between">
                    <div class="flex items-center gap-10">
                        <Link :href="route('dashboard')" class="text-aethon-cream">
                            <AethonLogo />
                        </Link>

                        <div class="hidden sm:flex sm:items-center sm:gap-8">
                            <NavLink
                                :href="route('dashboard')"
                                :active="route().current('dashboard')"
                            >
                                Portal
                            </NavLink>
                        </div>
                    </div>

                    <div class="hidden sm:flex sm:items-center">
                        <Dropdown align="right" width="48" content-classes="py-2 bg-aethon-charcoal border border-white/10">
                            <template #trigger>
                                <button
                                    type="button"
                                    class="inline-flex items-center gap-2 border border-white/10 px-3 py-2 font-sans text-[0.7rem] font-medium uppercase tracking-[0.18em] text-aethon-cream/70 transition hover:border-aethon-gold/40 hover:text-aethon-gold"
                                >
                                    {{ $page.props.auth.user.name }}
                                    <svg class="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </template>

                            <template #content>
                                <DropdownLink :href="route('profile.edit')">
                                    Profile
                                </DropdownLink>
                                <DropdownLink :href="route('logout')" method="post" as="button">
                                    Log Out
                                </DropdownLink>
                            </template>
                        </Dropdown>
                    </div>

                    <button
                        class="inline-flex items-center justify-center p-2 text-aethon-cream/50 sm:hidden"
                        @click="showingNavigationDropdown = !showingNavigationDropdown"
                    >
                        <span class="flex w-5 flex-col gap-1.5">
                            <span class="h-px w-full bg-current" />
                            <span class="h-px w-full bg-current" />
                            <span class="h-px w-full bg-current" />
                        </span>
                    </button>
                </div>
            </div>

            <div v-show="showingNavigationDropdown" class="border-t border-white/10 sm:hidden">
                <div class="space-y-1 px-4 py-4">
                    <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                        Portal
                    </ResponsiveNavLink>
                </div>
                <div class="border-t border-white/10 px-4 py-4">
                    <div class="font-display text-lg text-aethon-cream">{{ $page.props.auth.user.name }}</div>
                    <div class="text-xs text-aethon-cream/40">{{ $page.props.auth.user.email }}</div>
                    <div class="mt-3 space-y-1">
                        <ResponsiveNavLink :href="route('profile.edit')">Profile</ResponsiveNavLink>
                        <ResponsiveNavLink :href="route('logout')" method="post" as="button">Log Out</ResponsiveNavLink>
                    </div>
                </div>
            </div>
        </nav>

        <header class="border-b border-white/5 bg-aethon-charcoal" v-if="$slots.header">
            <div class="mx-auto max-w-7xl px-6 py-8 lg:px-8">
                <slot name="header" />
            </div>
        </header>

        <main>
            <slot />
        </main>
    </div>
</template>
