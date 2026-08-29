<script setup>
import AethonLogo from '@/Components/AethonLogo.vue';
import BlurFade from '@/Components/BlurFade.vue';
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

const solutions = [
    {
        number: '01',
        title: 'Diagnose',
        philosophy:
            "We identify what is actually wrong before recommending a solution. Don't fix the symptom before understanding the disease.",
        includes: [
            'Commercial audits',
            'Operational audits',
            'Performance analysis',
            'Revenue leakage identification',
            'Process & contract reviews',
            'Supplier & distribution analysis',
            'Profitability analysis',
            'Root-cause diagnosis',
            'Commercial health checks',
        ],
    },
    {
        number: '02',
        title: 'Commercial Strategy',
        philosophy:
            'We help companies improve how they generate revenue, protect margins, and develop commercially.',
        includes: [
            'Commercial & revenue strategy',
            'Pricing & margin analysis',
            'Sales & business development',
            'Market positioning',
            'Commercial planning & roadmaps',
            'KPI design',
            'Performance management',
            'Revenue optimization',
            'Growth strategy',
        ],
    },
    {
        number: '03',
        title: 'Contracting & Supplier Management',
        philosophy:
            'The goal is not simply a lower rate. It is commercially useful agreements that improve competitiveness, flexibility, margin, and production.',
        includes: [
            'Hotel & DMC contracting',
            'Supplier sourcing & evaluation',
            'Rate & allocation negotiations',
            'Contract restructuring',
            'Payment & cancellation terms',
            'Exclusivity & pre-buy agreements',
            'Portfolio optimization',
            'Supplier benchmarking',
            'Contract renewal',
        ],
    },
    {
        number: '04',
        title: 'Operations & Distribution',
        philosophy:
            'We identify and improve the machinery behind the product. Operational problems can quietly create commercial losses.',
        includes: [
            'Reservation & booking workflows',
            'Product, rate & inventory loading',
            'Mapping & distribution',
            'SOP development',
            'Operational audits',
            'Quality control',
            'Workflow optimization',
            'System & process analysis',
            'Error reduction',
        ],
    },
    {
        number: '05',
        title: 'Product & Market Development',
        philosophy:
            'We help companies create, improve, and commercialize products and markets.',
        includes: [
            'Product development',
            'Tourism packages & hotel portfolios',
            'Destination development',
            'New market entry & expansion',
            'Market feasibility & research',
            'Commercialization & partnerships',
            'Product positioning',
            'Supplier networks',
            'Expansion planning',
        ],
    },
    {
        number: '06',
        title: 'People & Performance',
        philosophy:
            'Commercial strategy is useless if the team cannot execute it.',
        includes: [
            'Team structure & role definition',
            'KPI & performance systems',
            'Commercial, reservation & contracting training',
            'Skills-gap analysis',
            'Incentive structures',
            'Accountability systems',
            'Organizational development',
            'Performance improvement',
        ],
    },
    {
        number: '07',
        title: 'Fractional Commercial Management',
        philosophy:
            'For companies that need ongoing commercial expertise without immediately building a full internal department.',
        includes: [
            'Outsourced commercial management',
            'Fractional leadership',
            'Outsourced contracting',
            'Product & market management',
            'Business development',
            'Supplier management',
            'Ongoing performance management',
            'Commercial reporting',
            'Senior commercial support',
        ],
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
                    class="hero-image h-full w-full object-cover object-center"
                />
                <div class="absolute inset-0 bg-gradient-to-r from-aethon-navy via-aethon-navy/85 to-aethon-navy/40" />
                <div class="absolute inset-0 bg-gradient-to-t from-aethon-navy via-transparent to-aethon-navy/50" />
            </div>

            <div class="relative mx-auto grid w-full max-w-7xl gap-16 px-6 py-16 lg:grid-cols-12 lg:px-8 lg:py-32">
                <div class="lg:col-span-8">
                    <BlurFade immediate>
                        <AethonLogo stacked class="mb-10" />
                    </BlurFade>
                    <BlurFade immediate :delay="120">
                        <p class="section-label mb-6">Hospitality Commercial Advisory</p>
                    </BlurFade>
                    <BlurFade immediate :delay="220">
                        <p class="mb-10 max-w-xl font-display text-2xl font-light italic leading-snug text-aethon-gold/90 md:text-3xl">
                            Strategy for assets that earn.
                        </p>
                    </BlurFade>
                    <BlurFade immediate :delay="320">
                        <p class="mb-12 max-w-lg text-base leading-relaxed text-aethon-cream/60">
                            Aethon Commercial Group advises owners, operators, and capital partners on
                            hospitality asset performance, commercial design, and transaction strategy
                            across seven structured solution categories.
                        </p>
                    </BlurFade>
                    <BlurFade immediate :delay="420">
                        <div class="flex flex-wrap gap-4">
                            <a href="#practice" class="btn-primary">The Practice</a>
                            <a href="#contact" class="btn-outline">Request a Briefing</a>
                        </div>
                    </BlurFade>
                </div>

                <BlurFade immediate :delay="280" class="hidden flex-col justify-end border-l border-aethon-gold/15 pl-10 lg:col-span-4 lg:flex">
                    <p class="font-sans text-[0.65rem] uppercase tracking-[0.28em] text-aethon-gold">From the Greek</p>
                    <p class="mt-3 font-display text-2xl font-light italic text-aethon-cream">Αἴθων</p>
                    <p class="mt-2 text-sm leading-relaxed text-aethon-cream/45">
                        Blazing. The sun-horse. Heat with direction, energy applied to value,
                        not spectacle.
                    </p>
                </BlurFade>
            </div>
        </section>

        <!-- Practice -->
        <section id="practice" class="scroll-mt-24 border-t border-white/5 bg-aethon-charcoal py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="grid gap-16 lg:grid-cols-12 lg:gap-20">
                    <BlurFade class="lg:col-span-5">
                        <p class="section-label mb-5">The Practice</p>
                        <h2 class="font-display text-3xl font-light text-aethon-cream md:text-5xl">
                            A commercial group built for hospitality assets
                        </h2>
                    </BlurFade>
                    <BlurFade :delay="120" class="space-y-6 text-base leading-relaxed text-aethon-cream/60 lg:col-span-7">
                        <p>
                            Aethon Commercial Group sits at the intersection of yield, design, and
                            deal structure. We work with institutional owners who need counsel that
                            matches the stakes of their portfolios.
                        </p>
                        <p>
                            Behind these seven solution categories sits a much larger internal catalogue
                            of skills. That depth is our toolbox. The website presents the work through
                            seven clear entry points, not hundreds of individual service lines.
                        </p>
                        <p>
                            From diagnosis through fractional commercial management, every engagement is
                            structured to protect value, sharpen positioning, and accelerate commercial
                            outcomes.
                        </p>
                    </BlurFade>
                </div>
            </div>
        </section>

        <!-- Solutions -->
        <section id="solutions" class="scroll-mt-24 border-t border-white/5 py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <BlurFade class="mb-16 max-w-3xl">
                    <p class="section-label mb-4">Aethon Solutions</p>
                    <h2 class="font-display text-3xl font-light text-aethon-cream md:text-4xl">
                        Seven major solution categories
                    </h2>
                    <p class="mt-6 text-sm leading-relaxed text-aethon-cream/50">
                        We draw on a broad internal catalogue of commercial capabilities. Visitors see
                        seven structured solution areas — each a clear entry point into how we help
                        hospitality and travel businesses perform.
                    </p>
                </BlurFade>

                <div class="space-y-5">
                    <BlurFade
                        v-for="(solution, index) in solutions"
                        :key="solution.number"
                        :delay="index * 70"
                        as="article"
                        class="group border border-white/5 bg-aethon-navy/80 p-8 transition duration-500 hover:border-aethon-gold/25 hover:bg-aethon-charcoal/80 lg:p-10"
                    >
                        <div class="grid gap-8 lg:grid-cols-12 lg:gap-10">
                            <div class="lg:col-span-4">
                                <p class="font-display text-4xl font-light text-aethon-gold">{{ solution.number }}</p>
                                <h3 class="mt-4 font-display text-2xl text-aethon-cream lg:text-[1.65rem]">
                                    {{ solution.title }}
                                </h3>
                            </div>
                            <div class="lg:col-span-8">
                                <p class="text-sm leading-relaxed text-aethon-cream/60">
                                    {{ solution.philosophy }}
                                </p>
                                <div class="mt-6 flex flex-wrap gap-2">
                                    <span
                                        v-for="item in solution.includes"
                                        :key="item"
                                        class="rounded-sm border border-aethon-gold/15 bg-aethon-charcoal/60 px-3 py-1.5 font-sans text-[0.68rem] uppercase tracking-[0.12em] text-aethon-cream/55 transition group-hover:border-aethon-gold/30 group-hover:text-aethon-cream/75"
                                    >
                                        {{ item }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </BlurFade>
                </div>
            </div>
        </section>

        <!-- Focus Areas -->
        <section id="focus" class="scroll-mt-24 border-t border-white/5 bg-aethon-charcoal py-24 lg:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <BlurFade class="mb-16 max-w-2xl">
                    <p class="section-label mb-4">Focus Areas</p>
                    <h2 class="font-display text-3xl font-light text-aethon-cream md:text-4xl">
                        Where commercial hospitality decisions take shape
                    </h2>
                </BlurFade>

                <div class="grid gap-4 md:grid-cols-2">
                    <BlurFade
                        v-for="(pillar, index) in focusAreas"
                        :key="pillar.id"
                        :delay="index * 100"
                        as="article"
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
                    </BlurFade>
                </div>

                <div class="mt-24 grid gap-16 lg:grid-cols-12">
                    <BlurFade class="lg:col-span-4">
                        <p class="section-label mb-4">Brand Principles</p>
                        <h3 class="font-display text-3xl font-light text-aethon-cream">
                            How we present commercial authority
                        </h3>
                    </BlurFade>
                    <div class="space-y-0 lg:col-span-8">
                        <BlurFade
                            v-for="(guide, index) in principles"
                            :key="guide.title"
                            :delay="index * 100"
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
                        </BlurFade>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact -->
        <section id="contact" class="scroll-mt-24 relative overflow-hidden border-t border-white/5 py-24 lg:py-36">
            <div class="absolute inset-0 bg-hero-glow" />
            <BlurFade class="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
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
            </BlurFade>
        </section>

        <footer class="border-t border-white/5 bg-aethon-charcoal">
            <div class="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 lg:px-8">
                <BlurFade class="md:col-span-2">
                    <AethonLogo />
                    <p class="mt-6 max-w-sm text-sm leading-relaxed text-aethon-cream/40">
                        Hospitality commercial advisory across seven solution categories. Diagnosis,
                        strategy, contracting, operations, product development, people, and fractional
                        management.
                    </p>
                </BlurFade>
                <BlurFade :delay="100">
                    <p class="section-label mb-5">Navigate</p>
                    <ul class="space-y-3 text-sm text-aethon-cream/50">
                        <li><a href="#practice" class="transition hover:text-aethon-gold">Practice</a></li>
                        <li><a href="#solutions" class="transition hover:text-aethon-gold">Solutions</a></li>
                        <li><a href="#focus" class="transition hover:text-aethon-gold">Focus Areas</a></li>
                        <li><a href="#contact" class="transition hover:text-aethon-gold">Contact</a></li>
                    </ul>
                </BlurFade>
                <BlurFade :delay="200">
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
                </BlurFade>
            </div>
            <BlurFade>
                <div class="border-t border-white/5">
                    <div class="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 text-[0.7rem] text-aethon-cream/30 sm:flex-row sm:items-center lg:px-8">
                        <p>&copy; {{ new Date().getFullYear() }} Aethon Commercial Group. All rights reserved.</p>
                        <p class="tracking-[0.2em] uppercase">Αἴθων · Blazing</p>
                    </div>
                </div>
            </BlurFade>
        </footer>
    </div>
</template>

<style scoped>
.hero-image {
    animation: hero-image-reveal 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    transform: scale(1.06);
    filter: blur(10px);
}

@keyframes hero-image-reveal {
    to {
        transform: scale(1);
        filter: blur(0);
    }
}

@media (prefers-reduced-motion: reduce) {
    .hero-image {
        animation: none;
        transform: none;
        filter: none;
    }
}
</style>
