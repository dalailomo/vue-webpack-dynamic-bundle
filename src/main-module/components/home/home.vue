<template>
    <v-card>
        <v-card-text>
            <h2>Loaded modules</h2>
            <ul>
                <li v-for="route in shell._routes" :key="route.name">
                    <router-link :to="{ name: route[0].name }">{{ route[0].name }}</router-link>
                </li>
            </ul>
        </v-card-text>
    </v-card>


</template>
