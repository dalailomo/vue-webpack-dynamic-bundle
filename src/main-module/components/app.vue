<template>
<div id="app">
  <v-app id="inspire">
    <v-toolbar
      color="blue-grey"
      dark
      fixed
      app
      clipped-right
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Toolbar</v-toolbar-title>
    </v-toolbar>

    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <!-- Static routes -->
        <v-list-tile v-for="route in $router.options.routes" :key="route.name" @click="() => $router.push({ name: route.name })">
          <v-list-tile-content >
            <v-list-tile-title>{{ route.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <!-- Dynamic routes -->
        <v-list-tile v-for="route in shell._routes" :key="route.name" @click="() => $router.push({ name: route[0].name })">
          <v-list-tile-content >
            <v-list-tile-title>{{ route[0].name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view />
    </v-content>
    <v-footer color="blue-grey" class="white--text" app>
      <span>Vuetify</span>
      <v-spacer></v-spacer>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</div>
</template>

<script lang="ts" src="./app.ts" />
