<template>
    <v-card elevation="10">
        <v-card-item>
            <v-avatar class="rounded-md bg-lightprimary text-primary">
                <img src="@/assets/images/svgs/icon-bars.svg" alt="icon" />
            </v-avatar>
            <div class="my-5">
                <apexchart type="area" height="25" :options="areachartOptions" :series="areaChart.series"> </apexchart>
            </div>
            <div>
                <div class="d-flex">
                    <h4 class="text-h4 ">24%</h4>
                    <div class="ml-1">
                        <ArrowUpRightIcon stroke-width="1.5" size="18" class="text-success" />
                    </div>
                </div>
                <div class="text-subtitle-1 textPrimary mt-1">Growth</div>
            </div>

        </v-card-item>
    </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { BLUE_THEME } from '@/theme/LightTheme';

/* Chart */
const areachartOptions = computed(() => {
    return {
        chart: {
            type: 'area',
            height: 25,
            fontFamily: `inherit`,
            foreColor: '#a1aab2',
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            },
            group: 'sparklines'
        },
        colors: [BLUE_THEME.colors.secondary],
        stroke: {
            curve: 'straight',
            width: 2
        },
        fill: {
            type: 'solid',
            opacity: 0.05
        },
        markers: {
            size: 0
        },
        tooltip: {
            theme: 'dark',
            x: {
                show: false
            }
        }
    };
});

const areaChart = {
    series: [
        {
            name: '',
            data: [0,10,10,10,35,45,30,30,30,50,52,30,25,45,50,80,60,65]
        }
    ]
};
</script>
