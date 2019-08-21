<style scoped>
.login{
    
    margin-top:10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column
}

body{
    background-color: #000000
}

</style>

<template >
   <div class="login">
        <div v-if="valid.length > 0" class="bg-danger" style="padding:20px; margin:20px; color:#ffffff"> {{ valid }} </div>
        <div class="card text-white bg-dark" style="width: 48rem;">
            <div class="card-body">
                <h5 class="card-title">LOGIN ADMIN</h5>
                <p class="card-text">Apenas Administradores do sistema</p>
                <form>
                    <div class="form-group">
                        <label for="user">Usuário</label>
                        <input type="text" v-model="user" class="form-control"  placeholder="Usuario">
                    </div>
                     <div class="form-group">
                        <label for="pass">Senha</label>
                        <input type="password" v-model="password" class="form-control" placeholder="Senha">
                    </div>
                    <button @click="handlerLogin" type="submit" class="btn btn-danger">Entrar</button>
                </form>
            </div>
        </div>
   </div>
</template>

<script>
export default{
    data(){
        return {
            user:"",
            password:"",
            valid:""
        }
    },
    methods:{
         async handlerLogin(){
            if(!this.$data.user || !this.$data.password ) return this.$data.valid = "todos os campos devem estar preenchidos";

            const data = {
                user:this.$data.user,
                password:this.$data.password
            }

            const req = await fetch(`${this.$urlapi}/api/user/autentic`,{
                method:"POST",
                 headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)
            });

            const res = await req.json();
            localStorage.setItem("token",res.token)
            console.log(res)
            location.href = "#/home";
         }
    }
}
</script>

