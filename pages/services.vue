<script setup lang="ts">

</script>

<template>
    <div class="navbar">
        <a><NuxtLink to="/">
            <span><h3>HOMEPAGE</h3></span>
        </NuxtLink></a>
    </div>
    <div class="description">
        <h1>OUR SERVICES</h1>
        <p>The Differenza Donna Centers Against Domestic Violence are the main instruments through which the association Differenza Donna prevents and fights gender-based violence.</p>
        <p>By 'fighting' we mean a whole host of activities that overall aim at leading women who have experienced gender-based violence to rediscover their identities, their values, and competencies, so as to find once again the will to build a new life.</p>
        <p>In our centers, women from any country, culture, and religion receive support and, if necessary, shelter. Our capital is the motivation, expertise, and experience of our professional workers. Our best investments are the projects of freedom we set up and make happen.</p>
        <p>Our centers are places of well-being because they are comfortable; because every woman is listened to with competence and attention; because all our guests can enjoy a number of services; because children are attended to with care; because friendships are born here that can last a lifetime; because women can exchange experiences and get to know each others' traditions, cultures, and religion; because it is always possible to bake a cake together… And because we throw a party for every birthday!</p>
        <p>We do not envision our centers as places that provide aid, because we are convinced that all forms of aid do not solve problems, but leave them unchanged, ready to reappear as soon as the help ceases. We aim instead at empowering all supported or sheltered women, giving them back the control over their own lives - lives that become enriched by the special experience of conquering their own self-sufficiency, a necessary step to project themselves into a free and independently chosen future. Women who are free to choose, who have a strong identity, who are capable of critically analyzing relationships, and are aware of their own potential, are an asset for society as a whole.</p>
        <hr color = "black", width = 75%>
    </div>
    <div class="services">
        <div>
            <a><NuxtLink to="/">
                <img id = "service" src = "~/assets/img/service-image.jpg" /><br>
                <span>SERVICE 1</span>
            </NuxtLink></a>
        </div>
        <div>
            <a><NuxtLink to="/">
                <img id = "service" src = "~/assets/img/service-image.jpg" /><br>
                <span>SERVICE 2</span>
            </NuxtLink></a>
        </div>
        <div>
            <a><NuxtLink to="/">
                <img id = "service" src = "~/assets/img/service-image.jpg" /><br>
                <span>SERVICE 3</span>
            </NuxtLink></a>
        </div>
        <div>
            <a><NuxtLink to="/">
                <img id = "service" src = "~/assets/img/service-image.jpg" /><br>
                <span>SERVICE 4</span>
            </NuxtLink></a>
        </div>
        <div>
            <a><NuxtLink to="/">
                <img id = "service" src = "~/assets/img/service-image.jpg" /><br>
                <span>SERVICE 5</span>
            </NuxtLink></a>
        </div>
        <div>
            <a><NuxtLink to="/">
                <img id = "service" src = "~/assets/img/service-image.jpg" /><br>
                <span>SERVICE 6</span>
            </NuxtLink></a>
        </div>
    </div>
</template>

<style scoped>
.navbar{
    text-align: center;
    background-color: bisque;
}
h1{
    text-align: center;
}
p {
    width: 75%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}
.description {
    margin-bottom: 15px;
}
.services {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 35px;
    row-gap: 30px;
    background-color: rgb(255, 255, 235);
    padding: 20px;
}
.services > div {
  background-color: rgb(255, 255, 255);
  text-align: center;
  padding: 20px 0;
  font-size: 2vw;
  width: auto;
}
span {
    color: black;
}
a:link, a:visited {
    text-decoration: none;
}
a:hover, a:active {
    text-decoration: underline;
    color: black;
}
#service {
    width: 50%;
    height: auto;
}
</style>