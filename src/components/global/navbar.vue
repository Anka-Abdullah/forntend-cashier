<template>
    <div class="fixed-top" :style="width">
        <nav class="navbar bg-white p-0 px-2 shadow-sm" id="navhome">
             <a :href="link">
                     <i :class="icon" style="font-size: 30px;"></i>
             </a>
             <h3 class="mx-auto m-0">{{ title }}</h3>
             <a :href="linkB" class="mr-2">
                     <i :class="iconB" style="font-size: 30px;"></i>
             </a>
         </nav>
    </div>
</template>
<script>
export default {
  props: ['width', 'link', 'icon', 'title', 'linkB', 'iconB']
  //   props: {
  //     width: String,
  //     link: String,
  //     icon: String,
  //     title: String,
  //     linkB: String,
  //     iconB: String

//   }
}
</script>
