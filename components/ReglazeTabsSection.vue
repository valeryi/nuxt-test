<template>
    <div class="tabs-section">
        <custom-container>
            <b-tabs
                active-nav-item-class="tabs-section__tab--active"
                content-class="tabs-section__content"
            >
                <reglaze-tabs-section-tab-info />
                <reglaze-tabs-section-tab-reviews />
            </b-tabs>
        </custom-container>
    </div>
</template>

<style lang="scss">
$tabs-section-bg-color: #fff;
$tabs-section-text-color: #000;
$tabs-section-border-color: #e2e6e7;
$tabs-section-border-color-active: #a0a0a0;
$tabs-section-border-mark-color-active: #fc4c02;
$tabs-section-tab-bg-inactive: #f0f0f0;
$tabs-section-tab-bg-color: #fefefe;

$tabs-section-title-font-size: 1.2em;
$tabs-section-subline-font-size: 0.9em;

.tabs-section {
    &__tab {
        &--active {
            background: $tabs-section-bg-color !important;
            color: $tabs-section-text-color !important;
            border-left: 1px solid $tabs-section-border-color-active !important;
            border-top: 5px solid $tabs-section-border-mark-color-active !important;
            border-right: 1px solid $tabs-section-border-color-active !important;
            border-bottom: 1px solid $tabs-section-border-color-active !important;
            padding: 1rem !important;
        }
    }

    .nav-tabs {
        border: none;

        .nav-item {
            &:focus,
            &:active {
                outline: none;
            }

            .nav-link {
                padding: 1rem;
                font-size: 1rem;
                font-weight: bold;
                color: $tabs-section-border-color-active;
                background: $tabs-section-tab-bg-inactive;
                border-left: 1px solid $tabs-section-border-color;
                border-top: 5px solid transparent;
                border-right: 1px solid $tabs-section-border-color;
                border-bottom: 1px solid $tabs-section-border-color-active;
                margin-right: 0.25rem;
                min-width: 100px;
                border-radius: 2px;

                &:hover {
                    background: $tabs-section-tab-bg-color;
                    color: $tabs-section-border-mark-color-active;
                    padding: calc(1rem + 4px) 1rem 1rem;
                    border-left: 1px solid $tabs-section-border-color;
                    border-top: 1px solid $tabs-section-border-color;
                    border-right: 1px solid $tabs-section-border-color;
                    border-bottom: 1px solid $tabs-section-border-color-active;
                    box-shadow: none;
                }

                &:focus,
                &:active {
                    outline: none;
                }
            }
        }
    }

    &__content {
        border-top: 1px solid $tabs-section-border-color-active;
    }
}
</style>
