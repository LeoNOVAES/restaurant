<template>
   <div>
        <div class="">
            <Sidebar/>
        </div>
        <div class="receitas">
            <Pratos/>
        </div>
   </div>
</template>

<script>
    import Sidebar from "@/components/Sidebar";
    import  Pratos from "@/components/Pratos";

    export default{
        components:{
            Sidebar,
            Pratos
        }
    }
</script>

<style>

.receitas{
    flex:1;
    justify-content: "center";
    align-items: "center";
    align-content: center
}


</style>
