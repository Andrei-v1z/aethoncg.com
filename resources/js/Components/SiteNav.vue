<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import AethonLogo from '@/Components/AethonLogo.vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    canLogin: {
        type: Boolean,
        default: false,
    },
    canRegister: {
        type: Boolean,
        default: false,
    },
    variant: {
        type: String,
        default: 'marketing',
    },
});

const links = [
    { href: '#practice', label: 'Practice' },
    { href: '#services', label: 'Services' },
    { href: '#focus', label: 'Focus' },
    { href: '#contact', label: 'Contact' },
];

const menuOpen = ref(false);
const scrolled = ref(false);
const activeSection = ref('');

const isMarketing = computed(() => props.variant === 'marketing');

const onScroll = () => {
    scrolled.value = window.scrollY > 24;

    if (!isMarketing.value) {
        return;
    }

    const sections = links.map((link) => document.querySelector(link.href)).filter(Boolean);
    const offset = 120;
    let current = '';

    sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;

        if (top <= offset) {
            current = `#${section.id}`;
        }
    });

    activeSection.value = current;
};

const closeMenu = () => {
    menuOpen.value = false;
};

watch(menuOpen, (open) => {
    document.body.style.overflow = open ? 'hidden' : '';
});

onMounted(() => {
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
    document.body.style.overflow = '';
});
</script>

<template>
    <header
        class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
        :class="scrolled || menuOpen
            ? 'border-b border-white/10 bg-aethon-navy/90 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'"
    >
        <div class="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
            :class="scrolled ? 'h-[4.25rem]' : 'h-20 lg:h-24'"
        >
            <Link href="/" class="relative z-50 text-aethon-cream" @click="closeMenu">
                <AethonLogo />
            </Link>

            <nav v-if="isMarketing" class="hidden items-center gap-10 lg:flex">
                <a
                    v-for="link in links"
                    :key="link.href"
                    :href="link.href"
                    class="relative font-sans text-[0.7rem] font-medium uppercase tracking-[0.22em] transition"
                    :class="activeSection === link.href
                        ? 'text-aethon-gold'
                        : 'text-aethon-cream/55 hover:text-aethon-cream'"
                >
                    {{ link.label }}
                    <span
                        v-if="activeSection === link.href"
                        class="absolute -bottom-2 left-0 h-px w-full bg-aethon-gold"
                    />
                </a>
            </nav>

            <div class="hidden items-center gap-6 lg:flex">
                <template v-if="canLogin">
                    <Link
                        v-if="$page.props.auth?.user"
                        :href="route('dashboard')"
                        class="font-sans text-[0.7rem] font-medium uppercase tracking-[0.22em] text-aethon-cream/55 transition hover:text-aethon-gold"
                    >
                        Portal
                    </Link>
                    <template v-else>
                        <Link
                            :href="route('login')"
                            class="font-sans text-[0.7rem] font-medium uppercase tracking-[0.22em] text-aethon-cream/55 transition hover:text-aethon-gold"
                        >
                            Sign in
                        </Link>
                        <Link
                            v-if="canRegister"
                            :href="route('register')"
                            class="btn-primary !px-5 !py-2.5 !text-[0.65rem]"
                        >
                            Client Access
                        </Link>
                    </template>
                </template>
            </div>

            <button
                type="button"
                class="relative z-50 flex h-11 w-11 items-center justify-center text-aethon-cream lg:hidden"
                :aria-expanded="menuOpen"
                aria-label="Toggle navigation"
                @click="menuOpen = !menuOpen"
            >
                <span class="sr-only">Menu</span>
                <span class="flex w-5 flex-col gap-1.5">
                    <span
                        class="h-px w-full bg-current transition duration-300"
                        :class="menuOpen ? 'translate-y-[4px] rotate-45' : ''"
                    />
                    <span
                        class="h-px w-full bg-current transition duration-300"
                        :class="menuOpen ? 'opacity-0' : ''"
                    />
                    <span
                        class="h-px w-full bg-current transition duration-300"
                        :class="menuOpen ? '-translate-y-[4px] -rotate-45' : ''"
                    />
                </span>
            </button>
        </div>
    </header>

    <Teleport to="body">
        <Transition
            enter-active-class="transition duration-300"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-300"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div
                v-if="menuOpen"
                class="fixed inset-0 z-40 flex flex-col bg-aethon-navy pt-28 lg:hidden"
            >
                <div class="absolute inset-0 bg-hero-glow opacity-60" />
                <nav class="relative flex flex-1 flex-col px-8">
                    <a
                        v-for="(link, index) in links"
                        :key="link.href"
                        :href="link.href"
                        class="flex items-baseline justify-between border-b border-white/10 py-6"
                        @click="closeMenu"
                    >
                        <span class="font-display text-3xl font-light text-aethon-cream">{{ link.label }}</span>
                        <span class="font-sans text-[0.65rem] tracking-[0.2em] text-aethon-gold/70">0{{ index + 1 }}</span>
                    </a>

                    <div class="mt-auto flex flex-col gap-4 py-10">
                        <template v-if="canLogin && $page.props.auth?.user">
                            <Link :href="route('dashboard')" class="btn-primary w-full" @click="closeMenu">
                                Open Portal
                            </Link>
                        </template>
                        <template v-else-if="canLogin">
                            <Link
                                v-if="canRegister"
                                :href="route('register')"
                                class="btn-primary w-full"
                                @click="closeMenu"
                            >
                                Client Access
                            </Link>
                            <Link :href="route('login')" class="btn-outline w-full" @click="closeMenu">
                                Sign in
                            </Link>
                        </template>
                    </div>
                </nav>
            </div>
        </Transition>
    </Teleport>
</template>
