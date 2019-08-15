<template>
    <div class="container" >
        <h1 style="padding-top:10%; padding-bottom:10%"> Receitas </h1>
        <div class="row">
            <div v-for="(revenue,key) in revenues" :key="key" class="col-sm"  style="padding-bottom:5%">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top"  alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{ revenue.title }}</h5>
                        <p v-for="(i,k) in revenue.ingredients" :key="k" class="card-text">{{ i }}</p>
                        <p class="card-text">{{ revenue.price }}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                revenues:[]
            }
        },
        mounted(){
            this.handlerRevenues();
        },
        methods:{
            async handlerRevenues(){
                const req = await fetch("http://localhost:3333/api/revenues");
                
                this.$data.revenues = await req.json();
                console.log(this.$data.revenues)
            }
        }
    }
</script>

<style>
    
</style>
