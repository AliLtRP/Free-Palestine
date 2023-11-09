<template>
    <div class="history">

        <div class="vertical-line">

            <div class="wrap-cont">
                <div class="year-cir">
                    <div class="year">1946</div>
                    <div class="cir"></div>
                </div>

                <div class="text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati tempora vitae, architecto ad
                    adipisci ut nobis? Alias aliquam vero et similique repudiandae, eum nulla impedit dicta id,
                    exercitationem voluptatibus amet!
                </div>
            </div>

            <div class="wrap-cont">
                <div class="year-cir">
                    <div class="year">1946</div>
                    <div class="cir"></div>
                </div>

                <div class="text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati tempora vitae, architecto ad
                    adipisci ut nobis? Alias aliquam vero et similique repudiandae, eum nulla impedit dicta id,
                    exercitationem voluptatibus amet!
                </div>
            </div>

            <div class="wrap-cont">
                <div class="year-cir">
                    <div class="year">1946</div>
                    <div class="cir"></div>
                </div>

                <div class="text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati tempora vitae, architecto ad
                    adipisci ut nobis? Alias aliquam vero et similique repudiandae, eum nulla impedit dicta id,
                    exercitationem voluptatibus amet!
                </div>
            </div>

            <div class="wrap-cont">
                <div class="year-cir">
                    <div class="year">1946</div>
                    <div class="cir"></div>
                </div>

                <div class="text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati tempora vitae, architecto ad
                    adipisci ut nobis? Alias aliquam vero et similique repudiandae, eum nulla impedit dicta id,
                    exercitationem voluptatibus amet!
                </div>
            </div>


            <div class="wrap-cont">
                <div class="year-cir">
                    <div class="year">1946</div>
                    <div class="cir"></div>
                </div>

                <div class="text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati tempora vitae, architecto ad
                    adipisci ut nobis? Alias aliquam vero et similique repudiandae, eum nulla impedit dicta id,
                    exercitationem voluptatibus amet!
                </div>
            </div>

        </div>

    </div>
</template>

<script>

</script>

<style>
.wrap-cont {
    width: 100vw;
    height: auto;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    gap: 10px;
}

.text {
    width: 81%;
    display: flex;
    align-items: center;
    position: relative;
    color: white;
    font-weight: normal;
    font-size: 20px;
    font-family: 'Nunito', sans-serif;
}

.year-cir {
    width: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -10px;
    transform: translateX(9px);
}

.year {
    color: white;
    font-size: 22px;
    font-weight: bold;
}

.history {
    width: 79%;
    margin-left: 10%;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: start;
}


.vertical-line {
    height: 700px;
    width: 2px;
    margin-bottom: 100px;
    border-radius: 30px 30px 30px 30px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: end;
    gap: 120px;
    background-color: white;
}

.cir {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: white;
    position: relative;
}
</style>