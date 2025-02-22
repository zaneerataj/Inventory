// import React from 'react';
// import Plot from 'react-plotly.js';

// // Define any necessary types (if any specific to your data, but Plotly handles this internally)
// interface MyPlotlyChartProps {
//   // Define any props if needed, or leave empty if not used
// }

// // const LineChart: React.FC = () => {
// //   return (
// //     <Plot
// //       data={[
// //         {
// //           x: [1, 2, 3, 4],
// //           y: [10, 15, 13, 17],
// //           type: 'scatter',
// //           mode: 'lines+markers',
// //           marker: { color: 'red' },
// //         },
// //       ]}
// //       layout={{ width: 720, height: 440, title: 'Line Chart' }}
// //     />
// //   );
// // };

// // const BarChart: React.FC = () => {
// //     return (
// //       <Plot
// //         data={[
// //           {
// //             x: ['A', 'B', 'C', 'D'],
// //             y: [20, 14, 23, 25],
// //             type: 'bar',
// //           },
// //         ]}
// //         layout={{ width: 720, height: 440, title: 'Bar Chart' }}
// //       />
// //     );
// //   };

// //   const PieChart: React.FC = () => {
// //     return (
// //       <Plot
// //         data={[
// //           {
// //             labels: ['A', 'B', 'C', 'D'],
// //             values: [20, 14, 23, 25],
// //             type: 'pie',
// //           },
// //         ]}
// //         layout={{ width: 720, height: 440, title: 'Pie Chart' }}
// //       />
// //     );
// //   };

// //   const ScatterPlot: React.FC = () => {
// //     return (
// //       <Plot
// //         data={[
// //           {
// //             x: [1, 2, 3, 4],
// //             y: [10, 15, 13, 17],
// //             mode: 'markers',
// //             type: 'scatter',
// //             marker: { size: 12, color: 'blue' },
// //           },
// //         ]}
// //         layout={{ width: 720, height: 440, title: 'Scatter Plot' }}
// //       />
// //     );
// //   };

// //   const Histogram: React.FC = () => {
// //     return (
// //       <Plot
// //         data={[
// //           {
// //             x: [1, 2, 2, 3, 3, 3, 4, 4, 4, 4],
// //             type: 'histogram',
// //           },
// //         ]}
// //         layout={{ width: 720, height: 440, title: 'Histogram' }}
// //       />
// //     );
// //   };

// //   const Heatmap: React.FC = () => {
// //     return (
// //       <Plot
// //         data={[
// //           {
// //             z: [
// //               [1, 20, 30],
// //               [20, 1, 60],
// //               [30, 60, 1],
// //             ],
// //             type: 'heatmap',
// //           },
// //         ]}
// //         layout={{ width: 720, height: 440, title: 'Heatmap' }}
// //       />
// //     );
// //   };

// //   const BoxPlot: React.FC = () => {
// //     return (
// //       <Plot
// //         data={[
// //           {
// //             y: [1, 3, 5, 7, 9],
// //             type: 'box',
// //           },
// //         ]}
// //         layout={{ width: 720, height: 440, title: 'Box Plot' }}
// //       />
// //     );
// //   };

// //   const SurfacePlot: React.FC = () => {
// //     return (
// //       <Plot
// //         data={[
// //           {
// //             z: [
// //               [1, 2, 3],
// //               [4, 5, 6],
// //               [7, 8, 9],
// //             ],
// //             type: 'surface',
// //           },
// //         ]}
// //         layout={{ width: 720, height: 440, title: '3D Surface Plot' }}
// //       />
// //     );
// //   };

// //   const BubbleChart: React.FC = () => {
// //     return (
// //       <Plot
// //         data={[
// //           {
// //             x: [1, 2, 3, 4],
// //             y: [10, 15, 13, 17],
// //             mode: 'markers',
// //             type: 'scatter',
// //             marker: {
// //               size: [40, 60, 80, 100],
// //               color: [10, 20, 30, 40],
// //             },
// //           },
// //         ]}
// //         layout={{ width: 720, height: 440, title: 'Bubble Chart' }}
// //       />
// //     );
// //   };

// //   const RadarChart: React.FC = () => {
// //     return (
// //       <Plot
// //         data={[
// //           {
// //             r: [10, 20, 30, 40, 50],
// //             theta: ['A', 'B', 'C', 'D', 'E'],
// //             fill: 'toself',
// //             type: 'scatterpolar',
// //           },
// //         ]}
// //         layout={{ width: 720, height: 440, title: 'Radar Chart' }}
// //       />
// //     );
// //   };

// const LineChart: React.FC = () => {
//   return (
//     <Plot
//       data={[
//         {
//           x: [1, 2, 3, 4],
//           y: [10, 15, 13, 17],
//           type: 'scatter',
//           mode: 'lines+markers',
//           name: 'Series 1',
//           marker: { color: 'red' },
//         },
//         {
//           x: [1, 2, 3, 4],
//           y: [16, 5, 11, 9],
//           type: 'scatter',
//           mode: 'lines+markers',
//           name: 'Series 2',
//           marker: { color: 'blue' },
//         },
//       ]}
//       layout={{
//         width: 720,
//         height: 440,
//         title: 'Line Chart with Multiple Lines',
//         xaxis: { title: 'X Axis' },
//         yaxis: { title: 'Y Axis' },
//       }}
//       config={{ responsive: true }}
//     />
//   );
// };

// const BarChart: React.FC = () => {
//   return (
//     <Plot
//       data={[
//         {
//           x: ['A', 'B', 'C', 'D'],
//           y: [20, 14, 23, 25],
//           type: 'bar',
//           name: 'Group 1',
//           marker: { color: 'cyan' },
//         },
//         {
//           x: ['A', 'B', 'C', 'D'],
//           y: [12, 18, 29, 22],
//           type: 'bar',
//           name: 'Group 2',
//           marker: { color: 'magenta' },
//         },
//       ]}
//       layout={{
//         width: 720,
//         height: 440,
//         title: 'Grouped Bar Chart',
//         barmode: 'group',
//         xaxis: { title: 'Categories' },
//         yaxis: { title: 'Values' },
//       }}
//       config={{ responsive: true }}
//     />
//   );
// };

// const PieChart: React.FC = () => {
//   return (
//     <Plot
//       data={[
//         {
//           labels: ['A', 'B', 'C', 'D'],
//           values: [20, 14, 23, 25],
//           type: 'pie',
//           textinfo: 'label+percent',
//           insidetextorientation: 'radial',
//         },
//       ]}
//       layout={{
//         width: 720,
//         height: 440,
//         title: 'Pie Chart with Percentages',
//       }}
//       config={{ responsive: true }}
//     />
//   );
// };

// const ScatterPlot: React.FC = () => {
//   return (
//     <Plot
//       data={[
//         {
//           x: [1, 2, 3, 4],
//           y: [10, 15, 13, 17],
//           // mode: 'markers+text',
//           type: 'scatter',
//           text: ['A', 'B', 'C', 'D'],
//           textposition: 'top center',
//           marker: {
//             size: [40, 60, 80, 100],
//             color: ['red', 'blue', 'green', 'purple'],
//             line: { width: 2, color: 'black' },
//           },
//         },
//       ]}
//       layout={{
//         width: 720,
//         height: 440,
//         title: 'Scatter Plot with Annotations',
//         xaxis: { title: 'X Axis' },
//         yaxis: { title: 'Y Axis' },
//       }}
//       config={{ responsive: true }}
//     />
//   );
// };

// const Histogram: React.FC = () => {
//   return (
//     <Plot
//       data={[
//         {
//           x: [1, 2, 2, 3, 3, 3, 4, 4, 4, 4],
//           type: 'histogram',
//           name: 'Dataset 1',
//           marker: { color: 'rgba(0,100,80,0.7)' },
//         },
//         {
//           x: [1, 2, 2, 2, 3, 4, 4, 4, 5, 5],
//           type: 'histogram',
//           name: 'Dataset 2',
//           marker: { color: 'rgba(255,0,0,0.7)' },
//         },
//       ]}
//       layout={{
//         width: 720,
//         height: 440,
//         title: 'Histogram with Multiple Datasets',
//         barmode: 'overlay',
//         xaxis: { title: 'Bins' },
//         yaxis: { title: 'Frequency' },
//       }}
//       config={{ responsive: true }}
//     />
//   );
// };

// const Heatmap: React.FC = () => {
//   return (
//     <Plot
//       data={[
//         {
//           z: [
//             [1, 20, 30],
//             [20, 1, 60],
//             [30, 60, 1],
//           ],
//           type: 'heatmap',
//           colorscale: 'Viridis',
//           colorbar: { title: 'Intensity' },
//         },
//       ]}
//       layout={{
//         width: 720,
//         height: 440,
//         title: 'Heatmap with Custom Colorscale',
//         xaxis: { title: 'X Axis' },
//         yaxis: { title: 'Y Axis' },
//       }}
//       config={{ responsive: true }}
//     />
//   );
// };

// const BoxPlot: React.FC = () => {
//   return (
//     <Plot
//       data={[
//         {
//           y: [1, 3, 5, 7, 9],
//           type: 'box',
//           boxmean: 'sd',
//           marker: { color: 'orange' },
//           line: { width: 2 },
//         },
//       ]}
//       layout={{
//         width: 720,
//         height: 440,
//         title: 'Box Plot with Custom Whiskers',
//         yaxis: { title: 'Values' },
//       }}
//       config={{ responsive: true }}
//     />
//   );
// };

// const SurfacePlot: React.FC = () => {
//   return (
//     <Plot
//       data={[
//         {
//           z: [
//             [1, 2, 3],
//             [4, 5, 6],
//             [7, 8, 9],
//           ],
//           type: 'surface',
//           colorscale: 'Jet',
//           // lighting: {
//           //   ambient: 0.5,
//           //   diffuse: 0.5,
//           //   specular: 0.5,
//           //   roughness: 0.5,
//           // },
//         },
//       ]}
//       layout={{
//         width: 720,
//         height: 440,
//         title: '3D Surface Plot with Custom Lighting',
//       }}
//       config={{ responsive: true }}
//     />
//   );
// };

// const BubbleChart: React.FC = () => {
//   return (
//     <Plot
//       data={[
//         {
//           x: [1, 2, 3, 4],
//           y: [10, 15, 13, 17],
//           mode: 'markers',
//           type: 'scatter',
//           marker: {
//             size: [40, 60, 80, 100],
//             color: [10, 20, 30, 40],
//             colorscale: 'Rainbow',
//             colorbar: { title: 'Color Scale' },
//           },
//         },
//       ]}
//       layout={{
//         width: 720,
//         height: 440,
//         title: 'Bubble Chart with Color and Size',
//         xaxis: { title: 'X Axis' },
//         yaxis: { title: 'Y Axis' },
//       }}
//       config={{ responsive: true }}
//     />
//   );
// };

// const MyPlotlyChart: React.FC<MyPlotlyChartProps> = () => {
//   return (
//     <>
//       <Plot
//         data={[
//           {
//             type: 'scatter',
//             mode: 'lines+markers',
//             x: [1, 2, 3, 4, 5],
//             y: [10, 15, 13, 17, 10],
//             marker: { color: 'red' },
//           },
//         ]}
//         layout={{
//           title: 'Simple Plotly Chart',
//           xaxis: { title: 'X Axis' },
//           yaxis: { title: 'Y Axis' },
//         }}
//       />

//       <Plot
//         data={[
//           {
//             type: 'scatter',
//             mode: 'lines+markers',
//             x: [1, 2, 3, 4, 5],
//             y: [10, 15, 13, 17, 10],
//             marker: { color: 'red' },
//           },
//         ]}
//         layout={{
//           title: 'Simple Plotly Chart',
//           xaxis: { title: 'X Axis' },
//           yaxis: { title: 'Y Axis' },
//         }}
//       />

//       <LineChart />
//       <PieChart />
//       <BarChart />
//       <ScatterPlot />
//       <Histogram />
//       <Heatmap />
//       <BoxPlot />
//       <SurfacePlot />
//       <BubbleChart />
//     </>
//   );
// };

// export default MyPlotlyChart;
