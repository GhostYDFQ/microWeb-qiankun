<template>
    <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/vue">vue应用</router-link> |
        <router-link to="/react">react应用</router-link>
        <router-view />
        <div id="vue"></div>
        <div id="react"></div>
    </div>
</template>

<style>

</style>
