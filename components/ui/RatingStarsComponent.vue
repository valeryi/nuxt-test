<template>
    <svg
        role="img"
        aria-labelledby="starRating"
        viewBox="0 0 251 46"
        xmlns="http://www.w3.org/2000/svg"
        class="rating-stars"
    >
        <title lang="en">
            {{ rating }} out of five star rating on Trustpilot
        </title>

        <g class="rating-stars__star">
            <path
                class="tp-star__canvas"
                :fill="getCurrentColor(1)"
                d="M0 46.330002h46.375586V0H0z"
            />
            <path
                d="M39.533936 19.711433L13.230239 38.80065l3.838216-11.797827L7.02115 19.711433h12.418975l3.837417-11.798624 3.837418 11.798624h12.418975zM23.2785 31.510075l7.183595-1.509576 2.862114 8.800152L23.2785 31.510075z"
                fill="#FFF"
            />
        </g>

        <g class="rating-stars__star">
            <path
                :fill="getCurrentColor(2)"
                d="M51.24816 46.330002h46.375587V0H51.248161z"
            />
            <path
                :fill="getCurrentColor(1.5)"
                d="M51.24816 46.330002h23.187793V0H51.248161z"
            />
            <path
                d="M74.990978 31.32991L81.150908 30 84 39l-9.660206-7.202786L64.30279 39l3.895636-11.840666L58 19.841466h12.605577L74.499595 8l3.895637 11.841466H91L74.990978 31.329909z"
                fill="#FFF"
            />
        </g>

        <g class="rating-stars__star">
            <path
                :fill="getCurrentColor(3)"
                d="M102.532209 46.330002h46.375586V0h-46.375586z"
            />
            <path
                :fill="getCurrentColor(2.5)"
                d="M102.532209 46.330002h23.187793V0h-23.187793z"
            />
            <path
                d="M142.066994 19.711433L115.763298 38.80065l3.838215-11.797827-10.047304-7.291391h12.418975l3.837418-11.798624 3.837417 11.798624h12.418975zM125.81156 31.510075l7.183595-1.509576 2.862113 8.800152-10.045708-7.290576z"
                fill="#FFF"
            />
        </g>

        <g class="rating-stars__star">
            <path
                :fill="getCurrentColor(4)"
                d="M153.815458 46.330002h46.375586V0h-46.375586z"
            />
            <path
                :fill="getCurrentColor(3.5)"
                d="M153.815458 46.330002h23.187793V0h-23.187793z"
            />
            <path
                d="M193.348355 19.711433L167.045457 38.80065l3.837417-11.797827-10.047303-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418974zM177.09292 31.510075l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z"
                fill="#FFF"
            />
        </g>

        <g class="rating-stars__star">
            <path
                :fill="getCurrentColor(5)"
                d="M205.064416 46.330002h46.375587V0h-46.375587z"
            />
            <path
                :fill="getCurrentColor(4.5)"
                d="M205.064416 46.330002h23.187793V0h-23.187793z"
            />
            <path
                d="M244.597022 19.711433l-26.3029 19.089218 3.837419-11.797827-10.047304-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418975zm-16.255436 11.798642l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z"
                fill="#FFF"
            />
        </g>
    </svg>
</template>

<script>
export default {
    props: {
        rating: {
            type: Number,
            default: 5,
            validator(value) {
                return value <= 5 && value > 0
            },
        },
    },
    data: () => ({
        colors: ['#dcdce6', 'red', 'orange', '#f3cc40', '#73cf11', '#00b67a'],
    }),
    methods: {
        getCurrentColor(currentStar) {
            return this.rating >= currentStar
                ? this.colors[Math.round(this.rating)]
                : this.colors[0]
        },
    },
}
</script>

<style>
.rating-stars {
    width: 100%;
}
</style>
