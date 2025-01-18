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
      return (
         data &&
         data[0].monthlyData.map(({ month, revenue, expenses }) => {
            return {
               name: month.substring(0, 3),
               revenue: revenue,
               expenses: expenses,
            };
         })
      );
   }, [data]);

   return (
      <>
         <DashboardBox gridArea="a">
            <ResponsiveContainer width="100%" height="100%">
               <AreaChart
                  width={500}
                  height={400}
                  data={revenueExpenses}
                  margin={{
                     top: 10,
                     right: 30,
                     left: 0,
                     bottom: 0,
                  }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                     type="monotone"
                     dataKey="revenue"
                     stroke={palette.primary.main}
                     fillOpacity={1}
                     fill="url(#colorRevenue)"
                  />
                  <Area
                     type="monotone"
                     dataKey="expenses"
                     stroke={palette.primary.main}
                     fillOpacity={1}
                     fill="url(#colorExpenses)"
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
