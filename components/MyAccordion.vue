<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item" v-for="(item, index) in accordionItems" :key="index">
            <h2 class="accordion-header" :id="`heading${index}`">
                <button class="accordion-button" :class="{ collapsed: index !== 0 }" type="button"
                    data-bs-toggle="collapse" :data-bs-target="`#collapse${index}`"
                    :aria-expanded="index === 0 ? 'true' : 'false'" :aria-controls="`collapse${index}`">
                    {{ item.title }}
                </button>
            </h2>
            <div :id="`collapse${index}`" class="accordion-collapse collapse" :class="{ show: index === 0 }"
                :aria-labelledby="`heading${index}`" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    {{ item.content }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const accordionItems = [
    {
        title: 'Accordion Item #1',
        content: 'This is the content for item 1.',
    },
    {
        title: 'Accordion Item #2',
        content: 'Content for the second accordion item.',
    },
    {
        title: 'Accordion Item #3',
        content: 'And here is the third one.',
    },
]
</script>