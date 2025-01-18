import BoxHeader from '@/components/BoxHeader';
import DashboardBox from '@/components/DashboardBox';
import { useGetKpisQuery } from '@/state/api';
import { useTheme } from '@mui/material';
import React, { useMemo } from 'react';
import {
   Area,
   AreaChart,
   CartesianGrid,
   ResponsiveContainer,
   Tooltip,
   XAxis,
   YAxis,
} from 'recharts';

type Props = {};

const Row1 = (_props: Props) => {
   const { palette } = useTheme();
   const { data } = useGetKpisQuery();
   console.log('🚀 ~ Row1 ~ data:', data);

   const revenueExpenses = useMemo(() => {
      if (!data || !data[0]?.monthlyData) return []; // Eğer veri yoksa boş array döndür

      return data[0].monthlyData.map(({ month, revenue, expenses }) => ({
         name: month.substring(0, 3),
         revenue,
         expenses,
      }));
   }, [data]);
   if (!revenueExpenses || revenueExpenses.length === 0) {
      return <div>Loading chart...</div>; // Boş veri varsa yükleme göstergesi
   }

   return (
      <>
         <DashboardBox gridArea="a">
            <BoxHeader
               title="Revenue and Expenses"
               subtitle="Top Line Represents Revenue, Bottom Line Represent Expenses"
               sideText="+4%"
            />
            <ResponsiveContainer width="100%" height="100%">
               <AreaChart
                  width={500}
                  height={400}
                  data={revenueExpenses}
                  margin={{
                     top: 15,
                     right: 25,
                     left: -10,
                     bottom: 60,
                  }}>
                  <defs>
                     <linearGradient
                        id="colorRevenue"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1">
                        <stop
                           offset="5%"
                           stopColor={palette.primary[300]}
                           stopOpacity={0.5}
                        />
                        <stop
                           offset="95%"
                           stopColor={palette.primary[300]}
                           stopOpacity={0}
                        />
                     </linearGradient>

                     <linearGradient
                        id="colorExpenses"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1">
                        <stop
                           offset="5%"
                           stopColor={palette.primary[300]}
                           stopOpacity={0.5}
                        />
                        <stop
                           offset="95%"
                           stopColor={palette.primary[300]}
                           stopOpacity={0}
                        />
                     </linearGradient>
                  </defs>
                  {/* For Background we can use CartesianGrid*/}
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}{' '}
                  <XAxis
                     dataKey="name"
                     tickLine={false}
                     style={{ fontSize: '10px' }}
                  />
                  <YAxis
                     tickLine={false}
                     axisLine={{ strokeWidth: '0' }}
                     style={{ fontSize: '10px' }}
                     domain={[8000, 23000]}
                  />
                  <Tooltip />
                  <Area
                     type="monotone"
                     dataKey="revenue"
                     dot={true}
                     stroke={palette.primary.main}
                     fillOpacity={1}
                     fill="url(#colorRevenue)"
                     isAnimationActive={true}
                     animationDuration={1500}
                  />
                  <Area
                     type="monotone"
                     dataKey="expenses"
                     dot={true}
                     stroke={palette.primary.main}
                     fillOpacity={1}
                     fill="url(#colorExpenses)"
                     isAnimationActive={true}
                     animationDuration={1500}
                  />
               </AreaChart>
            </ResponsiveContainer>
         </DashboardBox>

         <DashboardBox gridArea="b"></DashboardBox>
         <DashboardBox gridArea="c"></DashboardBox>
      </>
   );
};

export default Row1;
