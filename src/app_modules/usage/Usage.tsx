import React, { useState } from 'react';
import CustomAccordian from '../../CustomComponents/CustomAccordian/CustomAccordia';
import CustomAlert from '../../CustomComponents/CustomAlert/CustomAlert';
import CustomAlertDialog from '../../CustomComponents/CustomAlertDialog/CustomAlertDialog';
import CustomBreadCrumb from '../../CustomComponents/CustomBreadCrumb/CustomBreadCrumb';
import CustomButton from '../../CustomComponents/CustomButton/CustomButton';
import CustomCalander from '../../CustomComponents/CustomCalander/CustomCalander';
import CustomCarousal from '../../CustomComponents/CustomCarousal/CustomCarousal';
import CustomCheckbox from '../../CustomComponents/CustomCheckbox/CustomCheckbox';
import CustomCollapsible from '../../CustomComponents/CustomCollaps/CustomCollapsible';
import CustomCommand from '../../CustomComponents/CustomCommand/CustomCommand';
import CustomDialog from '../../CustomComponents/CustomDialog/CustomDialog';
import CustomDrawer from '../../CustomComponents/CustomDrawer/CustomDrawer';
import CustomDatePicker from '../../CustomComponents/CustomDatePicker/CustomDatePicker';
import CustomPopOver from '../../CustomComponents/CustomPopOver/CustomPopOver';
import CustomAvator from '../../CustomComponents/CustomAvator/CustomAvator';
import CustomSwitch from '../../CustomComponents/CustomSwitch/CustomSwitch';
import CustomTextarea from '../../CustomComponents/CustomTextArea/CustomTextarea';
import CustomRadio_Group from '../../CustomComponents/CustomRadio_Group/CustomRadio_Group';
import CustomCombobox from '../../CustomComponents/CustomCombobox/CustomCombobox';
import { CustomDateRangePicker } from '../../CustomComponents/CustomDateRangePicker/CustomDateRangePicker';
import { CustomDatePickerPresent } from '../../CustomComponents/CustomDatePickerPresent/CustomDatePickerPresent';
import CustomTable from '../../CustomComponents/CustomTable/CustomTable';
import CustomPagination from '../../CustomComponents/CustomPagination/CustomPagination';
import CustomDataTable from '../../CustomComponents/CustomDataTable/CustomDataTable';
import CustomHoverCard from '../../CustomComponents/CustomHoverCard/CustomHoverCard';
import CustomInputOTP from '../../CustomComponents/CustomInputOTP/CustomInputOTP';
import CustomMenubar from '../../CustomComponents/CustomMenubar/CustomMenubar';
import CustomProgress from '../../CustomComponents/CustomProgress/CustomProgress';
import CustomScrollArea from '../../CustomComponents/CustomScrollArea/CustomScrollArea';
import CustomSkeleton from '../../CustomComponents/CustomSkeleton/CustomSkeleton';
import CustomSkeleton2 from '../../CustomComponents/CustomSkeleton2/CustomSkeleton2';
import CustomSlider from '../../CustomComponents/CustomSlider/CustomSlider';
import CustomSonner from '../../CustomComponents/CustomSonner/CustomSonner';
import CustomToast from '../../CustomComponents/CustomToast/CustomToast';
import CustomToast_2 from '../../CustomComponents/CustomToast_2/CustomToast_2';
import CustomTabs from '../../CustomComponents/CustomTabs/CustomTabs';
import CustomNavigationmenu from '../../CustomComponents/CustomNavigationmenu/CustomNavigationmenu';
import CustomTreeView from '../../CustomComponents/CustomTreeView/CustomTreeView';
import CustomCarouselTwo from '../../CustomComponents/CustomCarousalTwo/CustomCaroualTwo';
import CustomCarouselIndicator from '../../CustomComponents/CustomCarousalIndicator/CustomCarousalIndicator';
import CustomCarouselOrientation from '../../CustomComponents/CustomCarousalOrientation/CustomCarousalOrientation';
import CustomCarouselAutoScroll from '../../CustomComponents/CustomCarousalAutoScroll/CustomCarousalAutoScroll';
import CustomMultiSelectTest from '../../CustomComponents/CustomMultiSelectTest/CustomMultiSelectTest';
import CustomFileUploadOne from '../../CustomComponents/CustomFileUploaderOne/CustomFileUploaderOne';
import CustomFileUploaderOne1 from '../../CustomComponents/CustomFileUploaderOne1/CustomFileUploaderOne1';
import CustomFileUploader2 from '../../CustomComponents/CustomFileUploader2/CustomFileUploader2';
import CustomInputOtpOne from '../../CustomComponents/CustomInputOtpOne/CustomInputOtpOne';
import CustomOtpTest from '../../CustomComponents/CustomOtpTest/CustomOtpTest';
import { House } from 'lucide-react';

// import CustomDatePicker from '../../CustomComponents/CustomDatePicker/CustomDatePicker';

const ClassName = {
  main_container: 'w-full flex flex-row flex-wrap justify-around align-middle',
};

const Usage: React.FC = () => {
  // Custom table headers and data ----------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Number of rows per page

  const headers = ['Invoice', 'Status', 'Method', 'Amount'];
  const data = [
    {
      Invoice: 'INV001',
      Status: 'Paid',
      Method: 'Credit Card',
      Amount: <CustomButton label='Action' />,
    },
    {
      Invoice: 'INV001',
      Status: 'Paid',
      Method: 'Credit Card',
      Amount: '$250.00',
    },
    {
      Invoice: 'INV001',
      Status: 'Paid',
      Method: 'Credit Card',
      Amount: '$250.00',
    },
    {
      Invoice: 'INV001',
      Status: 'Paid',
      Method: 'Credit Card',
      Amount: '$250.00',
    },
    {
      Invoice: 'INV001',
      Status: 'Paid',
      Method: 'Credit Card',
      Amount: '$250.00',
    },
    {
      Invoice: 'INV001',
      Status: 'Paid',
      Method: 'Credit Card',
      Amount: '$250.00',
    },
    {
      Invoice: 'INV001',
      Status: 'Paid',
      Method: 'Credit Card',
      Amount: '$250.00',
    },
    {
      Invoice: 'INV001',
      Status: 'Paid',
      Method: 'Credit Card',
      Amount: '$250.00',
    },
    {
      Invoice: 'INV001',
      Status: 'Paid',
      Method: 'Credit Card',
      Amount: '$250.00',
    },
    {
      Invoice: 'INV001',
      Status: 'Paid',
      Method: 'Credit Card',
      Amount: '$250.00',
    },
    {
      Invoice: 'INV001',
      Status: 'Paid',
      Method: 'Credit Card',
      Amount: '$250.00',
    },
    {
      Invoice: 'INV001',
      Status: 'Paid',
      Method: 'Credit Card',
      Amount: '$250.00',
    },
    {
      Invoice: 'INV001',
      Status: 'Paid',
      Method: 'Credit Card',
      Amount: '$250.00',
    },
    {
      Invoice: 'INV001',
      Status: 'Paid',
      Method: 'Credit Card',
      Amount: '$250.00',
    },
    // Add more rows as needed
  ];

  const totalPages = Math.ceil(data.length / pageSize);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className={ClassName.main_container}>
        <div className="p-6">
          <CustomAccordian
            items={[
              { label: 'accordian-1', content: 'this is the content' },
              {
                label: 'accordian-2',
                content: 'this is the content of accordian 2',
              },
              {
                label: 'accordian-3',
                content: 'this is the content of accordian 3',
              },
            ]}
          />
          <br></br>
          {/* Alert */}
          <CustomAlert />
          {/* Alert dialog box */}
          <br></br>
          <CustomAlertDialog />

          {/* Bread Crums */}
          <br></br>
          <CustomBreadCrumb />
          <CustomButton variant="destructive" />
          <CustomButton variant="outline" />
          <CustomButton onClick={() => console.log('Clicked')} />
          {/* <Button variant={'outlin'} >something</Button> */}
          <CustomCalander />
          {/* Carausal 1 */}
          <div className="ml-6">
            <CustomCarousal />
          </div>
          {/* Checkbox */}
          <CustomCheckbox />
        </div>

        {/* Collapsible */}
        <CustomCollapsible />

        {/* Command */}
        <CustomCommand />

        {/* Dialog */}
        <CustomDialog />

        {/* Drawer */}
        <CustomDrawer />

        {/* DatePicker */}
        <CustomDatePicker />

        {/* PopOver */}
        <CustomPopOver />

        {/* Avator */}
        <CustomAvator />

        {/* custom charts */}

        {/*  Switch */}
        <CustomSwitch />

        {/*  Textarea */}
        <CustomTextarea />

        {/*  Radio_Group */}
        <CustomRadio_Group />

        {/*  Combobox */}
        <CustomCombobox />

        {/* Date range picker */}
        <CustomDateRangePicker />

        {/* Date picker present */}
        <CustomDatePickerPresent />

        {/* Table */}
        <CustomTable
          headers={headers}
          data={data}
          caption="A list of your recent invoices."
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          pageSize={pageSize}
        />
        {/* pagination */}
        <CustomPagination />

        {/* DataTable */}
        <CustomDataTable />

        {/* Hover-Card */}
        <CustomHoverCard />

        {/* Input-otp */}
        <CustomInputOTP />

        {/* Menubar */}
        <CustomMenubar />

        {/* Navigationmenu */}
        <CustomNavigationmenu />

        {/* Menubar */}
        <CustomProgress />

        {/* scroll-area */}
        <CustomScrollArea />

        {/* skeleton */}
        <CustomSkeleton />

        {/* skeleton2 */}
        <CustomSkeleton2 />

        {/* slider */}
        <CustomSlider />

        {/* sonner */}
        <CustomSonner />

        {/* toast */}
        <CustomToast />

        {/* toast_2 */}
        <CustomToast_2 />

        {/* Tabs */}
        <CustomTabs />
        <CustomNavigationmenu />

        {/* <CustomTreeView elements={elements} /> */}

        {/* Custom Carousal two */}
        <CustomCarouselTwo />

        {/* Custom Carousal indicator */}
        <CustomCarouselIndicator />

        {/* Carousal Orientation */}
        <CustomCarouselOrientation />

        {/* Carousal Auto Scroll */}
        <CustomCarouselAutoScroll />

        {/* Multi select text */}
        <CustomMultiSelectTest />

        {/* File upload */}
        <CustomFileUploadOne />

        {/* File UploaderOne1 */}
        <CustomFileUploaderOne1 />

        {/* FileUploader2 */}
        <CustomFileUploader2 />

        {/* OtpInputOne */}
        <CustomInputOtpOne />

        {/* CustomOtpTest */}
        <CustomOtpTest />
      </div>
    </>
  );
};

export default Usage;
