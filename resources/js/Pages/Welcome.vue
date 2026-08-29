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

const capabilities = [
    {
        number: '01',
        title: 'Asset Yield',
        description:
            'RevPAR optimization, revenue architecture, and portfolio-level performance analytics that treat hospitality as an investment, not a lifestyle.',
    },
    {
        number: '02',
        title: 'Design Strategy',
        description:
            'Architectural consultation, material curation, and brand positioning through spatial experience. Value expressed in form, not scenery.',
    },
    {
        number: '03',
        title: 'Deal Consulting',
        description:
            'Feasibility studies, acquisition diligence, and development pipeline governance for owners, operators, and capital partners.',
    },
];

const imageryPillars = [
    {
        id: 'boardroom',
        title: 'Boardroom & Strategy',
        description:
            'Executive tables, yield reviews, and capital allocation. Business photography of the rooms where hospitality deals are decided.',
        image: '/images/boardroom.jpg',
        alt: 'Business team in an executive strategy meeting',
    },
    {
        id: 'aero',
        title: 'Aviation & Movement',
        description:
            'Private aviation, tarmac light, and cabin interiors. The aero layer of premium travel, not residential architecture.',
        image: '/images/aviation.jpg',
        alt: 'Private jet on the tarmac at dusk',
    },
    {
        id: 'travel',
        title: 'Travel Environments',
        description:
            'Hotel lobbies, departure halls, and guest circulation. Travel stock that signals hospitality operations, never houses.',
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

const guidelines = [
    {
        title: 'Color Integration',
        description:
            'Rich shadow depth paired with warm ambient lighting: architectural tungsten, brass accents, and deep blacks that signal premium consulting.',
    },
    {
        title: 'Composition Style',
        description:
            'Shallow depth of field with a cinematic, editorial feel. Avoid bright, saturated, or flat stock photography that reads as leisure travel.',
    },
    {
        title: 'Narrative Shift',
        description:
            'Replace vacation iconography with micro-moments of hospitality deal-making, design strategy, and investor-level decisions.',
    },
];
</script>

<template>
    <Head title="Hospitality Asset Consulting" />

    <div class="min-h-screen bg-aethon-black font-sans text-aethon-cream/80 antialiased">
        <SiteNav :can-login="canLogin" :can-register="canRegister" />

        <!-- Hero -->
        <section class="relative flex min-h-screen items-end overflow-hidden pb-16 pt-32 lg:items-center lg:pb-0 lg:pt-24">
            <div class="absolute inset-0">
                <img
                    src="/images/hero-wing.jpg"
                    alt="Aircraft wing above clouds during business travel"
                    class="h-full w-full object-cover object-center"
                />
                <div class="absolute inset-0 bg-gradient-to-r from-aethon-black via-aethon-black/80 to-aethon-black/35" />
                <div class="absolute inset-0 bg-gradient-to-t from-aethon-black via-transparent to-aethon-black/40" />
            </div>

            <div class="relative mx-auto grid w-full max-w-7xl gap-16 px-6 py-16 lg:grid-cols-12 lg:px-8 lg:py-32">
                <div class="lg:col-span-8">
                    <p class="section-label mb-8">Hospitality Asset Consulting</p>
                    <h1 class="mb-4 font-display text-6xl font-light leading-[0.92] tracking-[0.08em] text-aethon-cream sm:text-7xl lg:text-8xl">
                        AETHON
                    </h1>
                    <p class="mb-10 max-w-xl font-display text-2xl font-light italic leading-snug text-aethon-gold/90 md:text-3xl">
                        Strategy for assets that earn.
                    </p>
                    <p class="mb-12 max-w-lg text-base leading-relaxed text-aethon-cream/60">
                        We shift hospitality from aspirational leisure to high-stakes asset management,
                        yield architecture, and investor-grade decisions for owners who measure rooms
                        in returns, not sunsets.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <a href="#practice" class="btn-primary">The Practice</a>
                        <a href="#contact" class="btn-outline">Request a Briefing</a>
                    </div>
                </div>

                <div class="hidden flex-col justify-end border-l border-white/10 pl-10 lg:col-span-4 lg:flex">
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
                            From B2C leisure to high-margin B2B consulting
                        </h2>
                    </div>
                    <div class="space-y-6 text-base leading-relaxed text-aethon-cream/60 lg:col-span-7">
                        <p>
                            The visual identity must match the work. Generic vacation photography, beaches,
                            passports, and sun loungers positions Aethon as a travel brand. It is not.
                        </p>
                        <p>
                            The black and warm-gold palette already signals high-end consulting. Pair it
                            with micro-moments of deal-making and design strategy, and the language
                            shifts instantly from leisure to institutional consulting.
                        </p>
                        <p>
                            Every frame, word, and surface should read as asset management: yield,
                            architecture, capital, and the people who decide.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Capabilities -->
        <section id="capabilities" class="scroll-mt-24 border-t border-white/5 py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <p class="section-label mb-4">Capabilities</p>
                        <h2 class="font-display text-3xl font-light text-aethon-cream md:text-4xl">
                            Where capital, design, and operations meet
                        </h2>
                    </div>
                    <p class="max-w-sm text-sm text-aethon-cream/45">
                        Three disciplines. One mandate: extract and protect value from hospitality assets.
                    </p>
                </div>

                <div class="grid gap-px bg-white/10 md:grid-cols-3">
                    <article
                        v-for="item in capabilities"
                        :key="item.number"
                        class="group bg-aethon-black p-8 transition duration-500 hover:bg-aethon-charcoal lg:p-12"
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

        <!-- Visual Language -->
        <section id="visual-language" class="scroll-mt-24 border-t border-white/5 bg-aethon-charcoal py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mb-16 max-w-2xl">
                    <p class="section-label mb-4">Visual Language</p>
                    <h2 class="font-display text-3xl font-light text-aethon-cream md:text-4xl">
                        Four territories that redefine hospitality positioning
                    </h2>
                </div>

                <div class="grid gap-4 md:grid-cols-2">
                    <article
                        v-for="pillar in imageryPillars"
                        :key="pillar.id"
                        class="card-editorial group"
                    >
                        <div class="relative aspect-[16/10] overflow-hidden">
                            <img
                                :src="pillar.image"
                                :alt="pillar.alt"
                                class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-aethon-black via-aethon-black/30 to-transparent" />
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
                        <p class="section-label mb-4">Execution</p>
                        <h3 class="font-display text-3xl font-light text-aethon-cream">
                            Guidelines for editorial-grade photography
                        </h3>
                    </div>
                    <div class="space-y-0 lg:col-span-8">
                        <div
                            v-for="(guide, index) in guidelines"
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
                <AethonLogo stacked class="mx-auto mb-10 text-aethon-cream" />
                <h2 class="font-display text-3xl font-light text-aethon-cream md:text-5xl">
                    Briefings for owners, operators, and capital.
                </h2>
                <p class="mx-auto mt-6 max-w-lg text-aethon-cream/50">
                    Align your brand, assets, and visual language with investor-grade positioning.
                    Aethon consults at the intersection of yield, design, and deal structure.
                </p>
                <div class="mt-12 flex flex-wrap justify-center gap-4">
                    <Link
                        v-if="canRegister"
                        :href="route('register')"
                        class="btn-primary"
                    >
                        Request Consultation
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
                    <AethonLogo class="text-aethon-cream" />
                    <p class="mt-6 max-w-sm text-sm leading-relaxed text-aethon-cream/40">
                        Hospitality asset consulting. Yield strategy, design direction, and
                        deal counsel for premium portfolios.
                    </p>
                </div>
                <div>
                    <p class="section-label mb-5">Navigate</p>
                    <ul class="space-y-3 text-sm text-aethon-cream/50">
                        <li><a href="#practice" class="transition hover:text-aethon-gold">Practice</a></li>
                        <li><a href="#capabilities" class="transition hover:text-aethon-gold">Capabilities</a></li>
                        <li><a href="#visual-language" class="transition hover:text-aethon-gold">Visual Language</a></li>
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
                    <p>&copy; {{ new Date().getFullYear() }} Aethon Consulting. All rights reserved.</p>
                    <p class="tracking-[0.2em] uppercase">Αἴθων · Blazing</p>
                </div>
            </div>
        </footer>
    </div>
</template>
