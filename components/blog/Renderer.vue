<script setup>
defineProps({
    content: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <div>
        <template v-for="(block, index) in content" :key="index">
            <BlogContentParagraphText v-if="block.type === 'paragraph'">
                {{ block.text }}
            </BlogContentParagraphText>

            <h1 class="mb-1" v-else-if="block.type === 'heading1'">
                {{ block.text }}
            </h1>
            <h2 class="mb-1" v-else-if="block.type === 'heading2'">
                {{ block.text }}
            </h2>
            <h3 class="mb-1" v-else-if="block.type === 'heading3'">
                {{ block.text }}
            </h3>

            <div class="mb-4" v-else-if="block.type === 'image'">
                <img class="rounded w-100 w-md-75 w-lg-80" :src="block.src" :alt="block.alt || ''"
                    style="object-fit: cover;" loading="lazy" />
            </div>

            <BlogContentCustomQuote v-else-if="block.type === 'quote'" :quote="block.quote" :link="block.link" />

            <BlogContentViewCode v-else-if="block.type === 'code'" :lang="block.lang" :code="block.code" />

        </template>
    </div>
</template>
