import moment from 'moment';
export const putData = (data) => {

   // getting the ladst object
   const total = data[data.length - 1];

   // getting infections
   const infections = [];
   data.map((item) => {
      infections.push(item.infections)
   });

   // getting deaths data
   const deaths = [];
   data.map((item) => {
      deaths.push(item.deaths)
   });
   deaths.push(infections[infections.length - 1]);

   // getting recoveries data
   const recoveries = [];
   data.map((item) => {
      recoveries.push(item.recoveries)
   });
   recoveries.push(infections[infections.length - 1]);

   // getting dates data
   // and feltering data by date
   const dates = [];
   const datesArray = [''];
   const grouped = [];
   data.map((item) => {
      if (moment(item.release_date).format('DD/MM') == dates[dates.length - 1]) {
         // console.log(moment(item.release_date).format('DD/MM') + '||||' + dates[dates.length - 1])
      } else {
         dates.push(moment(item.release_date).format('DD/MM'));

         const obj = {
            deaths: item.deaths,
            infections: item.infections,
            recoveries: item.recoveries,
            release_date: moment(item.release_date).format('DD/MM')
         }
         grouped.push(obj)
      }
   });

   console.log('grouped', grouped[grouped.length - 1])
   console.log('dates', data[data.length - 1])

   dates.map((item, index = index + 1) => {
      index % 5 == 0 ? (
         datesArray.push(item)
      )
         : ''
   })


   return {
      type: 'GET_DATA',
      data,
      total: total,
      infectionsArray: infections,
      deaths: deaths,
      recoveries: recoveries,
      dates: datesArray,
      grouped: grouped
   }

}