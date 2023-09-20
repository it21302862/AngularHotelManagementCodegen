import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

}

// import { Component, OnInit } from '@angular/core';

// import {
//   FormGroup,
//   FormBuilder,
//   FormArray,
//   Validators,
//   FormControl,
//   FormsModule,
// } from '@angular/forms';
// import { ClientService } from '../../../../core/services/client.service';
// import { UserService } from '../../../../core/services/user.service';
// import { AppUtils } from '../../../../core/configs/app.utils';
// import { CompanyService } from '../../../../core/services/company.service';
// import { SETTINGS } from '../../../../core/configs/common.settings';
// import { FilesService } from '../../../../core/services/files.service';
// import { JobService } from '../../../../core/services/job.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { LeadService } from '../../../../core/services/lead.service';
// import { MessageService, Message, ConfirmationService } from 'primeng/api';
// import * as _ from 'lodash';

// interface Options {
//   name: string;
//   value: string;
// }

// @Component({
//   selector: 'app-add-edit-job',
//   templateUrl: './add-edit-job.component.html',
//   styleUrls: ['./add-edit-job.component.scss'],
// })
// export class AddEditJobComponent implements OnInit {
//   clients: any[] = [];
//   selectedClientName: any = {};
//   clientContacts: any[] = [];
//   clientsData: any[] = [];
//   staffData: any[] = [];
//   jobForm: FormGroup | any;
//   jobFormErrors: any;
//   BasicShow: boolean = false;
//   priorityLevelOptions = [
//     { label: 'Low', value: 'LOW' },
//     { label: 'Medium', value: 'MEDIUM' },
//     { label: 'High', value: 'HIGH' },
//   ];
//   statusOptions = [
//     { label: 'Planning', value: 'PLANNING' },
//     { label: 'In Progress', value: 'IN_PROGRESS' },
//     { label: 'Hold', value: 'HOLD' },
//     { label: 'Completed', value: 'COMPLETED' },
//     { label: 'Cancelled', value: 'CANCELLED' },
//   ];
//   intervalOptions: any[] = [];
//   repeatsOnOptions: any[] = [];
//   endRepeatOptions = [
//     { label: 'After', value: 'AFTER' },
//     { label: 'On', value: 'ON' },
//   ];
//   endRepeat: any;
//   occurrence: any;
//   repeatsOn: any;
//   staff: Options[] = [];
//   shiftStartTime: any = new Date(new Date().setHours(0, 0, 0, 0));
//   shiftEndTime: any = new Date(new Date().setHours(0, 0, 0, 0));
//   workDays: string[] = [];

//   // create client stuff
//   clientForm: FormGroup | any;
//   formErrorsCreateClient: any;

//   clientTypeOptions = [
//     { label: 'Business', value: 'BUSINESS' },
//     { label: 'Personal', value: 'PERSONAL' },
//   ];
//   titleOptions = [
//     { label: 'Mr.', value: 'mr' },
//     { label: 'Mrs.', value: 'mrs' },
//   ];
//   recurringTypesOptions = [
//     { label: 'Daily', value: 'DAILY' },
//     { label: 'Weekly', value: 'WEEKLY' },
//     { label: 'Monthly', value: 'MONTHLY' },
//   ];
//   companyNameOptions: any[] = [];

//   companies: any[] = [];
//   company: any = '';
//   isSame = false;
//   isClientTypeIsBusiness = true;
//   createClientLoading = false;
//   createJobLoading = false;
//   baseAPI = SETTINGS.BASE_API;
//   uploadedFiles: any[] = [];
//   uploadedClientFiles: any[] = [];
//   valSwitch = true;
//   isFileUploading = false;
//   jobId: any;
//   jobData: any;
//   recurringJobData: any;
//   convertingLeadId: any;
//   convertingLead: any;
//   isAddContact = true;
//   setContactPersonField = false;
//   noContacts = false;
//   selectedContact: any;
//   selectedClient: any;

//   // time dropdown
//   // timeOptions: any[] = [
//   //   { label: '09:00 AM', value: '09:00' },
//   //   { label: '09:30 AM', value: '09:30' },
//   //   { label: '09:00 PM', value: '21:00' },
//   //   { label: '09:30 PM', value: '21:30' },
//   //   { label: '10:00 AM', value: '10:00' },
//   //   { label: '10:30 AM', value: '10:30' },
//   //   { label: '10:00 PM', value: '22:00' },
//   //   { label: '10:30 PM', value: '22:30' },
//   // ];

//   //Add contact person references
//   contactForm: FormGroup | any;
//   isVisibleAddContact = false;
//   contactFormErrors: any;
//   updateContactLoading = false;

//   //colour picker
//   color: string;
//   customColors: string[] = [
//     '#801A1A',
//     '#A60912',
//     '#DC7A7A',
//     '#AA2E74',
//     '#B2158A',
//     '#DF4BB6',
//     '#301A62',
//     '#362277',
//     '#493684',
//     '#54258D',
//     '#885FAE',
//     '#3968BB',
//     '#105479',
//     '#85A6DA',
//     '#225A8C',
//     '#548CBE',
//     '#019CAE',
//     '#91B282',
//     '#3D533F',
//     '#4B1525',
//     '#AE8E2D',
//     '#CBA73A',
//     '#E4B37F',
//     '#BC6118',
//     '#F0880D',
//     '#F2A30A',
//     '#3A3A3A',
//     '#969696',
//     '#216D99',
//     '#E8324B',
//   ];

//   isRecurring = false;
//   showRecurringOptions = false;
//   recurringType = '';
//   intervals = 0;
//   visibleEditableOptions = false;
//   enabled = false;
//   recurringSettingsChange = false;

//   //attachment Add, Edit and Rename
//   maxFileSize = 100000000;
//   renameAttachmentForm: FormGroup | any;
//   renameAttachmentFormErrors: any;
//   renameAttachmentDialog = false;
//   renameAttachmentIndex = 0;
//   renameAttachmentType = '';

//   //Address dropdown
//   setAddressField = false;
//   isAddAddress = false;
//   noAddress = false;
//   clientAddress: any[] = [];
//   isVisibleAddAddress = false;
//   addressFormErrors: FormsModule | any;
//   addressForm: FormGroup | any;
//   updateAddressLoading = false;

//   //Address Title Field Required
//   isEmptyAddressUnit = true;
//   isEmptyAddressStreet = true;
//   isEmptyAddressSuburb = true;
//   isEmptyAddressAbn = true;
//   isEmptyAddressState = true;
//   isEmptyAddressPostalCode = true;
//   AddressTitleFieldRequired = false;

//   constructor(
//     private fb: FormBuilder,
//     private clientService: ClientService,
//     private userService: UserService,
//     private companyService: CompanyService,
//     private fileService: FilesService,
//     private jobService: JobService,
//     private router: Router,
//     private route: ActivatedRoute,
//     private leadService: LeadService,
//     private messageService: MessageService,
//     private confirmationService: ConfirmationService
//   ) {
//     this.contactFormErrors = {
//       firstname: {},
//       lastname: {},
//       jobPosition: {},
//       email: {},
//       mobile: {},
//       phoneNumber: {},
//     };
//     this.renameAttachmentFormErrors = {
//       fileName: {},
//       fileExtension: {},
//     };
//     this.jobFormErrors = {
//       client: {},
//       title: {},
//       subject: {},
//       status: {},
//       priorityLevel: {},
//       colorHEX: {},
//     };
//     this.addressFormErrors = {
//       addressTitle: {},
//     };
//     this.color = '';
//   }

//   onColorChange(event: any) {
//     // this.color = event.color.hex;
//     console.log('Selected color:', event);
//   }

//   ngOnInit() {
//     this.company = localStorage.getItem(SETTINGS.COMPANY);
//     console.log(this.company);
//     this.addEditJob().then(res => {});
//     this.initJobForm();
//     this.getStaff();
//     this.setValues();
//     this.initContactForm();
//     this.initRenameAttachmentForm();
//     this.initAddressForm();
//     this.disableIsRecurring();
//   }

//   setBackPath() {
//     if (
//       localStorage.getItem(SETTINGS.PREVIOUS_PAGE) ===
//         'SINGLE_CLIENT_JOB_TABLE' ||
//       localStorage.getItem(SETTINGS.PREVIOUS_PAGE) === 'SINGLE_CLIENT_JOBS' ||
//       localStorage.getItem(SETTINGS.PREVIOUS_PAGE) ===
//         'SINGLE_CLIENT_RECURRING_JOB'
//     ) {
//       localStorage.setItem(SETTINGS.PREVIOUS_PAGE, 'SINGLE_CLIENT_JOB_TABLE');
//       this.router.navigate([
//         `/app/client/${localStorage.getItem(SETTINGS.PREVIOUS_PAGE_ID)}`,
//       ]);
//       localStorage.setItem(SETTINGS.PREVIOUS_PAGE_ID, '');
//     } else if (
//       localStorage.getItem(SETTINGS.PREVIOUS_PAGE) === 'RECURRING_JOB_SINGLE' ||
//       localStorage.getItem(SETTINGS.PREVIOUS_PAGE) === 'SINGLE_JOB'
//     ) {
//       this.router.navigate([
//         `/app/job/${localStorage.getItem(SETTINGS.SINGLE_JOB_ID)}`,
//       ]);
//       localStorage.setItem(SETTINGS.SINGLE_JOB_ID, '');
//       localStorage.setItem(SETTINGS.PREVIOUS_PAGE, '');
//     } else if (
//       localStorage.getItem(SETTINGS.PREVIOUS_PAGE) === 'CALENDAR_SINGLE' ||
//       localStorage.getItem(SETTINGS.PREVIOUS_PAGE) === 'CALENDAR_RECURRING' ||
//       localStorage.getItem(SETTINGS.PREVIOUS_PAGE) === 'CALENDAR'
//     ) {
//       this.router.navigate([`/app/calendar`]);
//       localStorage.setItem(SETTINGS.PREVIOUS_PAGE, '');
//     } else {
//       this.router.navigate(['/app/job']);
//     }
//   }

//   setRepeatsOnOptions(): void {
//     if (this.recurringType === 'MONTHLY') {
//       this.repeatsOnOptions = [];
//       for (let i = 1; i < 5; i++) {
//         for (let j = 1; j < 8; j++) {
//           let count = '';
//           let valCount = '';
//           let valText = '';
//           let day = '';
//           switch (i) {
//             case 1:
//               count = 'First';
//               valCount = '+1';
//               break;
//             case 2:
//               count = 'Second';
//               valCount = '+2';
//               break;
//             case 3:
//               count = 'Third';
//               valCount = '+3';
//               break;
//             case 4:
//               count = 'Last';
//               valCount = '-1';
//               break;
//           }
//           switch (j) {
//             case 1:
//               valText = 'MO';
//               day = 'Monday';
//               break;
//             case 2:
//               valText = 'TU';
//               day = 'Tuesday';
//               break;
//             case 3:
//               valText = 'WE';
//               day = 'Wednesday';
//               break;
//             case 4:
//               valText = 'TH';
//               day = 'Thursday';
//               break;
//             case 5:
//               valText = 'FR';
//               day = 'Friday';
//               break;
//             case 6:
//               valText = 'SA';
//               day = 'Saturday';
//               break;
//             case 7:
//               valText = 'SU';
//               day = 'Sunday';
//               break;
//           }
//           this.repeatsOnOptions.push({
//             label: `${count} ${day}`,
//             value: valCount + valText,
//           });
//         }
//       }
//       for (let i = 1; i < 32; i++) {
//         let endText = '';
//         if (i === 1 || i === 21 || i === 31) {
//           endText = 'st';
//         } else if (i === 2 || i === 22) {
//           endText = 'nd';
//         } else if (i === 3 || i === 23) {
//           endText = 'rd';
//         } else {
//           endText = 'th';
//         }
//         this.repeatsOnOptions.push({ label: `${i}${endText}`, value: i });
//       }
//     }
//   }

//   setIntervalOptions(): void {
//     if (this.recurringType === 'DAILY') {
//       this.intervalOptions = [];
//       for (let i = 1; i < 31; i++) {
//         this.intervalOptions.push({
//           label: `Every ${i === 1 ? 'Day' : i + ' Days'}`,
//           value: i,
//         });
//       }
//     } else if (this.recurringType === 'WEEKLY') {
//       this.intervalOptions = [];
//       for (let i = 1; i < 21; i++) {
//         this.intervalOptions.push({
//           label: `Every ${i === 1 ? 'Week' : i + ' Weeks'}`,
//           value: i,
//         });
//       }
//     } else if (this.recurringType === 'MONTHLY') {
//       this.intervalOptions = [];
//       for (let i = 1; i < 13; i++) {
//         this.intervalOptions.push({
//           label: `Every ${i === 1 ? 'Month' : i + ' Months'}`,
//           value: i,
//         });
//       }
//     }
//   }

//   setRecurringDropdownOptions(): void {
//     this.setIntervalOptions();
//     this.setRepeatsOnOptions();
//   }

//   async addEditJob(): Promise<any> {
//     await this.getClients();
//     await this.getEditableJob();
//   }

//   disableIsRecurring(): void {
//     if (this.jobId) {
//       this.jobForm.get('isRecurring')?.disable();
//     } else {
//       this.jobForm.get('isRecurring')?.enable();
//     }
//   }

//   async getEditableJob(): Promise<any> {
//     if (this.route.snapshot.paramMap.get('id')) {
//       const staffValue: any[] = [];
//       const seriesStaffValue: any[] = [];
//       this.jobId = this.route.snapshot.paramMap.get('id');
//       this.jobService.getOneJobById(this.jobId).then(res => {
//         this.jobData = res as any;
//         if (this.jobData?.recurringJob) {
//           this.recurringJobData = res?.recurringJob;
//           this.jobData?.recurringJobStaff?.forEach((st: any) => {
//             seriesStaffValue.push({
//               name: `${st.firstname} ${st.lastname}`,
//               value: st._id,
//             });
//           });
//           this.isRecurring = true;
//           this.showRecurringOptions = true;
//           this.workDays = this.recurringJobData?.recurringSettings?.days;
//           this.recurringType = this.recurringJobData?.recurringSettings?.type;
//           this.setRecurringDropdownOptions();
//           this.intervals = this.recurringJobData?.recurringSettings?.interval;
//           this.repeatsOn = this.recurringJobData?.recurringSettings?.repeatsOn;
//           this.endRepeat = this.recurringJobData?.recurringSettings?.endRepeat;
//           this.occurrence =
//             this.recurringJobData?.recurringSettings?.occurrence;
//         } else {
//           this.isRecurring = false;
//         }
//         this.jobData?.staff?.forEach((st: any) => {
//           staffValue.push({
//             name: `${st.firstname} ${st.lastname}`,
//             value: st._id,
//           });
//         });
//         this.jobForm.get('pricingDetails').clear();
//         this.jobData?.pricingDetails?.forEach((pd: any) => {
//           (this.jobForm.get('pricingDetails') as FormArray).push(
//             this.createAPricingDetails()
//           );
//         });
//         this.jobForm.patchValue({
//           client: this.jobData?.client?._id,
//           staff: staffValue,
//           pricingDetails: this.jobData?.pricingDetails,
//           startDate: new Date(this.jobData?.startDateAndTime),
//           seriesStartDate: this.jobData?.recurringJob
//             ? new Date(this.recurringJobData?.recurringSettings?.startDate)
//             : null,
//           endDate:
//             this.jobData?.recurringJob?.recurringSettings?.endDate !== null
//               ? new Date(this.recurringJobData?.recurringSettings?.endDate)
//               : null,
//           seriesStaff: this.jobData?.recurringJob ? seriesStaffValue : null,
//           title: this.jobData?.title,
//           subject: this.jobData?.subject,
//           description: this.jobData?.description,
//           subTotal: this.jobData?.subTotal,
//           totalGST: this.jobData?.totalGST,
//           total: this.jobData?.total,
//           jobLocation: this.jobData?.jobLocation,
//           remarks: this.jobData?.remarks,
//           status: this.jobData?.status,
//           priorityLevel: this.jobData?.priorityLevel,
//           colorHEX: this.jobData?.colorHEX,
//           isRecurring: !!this.jobData?.recurringJob,
//         });
//         this.selectedClientName = this.clients.find(
//           cl => cl.value === res?.client?._id
//         );
//         if (
//           this.jobData?.haveContact &&
//           this.jobData?.client?.contacts.length
//         ) {
//           this.clientContacts = [];
//           this.jobData?.client?.contacts.forEach((co: any) => {
//             this.clientContacts.push({
//               label: `${co.firstname} ${co.lastname}`,
//               value: co,
//             });
//           });
//         }
//         this.noContacts = !this.jobData?.client?.contacts?.length;
//         if (this.jobData?.haveContact) {
//           this.selectedContact = this.jobData?.contactPerson;
//         }
//         this.setContactPersonField = true;
//         this.shiftStartTime = new Date(this.jobData?.startDateAndTime);
//         this.shiftEndTime = new Date(this.jobData?.endDateAndTime);
//         this.uploadedFiles = this.jobData?.attachments;
//       });
//     } else if (this.route.snapshot.paramMap.get('leadId')) {
//       this.convertingLeadId = this.route.snapshot.paramMap.get('leadId');
//       this.leadService.getOneLeadById(this.convertingLeadId).then(res => {
//         this.convertingLead = res as any;
//         this.selectedClientName = this.clients.find(
//           cl => cl.value === res?.client?._id
//         );
//         this.showRecurringOptions = true;
//         this.jobForm.patchValue({
//           client: this.convertingLead?.client?._id,
//           jobLocation: this.convertingLead?.address,
//           remarks: this.convertingLead?.remarks,
//         });
//       });
//     } else {
//       this.enabled = true;
//       this.jobForm.get('endDate')?.enable();
//     }
//     this.isRecurringSettingsChange();
//   }

//   checkIsAdd(): void {}

//   showDialog() {
//     this.BasicShow = true;
//   }

//   itemForm = this.fb.group({
//     Descrtiption: [''],
//   });

//   getEditableJobData(): void {}

//   getStaff(): void {
//     this.userService
//       .getFilteredUsers({ role: '64710bb740de86be5e1135c6', active: true })
//       .then(res => {
//         this.staffData = res as any[];
//         const staff = res as any;
//         staff.map((st: any) => {
//           this.staff.push({
//             name: `${st.firstname} ${st.lastname}`,
//             value: st._id,
//           });
//         });
//       });
//   }

//   getClients(): void {
//     this.clientService.getAllClients({ company: this.company }).then(res => {
//       this.clientsData = res as any;
//       const clients = res as any;
//       clients.map((cl: any) => {
//         this.clients.push({
//           label:
//             cl?.type === 'PERSONAL'
//               ? `${cl.firstname} ${cl.lastname}`
//               : cl?.companyName,
//           value: cl._id,
//         });
//       });
//     });
//   }

//   createAPricingDetails(): FormGroup {
//     return this.fb.group({
//       description: [null],
//       quantity: [null],
//       unitPrice: [null],
//       includeGST: [false],
//       amount: [{ value: null, disabled: true }],
//     });
//   }

//   initJobForm(): void {
//     this.jobForm = this.fb.group({
//       client: [null, [Validators.required]],
//       title: [null, [Validators.required]],
//       subject: [null, [Validators.required]],
//       description: [null],
//       startDate: [null, [Validators.required]],
//       seriesStartDate: [{ value: null, disabled: true }],
//       endDate: [{ value: null, disabled: true }],
//       pricingDetails: this.fb.array([this.createAPricingDetails()]),
//       staff: [null],
//       seriesStaff: [{ value: null, disabled: true }],
//       subTotal: [{ value: null, disabled: true }],
//       totalGST: [{ value: null, disabled: true }],
//       total: [{ value: null, disabled: true }],
//       jobLocation: this.fb.group({
//         unitNumber: [null, [Validators.required]],
//         street: [null, [Validators.required]],
//         suburb: [null, [Validators.required]],
//         state: [null, [Validators.required]],
//         postalCode: [null, [Validators.required]],
//         additionalNote: [null],
//       }),
//       remarks: [null],
//       status: [null, [Validators.required]],
//       priorityLevel: [null, [Validators.required]],
//       colorHEX: [null, [Validators.required]],
//       isRecurring: [false],
//       selectedAddress: [null],
//     });

//     this.jobForm.valueChanges.subscribe((form: any) => {
//       this.jobFormErrors = AppUtils.getFormErrors(
//         this.jobForm,
//         this.jobFormErrors
//       );
//     });

//     this.jobForm.valueChanges.subscribe((values: any) => {
//       this.showRecurringOptions = values.isRecurring;
//       this.isRecurring = values.isRecurring;
//       this.selectedClientName = this.clients.find(
//         cl => cl.value === values.client
//       );
//       if (values.client) {
//         this.selectedClient = this.clientsData.find(
//           cl => cl._id === values.client
//         );
//         this.setContactPersonField = true;
//         if (this.selectedClient?.contacts?.length) {
//           this.clientContacts = [];
//           this.selectedClient.contacts.map((co: any) => {
//             this.clientContacts.push({
//               label: `${co.firstname} ${co.lastname}`,
//               value: co,
//             });

//             if (co.isFirstContact) {
//               this.selectedContact = co;
//             }
//           });
//           this.noContacts = false;
//         } else {
//           this.noContacts = true;
//         }
//         this.setAddressField = true;
//         if (this.selectedClient?.address?.length) {
//           this.clientAddress = [];
//           this.selectedClient.address.map((co: any) => {
//             this.clientAddress.push({
//               label: co.addressTitle,
//               value: co,
//             });
//           });
//           this.noAddress = false;
//         } else {
//           this.noAddress = true;
//         }
//       }
//     });
//     this.jobForm.get('selectedAddress').valueChanges.subscribe((val: any) => {
//       this.jobForm.patchValue({
//         jobLocation: {
//           unitNumber: val?.unit,
//           street: val?.street,
//           suburb: val?.suburb,
//           state: val?.state,
//           postalCode: val?.postalCode,
//         },
//       });
//     });
//   }

//   resetRecurringOptions(): void {
//     const isRec = this.jobForm.get('isRecurring').value;
//     if (isRec) {
//       if (this.jobId) {
//         this.jobForm.patchValue({
//           seriesStartDate: new Date(
//             this.recurringJobData?.recurringSettings?.startDate
//           ),
//           endDate: new Date(this.recurringJobData?.recurringSettings?.endDate),
//         });
//         this.recurringType = this.recurringJobData?.recurringSettings?.type;
//         this.setRecurringDropdownOptions();
//         this.intervals = this.recurringJobData?.recurringSettings?.interval;
//         this.repeatsOn = this.recurringJobData?.recurringSettings?.repeatsOn;
//         this.endRepeat = this.recurringJobData?.recurringSettings?.endRepeat;
//         this.occurrence = this.recurringJobData?.recurringSettings?.occurrence;
//         this.workDays = this.recurringJobData?.recurringSettings?.days;
//       }
//     } else {
//       this.jobForm.controls['seriesStartDate'].reset();
//       this.jobForm.controls['endDate'].reset();
//       this.recurringType = '';
//       this.intervals = 0;
//       this.occurrence = 0;
//       this.repeatsOn = null;
//       this.workDays = [];
//       this.endRepeat = null;
//     }
//   }

//   toggleRecurringSettings(): void {
//     this.enabled = !this.enabled;

//     if (this.enabled) {
//       this.jobForm.get('seriesStaff')?.enable();
//       this.jobForm.get('seriesStartDate')?.enable();
//       this.jobForm.get('endDate')?.enable();
//     } else {
//       this.jobForm.get('seriesStaff')?.disable();
//       this.jobForm.get('seriesStartDate')?.disable();
//       this.jobForm.get('endDate')?.disable();
//     }

//     this.isRecurringSettingsChange();
//   }

//   checkValidation(): any[] {
//     return this.isRecurring ? [Validators.required] : [];
//   }

//   get pricingDetails(): FormArray {
//     return this.jobForm.get('pricingDetails');
//   }

//   addItems() {
//     this.pricingDetails.push(this.createAPricingDetails());
//   }

//   removeItem(event: Event, i: any) {
//     this.confirmationService.confirm({
//       target: event.target as EventTarget,
//       message: 'Are you sure you want to delete this item?',
//       icon: 'pi pi-exclamation-triangle',
//       acceptLabel: 'Delete',
//       rejectLabel: 'Cancel',
//       rejectButtonStyleClass: 'p-button-primary',
//       accept: () => {
//         this.pricingDetails.removeAt(i);
//         this.messageService.add({
//           severity: 'success',
//           summary: 'Success',
//           detail: 'You have deleted item successfully!',
//         });
//       },
//       reject: () => {},
//     });
//   }

//   createJobForm(): void {
//     this.createJobLoading = true;
//     let staff: any[] = [];
//     let payload = {};
//     let recurringSettings: any = {};
//     const formData = this.jobForm.getRawValue();
//     if (this.isRecurring) {
//       recurringSettings = {
//         type: this.recurringType,
//         interval: this.intervals,
//         days: this.workDays,
//         repeatsOn: this.repeatsOn,
//         endRepeat: this.endRepeat,
//         occurrence: this.endRepeat === 'AFTER' ? this.occurrence : null,
//         startDate: formData.startDate.toLocaleString(),
//         endDate:
//           this.endRepeat === 'ON' ? formData.endDate.toLocaleString() : null,
//         shiftStartTime: this.shiftStartTime,
//         shiftEndTime: this.shiftEndTime,
//       };
//     } else {
//       const start = new Date(formData.startDate);
//       start.setMinutes(this.shiftStartTime.getMinutes());
//       start.setHours(this.shiftStartTime.getHours());
//       start.setSeconds(this.shiftStartTime.getSeconds());
//       formData.startDate = start;
//       const end = new Date(formData.startDate);
//       end.setMinutes(this.shiftEndTime.getMinutes());
//       end.setHours(this.shiftEndTime.getHours());
//       end.setSeconds(this.shiftEndTime.getSeconds());
//       formData.endDate = end;
//     }
//     formData?.staff?.forEach((st: any) => {
//       staff.push(st.value);
//     });
//     payload = {
//       pricingDetails: formData.pricingDetails,
//       staff: staff,
//       client: formData.client,
//       title: formData.title,
//       subject: formData.subject,
//       description: formData.description,
//       startDateAndTime: !this.isRecurring ? formData.startDate : null,
//       endDateAndTime: !this.isRecurring ? formData.endDate : null,
//       recurringSettings: this.isRecurring ? recurringSettings : null,
//       subTotal: formData.subTotal,
//       totalGST: formData.totalGST,
//       total: formData.total,
//       jobLocation: formData.jobLocation,
//       remarks: formData.remarks,
//       status: formData.status,
//       priorityLevel: formData.priorityLevel,
//       colorHEX: formData.colorHEX,
//       isRecurring: formData.isRecurring,
//       attachments: this.uploadedFiles,
//       haveContact: this.isAddContact && !this.noContacts,
//       contactPerson:
//         this.isAddContact && !this.noContacts ? this.selectedContact : null,
//     };
//     this.jobService
//       .createJob({
//         ...payload,
//         leadId: this.convertingLeadId ?? this.convertingLeadId,
//       })
//       .then(res => {
//         this.messageService.add({
//           severity: 'success',
//           summary: 'Success',
//           detail: 'New job has been added!',
//         });
//         this.convertingLeadId = null;
//         this.convertingLead = null;
//         this.createJobLoading = false;
//         if (
//           localStorage.getItem(SETTINGS.PREVIOUS_PAGE) ===
//           'SINGLE_CLIENT_JOB_TABLE'
//         ) {
//           this.router.navigate([`/app/client/${formData?.client}`]);
//         } else {
//           this.router.navigate(['/app/job']);
//         }
//       })
//       .catch(e => {
//         if (e.error.removedStaff) {
//           let errorMessage = '';
//           if (e.error.staff.length === 1) {
//             errorMessage = `${e.error.staff[0]} is unavailable on this shift time`;
//           } else {
//             errorMessage = `${e.error.staff.join(
//               ','
//             )} are unavailable on this shift time`;
//           }
//           this.createJobLoading = false;
//           this.messageService.add({
//             severity: 'error',
//             summary: 'Error',
//             detail: errorMessage,
//           });
//         } else {
//           this.createJobLoading = false;
//           this.messageService.add({
//             severity: 'error',
//             summary: 'Error',
//             detail: e.error.message,
//           });
//         }
//       });
//     this.selectedClient = null;
//     this.selectedContact = null;
//   }

//   updateJobForm(): void {
//     if (this.recurringJobData !== undefined && this.recurringSettingsChange) {
//       this.visibleEditableOptions = true;
//     } else {
//       this.confirmationService.confirm({
//         key: 'updateJobForm',
//         message: `Are you sure you want to save changes ?`,
//         icon: 'pi pi-exclamation-triangle',
//         accept: () => {
//           this.visibleEditableOptions = false;
//           this.createJobLoading = true;
//           let staff: any[] = [];
//           let payload = {};
//           let recurringSettings: any = {};
//           const formData = this.jobForm.getRawValue();
//           recurringSettings = {
//             type: this.recurringType,
//             interval: this.intervals,
//             days: this.workDays,
//             repeatsOn: this.repeatsOn,
//             endRepeat: this.endRepeat,
//             occurrence: this.endRepeat === 'AFTER' ? this.occurrence : null,
//             startDate: formData.seriesStartDate.toLocaleString(),
//             endDate:
//               this.endRepeat === 'ON'
//                 ? formData.endDate.toLocaleString()
//                 : null,
//             shiftStartTime: this.shiftStartTime,
//             shiftEndTime: this.shiftEndTime,
//           };
//           formData?.seriesStaff?.forEach((st: any) => {
//             staff.push(st.value);
//           });
//           payload = {
//             pricingDetails: formData.pricingDetails,
//             staff: staff,
//             client: formData.client,
//             title: formData.title,
//             subject: formData.subject,
//             description: formData.description,
//             recurringSettings: recurringSettings,
//             subTotal: formData.subTotal,
//             totalGST: formData.totalGST,
//             total: formData.total,
//             jobLocation: formData.jobLocation,
//             remarks: formData.remarks,
//             status: formData.status,
//             priorityLevel: formData.priorityLevel,
//             colorHEX: formData.colorHEX,
//             isRecurring: formData.isRecurring,
//             attachments: this.uploadedFiles,
//             haveContact: this.isAddContact && !this.noContacts,
//             contactPerson:
//               this.isAddContact && !this.noContacts
//                 ? this.selectedContact
//                 : null,
//           };
//           this.jobService
//             .updateRecurringJob({ _id: this.recurringJobData?._id, ...payload })
//             .then(res => {
//               this.createJobLoading = false;
//               this.messageService.add({
//                 severity: 'success',
//                 summary: 'Success',
//                 detail: 'Job series has been updated!',
//               });
//               this.jobForm.reset();
//               this.selectedClient = null;
//               this.selectedContact = null;
//               if (localStorage.getItem(SETTINGS.PREVIOUS_PAGE) === 'JOBS') {
//                 this.router.navigate(['/app/job']);
//                 localStorage.setItem(SETTINGS.PREVIOUS_PAGE, '');
//               } else if (
//                 localStorage.getItem(SETTINGS.PREVIOUS_PAGE) ===
//                 'SINGLE_CLIENT_JOBS'
//               ) {
//                 this.router.navigate([`/app/client/${formData?.client}`]);
//                 localStorage.setItem(
//                   SETTINGS.PREVIOUS_PAGE,
//                   'SINGLE_CLIENT_JOB_TABLE'
//                 );
//               } else if (
//                 localStorage.getItem(SETTINGS.PREVIOUS_PAGE) ===
//                 'CALENDAR_SINGLE'
//               ) {
//                 this.router.navigate([`/app/calendar`]);
//                 localStorage.setItem(SETTINGS.PREVIOUS_PAGE, '');
//               } else {
//                 if (
//                   _.isEqual(
//                     this.jobData?.recurringSettings,
//                     formData?.recurringSettings
//                   )
//                 ) {
//                 }
//                 this.router.navigate([`/app/job`]);
//                 localStorage.setItem(SETTINGS.PREVIOUS_PAGE, '');
//               }
//               localStorage.setItem(SETTINGS.SINGLE_JOB_ID, '');
//             })
//             .catch(e => {
//               this.createJobLoading = false;
//               this.messageService.add({
//                 severity: 'error',
//                 summary: 'Error',
//                 detail: e.message,
//               });
//             });
//         },
//         reject: () => {},
//       });
//     }
//     return;
//   }

//   setValues(): void {
//     this.jobForm
//       ?.get('pricingDetails')
//       .valueChanges.subscribe((values: any) => {
//         let amount = 0;
//         let subTotal = 0;
//         let totalGST = 0;
//         let total = 0;
//         values.map((val: any, index: number) => {
//           if (val?.unitPrice && val?.quantity && !val?.includeGST) {
//             amount = val?.unitPrice * val?.quantity;
//             subTotal = subTotal + amount;
//             total = total + amount;
//             this.jobForm
//               ?.get('pricingDetails')
//               .controls[index].controls.amount.setValue(amount, {
//                 onlySelf: true,
//                 emitEvent: false,
//               });
//           }

//           if (val?.unitPrice && val?.quantity && val?.includeGST) {
//             const subAmount = val?.unitPrice * val?.quantity;
//             const gst = (subAmount * 10) / 100;
//             amount = subAmount + gst;
//             subTotal = subTotal + subAmount;
//             total = total + amount;
//             totalGST = totalGST + gst;
//             this.jobForm
//               ?.get('pricingDetails')
//               .controls[index].controls.amount.setValue(subAmount, {
//                 onlySelf: true,
//                 emitEvent: false,
//               });
//           }
//           this.jobForm.patchValue(
//             {
//               subTotal: subTotal,
//               total: total,
//               totalGST: totalGST,
//             },
//             { onlySelf: true, emitEvent: false }
//           );
//         });
//       });

//     // this.jobForm.valueChanges.subscribe((values: any) => {
//     //     this.recurringSettingsChange = !_.isEqual(
//     //         this.buildRecurringSettings(
//     //             this.jobData?.recurringJob?.recurringSettings,
//     //             'jobData'
//     //         ),
//     //         this.buildRecurringSettings(values, 'formData')
//     //     );
//     //     console.log(this.recurringSettingsChange);
//     // });
//   }

//   buildRecurringSettings(data: any, type: any): any {
//     console.log(data, type);
//     return {
//       type: type === 'formData' ? this.recurringType : data?.type,
//       interval: type === 'formData' ? this.intervals : data?.interval,
//       days: type === 'formData' ? this.workDays : data?.days,
//       repeatsOn: type === 'formData' ? this.repeatsOn : data?.repeatsOn,
//       endRepeat: type === 'formData' ? this.endRepeat : data.endRepeat,
//       occurrence:
//         type === 'formData'
//           ? this.endRepeat === 'AFTER'
//             ? this.occurrence
//             : null
//           : data?.occurrence,
//       seriesStartDate:
//         type === 'formData'
//           ? new Date(data?.seriesStartDate).toLocaleDateString()
//           : new Date(data?.startDate).toLocaleDateString(),
//       occurrenceStartDate:
//         type === 'formData'
//           ? new Date(data?.occurrenceStartDate).toLocaleDateString()
//           : new Date(data?.occurrenceStartDate).toLocaleDateString(),
//       endDate:
//         type === 'formData' && data?.endDate == true
//           ? this.endRepeat === 'ON'
//             ? new Date(data?.endDate).toLocaleString()
//             : null
//           : null,
//       shiftStartTime:
//         type === 'formData'
//           ? new Date(this.shiftStartTime).toLocaleTimeString()
//           : new Date(data?.shiftStartTime).toLocaleTimeString(),
//       shiftEndTime:
//         type === 'formData'
//           ? new Date(this.shiftEndTime).toLocaleTimeString()
//           : new Date(data.shiftEndTime).toLocaleTimeString(),
//       staff: data.staff,
//       seriesStaff: data.seriesStaff,
//     };
//   }

//   isRecurringSettingsChange(): void {
//     const jobFormData = this.jobForm.getRawValue();
//     const requiredData = {
//       seriesStartDate: jobFormData.seriesStartDate,
//       endDate: jobFormData.endDate,
//       seriesStaff: jobFormData.seriesStaff.map((s: any) => s.value),
//       staff: jobFormData.staff.map((s: any) => s.value),
//       occurrenceStartDate: jobFormData.startDate,
//     };
//     console.log(requiredData);
//     this.recurringSettingsChange = !_.isEqual(
//       this.buildRecurringSettings(
//         {
//           ...this.jobData?.recurringJob?.recurringSettings,
//           seriesStaff: this.jobData?.recurringJob?.staff,
//           staff: this.jobData?.staff,
//           occurrenceStartDate: this.jobData?.startDateAndTime,
//         },
//         'jobData'
//       ),
//       this.buildRecurringSettings(requiredData, 'formData')
//     );
//     console.log(this.recurringSettingsChange);
//     console.log(
//       this.buildRecurringSettings(
//         {
//           ...this.jobData?.recurringJob?.recurringSettings,
//           seriesStaff: this.jobData?.recurringJob?.staff,
//           staff: this.jobData?.staff,
//           occurrenceStartDate: this.jobData?.startDateAndTime,
//         },
//         'jobData'
//       )
//     );
//     console.log(this.buildRecurringSettings(requiredData, 'formData'));
//   }

//   onUpload(event: any, type: string) {
//     for (const file of event.files) {
//       try {
//         this.isFileUploading = true;
//         // const file: File = event.target.files[0];
//         this.fileService.postFile(file).subscribe(res => {
//           if (type === 'job') {
//             this.uploadedFiles.push({
//               originalFileName: file?.name,
//               url: res?.url,
//             });
//           } else if (type === 'client') {
//             this.uploadedClientFiles.push({
//               originalFileName: file?.name,
//               url: res?.url,
//             });
//           }
//           this.isFileUploading = false;
//         });
//       } catch (e) {
//         throw e;
//       }
//     }
//   }

//   removeFile(event: Event, index: any, type: string): void {
//     this.confirmationService.confirm({
//       target: event.target as EventTarget,
//       message: 'Are you sure you want to delete this attachment?',
//       icon: 'pi pi-exclamation-triangle',
//       acceptLabel: 'Delete',
//       rejectLabel: 'Cancel',
//       rejectButtonStyleClass: 'p-button-primary',
//       accept: () => {
//         if (type === 'job') {
//           this.uploadedFiles.splice(index, 1);
//           if (this.jobId) {
//             this.jobService.updateJob({
//               _id: this.jobId,
//               attachments: this.uploadedFiles,
//             });
//           }
//         } else if (type === 'client') {
//           this.uploadedClientFiles.splice(index, 1);
//         }
//         this.messageService.add({
//           severity: 'success',
//           summary: 'Success',
//           detail: 'Attachment has benn deleted!',
//         });
//       },
//       reject: () => {
//         // this.messageService.add({
//         //     severity: 'error',
//         //     summary: 'Rejected',
//         //     detail: 'Attachment have not been deleted',
//         // });
//       },
//     });
//   }

//   initRenameAttachmentForm() {
//     this.renameAttachmentForm = this.fb.group({
//       fileName: [
//         '',
//         Validators.compose([Validators.required, this.confirmationValidator]),
//       ],
//       fileExtension: [{ value: '', disabled: true }, Validators.required],
//     });
//     this.renameAttachmentForm.valueChanges.subscribe((form: any) => {
//       this.renameAttachmentFormErrors = AppUtils.getFormErrors(
//         this.renameAttachmentForm,
//         this.renameAttachmentFormErrors
//       );
//     });
//   }

//   confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
//     if (!control.value) {
//       return { required: true };
//     } else {
//       for (let i = 0; i < control.value.length; i++) {
//         const letter = control.value[i];
//         if (letter === '.' || letter === '/') {
//           return { confirm: true, error: true };
//         }
//       }
//     }
//     return {};
//   };

//   renameAttachment(index: any, type: string) {
//     this.renameAttachmentIndex = index;
//     this.renameAttachmentType = type;
//     let selectedFileName = '';
//     if (this.renameAttachmentType === 'job') {
//       selectedFileName = this.uploadedFiles[index].originalFileName;
//     } else if (this.renameAttachmentType === 'client') {
//       selectedFileName = this.uploadedClientFiles[index].originalFileName;
//     }
//     const fileNameParts = selectedFileName.split('.');
//     this.renameAttachmentForm.patchValue({
//       fileName: fileNameParts[0],
//       fileExtension: fileNameParts[1],
//     });
//     this.renameAttachmentDialog = true;
//   }

//   renameAttachmentSave() {
//     const editedFileName = this.renameAttachmentForm.getRawValue();
//     if (this.renameAttachmentType === 'job') {
//       this.uploadedFiles[this.renameAttachmentIndex].originalFileName =
//         editedFileName.fileName + '.' + editedFileName.fileExtension;
//       if (this.jobId) {
//         this.jobService.updateJob({
//           _id: this.jobId,
//           attachments: this.uploadedFiles,
//         });
//       }
//     } else if (this.renameAttachmentType === 'client') {
//       this.uploadedClientFiles[this.renameAttachmentIndex].originalFileName =
//         editedFileName.fileName + '.' + editedFileName.fileExtension;
//     }
//     this.messageService.add({
//       severity: 'success',
//       summary: 'Success',
//       detail: 'Attachment has been renamed!',
//     });
//     this.renameAttachmentDialog = false;
//   }

//   renameAttachmentCancel() {
//     this.renameAttachmentDialog = false;
//   }

//   maxFileSizeByMb(maxFileSize: number) {
//     return maxFileSize / 1000000;
//   }

//   getIcon(file: string): string {
//     const urlParts = file.split('/');
//     const fileNameParts = urlParts[urlParts.length - 1].split('.');
//     const fileType = fileNameParts[fileNameParts.length - 1];
//     let icon = '';
//     switch (fileType) {
//       case 'pdf':
//         icon = 'pi-file-pdf';
//         break;
//       case 'doc':
//       case 'docx':
//         icon = 'pi-file-word';
//         break;
//       case 'zip':
//         icon = 'pi-folder';
//         break;
//       default:
//         icon = 'pi-image';
//     }
//     return icon;
//   }

//   messages: Message[] = [
//     {
//       severity: 'warn',
//       summary: '',
//       detail:
//         'Sprint 02 is currently undergoing QA Review, during which any bugs or issues will be identified and subsequently addressed.',
//     },
//   ];

//   //Add contact person stuff
//   visibleContactForm(): void {
//     this.isVisibleAddContact = true;
//   }

//   initContactForm(): void {
//     this.contactForm = this.fb.group({
//       firstname: [null, [Validators.required]],
//       lastname: [null, [Validators.required]],
//       jobPosition: [null],
//       email: [null, [Validators.required, Validators.email]],
//       mobile: [
//         null,
//         [
//           Validators.compose([
//             Validators.required,
//             Validators.pattern(SETTINGS.REGEX.PHONE.EXP),
//           ]),
//         ],
//       ],
//       phoneNumber: [
//         null,
//         [Validators.compose([Validators.pattern(SETTINGS.REGEX.PHONE.EXP)])],
//       ],
//     });

//     this.contactForm.valueChanges.subscribe((form: any) => {
//       this.contactFormErrors = AppUtils.getFormErrors(
//         this.contactForm,
//         this.contactFormErrors
//       );
//     });
//   }

//   submitContactData(): void {
//     this.updateContactLoading = true;
//     try {
//       const contact = this.contactForm.getRawValue();
//       this.selectedClient.contacts.push(contact);
//       this.clientService
//         .updateClient({
//           _id: this.selectedClient._id,
//           contacts: this.selectedClient?.contacts,
//         })
//         .then((res: any) => {
//           this.messageService.add({
//             severity: 'success',
//             summary: 'Success',
//             detail: 'New contact person has been added!',
//           });
//           this.updateContactLoading = false;
//           this.clientContacts = [];
//           res.contacts.map((co: any) => {
//             this.clientContacts.push({
//               label: `${co.firstname} ${co.lastname}`,
//               value: co,
//             });
//           });
//           this.noContacts = false;
//           this.isVisibleAddContact = false;
//           this.contactForm.reset();
//         });
//     } catch (e) {
//       this.updateContactLoading = false;
//       throw e;
//     }
//   }

//   visibleAddressForm(): void {
//     this.isVisibleAddAddress = true;
//   }

//   initAddressForm(): void {
//     this.addressForm = this.fb.group({
//       addressTitle: [null, Validators.required],
//       street: [null],
//       suburb: [null],
//       state: [null],
//       postalCode: [null],
//       unit: [null],
//       abn: [null],
//     });

//     this.addressForm.valueChanges.subscribe((form: any) => {
//       this.addressFormErrors = AppUtils.getFormErrors(
//         this.addressForm,
//         this.addressFormErrors
//       );
//     });
//   }

//   submitAddressData(): void {
//     this.updateAddressLoading = true;
//     try {
//       const address = this.addressForm.getRawValue();
//       this.selectedClient.address.push(address);
//       this.clientService
//         .updateClient({
//           _id: this.selectedClient._id,
//           address: this.selectedClient?.address,
//         })
//         .then((res: any) => {
//           this.messageService.add({
//             severity: 'success',
//             summary: 'Success',
//             detail: 'New address has been added!',
//           });
//           this.clientAddress = [];
//           res.address.map((co: any) => {
//             this.clientAddress.push({
//               label: co.addressTitle,
//               value: co,
//             });
//           });
//           this.noAddress = false;
//           this.isVisibleAddAddress = false;
//           this.updateAddressLoading = false;
//           this.addressForm.reset();
//         });
//     } catch (e) {
//       this.updateAddressLoading = false;
//       throw e;
//     }
//   }

//   closeAddAddress(): void {
//     this.addressForm.reset();
//     this.isVisibleAddAddress = false;
//   }

//   editJob(): void {
//     this.confirmationService.confirm({
//       key: 'updateJobForm',
//       message: `Are you sure you want to save changes ?`,
//       icon: 'pi pi-exclamation-triangle',
//       accept: () => {
//         this.visibleEditableOptions = false;
//         this.createJobLoading = true;
//         let staff: any[] = [];
//         let payload = {};
//         const formData = this.jobForm.getRawValue();
//         const start = new Date(formData.startDate);
//         start.setMinutes(this.shiftStartTime.getMinutes());
//         start.setHours(this.shiftStartTime.getHours());
//         start.setSeconds(this.shiftStartTime.getSeconds());
//         formData.startDate = start;
//         const end = new Date(formData.startDate);
//         end.setMinutes(this.shiftEndTime.getMinutes());
//         end.setHours(this.shiftEndTime.getHours());
//         end.setSeconds(this.shiftEndTime.getSeconds());
//         formData.endDate = end;
//         formData?.staff?.forEach((st: any) => {
//           staff.push(st.value);
//         });
//         payload = {
//           pricingDetails: formData.pricingDetails,
//           staff: staff,
//           client: formData.client,
//           title: formData.title,
//           subject: formData.subject,
//           description: formData.description,
//           startDateAndTime: formData.startDate,
//           endDateAndTime: formData.endDate,
//           subTotal: formData.subTotal,
//           totalGST: formData.totalGST,
//           total: formData.total,
//           jobLocation: formData.jobLocation,
//           remarks: formData.remarks,
//           status: formData.status,
//           priorityLevel: formData.priorityLevel,
//           colorHEX: formData.colorHEX,
//           isRecurring: formData.isRecurring,
//           attachments: this.uploadedFiles,
//           haveContact: this.isAddContact && !this.noContacts,
//           contactPerson:
//             this.isAddContact && !this.noContacts ? this.selectedContact : null,
//         };
//         if (
//           localStorage.getItem(SETTINGS.PREVIOUS_PAGE) === 'JOBS' ||
//           localStorage.getItem(SETTINGS.PREVIOUS_PAGE) === 'SINGLE_JOB' ||
//           localStorage.getItem(SETTINGS.PREVIOUS_PAGE) ===
//             'SINGLE_CLIENT_JOBS' ||
//           localStorage.getItem(SETTINGS.PREVIOUS_PAGE) === 'CALENDAR_SINGLE'
//         ) {
//           this.jobService
//             .updateJob({ _id: this.jobId, ...payload })
//             .then(res => {
//               this.createJobLoading = false;
//               this.messageService.add({
//                 severity: 'success',
//                 summary: 'Success',
//                 detail: 'Job has been updated!',
//               });
//               this.jobForm.reset();
//               this.selectedClient = null;
//               this.selectedContact = null;
//               if (localStorage.getItem(SETTINGS.PREVIOUS_PAGE) === 'JOBS') {
//                 this.router.navigate(['/app/job']);
//                 localStorage.setItem(SETTINGS.PREVIOUS_PAGE, '');
//               } else if (
//                 localStorage.getItem(SETTINGS.PREVIOUS_PAGE) ===
//                 'SINGLE_CLIENT_JOBS'
//               ) {
//                 this.router.navigate([`/app/client/${formData?.client}`]);
//                 localStorage.setItem(
//                   SETTINGS.PREVIOUS_PAGE,
//                   'SINGLE_CLIENT_JOB_TABLE'
//                 );
//               } else if (
//                 localStorage.getItem(SETTINGS.PREVIOUS_PAGE) ===
//                 'CALENDAR_SINGLE'
//               ) {
//                 this.router.navigate([`/app/calendar`]);
//                 localStorage.setItem(SETTINGS.PREVIOUS_PAGE, '');
//               } else {
//                 this.router.navigate([`/app/job/${this.jobId}`]);
//                 localStorage.setItem(SETTINGS.PREVIOUS_PAGE, '');
//               }
//             })
//             .catch(e => {
//               if (e.error.removedStaff) {
//                 let errorMessage = '';
//                 if (e.error.staff.length === 1) {
//                   errorMessage = `${e.error.staff[0]} is unavailable on this shift time`;
//                 } else {
//                   errorMessage = `${e.error.staff.join(
//                     ','
//                   )} are unavailable on this shift time`;
//                 }
//                 this.createJobLoading = false;
//                 this.messageService.add({
//                   severity: 'error',
//                   summary: 'Error',
//                   detail: errorMessage,
//                 });
//               } else {
//                 this.createJobLoading = false;
//                 this.messageService.add({
//                   severity: 'error',
//                   summary: 'Error',
//                   detail: e.error.message,
//                 });
//               }
//             });
//         }
//       },
//       reject: () => {},
//     });
//   }

//   editJobSeries(): void {
//     this.confirmationService.confirm({
//       key: 'updateJobForm',
//       message: `Are you sure you want to save changes ?`,
//       icon: 'pi pi-exclamation-triangle',
//       accept: () => {
//         this.visibleEditableOptions = false;
//         this.createJobLoading = true;
//         let staff: any[] = [];
//         let payload = {};
//         let recurringSettings: any = {};
//         const formData = this.jobForm.getRawValue();
//         recurringSettings = {
//           type: this.recurringType,
//           interval: this.intervals,
//           days: this.workDays,
//           repeatsOn: this.repeatsOn,
//           endRepeat: this.endRepeat,
//           occurrence: this.endRepeat === 'AFTER' ? this.occurrence : null,
//           startDate: formData.seriesStartDate.toLocaleString(),
//           endDate:
//             this.endRepeat === 'ON' ? formData.endDate.toLocaleString() : null,
//           shiftStartTime: this.shiftStartTime,
//           shiftEndTime: this.shiftEndTime,
//         };
//         formData?.seriesStaff?.forEach((st: any) => {
//           staff.push(st.value);
//         });
//         payload = {
//           pricingDetails: formData.pricingDetails,
//           staff: staff,
//           client: formData.client,
//           title: formData.title,
//           subject: formData.subject,
//           description: formData.description,
//           recurringSettings: recurringSettings,
//           subTotal: formData.subTotal,
//           totalGST: formData.totalGST,
//           total: formData.total,
//           jobLocation: formData.jobLocation,
//           remarks: formData.remarks,
//           status: formData.status,
//           priorityLevel: formData.priorityLevel,
//           colorHEX: formData.colorHEX,
//           isRecurring: formData.isRecurring,
//           attachments: this.uploadedFiles,
//           haveContact: this.isAddContact && !this.noContacts,
//           contactPerson:
//             this.isAddContact && !this.noContacts ? this.selectedContact : null,
//         };
//         this.jobService
//           .updateRecurringJob({ _id: this.recurringJobData?._id, ...payload })
//           .then(res => {
//             this.createJobLoading = false;
//             this.messageService.add({
//               severity: 'success',
//               summary: 'Success',
//               detail: 'Job series has been updated!',
//             });
//             this.jobForm.reset();
//             this.selectedClient = null;
//             this.selectedContact = null;
//             if (localStorage.getItem(SETTINGS.PREVIOUS_PAGE) === 'JOBS') {
//               this.router.navigate(['/app/job']);
//               localStorage.setItem(SETTINGS.PREVIOUS_PAGE, '');
//             } else if (
//               localStorage.getItem(SETTINGS.PREVIOUS_PAGE) ===
//               'SINGLE_CLIENT_JOBS'
//             ) {
//               this.router.navigate([`/app/client/${formData?.client}`]);
//               localStorage.setItem(
//                 SETTINGS.PREVIOUS_PAGE,
//                 'SINGLE_CLIENT_JOB_TABLE'
//               );
//             } else if (
//               localStorage.getItem(SETTINGS.PREVIOUS_PAGE) === 'CALENDAR_SINGLE'
//             ) {
//               this.router.navigate([`/app/calendar`]);
//               localStorage.setItem(SETTINGS.PREVIOUS_PAGE, '');
//             } else {
//               if (
//                 _.isEqual(
//                   this.jobData?.recurringSettings,
//                   formData?.recurringSettings
//                 )
//               ) {
//               }
//               this.router.navigate([`/app/job`]);
//               localStorage.setItem(SETTINGS.PREVIOUS_PAGE, '');
//             }
//             localStorage.setItem(SETTINGS.SINGLE_JOB_ID, '');
//           })
//           .catch(e => {
//             this.createJobLoading = false;
//             this.messageService.add({
//               severity: 'error',
//               summary: 'Error',
//               detail: e.message,
//             });
//           });
//       },
//       reject: () => {},
//     });
//   }

//   onAddClientPopupChange(event: any): void {
//     switch (event.name) {
//       case 'isVisible':
//         this.BasicShow = event.value;
//         break;
//       case 'resp':
//         this.getClients();
//         this.BasicShow = false;
//     }
//   }
// }
