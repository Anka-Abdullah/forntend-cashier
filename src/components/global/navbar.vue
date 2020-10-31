<template>
    <div class="fixed-top" :style="width">
        <nav class="navbar bg-white p-0 px-2 shadow-sm" id="navhome">
             <button>
                 <router-link :to="link" >
                     <i :class="icon" style="font-size: 30px;"></i>
                 </router-link>
             </button>
             <h3 class="mx-auto m-0">{{ title }}</h3>
             <button class="mr-2">
                 <router-link :to="linkB">
                     <i :class="iconB" style="font-size: 30px;"></i>
                 </router-link>
             </button>
         </nav>
    </div>
</template>
<script>
export default {
  props: ['width', 'link', 'icon', 'title', 'linkB', 'iconB', 'additional']
}
</script>
