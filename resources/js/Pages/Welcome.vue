<script setup>
import AethonLogo from '@/Components/AethonLogo.vue';
import SiteNav from '@/Components/SiteNav.vue';
import { Head, Link } from '@inertiajs/vue3';

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
});

const services = [
    {
        number: '01',
        title: 'Asset & Yield Advisory',
        description:
            'RevPAR optimization, revenue architecture, and portfolio performance analytics for owners who treat hospitality as a commercial asset class.',
    },
    {
        number: '02',
        title: 'Commercial Design Strategy',
        description:
            'Architectural direction, material curation, and spatial brand positioning that converts design investment into measurable commercial value.',
    },
    {
        number: '03',
        title: 'Transaction Advisory',
        description:
            'Feasibility studies, acquisition diligence, and development pipeline governance for owners, operators, and capital partners.',
    },
];

const focusAreas = [
    {
        id: 'boardroom',
        title: 'Boardroom & Strategy',
        description:
            'Executive tables, yield reviews, and capital allocation. The rooms where hospitality assets are governed and repositioned.',
        image: '/images/boardroom.jpg',
        alt: 'Business team in an executive strategy meeting',
    },
    {
        id: 'aero',
        title: 'Aviation & Movement',
        description:
            'Private aviation, tarmac light, and cabin interiors. The mobility layer of premium commercial travel and hospitality access.',
        image: '/images/aviation.jpg',
        alt: 'Private jet on the tarmac at dusk',
    },
    {
        id: 'travel',
        title: 'Travel Environments',
        description:
            'Hotel lobbies, departure halls, and guest circulation. Operational environments that signal institutional hospitality, not leisure.',
        image: '/images/hotel-lobby.jpg',
        alt: 'Luxury hotel lobby for premium travel',
    },
    {
        id: 'human',
        title: 'Human Elements',
        description:
            'Business travelers, tailored attire, and the handshake after diligence. People in motion between boardroom and gate.',
        image: '/images/handshake.jpg',
        alt: 'Business handshake after a commercial agreement',
    },
];

const principles = [
    {
        title: 'Institutional Positioning',
        description:
            'Deep navy and warm gold signal authority, continuity, and premium commercial counsel. Every touchpoint should read as asset management.',
    },
    {
        title: 'Editorial Restraint',
        description:
            'Cinematic composition with shallow depth of field. Avoid saturated leisure imagery that undermines a commercial group identity.',
    },
    {
        title: 'Value-First Narrative',
        description:
            'Lead with yield, architecture, capital, and the decisions that move portfolios. Spectacle is secondary to returns.',
    },
];
</script>

<template>
    <Head title="Aethon Commercial Group" />

    <div class="min-h-screen bg-aethon-navy font-sans text-aethon-cream/80 antialiased">
        <SiteNav :can-login="canLogin" :can-register="canRegister" />

        <!-- Hero -->
        <section class="relative flex min-h-screen items-end overflow-hidden pb-16 pt-32 lg:items-center lg:pb-0 lg:pt-24">
            <div class="absolute inset-0">
                <img
                    src="/images/hero-wing.jpg"
                    alt="Aircraft wing above clouds during business travel"
                    class="h-full w-full object-cover object-center"
                />
                <div class="absolute inset-0 bg-gradient-to-r from-aethon-navy via-aethon-navy/85 to-aethon-navy/40" />
                <div class="absolute inset-0 bg-gradient-to-t from-aethon-navy via-transparent to-aethon-navy/50" />
            </div>

            <div class="relative mx-auto grid w-full max-w-7xl gap-16 px-6 py-16 lg:grid-cols-12 lg:px-8 lg:py-32">
                <div class="lg:col-span-8">
                    <AethonLogo stacked class="mb-10" />
                    <p class="section-label mb-6">Hospitality Commercial Advisory</p>
                    <p class="mb-10 max-w-xl font-display text-2xl font-light italic leading-snug text-aethon-gold/90 md:text-3xl">
                        Strategy for assets that earn.
                    </p>
                    <p class="mb-12 max-w-lg text-base leading-relaxed text-aethon-cream/60">
                        Aethon Commercial Group advises owners, operators, and capital partners on
                        hospitality asset performance, commercial design, and transaction strategy.
                        We measure rooms in returns, not sunsets.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <a href="#practice" class="btn-primary">The Practice</a>
                        <a href="#contact" class="btn-outline">Request a Briefing</a>
                    </div>
                </div>

                <div class="hidden flex-col justify-end border-l border-aethon-gold/15 pl-10 lg:col-span-4 lg:flex">
                    <p class="font-sans text-[0.65rem] uppercase tracking-[0.28em] text-aethon-gold">From the Greek</p>
                    <p class="mt-3 font-display text-2xl font-light italic text-aethon-cream">Αἴθων</p>
                    <p class="mt-2 text-sm leading-relaxed text-aethon-cream/45">
                        Blazing. The sun-horse. Heat with direction, energy applied to value,
                        not spectacle.
                    </p>
                </div>
            </div>
        </section>

        <!-- Practice -->
        <section id="practice" class="scroll-mt-24 border-t border-white/5 bg-aethon-charcoal py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="grid gap-16 lg:grid-cols-12 lg:gap-20">
                    <div class="lg:col-span-5">
                        <p class="section-label mb-5">The Practice</p>
                        <h2 class="font-display text-3xl font-light text-aethon-cream md:text-5xl">
                            A commercial group built for hospitality assets
                        </h2>
                    </div>
                    <div class="space-y-6 text-base leading-relaxed text-aethon-cream/60 lg:col-span-7">
                        <p>
                            Aethon Commercial Group sits at the intersection of yield, design, and
                            deal structure. We work with institutional owners who need counsel that
                            matches the stakes of their portfolios.
                        </p>
                        <p>
                            Our identity is deliberate: deep navy authority, warm gold precision, and
                            editorial restraint. The brand signals commercial seriousness, not leisure
                            aspiration.
                        </p>
                        <p>
                            From asset reviews to development pipelines, every engagement is structured
                            to protect value, sharpen positioning, and accelerate commercial outcomes.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services -->
        <section id="services" class="scroll-mt-24 border-t border-white/5 py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <p class="section-label mb-4">Services</p>
                        <h2 class="font-display text-3xl font-light text-aethon-cream md:text-4xl">
                            Commercial counsel across the asset lifecycle
                        </h2>
                    </div>
                    <p class="max-w-sm text-sm text-aethon-cream/45">
                        Three disciplines. One mandate: extract and protect value from hospitality assets.
                    </p>
                </div>

                <div class="grid gap-px bg-aethon-gold/10 md:grid-cols-3">
                    <article
                        v-for="item in services"
                        :key="item.number"
                        class="group bg-aethon-navy p-8 transition duration-500 hover:bg-aethon-charcoal lg:p-12"
                    >
                        <p class="font-display text-4xl font-light text-aethon-gold">{{ item.number }}</p>
                        <h3 class="mt-8 font-display text-2xl text-aethon-cream">{{ item.title }}</h3>
                        <p class="mt-4 text-sm leading-relaxed text-aethon-cream/50">
                            {{ item.description }}
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <!-- Focus Areas -->
        <section id="focus" class="scroll-mt-24 border-t border-white/5 bg-aethon-charcoal py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mb-16 max-w-2xl">
                    <p class="section-label mb-4">Focus Areas</p>
                    <h2 class="font-display text-3xl font-light text-aethon-cream md:text-4xl">
                        Where commercial hospitality decisions take shape
                    </h2>
                </div>

                <div class="grid gap-4 md:grid-cols-2">
                    <article
                        v-for="pillar in focusAreas"
                        :key="pillar.id"
                        class="card-editorial group"
                    >
                        <div class="relative aspect-[16/10] overflow-hidden">
                            <img
                                :src="pillar.image"
                                :alt="pillar.alt"
                                class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-aethon-navy via-aethon-navy/30 to-transparent" />
                            <div class="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                                <h3 class="font-display text-2xl text-aethon-cream">{{ pillar.title }}</h3>
                            </div>
                        </div>
                        <div class="p-6 lg:px-8 lg:py-7">
                            <p class="text-sm leading-relaxed text-aethon-cream/55">
                                {{ pillar.description }}
                            </p>
                        </div>
                    </article>
                </div>

                <div class="mt-24 grid gap-16 lg:grid-cols-12">
                    <div class="lg:col-span-4">
                        <p class="section-label mb-4">Brand Principles</p>
                        <h3 class="font-display text-3xl font-light text-aethon-cream">
                            How we present commercial authority
                        </h3>
                    </div>
                    <div class="space-y-0 lg:col-span-8">
                        <div
                            v-for="(guide, index) in principles"
                            :key="guide.title"
                            class="flex gap-6 border-t border-white/10 py-8"
                        >
                            <span class="font-display text-xl font-light text-aethon-gold">
                                0{{ index + 1 }}
                            </span>
                            <div>
                                <h4 class="font-display text-xl text-aethon-cream">{{ guide.title }}</h4>
                                <p class="mt-2 text-sm leading-relaxed text-aethon-cream/50">
                                    {{ guide.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact -->
        <section id="contact" class="scroll-mt-24 relative overflow-hidden border-t border-white/5 py-24 lg:py-36">
            <div class="absolute inset-0 bg-hero-glow" />
            <div class="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
                <AethonLogo stacked class="mx-auto mb-10" />
                <h2 class="font-display text-3xl font-light text-aethon-cream md:text-5xl">
                    Briefings for owners, operators, and capital.
                </h2>
                <p class="mx-auto mt-6 max-w-lg text-aethon-cream/50">
                    Align your portfolio, brand, and commercial strategy with investor-grade positioning.
                    Aethon Commercial Group advises at the intersection of yield, design, and deal structure.
                </p>
                <div class="mt-12 flex flex-wrap justify-center gap-4">
                    <Link
                        v-if="canRegister"
                        :href="route('register')"
                        class="btn-primary"
                    >
                        Request Briefing
                    </Link>
                    <a href="mailto:consulting@aethoncg.com" class="btn-outline">
                        consulting@aethoncg.com
                    </a>
                </div>
            </div>
        </section>

        <footer class="border-t border-white/5 bg-aethon-charcoal">
            <div class="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 lg:px-8">
                <div class="md:col-span-2">
                    <AethonLogo />
                    <p class="mt-6 max-w-sm text-sm leading-relaxed text-aethon-cream/40">
                        Hospitality commercial advisory. Asset yield, design strategy, and
                        transaction counsel for premium portfolios.
                    </p>
                </div>
                <div>
                    <p class="section-label mb-5">Navigate</p>
                    <ul class="space-y-3 text-sm text-aethon-cream/50">
                        <li><a href="#practice" class="transition hover:text-aethon-gold">Practice</a></li>
                        <li><a href="#services" class="transition hover:text-aethon-gold">Services</a></li>
                        <li><a href="#focus" class="transition hover:text-aethon-gold">Focus Areas</a></li>
                        <li><a href="#contact" class="transition hover:text-aethon-gold">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <p class="section-label mb-5">Access</p>
                    <ul class="space-y-3 text-sm text-aethon-cream/50">
                        <li v-if="canLogin">
                            <Link :href="route('login')" class="transition hover:text-aethon-gold">Sign in</Link>
                        </li>
                        <li v-if="canRegister">
                            <Link :href="route('register')" class="transition hover:text-aethon-gold">Client Access</Link>
                        </li>
                        <li>
                            <a href="mailto:consulting@aethoncg.com" class="transition hover:text-aethon-gold">consulting@aethoncg.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-white/5">
                <div class="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 text-[0.7rem] text-aethon-cream/30 sm:flex-row sm:items-center lg:px-8">
                    <p>&copy; {{ new Date().getFullYear() }} Aethon Commercial Group. All rights reserved.</p>
                    <p class="tracking-[0.2em] uppercase">Αἴθων · Blazing</p>
                </div>
            </div>
        </footer>
    </div>
</template>
