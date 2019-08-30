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
        <div class="container" style="padding:5%">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-primary">Cadastre-se</button>
                </form>
            </div>
    </div>
</template>

<script>
import Fire from "firebase-admin";
export default{
    components:{
        Fire
    },
    data(){
        return {
            
        }
    },
    mounted(){
        this.initialize();
        this.handlerCadastro();
    },
    methods:{
        initialize(){
             const firebaseConfig = {
                apiKey: "AIzaSyDqpU9dGzgD-2GtEFPPex6Wf-8AArWq1TU",
                authDomain: "restaurante-77daf.firebaseapp.com",
                databaseURL: "https://restaurante-77daf.firebaseio.com",
                projectId: "restaurante-77daf",
                storageBucket: "",
                messagingSenderId: "304746556270",
                appId: "1:304746556270:web:06d8e27cfaf4e62e"
            };
            // Initialize Firebase
            Fire.initializeApp(firebaseConfig);
        },

        handlerCadastro(){
            Fire
            .database()
            .ref("pedido/usuario")
            .on('value', (snapshot)=>{
                console.log(snapshot.val())
            });
        }
    } 
}
</script>

