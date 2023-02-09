import { Component, ViewChild, ElementRef  } from '@angular/core';
import { RequestService } from '../../Services/request.service';
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { ReactiveFormsModule,FormGroup,FormControl, Validators, NgForm } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { flip } from '@popperjs/core';
import * as $ from 'jquery';
import { Alert } from 'bootstrap';



@Component({
  selector: 'app-paintball',
  templateUrl: './paintball.component.html',
  styleUrls: ['./paintball.component.css'],
})
export class PaintballComponent {
  minDate:any;
  closeResult = '';
  formControlValue = '';
  nameControl = new FormControl('', [Validators.required]);
toggleValue: any;
  player: any;
  constructor(private Api: RequestService,private modalService: NgbModal) {
    const current = new Date();
    this.minDate = {    year: current.getFullYear(),    month: current.getMonth() + 1,    day: current.getDate()  };

  }
  @ViewChild('printArea', { static: false })
  printArea!: ElementRef;
  inputNumber: any;
  itemDeleted = false;
  errr = false;
  datee:any;
  slot_number:any;
  submittedd = false;
  submitted = false;
  member_error = false;
  member_error2 = false;
  dltt = true;
  restt = false;
  isInvalid = false;
  numberr:any;
  emaill:any;
  namee:any;
  modal_div = true;
  searches: any;
  count2:any;
  paintball_update:any = FormGroup;
  booking_data:any = FormGroup;
  search_item: any = [];
  responseData: any;
  player_response:any;
  user_detail: any;
  user_detail2:any;
  divs = false;
  players: any = [];
  players2: any = [];
  count:any;
  amount:any;
  ex_val:any;
  ex_val2:any;
  div = false;
  new_div = true;
  new_div2 = true;
  error_msg = false;
  isloading = false;
   isEditing = false;
   submited=  false;
   selectedDate: any;
   isDateSelected = false;
   preloaderr = false;
   time_btn:any = [];
   selected_date:any;
   pu:any;
   dataService:any
   toggle = false;
   slot_id:any
   slot_name:any
   arrySlotIndex:any = [];
   ms = [
    '',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
   isChecked: boolean = false;
   

   addedPlayersArr :any = [];
   seats = [
    {
      name: 'Slot 1',
      label: 'slot-1',
      checked: false,
      value: 'Available',
      id: 0,
    },
    {
      name: 'Slot 2',
      label: 'slot-2',
      checked: false,
      value: 'Available',
      id: 1,
    },
    {
      name: 'Slot 3',
      label: 'slot-3',
      checked: false,
      value: 'Available',
      id: 2,
    },
    {
      name: 'Slot 4',
      label: 'slot-4',
      checked: false,
      value: 'Available',
      id: 3,
    },
    {
      name: 'Slot 5',
      label: 'slot-5',
      checked: false,
      value: 'Available',
      id: 4,
    },
    {
      name: 'Slot 6',
      label: 'slot-6',
      checked: false,
      value: 'Available',
      id: 5,
    },
    {
      name: 'Slot 7',
      label: 'slot-7',
      checked: false,
      value: 'Available',
      id: 6,
    },
    {
      name: 'Slot 8',
      label: 'slot-8',
      checked: false,
      value: 'Available',
      id: 7,
    },
    {
      name: 'Slot 9',
      label: 'slot-9',
      checked: false,
      value: 'Available',
      id: 8,
    },
    {
      name: 'Slot 10',
      label: 'slot-10',
      checked: false,
      value: 'Available',
      id: 9,
    },
    {
      name: 'Slot 11',
      label: 'slot-11',
      checked: false,
      value: 'Available',
      id: 10,
    },
    {
      name: 'Slot 12',
      label: 'slot-12',
      checked: false,
      value: 'Available',
      id: 11,
    },
    {
      name: 'Slot 13',
      label: 'slot-13',
      checked: false,
      value: 'Available',
      id: 12,
    },
    {
      name: 'Slot 14',
      label: 'slot-14',
      checked: false,
      value: 'Available',
      id: 13,
    },
    {
      name: 'Slot 15',
      label: 'slot-15',
      checked: false,
      value: 'Available',
      id: 14,
    },
    {
      name: 'Slot 16',
      label: 'slot-16',
      checked: false,
      value: 'Available',
      id: 15,
    },
  ];

 
  selectedTimeId: any;
 
  name: any;
  number: any;
  arr: any = [];
  numberOfPlayers: any;
  slotIndex: any;
  editIcon = false;
  loadingSlots = true;
  addedPlayers: any;
  totalPlayers: any;
  slotName: any;
  showLimitError = false
  matchNumberArray:any = []
  numberMatched = false
  exclusive:any
  exclusiveCheck:any
  getexclusive:any
  isLoading = true;
  timeSlots = [];
  SlotsIndex = [];
  selectedTime: any;
  checkBoxChecked: any;
  userData: any;
  jsonUserData: any;
  showSpan = false;
  selected: any;
  booked = false;
  checkboxValue:any = []
  arryData:any = [];
  arrynumbers:any = []; 
  
 

  
   
  ngOnInit() {
   this.paintball_update = new FormGroup({
    payment_status: new FormControl('',[Validators.required]),
     status: new FormControl('',[Validators.required]),
      no_of_player: new FormControl('',[Validators.required]),
      total_price: new FormControl('',[Validators.required]),
      id: new FormControl('',[Validators.required]),
    });

    this.booking_data = new FormGroup({
      payment: new FormControl('',[Validators.required]),
      status: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required]),
      number: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      exclusive: new FormControl(0),
      });
  }
  
  onDateSelect(event:any,form: NgForm) {
    // console.log(this.selectedDate)
    if(this.inputNumber  <=  0  || this.inputNumber >16){
      this.member_error2 = false;
      this.member_error = true;

      return;
    }else if(form.invalid){
      this.member_error2 = true;
      this.member_error = false;


      return;
    }
    
    
    this.isDateSelected = true;
    this.preloaderr = true;
    this.selected_date = (this.selectedDate['day']+'-'+this.selectedDate['month']+'-'+this.selectedDate['year']);
  
    this.Api.post('api/slot/slot_check',{ date: this.selected_date },false).subscribe((response: any) => {
      this.time_btn = response;
      this.preloaderr = false;

    });
  }
  onPreviousClick() {
    this.isDateSelected = false;
    this.preloaderr = false;
  }
  stringToDate(dateString: string) {
    return moment(dateString).toDate();
  }

  search() {
    this.div = true;
    this.divs = false;
    this.new_div = false;
      this.new_div2 = false;
    this.Api.post('api/paintball/search',{ data: this.searches },false).subscribe((response: any) => {
      this.responseData = response;
      this.user_detail = this.responseData[0];
      this.players = this.responseData[0].player;
      let i = 0;
      this.players.forEach((element:any) => {
        if(element.status == 1){
          i++
        }
      });
      this.count = i;
      let ex  =    this.user_detail.exclusivity == 'Exclusive' ? 1000 : 0 ;
      this.ex_val = (this.count*this.user_detail.each_amount)+ex;
      this.paintball_update.patchValue({ no_of_player:this.count , total_price:this.ex_val, id:this.user_detail.id });
      });
        
  };
  update_players(e:any,s:any){
    if(s == true){
     this.isloading = true;
    let arr  = {
      "id" : e ,
      "status" : 2
    }
    this.Api.post('api/paintball/players', arr,false).subscribe((response: any) => {
      this.search();
      this.isloading = false;
    }); 
   }
   else{
    this.isloading = true;  
    let arr  = {
      "id" : e ,
      "status" : 1
    }
    this.Api.post('api/paintball/players', arr,false).subscribe((response: any) => {
      this.search();
      this.isloading = false;
    }); 
   }
    // console.log(e.target.checked);
  }
onsubmit(){
    this.Api.post('api/paintball/update', this.paintball_update.value,false).subscribe((response: any) => {
      this.search();
      this.print();
    }); 
 
 
}

rules(){
this.pu =  this.paintball_update.controls 
}
boxes(){
this.div = false
this.new_div = true;
this.new_div2 = true;
this.divs = false;
}
open(content: any,btn:any) {


if(btn.book_status == 'Deactive'){
  return;
}
this.slot_id = btn.id
this.slot_name = btn.name

  let d = {
    "date": this.selected_date,
    "id": btn.id
}
this.datee = d.date
this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
this.loadingSlots = true;
  this.Api.post('api/slot/slot_index',d ,false).subscribe((response: any) => {
    response.forEach((element: any) => {
    
      $('#'+ element.index+'a')
        .parent()
        .empty()
        .addClass(`${element.status == 'Booked' ? 'slot_booked' : 'slot_box2'}`)
        .append(
          `<span style="font-size: 15px;line-height: 1.2;text-align: center;padding-top: 19px;" >${element.status == "Booked" ? element.name :  'Expires at <span style="color:#4aff3e;padding-top:4px;font-size: 12px;">'+element.exp_date+'</span>'}</span>`
        );
    })
    this.loadingSlots = false;
  }); 
}
checkNumber(){
  if(this.number.length == 11){
    if( this.matchNumberArray.includes(this.number)){
      this.numberMatched = true
    }
    else{
      this.numberMatched = false
    }
    this.Api.post('api/player',{"number" : this.number},false).subscribe((res:any)=>{
    // console.log(this.name = res.name)
  })
}
  
}
bookSlot(seat: any, i: any) {
  if (this.name !== undefined && this.name !== undefined && this.name !== "" && this.name !== "") {
    // console.log(this.exclusive)
    this.editIcon = true;
    seat.value = this.name;
    this.arryData[i] = this.name;
    this.arrynumbers[i] = this.number;
    this.matchNumberArray.push(this.number)
    this.arrySlotIndex[i] = i;
    this.booked = true;
    this.checkboxValue[i] = true;
    this.submited = true;
    let a  = [];

   

    // console.log(this.arrynumbers.length);
    for (let i = 0; i < this.arrynumbers.length; i++) {
      if (this.arrynumbers[i] != undefined) {
        // console.log(this.arrynumbers[i]);
        a.push({number:this.number[i] });
      }
    }

    this.addedPlayers = a.length;
    // console.log(this.addedPlayers)
    // this.slot_number = this.arrynumbers.length


    setTimeout(() => {
      this.booked = false;
      this.selected = false;
      this.name = '';
      this.number = '';
    }, 500);
  }
  if (this.name == undefined || this.number == undefined || this.number == "" || this.name == "") {
    this.submited = false;
  }
}
 

  uncheckCheckbox(seat: any, i: any) {
    seat.checked = false;
    seat.value = 'Available';
    this.selected = 'null';
    this.checkboxValue[i] = false;
    this.arryData.splice(i, 1);
    this.arrynumbers.splice(i, 1);
    this.addedPlayersArr.splice(1,1)
    this.addedPlayers = this.arryData.length;
    this.numberMatched = false;
    this.submited = true;
  }
  // data_store(){
  //   console.log(this.inputNumber)
  // }

  // send data 
  sendData() {
    const data = {
      slotName: this.slotName,
      player_info: this.arr,
      exclusive: this.getexclusive
    };
    // console.log(this.arr)
    const token = false;
    localStorage.setItem('booking_final', JSON.stringify(data));
  }
  // send data 
  goToNextPage(pageName: string, content: any) {
    this.divs = true;
    this.new_div2 = false;
    this.arr= []
    for (let i = 0; i < this.arrynumbers.length; i++) {
      if (this.arrynumbers[i] != undefined) {
        this.arr.push({
          player: this.arryData[i],
          number: this.arrynumbers[i],
          slot_index: parseInt(this.arrySlotIndex[i]),
          ticket_price :'2000'
        });
      }
    }
    if(this.addedPlayers == this.inputNumber){

  
    this.sendData();
    this.modalService.dismissAll(content);
    // console.log(this.arr);
    this.player_response = this.arr;
      this.user_detail2 = this.player_response[0];
      this.players2 = this.player_response[0].player;
      // this.players2.forEach((element:any) => {
      //   if(element.status == 1){
      //     i++
      //   }
      // this.count2 = i;
      // let ex2  =    this.user_detail.exclusivity == 'Exclusive' ? 1000 : 0 ;
      this.ex_val2 = (this.addedPlayers*this.user_detail2.ticket_price);
      // console.log(this.ex_val2)
      // this.paintball_update2.patchValue({ no_of_player:this.count2 , total_price:this.ex_val2, id:this.user_detail2.id });
      
    }else{
      this.errr = true;
      this.new_div2 = true;
      this.divs = false;
    }
  // });

      // let ex  =    this.user_detail.exclusivity == 'Exclusive' ? 1000 : 0 ;
      // this.ex_val = (this.count*this.user_detail.each_amount)+ex;
      // this.paintball_update.patchValue({ no_of_player:this.count , total_price:this.ex_val, id:this.user_detail.id });
}

  // validateInput(input: HTMLInputElement) {
  //   if (!input.value) {
  //     this.isInvalid = true;
  //   } else {
  //     this.isInvalid = false;
  //   }
  // }
  // submitForm() {
  //   if(this.isInvalid = true){
  //   }else{
  //     console.log(this.booking_data);
  //   }
    
    
  // }
  onSubmitt() {
    this.submitted = true;
    if (this.booking_data.valid) {
      alert("Booking Confirmed")
      console.log(this.booking_data);
    }
   
  }

  onCheckboxChange() {
    if (this.booking_data.get('exclusive').value) {
      this.ex_val2 = this.ex_val2+1000

    }else{
      this.ex_val2 = this.ex_val2-1000
    }
  }
  deleteItem() {
    this.itemDeleted = true;
    // console.log()
  }

  restoreItem() {
    this.itemDeleted = false;
  }


  // PRINT
  print() {
    let printContents, popupWin;
    printContents = this.printArea.nativeElement.innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=10%,width=auto');
    if (!popupWin) {
      console.log("Popup was blocked please allow pop-ups for this page");
      return;
    }
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
        </head>
        <style>
        @font-face {
          font-family: "jersey";
          src: url("../../../assets/fonts/Jersey M54.rtf");
        }
#invoice-POS {
  box-shadow: 0 0 1in -0.25in rgba(0, 0, 0, 0.5);
  
  background: #fff;
}
#invoice-POS ::selection {
  background: #f31544;
  color: #fff;
}
#invoice-POS ::moz-selection {
  background: #f31544;
  color: #fff;
}
#invoice-POS h1 {
  font-size: 1.5em;
  color: #222;
  font-family: jersey;
}
#invoice-POS h2 {
  font-size: 0.9em;
  font-family: "Jersey M54", sans-serif;
  font-weight: bolder;
}
#invoice-POS h3 {
  font-size: 1.2em;
  font-weight: 300;
  line-height: 2em;
}
#invoice-POS p {
  font-size: 0.7em;
  color: #000;
  line-height: 1.2em;
  font-family: "Jersey M54", sans-serif;
}
#invoice-POS #top,
#invoice-POS #mid,
#invoice-POS #bot {
  /* Targets all id with 'col-' */
  border-bottom: 1px solid #eee;
}
#invoice-POS #top {
  display: table;
  margin: auto;
}
#invoice-POS #mid {
  min-height: 80px;
}
#invoice-POS #bot {
  min-height: 50px;
}
#invoice-POS #top .logo {
  height: 45px;
  width: 150px;
  display: flex;
  justify-content: center;
  background: url(../../../assets/logo/logo.png) no-repeat center;
  background-size: 150px 45px;
}
#invoice-POS .clientlogo {
  float: left;
  height: 60px;
  width: 60px;
  background: url(http://michaeltruong.ca/images/client.jpg) no-repeat;
  background-size: 60px 60px;
  border-radius: 50px;
}
#invoice-POS .info {
  display: block;
  margin-left: 0;
}
#invoice-POS .info td {
  font-size: 16px;
}
.align-last {
  position: relative;
  text-align: left;
  left: 20px;
}
#invoice-POS .title {
  float: right;
}
#invoice-POS .title p {
  text-align: right;
}
#invoice-POS table {
  width: 100%;
  border: 1px px solid black;
  border-collapse: collapse;
}
#table{
  border:1px solid black;
  margin-top:10px;
}
#table1 td{
  border-bottom:1px solid black !important;
  border-collapse: separate;
}
#table1 td span{
  margin-left:5px;
}
#table1 td h1{
  margin:5px;
}

#invoice-POS .tabletitle {
  font-size: 0.5em;
  background: #eee;
}
#invoice-POS .service {
  border-bottom: 1px solid #eee;
}
#invoice-POS .item {
  width: 24mm;
}
#invoice-POS .itemtext {
  font-size: 0.5em;
}
#invoice-POS #legalcopy {
  margin-top: 5mm;
}
#legalcopy{
  text-align:center;
}
</style>
        <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    //  popupWin.document.close();  
  }
}
