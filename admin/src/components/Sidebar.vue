<template>
 <div class="wrapper">
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>Painel ADMIN</h3>
            </div>  
            <ul class="list-unstyled components">
                <p>MENU</p>
                 
                <li>
                    <a href="#/home">Home</a>
                </li>
                <li>
                    <a href="#/chat">Mensagens</a>
                </li>
                <li>
                    <a href="#" @click="handlerLogoff">Sair</a>
                </li>
            </ul>
        </nav>
    </div>    
</template>

<script>
    export default{
        methods:{
            handlerLogoff(){
                localStorage.clear();
                window.location.reload();
            }
        }
    }
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";


body {
    font-family: 'Poppins', sans-serif;
    background: #fafafa;
}

p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.7em;
    color: #999;
}

a, a:hover, a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}

#sidebar {
    /* don't forget to add all the previously mentioned styles here too */
    background: #000000;
    color: #fff;
    transition: all 0.3s;
}

#sidebar .sidebar-header {
    padding: 20px;
    background: #000000;
}

#sidebar ul.components {
    padding: 20px 0;
}

#sidebar ul p {
    color: #fff;
    padding: 10px;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}
#sidebar ul li a:hover {
    color: #000000;
    background: #fff;
}



.wrapper{
    flex:1;
    width: 100%;
    align-items: stretch;   
    max-height: 50px !important;
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
}

#sidebar.active {
    margin-left: -250px;
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
    min-height: 110vh;
}

a[data-toggle="collapse"] {
    position: relative;
}

.dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}

@media (max-width: 768px) {
    #sidebar {
        margin-left: -250px;
    }
    #sidebar.active {
        margin-left: 0;
    }
}

.wrapper {
    display: flex;
    width: 100%;
    max-height: 50px !important;
}


.wrapper {
    display: flex;
    position: absolute;
    align-items: stretch;
    perspective: 1500px; 
    
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
    background: #DC143C	;
    color: #fff;
    transition: all 0.6s cubic-bezier(0.945, 0.020, 0.270, 0.665);
    min-height: 1750px;
    max-height: 10500px;
    transform-origin: center left; /* Set the transformed position of sidebar to center left side. */
}

</style>
