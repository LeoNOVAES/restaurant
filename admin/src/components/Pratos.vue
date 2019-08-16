<template>
    <div class="container" >
      
        <div class="row">
              
            <div class="col-sm-6" style="padding-top:10%;">
                <h1 > Receitas </h1>
                <form enctype="multipart/form-data">
                    <div class="custom-file">
                        <input type="file" @change="insertFilePrivate" ref="f" class="custom-file-input" id="customFile">
                        <label class="custom-file-label" for="customFile">Add Fotos/Videos (Públicos)</label>
                    </div>
                    <div class="form-group" >
                        <input type="text" v-model="title" class="form-control i" placeholder="Titulo">
                        <input type="text" v-model="category" class="form-control i" placeholder="Categoria">
                        <input type="number" v-model="price" class="form-control i" placeholder="Preço">
                    </div>
                
                    <button @click="handlerRevenues" style="margin-top:20px" class="btn btn-success">Adicionar</button>
                </form>
            </div>
            <div class="col-sm-6" style="padding-top:14.5%;">
                <div class="form-group" >
                    <h4>Ingredientes</h4>
                    <button @click="handlerIngredientes" style="margin-bottom:10px;margin-top:10px" class="btn btn-dark">Adiconar Ingrediente</button>
                    <p>Você pode adicionar Quantos ingredientes desejar!</p>
                    <div v-if="ingredientes" >
                        <p v-for="(i, key) in ingredientes" :key="key"> {{ i }} </p>
                    </div>        
                    <input type="text"  v-model="ingrediente" class="form-control i" placeholder="Ingrediente">     
                </div>
            </div>
        </div>
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
                revenues:[],
                ingredientes:[],
                ingrediente:"",
                title:"",
                category:"",
                price:"",
                file:""
            }
        },
        mounted(){
            this.getRevenues();
        },
        methods:{
            insertFilePrivate(){
                this.$data.file = this.$refs.f.files[0];
            },

            async handlerIngredientes(){
                if(this.$data.ingredientes.indexOf(this.$data.ingrediente) > -1){
                   return; 
                }

                this.$data.ingredientes.push(this.$data.ingrediente);
                console.log(this.$data.ingredientes)
            },
            async getRevenues(){
                const req = await fetch("http://localhost:3333/api/revenues");
                
                this.$data.revenues = await req.json();
                console.log(this.$data.revenues)
            },

            async handlerRevenues(){
                let form = new FormData();

                form.append("title",this.$data.title);
                
                this.$data.ingredientes.map((e)=>{
                    form.append("ingredients", e);
                });

                form.append("image", this.$data.file);
                form.append("category", this.$data.category);
                form.append("price", this.$data.price);

                const req = await fetch("http://localhost:3333/api/revenue",{
                    method:"POST",
                    body:form
                }
                );

                const res = await req.json();
                console.log(res);
            }
        }
    }
</script>

<style>
.i{
    margin-bottom:10px
}
</style>
