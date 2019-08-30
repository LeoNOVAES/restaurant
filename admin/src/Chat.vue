<style scoped>
.container-cards{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center

}
.card{
    margin:50px
}

.card-header{
    display:flex;
    flex-direction: row;
    justify-content: space-between
}
</style>
<template>
   <div class="chat">
        <Sidebar/>
        
        <div class="container" style="padding:5%">
            <h1>Pedidos</h1>  
            <div class="row container-cards" style="padding:10%" >
                <div class="col-sm-12">
                    <div class="card" style="width: 38rem;">
                        <div class="card-header">
                            <span>Usuario Nome</span>
                            <div>
                                <button class="btn btn-info" style="margin-right:10px">CHAT</button>
                                <button class="btn btn-danger">APAGAR</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div style="border:1px solid #cccccc; padding:10px">
                            <span>Itens do Pedido:</span>
                            <ul>
                                <li>teste</li>
                            </ul>
                            <div>
                               <p style="margin-top:20px; padding-top:20px; border-top:1px solid #dddddd">OBSERVAÇÃO: TESTETTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT</p>
                            </div>
                            <p style="margin-top:20px; padding-top:20px; text-align:center; border-top:1px solid #dddddd">Valor Total: R$ 200.00</p>
                            </div>
                            <p class="card-text">Clique no botão chat para conversar com cliente.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
export default{
    components:{
        Sidebar
    },
    data(){
        return {
            
        }
    },
    methods:{
    
    } 
}
</script>

