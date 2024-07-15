import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const CryptoChart = () => {
  const [activeLabel, setActiveLabel]=useState("Day")

  const handleActiveLabel=(value)=>{
        setActiveLabel(value);
  }

  const timeSeries = [
    {
        keyword: "DIGITAL_CURRENCY_DAILY",
        key: "Time Series (Daily)",
        label: "Day",
        value: 1,
    },
    {
        keyword: "DIGITAL_CURRENCY WEEKLY",
        key: "Weekly Time Series",
        label: "Week",
        value: 7,
    },
    {
        keyword: "DIGITAL_CURRENCY _MONTHLY",
        key: "Monthly Time Series",
        label: "Month" ,
        value: 30,
    }

  ]

  const series = [
    {
        data: [
            [1718391678923, 89957.4368350033],
            [1718395377015, 90014.4373254156],
            [1718399336161, 90500.6102909419],
            [1718402450637, 91093.7405374173],
            [1718406527537, 90652.6977513572],
            [1718409614076, 90768.5338175007],
            [1718413734915, 91016.5997982582],
            [1718417021292, 90836.1869725513],
            [1718420927400, 91101.0975283051],
            [1718424506200, 91091.526470505],
            [1718427968467, 91048.7224624125],
            [1718431699839, 91146.9668881833],
            [1718435219802, 90936.8572644157],
            [1718438906287, 90901.1431484739],
            [1718442568022, 91072.6564068071],
            [1718445722521, 91000.6229399699],
            [1718449623652, 91129.2590478107],
            [1718453013010, 91154.3325016291],
            [1718456692868, 91192.6143442022],
            [1718460075519, 91092.8539541182],
            [1718463893745, 91021.5541164665],
            [1718467780720, 91115.3150437417],
            [1718470827387, 91022.3014729778],
            [1718474958671, 90944.1214022806],
            [1718478020127, 90915.648942973],
            [1718481645745, 90950.9391765684],
            [1718485464827, 90811.9777112835],
            [1718489381342, 90877.2391430659],
            [1718492867540, 91037.8152104202],
            [1718496131563, 91031.0921539553],
            [1718499769410, 90934.3019409031],
            [1718503423597, 90948.291160449],
            [1718506998014, 90904.6822968086],
            [1718510577678, 90911.1364923881],
            [1718514064569, 90939.2070075706],
            [1718517765255, 91045.2381081849],
            [1718521328403, 91148.2773478784],
            [1718525058364, 91052.9042012513],
            [1718528669666, 91086.4338201092],
            [1718532115524, 91243.0546807304],
            [1718535686806, 91694.864749055],
            [1718539417314, 91410.7029619798]
        ],
    },
  ]

  const options = {
    chart:{
        id:"area-datetime",
        type:"area",
        height:350,
        zoom:{
            autoScaleYaxis:true
        },
    },
    dataLabels:{
        enabled:false
    },
    xaxis:{
        type:"datetime",
        tickAmount:6

    },
    markers:{
        colors:["#fff"],
        strokeColor:"#fff",
        size:0,
        strokeWidth:1,
        style:"hollow"
    },
    tooltip:{
        theme:"dark"
    },
    fill:{
        type:"gradient",
        gradient:{
            shadeIntensity:1, 
            opacityFrom:0.8,
            opacityTo:0.9,
            stops:[0,100]
        }
    },
    grid:{
        borderColor:"#47535E",
        strokeDashArray:4,
        show:true
    }
  }
  return (
    <div>
      <div className='flex justify-start pl-41 space-x-4'>
        {timeSeries.map((item) => (
          <Button
            variant={activeLabel === item.label ? "default" : "outline"}
            onClick={() => handleActiveLabel(item.label)}
            key={item.label}>
            {item.label}
          </Button>
        ))}
      </div>
      <div id="chart-timelines">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={650}
        />
      </div>
    </div>
  )
}

export default CryptoChart