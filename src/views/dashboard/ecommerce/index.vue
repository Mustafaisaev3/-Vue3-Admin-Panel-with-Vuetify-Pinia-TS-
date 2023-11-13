<template>
  <v-row>
    <!-- Welcome Card -->
    <v-col cols="12" lg="8">
        <WelcomeCard/>
    </v-col> 

    <!-- Payments -->
    <v-col cols="12" lg="2" sm="6">  
        <Payments/>
    </v-col>  

    <!-- Products Sold -->
    <v-col cols="12" lg="2" sm="6">  
        <ProductSold/>
    </v-col> 

    <!-- RevenueUpdates -->
    <v-col cols="12" lg="4" sm="6">  
        <RevenueUpdates/>
    </v-col>

    <!-- Sales Overview -->
    <v-col cols="12" lg="4" sm="6">  
        <SalesOverview/>
    </v-col>

    <v-col cols="12" lg="4" sm="6"> 
        <v-row>
            <v-col cols="12" sm="6">
                <!-- Total Earning -->
                <TotalEarning/>
            </v-col>
            <v-col cols="12" sm="6">
                <!-- Sales profit -->
                <SalesProfit/>
            </v-col>
        </v-row>
        <!-- Monthly Earning -->
        <MonthlyEarnings/>
    </v-col> 

    <!-- Weekly Stats-->
    <v-col cols="12" lg="4" sm="6">
        <WeeklyStats/>
    </v-col> 

    <!-- Yearly Stats-->
    <v-col cols="12" lg="4" md="6">
        <YearlySales/>
    </v-col>

    <!-- Payment Gateways-->
    <v-col cols="12" lg="4" md="6">
        <PaymentGateways/>
    </v-col>
  </v-row>
</template>

<script setup>
import WelcomeCard from '@/components/dashboards/ecommerce/WelcomeCard.vue'
import Payments from '@/components/dashboards/ecommerce/Payments.vue'
import ProductSold from '@/components/dashboards/ecommerce/ProductSold.vue'
import RevenueUpdates from '@/components/dashboards/ecommerce/RevenueUpdates.vue'
import SalesOverview from '@/components/dashboards/ecommerce/SalesOverview.vue'
import TotalEarning from '@/components/dashboards/ecommerce/TotalEarning.vue'
import SalesProfit from '@/components/dashboards/ecommerce/SalesProfit.vue'
import MonthlyEarnings from '@/components/dashboards/ecommerce/MonthlyEarnings.vue'
import WeeklyStats from '@/components/dashboards/ecommerce/WeeklyStats.vue'
import YearlySales from '@/components/dashboards/ecommerce/YearlySales.vue'
import PaymentGateways from '@/components/dashboards/ecommerce/PaymentGateways.vue'

</script>

<style>

</style>