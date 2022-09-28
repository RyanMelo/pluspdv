<template>
    <main class="p-5 bg-gradient-to-t from-[#606C88] to-[#3F4C6B] h-screen flex flex-col justify-center items-center">
        <div class="flex flex-col justify-center items-center">
            <img class="mb-10" src="../assets/PlusPDV_logo 1.png" alt="Logo Plus Pdv">
            <h2 class="text-white text-4xl font-semibold">Olá, seja</h2>
            <h2 class="text-white text-4xl font-semibold">bem-vindo.</h2>
            <p class="text-white mt-5 text-lg text-center">Antes de continuarmos, selecione uma de nossas unidades.</p>
        </div>
        
        <div v-for="loja in lojas" class="w-full">
            <router-link :to="{name: 'TabBar'}" class="bg-white flex p-5 justify-start items-center rounded-lg w-full mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-5"><path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" /></svg>
                <div>
                    <p class="font-semibold">{{loja.nomeLoja}}</p>
                    <p>{{loja.endereco}}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-auto"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" /></svg>
            </router-link>
        </div>
    </main>
</template>

<script setup>

    const lojas = [
        {
            nomeLoja: "Loja l - Dirceu",
            endereco: "Av. Joaquim Nelsom, 2137",
        },
        {
            nomeLoja: "Loja ll - Centro",
            endereco: "Rua Pires de castro, 2019",
        },
    ]
</script>
