<template>
    <section >
        <br>
        <br>
        <div class="container">
        <br>
            <!-- Team Leaders -->
            <h1 class="ourTeam title isSecondaryColor">Our Team</h1>
            <br>
             <div class="columns is-gapless is-centered">
                <div class="column has-text-centered is-4">
                    <nav class="level">
                        <div class="level-item has-text-centered">
                            <figure class='image is-128x128'><img src='../assets/img/team/rodrigo.jpg' class="imgClip"></figure>
                        </div>
                    </nav>
                    <h1 class="name isPrimaryColor">Rodrigo Queirós</h1>
                    <p class="responsible"> Front-End Leader</p>
                </div>
                <div class="column has-text-centered is-4">
                    <nav class="level">
                        <div class="level-item has-text-centered">
                            <figure class='image is-128x128'><img src='../assets/img/team/carlos.jpg' class="is-rounded"></figure>
                        </div>
                    </nav>
                    <h1 class="name isPrimaryColor">Carlos Guedes</h1>
                    <p class="responsible"> Team Leader</p>
                </div>
                <div class="column has-text-centered is-4">
                    <nav class="level">
                        <div class="level-item has-text-centered">
                            <figure class='image is-128x128'><img src='../assets/img/team/alvaro.png' class="imgClip"></figure>
                        </div>
                    </nav>
                    <h1 class="name isPrimaryColor">Álvaro Holstein</h1>
                    <p class="responsible"> Back-End Leader</p>
                </div>
            </div>
            <!-- Each Team -->
            <div class="columns is-gapless is-centered">
                <div class="column has-text-centered is-3">
                    <nav class="level">
                        <div class="level-item has-text-centered">
                            <figure class='image is-128x128'><img src='../assets/img/team/jorge.jpg' class="imgClipJorge"></figure>
                        </div>
                    </nav>
                    <h1 class="name isPrimaryColor">Jorge Coelho</h1>
                    <p class="responsible"> Front-End Dev</p>
                </div>
                <div class="column has-text-centered  is-3">
                    <nav class="level">
                        <div class="level-item has-text-centered">
                            <figure class='image is-128x128'><img src='../assets/img/team/fabio.png' class="imgClip"></figure>
                        </div>
                    </nav>
                    <h1 class="name isPrimaryColor">Fábio Carvalho</h1>
                    <p class="responsible"> Front-End Dev</p>
                </div>
                <div class="column has-text-centered is-3">
                   <nav class="level">
                        <div class="level-item has-text-centered">
                            <figure class='image is-128x128'><img src='../assets/img/team/ines.jpg' class="is-rounded"></figure>
                        </div>
                    </nav>
                    <h1 class="name isPrimaryColor">Inês Moreira</h1>
                    <p class="responsible"> Front-End Dev</p>
                </div>
                <div class="column has-text-centered is-3">
                   <nav class="level">
                        <div class="level-item has-text-centered">
                            <figure class='image is-128x128'><img src='../assets/img/team/mario.jpg' class="is-rounded"></figure>
                        </div>
                    </nav>
                    <h1 class="name isPrimaryColor">Mário Almeida</h1>
                    <p class="responsible"> Front-End Dev</p>
                </div>
            </div>
            <div class="columns is-gapless is-centered">
                <div class="column has-text-centered is-3">
                    <nav class="level">
                        <div class="level-item has-text-centered">
                            <figure class='image is-128x128'><img src='../assets/img/team/pedro.png' class="imgClip"></figure>
                        </div>
                    </nav>
                    <h1 class="name isPrimaryColor">Pedro Fragata</h1>
                    <p class="responsible"> Back-End Dev</p>
                </div>
                <div class="column has-text-centered  is-3">
                    <nav class="level">
                        <div class="level-item has-text-centered">
                            <figure class='image is-128x128'><img src='../assets/img/team/joao.png' class="is-rounded"></figure>
                        </div>
                    </nav>
                    <h1 class="name isPrimaryColor">João Campos</h1>
                    <p class="responsible"> Front-End Dev</p>
                </div>
                <div class="column has-text-centered is-3">
                   <nav class="level">
                        <div class="level-item has-text-centered">
                            <figure class='image is-128x128'><img src='../assets/img/team/sara.jpg' class="imgClip"></figure>
                        </div>
                    </nav>
                    <h1 class="name isPrimaryColor">Sara Rodrigues</h1>
                    <p class="responsible"> Front-End Dev</p>
                </div>
                <div class="column has-text-centered is-3">
                   <nav class="level">
                        <div class="level-item has-text-centered">
                            <figure class='image is-128x128'><img src='../assets/img/team/tiago.jpg' class="is-rounded"></figure>
                        </div>
                    </nav>
                    <h1 class="name isPrimaryColor">Tiago Fernandes</h1>
                    <p class="responsible"> Front-End Dev</p>
                </div>
            </div>
        </div>
        <br>
        <br>
    </section>
</template>
<style scoped>
section {
    background-color: #fff;
}
.name {
    font-size: 18px !important;
    font-weight: bold;
}
.responsible{
    color: #000000;
    font-size: 12px;
}
.ourTeam{
    text-align: center;
}
.imgClip{
    clip-path: circle(65px at center);
    position: relative;
    bottom: 1.5rem;
}
.imgClipJorge{
    clip-path: circle(65px at center);
    position: relative;
    bottom: 1.3rem;
}
</style>