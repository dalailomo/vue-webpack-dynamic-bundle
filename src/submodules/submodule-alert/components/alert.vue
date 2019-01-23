<template>
    <v-layout flex column align-center>
        <p>{{ paragraph }}</p>

        <p>Count: {{ counter }}</p>
        <v-btn @click="incr(1)">Add</v-btn>
        <v-btn @click="decr(1)">Sub</v-btn>
    </v-layout>
</template>

<script lang="ts" src="./alert.ts" />

