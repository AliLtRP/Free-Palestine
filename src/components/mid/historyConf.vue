<template>
    <div class="wrapper">

        <div class="wrapp">
            <div class="left">
                <div class="a">
                    <div class="year">1946</div>
                    <div class="text">
                        The 1948 Arab–Israeli War, also known as the First Arab–Israeli War,
                        was the first in a series of armed conflicts between the State of
                        Israel and its Arab neighbors. It was fought between May 15, 1948,
                        the day after Israel declared its independence, and December 10,
                        1948, when the first armistice agreement was signed
                        <a href="https://en.wikipedia.org/wiki/1948_Arab-Israeli_War">readmore</a>
                    </div>
                </div>
                <div class="a">
                    <div class="year">1946</div>
                    <div class="text">
                        The war began with a surprise Israeli airstrike on Egyptian
                        airfields, which destroyed most of the Egyptian air force on the
                        ground. Israel then launched ground offensives into the Sinai
                        Peninsula, the West Bank, and the Golan Heights. The Arab armies
                        were caught off guard and unable to mount an effective defense.
                        <a href="https://en.wikipedia.org/wiki/1967_Six_Day_War">readmore</a>
                    </div>
                </div>
                <div class="a">
                    <div class="year">1946</div>
                    <div class="text">
                        The war was launched by Egypt and Syria in an attempt to regain the
                        territory that they had lost to Israel in the 1967 Six-Day War. The
                        Arab armies launched a coordinated surprise attack on Israel,
                        catching the Israeli Defense Forces (IDF) off guard.
                        <a href="https://en.wikipedia.org/wiki/Yom_Kippur_War">readmore</a>
                    </div>
                </div>
                <div class="a">
                    <div class="year">1946</div>
                    <div class="text">
                        The war began with an Israeli invasion of Lebanon. The stated goal
                        of the invasion was to remove the PLO from southern Lebanon and to
                        establish a friendly government in Beirut. The Israeli invasion was
                        successful in achieving its initial goals. The PLO was expelled from
                        southern Lebanon, and the Israelis established a friendly government
                        in Beirut. However, the war also had a number of unintended
                        consequences.
                        <a href="https://en.wikipedia.org/wiki/1982_Lebanon_War">readmore</a>
                    </div>
                </div>
                <div class="a">
                    <div class="year">1946</div>
                    <div class="text">
                        The Intifada was sparked by a visit by then-Israeli opposition
                        leader Ariel Sharon to the Temple Mount/Haram al-Sharif, a holy site
                        to both Jews and Muslims. Sharon's visit was seen as a provocation
                        by Palestinians, and it led to protests and clashes with Israeli
                        security forces. The violence quickly escalated
                        <a href="https://en.wikipedia.org/wiki/Second_Intifada">readmore</a>
                    </div>
                </div>
            </div>

            <div class="right">
                <div class="line">
                    <div class="cirline">
                        <div class="cir"></div>
                    </div>

                    <div class="cirline">
                        <div class="cir"></div>
                    </div>
                    <div class="cirline">
                        <div class="cir"></div>
                    </div>
                    <div class="cirline">
                        <div class="cir"></div>
                    </div>
                    <div class="cirline">
                        <div class="cir"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
.wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 10%;
}

.wrapp {
    width: 80vw;
    height: 100vh;
    /* background-color: aqua; */
    display: flex;
    justify-content: center;
}

.left {
    width: 99%;
    height: 100%;
    /* background-color: black; */
    display: flex;
    flex-direction: column;
}

.right {
    width: 10%;
    height: 100%;
    /* background-color: black; */
    display: flex;
    justify-content: center;
    align-items: center;
}

.cirline {
    /* width: 100em; */
    height: 30%;
    display: flex;
    justify-content: center;
}

.cir {
    width: 24px;
    height: 24px;
    border-radius: 100%;
    background-color: white;
}

.line {
    height: 100%;
    width: 4px;
    background-color: white;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
}

.a {
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.year {
    width: 100%;
    height: 25%;
    color: white;
    display: flex;
    justify-content: flex-end;
    align-items: start;
    font-size: 22px;
    position: relative;
    right: 10px;
}


.text {
    width: 100%;
    height: 75%;
    color: white;
    text-align: start;
    overflow: auto;
}


@media screen and (max-width: 320px) {

    .history {}


    .text {
        font-size: 10px;
    }

}

@media screen and (max-width: 414px) {

    .history {}


    .text {
        font-size: 14px;
        font-weight: bold;
        text-align: start;
    }

}
</style>