
import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import dynamic from "next/dynamic";
import BaseCard from "../baseCard/BaseCard";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function BannerBar() 
{
    
   const series=[{
        name: "Эр",
        data: [44, 55, 41, 64, 22, 43, 21]
      },{
        name: "Эм",
        data: [53, 32, 33, 52, 13, 44, 32]
      }];

    const options={

        colors: ["#228FD6", "#D168B9"],
        chart: {
          type: 'bar',
          height: 430
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'top',
            },
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        tooltip: {
          shared: true,
          intersect: false
        },
        xaxis: {
            // ,"50-54","55-59","60-64","65+"
          categories: ["15-19", "20-24", "25-29", "30-34", "35-39", "40-44", "45-49"],
        },
      };

    return ( 
        <BaseCard title="Сар бүрийн статистик тайлан">
        <Chart
         options={options} 
         series={series} 
         type="bar" 
         height={430} />
        </BaseCard>
     );
}

export default BannerBar;