<template>
    <div class="footer">
        <p>Elaborado por Sandro Marcelo Peirano Gozalvez</p>
        <div class="social">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-linkedin"></i>
            <i class="fab fa-github-square"></i>
            <i class="fab fa-steam-square"></i>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .footer {
        background-color: #6d6875;
        height: 100px;
        display: flex;
        color: #ffcdb2;
        justify-content: space-between;
        align-items: flex-end;

    }

    p, .social {
        text-align: left;
        margin: 1rem
    }

    .social i {
        margin: 0 0.3rem;
        font-size: 1.4rem;
        cursor: pointer;
    }
    
</style>