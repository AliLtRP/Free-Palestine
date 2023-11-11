<template>
    <div class="parDiv">

        <div class="parentDiv">
            <div class="wrap">
                <div class="numStatus">
                    <p>11,078</p>
                    <p>25,000</p>
                    <p>1,100,000</p>
                </div>
            </div>
        </div>

        <div class="secDiv">
            <div class="">
                This is the number of Palestinian casualties, including fatalities, injuries, and displaced individuals.
                This is the result of actions taken by the occupying entity in the land of Palestine.
            </div>
        </div>

        <Mid />
    </div>
</template>


<script>
import Mid from './MidContentComp.vue'

export default {
    name: 'midCont',
    components: {
        Mid
    }
}
</script>

<style>
.parDiv {
    height: 70%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 10%;
}

.parentDiv {
    display: flex;
    justify-content: center;
}

.wrap {
    width: calc(100vw - 150px);
    height: auto;
    display: flex;
    justify-content: center;
    margin-top: 7%;
}

.numStatus {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
}

.secDiv {
    width: 90%;
    display: flex;
    justify-content: end;
}

.secDiv div:first-child {
    text-align: center;
    font-size: 20px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    color: white;
}


p {
    color: white;
    font-size: 30px;
    font-weight: bold;
    font-family: 'Nunito', sans-serif;
}

@media screen and (max-width: 320px) {
    .secDiv div:first-child {
        font-size: 16px;
    }

}
</style>