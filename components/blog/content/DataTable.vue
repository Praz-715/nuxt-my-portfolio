<script setup>
defineProps({
    thead: {
        type: Array,
        required: true,
        default: () => ["#", "Name", "Job Position", "Since", "Salary"],
    },
    tbody: {
        type: Array,
        required: true,
        default: () => [
            { id: 1, name: "Andrew Mike", job: "Develop", since: "2013", salary: "€ 99,225" },
            { id: 2, name: "John Doe", job: "Design", since: "2012", salary: "€ 89,241" },
            { id: 3, name: "Alex Mike", job: "Design", since: "2010", salary: "€ 92,144" },
        ],
    },
});
</script>

<template>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th v-for="(head, index) in thead" :key="index"
                        :class="{ 'text-center': index === 0, 'text-right': index === thead.length - 1 }">
                        {{ head }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in tbody" :key="rowIndex">
                    <td class="text-center">{{ row.id }}</td>
                    <td>{{ row.name }}</td>
                    <td>{{ row.job }}</td>
                    <td>{{ row.since }}</td>
                    <td class="text-right">{{ row.salary }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.table thead th {
    padding: auto;
}
</style>
