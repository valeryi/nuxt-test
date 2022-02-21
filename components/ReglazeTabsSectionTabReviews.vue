<template>
    <b-tab title="Reviews (5)" active>
        <div class="trustpilot-rating">
            <div class="trustpilot-rating__left">
                <span class="trustpilot-rating__title">Excellent</span>
                <ui-rating-stars-component
                    :rating="4.5"
                    class="trustpilot-rating__stars"
                />
                <div class="trustpilot-rating__based-on">
                    Based on
                    <a href="#">57,876 reviews</a>
                </div>

                <a href="#" class="trustpilot-rating__logo">
                    <svg
                        role="img"
                        aria-labelledby="trustpilotLogo"
                        viewBox="0 0 126 31"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title id="trustpilotLogo">Trustpilot</title>
                        <path
                            d="M33.074774 11.07005H45.81806v2.364196h-5.010656v13.290316h-2.755306V13.434246h-4.988435V11.07005h.01111zm12.198892 4.319629h2.355341v2.187433h.04444c.077771-.309334.222203-.60762.433295-.894859.211092-.287239.466624-.56343.766597-.79543.299972-.243048.633276-.430858.999909-.585525.366633-.14362.744377-.220953 1.12212-.220953.288863 0 .499955.011047.611056.022095.1111.011048.222202.033143.344413.04419v2.408387c-.177762-.033143-.355523-.055238-.544395-.077333-.188872-.022096-.366633-.033143-.544395-.033143-.422184 0-.822148.08838-1.199891.254096-.377744.165714-.699936.41981-.977689.740192-.277753.331429-.499955.729144-.666606 1.21524-.166652.486097-.244422 1.03848-.244422 1.668195v5.39125h-2.510883V15.38968h.01111zm18.220567 11.334883H61.02779v-1.579813h-.04444c-.311083.574477-.766597 1.02743-1.377653 1.369908-.611055.342477-1.233221.51924-1.866497.51924-1.499864 0-2.588654-.364573-3.25526-1.104765-.666606-.740193-.999909-1.856005-.999909-3.347437V15.38968h2.510883v6.948968c0 .994288.188872 1.701337.577725 2.1101.377744.408763.922139.618668 1.610965.618668.533285 0 .96658-.077333 1.322102-.243048.355524-.165714.644386-.37562.855478-.65181.222202-.265144.377744-.596574.477735-.972194.09999-.37562.144431-.784382.144431-1.226288v-6.573349h2.510883v11.323836zm4.27739-3.634675c.07777.729144.355522 1.237336.833257 1.535623.488844.287238 1.06657.441905 1.744286.441905.233312 0 .499954-.022095.799927-.055238.299973-.033143.588836-.110476.844368-.209905.266642-.099429.477734-.254096.655496-.452954.166652-.198857.244422-.452953.233312-.773335-.01111-.320381-.133321-.585525-.355523-.784382-.222202-.209906-.499955-.364573-.844368-.497144-.344413-.121525-.733267-.232-1.17767-.320382-.444405-.088381-.888809-.18781-1.344323-.287239-.466624-.099429-.922138-.232-1.355432-.37562-.433294-.14362-.822148-.342477-1.166561-.596573-.344413-.243048-.622166-.56343-.822148-.950097-.211092-.386668-.311083-.861716-.311083-1.436194 0-.618668.155542-1.12686.455515-1.54667.299972-.41981.688826-.75124 1.14434-1.005336.466624-.254095.97769-.430858 1.544304-.541334.566615-.099429 1.11101-.154667 1.622075-.154667.588836 0 1.15545.066286 1.688736.18781.533285.121524 1.02213.320381 1.455423.60762.433294.276191.788817.640764 1.07768 1.08267.288863.441905.466624.98324.544395 1.612955h-2.621984c-.122211-.596572-.388854-1.005335-.822148-1.204193-.433294-.209905-.933248-.309334-1.488753-.309334-.177762 0-.388854.011048-.633276.04419-.244422.033144-.466624.088382-.688826.165715-.211092.077334-.388854.198858-.544395.353525-.144432.154667-.222203.353525-.222203.60762 0 .309335.111101.552383.322193.740193.211092.18781.488845.342477.833258.475048.344413.121524.733267.232 1.177671.320382.444404.088381.899918.18781 1.366542.287239.455515.099429.899919.232 1.344323.37562.444404.14362.833257.342477 1.17767.596573.344414.254095.622166.56343.833258.93905.211092.37562.322193.850668.322193 1.40305 0 .673906-.155541 1.237336-.466624 1.712385-.311083.464001-.711047.850669-1.199891 1.137907-.488845.28724-1.04435.508192-1.644295.640764-.599946.132572-1.199891.198857-1.788727.198857-.722156 0-1.388762-.077333-1.999818-.243048-.611056-.165714-1.14434-.408763-1.588745-.729144-.444404-.33143-.799927-.740192-1.05546-1.226289-.255532-.486096-.388853-1.071621-.411073-1.745528h2.533103v-.022095zm8.288135-7.700208h1.899828v-3.402675h2.510883v3.402675h2.26646v1.867052h-2.26646v6.054109c0 .265143.01111.486096.03333.684954.02222.18781.07777.353524.155542.486096.07777.132572.199981.232.366633.298287.166651.066285.377743.099428.666606.099428.177762 0 .355523 0 .533285-.011047.177762-.011048.355523-.033143.533285-.077334v1.933338c-.277753.033143-.555505.055238-.811038.088381-.266642.033143-.533285.04419-.811037.04419-.666606 0-1.199891-.066285-1.599855-.18781-.399963-.121523-.722156-.309333-.944358-.552381-.233313-.243049-.377744-.541335-.466625-.905907-.07777-.364573-.13332-.784383-.144431-1.248384v-6.683825h-1.899827v-1.889147h-.02222zm8.454788 0h2.377562V16.9253h.04444c.355523-.662858.844368-1.12686 1.477644-1.414098.633276-.287239 1.310992-.430858 2.055369-.430858.899918 0 1.677625.154667 2.344231.475048.666606.309335 1.222111.740193 1.666515 1.292575.444405.552382.766597 1.193145.9888 1.92229.222202.729145.333303 1.513527.333303 2.3421 0 .762288-.099991 1.50248-.299973 2.20953-.199982.718096-.499955 1.347812-.899918 1.900194-.399964.552383-.911029.98324-1.533194 1.31467-.622166.33143-1.344323.497144-2.18869.497144-.366634 0-.733267-.033143-1.0999-.099429-.366634-.066286-.722157-.176762-1.05546-.320381-.333303-.14362-.655496-.33143-.933249-.56343-.288863-.232-.522175-.497144-.722157-.79543h-.04444v5.656393h-2.510883V15.38968zm8.77698 5.67849c0-.508193-.06666-1.005337-.199981-1.491433-.133321-.486096-.333303-.905907-.599946-1.281527-.266642-.37562-.599945-.673906-.988799-.894859-.399963-.220953-.855478-.342477-1.366542-.342477-1.05546 0-1.855387.364572-2.388672 1.093717-.533285.729144-.799928 1.701337-.799928 2.916578 0 .574478.066661 1.104764.211092 1.59086.144432.486097.344414.905908.633276 1.259432.277753.353525.611056.629716.99991.828574.388853.209905.844367.309334 1.355432.309334.577725 0 1.05546-.121524 1.455423-.353525.399964-.232.722157-.541335.97769-.905907.255531-.37562.444403-.79543.555504-1.270479.099991-.475049.155542-.961145.155542-1.458289zm4.432931-9.99812h2.510883v2.364197h-2.510883V11.07005zm0 4.31963h2.510883v11.334883h-2.510883V15.389679zm4.755124-4.31963h2.510883v15.654513h-2.510883V11.07005zm10.210184 15.963847c-.911029 0-1.722066-.154667-2.433113-.452953-.711046-.298287-1.310992-.718097-1.810946-1.237337-.488845-.530287-.866588-1.160002-1.12212-1.889147-.255533-.729144-.388854-1.535622-.388854-2.408386 0-.861716.133321-1.657147.388853-2.386291.255533-.729145.633276-1.35886 1.12212-1.889148.488845-.530287 1.0999-.93905 1.810947-1.237336.711047-.298286 1.522084-.452953 2.433113-.452953.911028 0 1.722066.154667 2.433112.452953.711047.298287 1.310992.718097 1.810947 1.237336.488844.530287.866588 1.160003 1.12212 1.889148.255532.729144.388854 1.524575.388854 2.38629 0 .872765-.133322 1.679243-.388854 2.408387-.255532.729145-.633276 1.35886-1.12212 1.889147-.488845.530287-1.0999.93905-1.810947 1.237337-.711046.298286-1.522084.452953-2.433112.452953zm0-1.977528c.555505 0 1.04435-.121524 1.455423-.353525.411074-.232.744377-.541335 1.01102-.916954.266642-.37562.455513-.806478.588835-1.281527.12221-.475049.188872-.961145.188872-1.45829 0-.486096-.066661-.961144-.188872-1.44724-.122211-.486097-.322193-.905907-.588836-1.281527-.266642-.37562-.599945-.673907-1.011019-.905907-.411074-.232-.899918-.353525-1.455423-.353525-.555505 0-1.04435.121524-1.455424.353525-.411073.232-.744376.541334-1.011019.905907-.266642.37562-.455514.79543-.588835 1.281526-.122211.486097-.188872.961145-.188872 1.447242 0 .497144.06666.98324.188872 1.458289.12221.475049.322193.905907.588835 1.281527.266643.37562.599946.684954 1.01102.916954.411073.243048.899918.353525 1.455423.353525zm6.4883-9.66669h1.899827v-3.402674h2.510883v3.402675h2.26646v1.867052h-2.26646v6.054109c0 .265143.01111.486096.03333.684954.02222.18781.07777.353524.155541.486096.077771.132572.199982.232.366634.298287.166651.066285.377743.099428.666606.099428.177762 0 .355523 0 .533285-.011047.177762-.011048.355523-.033143.533285-.077334v1.933338c-.277753.033143-.555505.055238-.811038.088381-.266642.033143-.533285.04419-.811037.04419-.666606 0-1.199891-.066285-1.599855-.18781-.399963-.121523-.722156-.309333-.944358-.552381-.233313-.243049-.377744-.541335-.466625-.905907-.07777-.364573-.133321-.784383-.144431-1.248384v-6.683825h-1.899827v-1.889147h-.02222z"
                            fill="#191919"
                        />
                        <path
                            fill="#00B67A"
                            d="M30.141707 11.07005H18.63164L15.076408.177071l-3.566342 10.892977L0 11.059002l9.321376 6.739063-3.566343 10.88193 9.321375-6.728016 9.310266 6.728016-3.555233-10.88193 9.310266-6.728016z"
                        />
                        <path
                            fill="#005128"
                            d="M21.631369 20.26169l-.799928-2.463625-5.755033 4.153914z"
                        />
                    </svg>
                </a>
            </div>

            <div v-if="showReview" class="trustpilot-rating__right">
                <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="trustpilot-rating__slider-control trustpilot-rating__slider-control--left"
                    @click.prevent="onPrevSlide"
                >
                    <circle
                        cx="12"
                        cy="12"
                        r="11.5"
                        fill="none"
                        stroke="#8C8C8C"
                    />
                    <path
                        fill="#8C8C8C"
                        d="M10.5088835 12l3.3080582-3.02451041c.2440777-.22315674.2440777-.5849653 0-.80812204-.2440776-.22315673-.6398058-.22315673-.8838834 0L9.18305826 11.595939c-.24407768.2231567-.24407768.5849653 0 .808122l3.75000004 3.4285714c.2440776.2231568.6398058.2231568.8838834 0 .2440777-.2231567.2440777-.5849653 0-.808122L10.5088835 12z"
                    />
                </svg>

                <div class="trustpilot-rating__slider">
                    <b-carousel ref="reviewCarousel" no-wrap>
                        <b-carousel-slide v-for="i of 5" :key="i">
                            <template #img>
                                <b-container>
                                    <b-row>
                                        <b-col
                                            v-for="j of reviewNumberPerSlide"
                                            :key="j"
                                            :cols="
                                                Math.ceil(
                                                    12 / reviewNumberPerSlide
                                                )
                                            "
                                            class="pl-0"
                                        >
                                            <div
                                                class="trustpilot-rating__slider-top"
                                            >
                                                <ui-rating-stars-component
                                                    :rating="j % 2 == 0 ? 4 : 5"
                                                    class="trustpilot-rating__slider-stars"
                                                />
                                                <time
                                                    class="trustpilot-rating__slider-time"
                                                    >3 hours ago</time
                                                >
                                            </div>
                                            <div
                                                class="trustpilot-rating__slider-content"
                                            >
                                                <span
                                                    class="trustpilot-rating__slider-content-title"
                                                    >Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Fugiat, itaque?</span
                                                >
                                                <p
                                                    class="trustpilot-rating__slider-content-review"
                                                >
                                                    Lorem ipsum dolor, sit amet
                                                    consectetur adipisicing
                                                    elit. Dolorum culpa dolore
                                                    quibusdam enim rerum earum
                                                    voluptate eligendi expedita
                                                    suscipit. Impedit.
                                                </p>
                                                <address
                                                    class="trustpilot-rating__slider-content-author"
                                                >
                                                    John Snow
                                                </address>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-container>
                            </template>
                        </b-carousel-slide>
                    </b-carousel>

                    <span class="trustpilot-rating__slider-note"
                        >Showing our 4 & 5 star reviews</span
                    >
                </div>

                <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="trustpilot-rating__slider-control trustpilot-rating__slider-control--right"
                    @click.prevent="onNextSlide"
                >
                    <circle
                        cx="12"
                        cy="12"
                        r="11.5"
                        fill="none"
                        stroke="#8C8C8C"
                    />
                    <path
                        fill="#8C8C8C"
                        d="M10.5088835 12l3.3080582-3.02451041c.2440777-.22315674.2440777-.5849653 0-.80812204-.2440776-.22315673-.6398058-.22315673-.8838834 0L9.18305826 11.595939c-.24407768.2231567-.24407768.5849653 0 .808122l3.75000004 3.4285714c.2440776.2231568.6398058.2231568.8838834 0 .2440777-.2231567.2440777-.5849653 0-.808122L10.5088835 12z"
                    />
                </svg>
            </div>
        </div>

        <div class="reglaze-service">
            <span class="reglaze-service__title"
                >Reglaze Service - Customer Reviews</span
            >

            <span class="reglaze-service__reviews">
                224 Review(s) -
                <a href="#" class="reglaze-service__add-review-link"
                    >Add your review</a
                >
            </span>

            <span class="reglaze-service__customers-recommend">
                <b-icon
                    icon="hand-thumbs-up"
                    class="reglaze-service__customers-recommend-icon"
                />
                <b>99%</b>
                <em>of customers recommend this product (127 of 128)</em>
            </span>
        </div>
    </b-tab>
</template>

<script>
export default {
    data() {
        return {
            reviewAmount: 1,
            showReview: false,
        }
    },
    computed: {
        reviewNumberPerSlide() {
            return this.reviewAmount
        },
    },
    mounted() {
        window.addEventListener('resize', this.updateReviewNumber)
        this.updateReviewNumber()
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateReviewNumber)
    },

    methods: {
        updateReviewNumber() {
            const currentWidth = window.innerWidth

            if (currentWidth < 830) {
                this.showReview = false
            } else {
                this.showReview = true

                if (currentWidth < 930) this.reviewAmount = 2
                else if (currentWidth < 1200) this.reviewAmount = 3
                else this.reviewAmount = 4
            }
        },
        onPrevSlide() {
            this.$refs.reviewCarousel.prev()
        },
        onNextSlide() {
            this.$refs.reviewCarousel.next()
        },
    },
}
</script>

<style lang="scss">
$trustpilot-rating-left-width: 230px;
$trustpilot-rating-hr-color: #e2e6e7;
$trustpilot-rating-color: #191919;
$trustpilot-rating-height: 190px;
$trustpilot-rating-slider-control-size: 25px;
$trustpilot-rating-faded-text-color: rgba(0, 0, 0, 0.6);
$trustpilot-rating-based-on-color: rgba(25, 25, 25, 0.8);
$trustpilot-rating-based-on-color-hover: rgba(25, 25, 25, 1);
$reglaze-service-add-review-link-color: #00799e;

.trustpilot-rating {
    display: flex;
    justify-content: center;
    align-items: center;
    color: $trustpilot-rating-color;
    padding: 0.5rem;
    border-bottom: 1px solid $trustpilot-rating-hr-color;
    min-height: $trustpilot-rating-height;

    &__left {
        display: flex;
        flex-direction: column;
        align-items: center;

        @include media-breakpoint-up(580px) {
            flex: $trustpilot-rating-left-width;
            min-width: $trustpilot-rating-left-width;
            max-width: $trustpilot-rating-left-width;
            width: $trustpilot-rating-left-width;
        }
    }

    &__right {
        align-items: center;
        flex: 100%;
        max-width: 100%;
        width: 100%;
        position: relative;
        user-select: none;
        @include hide-down(580px);
    }

    &__slider {
        display: flex;
        flex-direction: column;
        margin: 0 2rem;

        &-control {
            width: $trustpilot-rating-slider-control-size;
            height: $trustpilot-rating-slider-control-size;
            position: absolute;
            cursor: pointer;

            &:first-child {
                left: -0.5rem;
            }

            &:last-child {
                transform: rotate(180deg);
                right: -0.5rem;
            }
        }

        &-note {
            color: $trustpilot-rating-color;
            font-size: 0.8rem;
            font-weight: 200;
            transform: translateY(0.5rem);
            letter-spacing: 0.04em;
        }

        &-stars {
            max-width: 100px;
        }

        &-time {
            color: $trustpilot-rating-faded-text-color;
            font-size: 0.8em;
        }

        &-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.4em;
        }
    }

    &__stars {
        max-width: 162px;
    }

    &__slider &__slider-content-title {
        font-size: 0.9rem;
        font-weight: bold;
        margin-bottom: 0.3em;
        @include truncate;
    }

    &__slider-content {
        &-author {
            color: $trustpilot-rating-faded-text-color;
            font-size: 0.8em;
            margin: 0;
        }

        &-review {
            font-size: 0.75rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            word-wrap: break-word;
            margin-bottom: 0.4em;
        }
    }

    &__title {
        font-weight: 400;
        letter-spacing: 0.03em;
        font-size: 1.3rem;
        margin-bottom: 0.35rem;
    }

    &__based-on {
        margin: 0.5rem auto;
        font-size: 0.8rem;
        color: $trustpilot-rating-based-on-color;

        a {
            display: inline-block;
            border-bottom: 1px solid $trustpilot-rating-based-on-color;
            font-weight: 500;
            text-decoration: none;
            color: $trustpilot-rating-based-on-color-hover;

            &:hover {
                color: $trustpilot-rating-based-on-color-hover;
                border-bottom: 1px solid $trustpilot-rating-based-on-color-hover;
            }
        }
    }

    &__logo {
        svg {
            width: 106px;
        }
    }
}

.reglaze-service {
    display: flex;
    flex-direction: column;
    min-height: 150px;
    justify-content: center;
    align-items: flex-start;
    border-bottom: 1px solid $trustpilot-rating-hr-color;
    font-size: 0.9rem;

    &__title,
    &__reviews {
        font-weight: bold;
    }

    &__title {
        font-size: 1rem;
        margin-bottom: 0.55em;

        @include media-breakpoint-up(1024px) {
            font-size: 1.15rem;
        }
    }

    &__customers-recommend {
        font-size: 0.8rem;
        margin-top: 0.2em;

        &-icon {
            margin-right: 0.5em;
        }
    }

    &__add-review-link {
        font-weight: 400;
        text-decoration: underline;
        color: $reglaze-service-add-review-link-color;

        &:hover {
            text-decoration: none;
            color: $reglaze-service-add-review-link-color;
        }
    }
}
</style>
