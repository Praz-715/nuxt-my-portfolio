<script setup>
import { NuxtLink } from '#components';

defineProps({
    quote: {
        type: String,
        default: '',
    },
    link: {
        type: String,
        default: '',
    },
});

function openInNewTab() {
    window.open(``, '_blank')
}

</script>

<template>
    <blockquote class="quote">
        {{ quote }}
        <template v-if="link ">

            <a :href="link" target="_blank" rel="noopener noreferrer">
                {{ link }}
            </a>
        </template>
    </blockquote>
</template>

<style scoped>
.quote {
    border-left: 5px solid #555;
    background-color: #f9f9f9;
    padding: 16px 20px;
    font-style: italic;
    font-weight: bold;
    color: #333;
    margin: 20px 0;
    border-radius: 4px;
}
</style>
