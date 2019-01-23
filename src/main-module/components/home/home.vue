<template>
    <v-card>
        <v-card-text>
            <h2>Loaded modules</h2>
            <div v-for="(submodule, index) in loadedSubmodules" :key="index">
                <v-divider class="my-3" />

                <h4>{{ submodule.name }}</h4>
                <h5>Routes:</h5>
                <ul>
                    <li v-for="route in submodule.routes" :key="route.name">{{ route }}</li>
                </ul>
            </div>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" src="./home.ts" />
