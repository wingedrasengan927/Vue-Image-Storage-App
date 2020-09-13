<template>
    <div class="drag-n-drop">
        <input 
        type="file"
        multiple
        accept="image/*"
        @change="uploadImages($event.target.files)">
        <span>Drag and Drop Image Here!</span>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'UploadForm',
    methods: {
        ...mapActions(['uploadImages'])
    }
}
</script>

<style scoped>
    .drag-n-drop {
        height: 30vh;
        border-radius: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1.5em;
        position: relative;
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
        font-family: 'Bebas Neue', cursive;
        font-size: 5em;

        color: white;
    }

    .drag-n-drop:hover {
        background: rgb(0,212,255);
        background: linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 35%, rgba(2,0,36,1) 100%);
        cursor: pointer;
    }

    input {
        width: 100%;
        height: 30vh;
        position: absolute;
        opacity: 0;
    }
</style>