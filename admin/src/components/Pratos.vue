<template>
    <div class="container" >
      
        <div class="row" style="padding-top:10%;padding-bottom:10%;">
              
            <div class="col-sm-6" >
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
                
                    <button @click="handlerRevenues" type="submit" class="btn btn-success">Adicionar</button>
                </form>
            </div>
            <div class="col-sm-6" >
                <div class="form-group" >
                    <h4>Ingredientes</h4>
                    <button @click="handlerIngredientes" style="margin-bottom:10px;margin-top:10px" class="btn btn-dark">Adiconar Ingrediente</button>
                    <p>Você pode adicionar Quantos ingredientes desejar!</p>
                    <div v-if="ingredientes" >
                        <p v-for="(i, key) in ingredientes" :key="key"> <button @click="deleteIngrediente(i)" class="btn btn-default" >x</button> {{ i }} </p>
                    </div>        
                    <input type="text"  v-model="ingrediente" class="form-control i" placeholder="Ingrediente">     
                </div>
            </div>
        </div>
        <h1>Receitas</h1>
        <div class="row" style="padding-top:10%">
            <div v-for="(revenue,key) in revenues" :key="key" class="col-sm"  style="padding-bottom:5%">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" :src="`http://localhost:3333/api/revenue/image/${revenue.image}`" :alt="revenue.title">
                    <div class="card-body">
                        <h5 class="card-title">{{ revenue.title }}</h5>
                        <div style="border:1px solid #CCCCCC; padding:10px; margin:20px">    
                            <h6>Ingredientes</h6>
                            <p v-for="(i,k) in revenue.ingredients" :key="k" class="card-text">{{ i }}</p>
                        </div>    
                        <span>Preço</span>
                        <p class="card-text">{{ `R$ ${revenue.price}` }}</p>
                        <div style="display:flex">
                            <button @click="handlerDelete(revenue._id)" class="btn btn-danger" style="margin-right:10px">Excluir</button>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Modal from "@/components/ModalEditPrato.vue";
    export default{
        components:{
            Modal
        },
        data(){
            return{
                revenues:[],
                ingredientes:[],
                ingrediente:"",
                image:"",
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
            },

            async getRevenues(){
                const req = await fetch("http://localhost:3333/api/revenues",{
                    headers:{
                        "Authorization":localStorage.getItem("token")
                    }
                });
                
                this.$data.revenues = await req.json();            
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
                        headers:{
                            "Authorization":localStorage.getItem("token")
                        },
                        body:form
                    }
                );

                const res = await req.json();
                location.reload();
            },

            async handlerDelete(id){
                const req = await fetch(`http://localhost:3333/api/revenue/${id}`,{
                    headers:{
                        "Authorization":localStorage.getItem("token")
                    },
                    method:"DELETE"
                });

                this.$data.revenues = this.$data.revenues.filter((e)=>{
                    return e._id != id
                });

                const res = await req.json();
                console.log(res)
            },

            deleteIngrediente(i){
                if(this.$data.ingredientes.indexOf(this.$data.ingrediente) > -1){
                    this.$data.ingredientes = this.$data.ingredientes.filter(e =>{
                        return e != i;
                    });
                }

            }
        }
    }
</script>

<style>
.i{
    margin-bottom:10px
}
</style>
