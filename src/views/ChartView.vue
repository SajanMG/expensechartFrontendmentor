<template>
    <main>
        <div class="header">
            <div class="balance">
                <span>My balance</span>
                <strong>$921.48</strong>
            </div>
            <img src="../assets/images/logo.svg" alt="logo" class="logo">
        </div>

        <div class="chart">
            <div class="chart-header">
                <strong>Spending - Last 7 days</strong>
            </div>
            <div class="chart-body">
                <div class="week" v-for="dayData in barData" :key="dayData.day" @mouseenter="showCaption = dayData.day"
                    @mouseleave="showCaption = null">
                    <p class="caption" v-show="showCaption === dayData.day" style="display: none;">${{ dayData.amount }}</p>
                    <div :class="{ 'bar': true, 'highlighted': today === dayData.day }" :id="dayData.day"
                        :style="{ height: dayData.amount * 3 + 'px' }"></div>
                    <p class="days">{{ dayData.day }}</p>
                </div>
            </div>
            <div class="separator"></div>
            <div class="chart-footer">
                <div class="month">
                    <span>Total this month</span>
                    <strong>$478.33</strong>
                </div>
                <div class="percentage">
                    <strong>+2.4%</strong>
                    <span>from last month</span>
                </div>
            </div>
        </div>
        <div class="attribution" style="background-color: #fff;padding: 1rem;border-radius: 10px;margin-top: 1rem;">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="https://github.com/SajanMG">Sajan Gurung</a>.
        </div>
    </main>
</template>

<script>
export default {
    name: 'ChartView',
    data() {
        return {
            barData: [],
            showCaption: null,
            today: this.getToday(new Date()),
        }
    },
    mounted() {
        fetch('https://github.com/SajanMG/expensechartFrontendmentor/blob/548ba245815b0cfcd0c305d1d87c4858408016a7/db/db.json')
            .then(response => response.json())
            .then(data => {
                this.barData = data;
                console.log(this.barData);
            })
            .catch(error => {
                console.log("Error", error);
            });

    },

    methods: {
        getToday(date) {
            const weekDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
            return weekDays[date.getDay()]
        }
    }
}
</script>

<style scoped>
.bar.highlighted {
    background-color: var(--color-cyan);
}

.header {
    background-color: var(--color-soft-red);
    padding: 1rem 1.5rem;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
}

.logo {
    width: 60px;
}

.balance {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}

.balance span,
.balance strong {
    color: #fff;

}

.balance strong {
    font-size: 1.8rem;
}

.chart {
    background-color: #fff;
    padding: 1rem;
    border-radius: 10px;
    margin-top: 1rem;
}

.chart-header strong {
    color: var(--color-dark-brown);
    font-size: 1.7rem;
}

.chart-body {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: flex-end;
    justify-content: flex-end;
    text-align: center;
    margin-top: 3rem;
}

.week {
    display: flex;
    flex-direction: column;
    position: relative;
    cursor: pointer;
}

.days {
    color: var(--color-medium-brown);
    font-size: 0.8rem;
}

.bar {
    width: 3rem;
    border-radius: 5px;
    background-color: var(--color-soft-red);
}

.caption {
    background-color: var(--color-dark-brown);
    color: #fff;
    padding: 0.25rem;
    border-radius: 4px;
    position: absolute;
    top: -4rem;
}

.separator {
    height: 1px;
    background-color: var(--color-cream);
}

.chart-footer {
    display: flex;
    justify-content: space-between;
    padding-block: 1rem;
}

.month {
    display: flex;
    flex-direction: column;
    gap: .2rem;
}

.month span {
    color: var(--color-medium-brown);
    font-size: .9rem;
}

.month strong {
    font-size: 2.5rem;
}

.percentage {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 0px;
}

.percentage span {
    color: var(--color-medium-brown);
    font-size: .8rem;
}


@media screen and (max-width:375px) {
    .bar {
        width: 2rem;
    }

    .attribution {
        color: var(--color-dark-brown);
        font-size: .75rem;
    }
}
</style>