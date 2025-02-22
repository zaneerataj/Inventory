import React from 'react';
import CustomChart from '../../CustomComponents/CustomChart/CustomChart';
import CustomAreaChart from '../../CustomComponents/CustomAreaChart/CustomAreaChart';
import CustomPiChart from '../../CustomComponents/CustomPiChart/CustomPiChart';
import CustomAreaChartInteractive from '../../CustomComponents/CustomAreaChartInteractive/CustomAreaChartInteractive';
import CustomLineChartInteractive from '../../CustomComponents/CustomLineChartInteractive/CustomLineChartInteractive';
import CustomLineChart_Multiple from '../../CustomComponents/CustomLineChart_Multiple/CustomLineChart_Multiple';
import CustomLineChart_Lable from '../../CustomComponents/CustomLineChart_Lable/CustomLineChar_Lable';
import CustomLineChart_CustomLable from '../../CustomComponents/CustomLineChart_CustomLable/CustomLineChart_CustomLable';
import CustomPieChart_LableList from '../../CustomComponents/CustomPieChart_LableList/CustomPieChart_LableList';
import CustomPieChart_DonutwithText from '../../CustomComponents/CustomPieChart_DonutwithText/CustomPieChart_DonutwithText';
import CustomPieChart_Stacked from '../../CustomComponents/CustomPieChart_Stacked/CustomPieChart_Stacked';
import CustomRedialChart_Lable from '../../CustomComponents/CustomRadialChart_Label/CustomRadialChart_Lable';
import CustomRedialChart_Text from '../../CustomComponents/CustomRedialChart_Text/CustomRedialChart_Text';
import CustomRedialChart_Shape from '../../CustomComponents/CustomRedialChart_Shape/CustomRedialChart_Shape';
import CustomRedialChart_Stacked from '../../CustomComponents/CustomRedialChart_Stacked/CustomRedialChart_Stacked';
import CustomRadarchar_RadiusAxis from '../../CustomComponents/CustomRadarchar_RadiusAxis/CustomRadarchart_RadiusAxis';
import CustomRadarchar_CustomLable from '../../CustomComponents/CustomRadarchart_CustomLable/CustomRadarchart_CustomLable';
import CustomRadarchar_GridCustom from '../../CustomComponents/CustomRadarchart_GridCustom/CustomRadarchart_GridCustom';
import CustomRadarchart_Icon from '../../CustomComponents/CustomRadarchart_Icon/CustomRadarchar_Icon';
import CustomRadarchart_LinesOnly from '../../CustomComponents/CustomRadarchart_LinesOnly/CustomRadarchart_LinesOnly';
import CustomSwitch from '../../CustomComponents/CustomSwitch/CustomSwitch';
import CustomTextarea from '../../CustomComponents/CustomTextArea/CustomTextarea';
import CustomRadio_Group from '../../CustomComponents/CustomRadio_Group/CustomRadio_Group';
import CustomCombobox from '../../CustomComponents/CustomCombobox/CustomCombobox';
import { CustomDateRangePicker } from '../../CustomComponents/CustomDateRangePicker/CustomDateRangePicker';
import { CustomDatePickerPresent } from '../../CustomComponents/CustomDatePickerPresent/CustomDatePickerPresent';

// import CustomDatePicker from '../../CustomComponents/CustomDatePicker/CustomDatePicker';

const Charts: React.FC = () => {
  return (
    <>
      <div className="w-full flex flex-row flex-wrap justify-between">
        <CustomChart />
        {/* Area Chart */}
        <CustomAreaChart />
        {/* Pi chart */}
        {/* Link for charts https://ui.shadcn.com/charts */}
        <CustomPiChart />

        {/* Interactive area chart */}
        <CustomAreaChartInteractive />

        {/* Interactive line chart */}
        <CustomLineChartInteractive />

        {/*  linechart_Multiple*/}
        <CustomLineChart_Multiple />

        {/*  linechart_Lable*/}
        <CustomLineChart_Lable />

        {/*  linechart_CustomLable*/}
        <CustomLineChart_CustomLable />

        {/*  Piechart_LableList*/}
        <CustomPieChart_LableList />

        {/*  Piechart_DoutwithText*/}
        <CustomPieChart_DonutwithText />

        {/*  Piechart_Stacked*/}
        <CustomPieChart_Stacked />

        {/*  RedialChart_Lable*/}
        <CustomRedialChart_Lable />

        {/*  RedialChart_Text*/}
        <CustomRedialChart_Text />

        {/*  RedialChart_Shape*/}
        <CustomRedialChart_Shape />

        {/*  RedialChart_Stacked*/}
        <CustomRedialChart_Stacked />

        {/* Radarchart radiusAxis */}
        <CustomRadarchar_RadiusAxis />

        {/* Radarchart Customlable */}
        <CustomRadarchar_CustomLable />

        {/* Radarchart GridCustom*/}
        <CustomRadarchar_GridCustom />

        {/* Radarchart Icon*/}
        <CustomRadarchart_Icon />

        {/* Radarchart LinesOnly*/}
        <CustomRadarchart_LinesOnly />
      </div>
    </>
  );
};

export default Charts;
