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
  selector: 'app-badminton',
  templateUrl: './badminton.component.html',
  styleUrls: ['./badminton.component.css']
})
export class BadmintonComponent {
  minDate:any;
  closeResult = '';
  formControlValue = '';
  constructor(private Api: RequestService,private modalService: NgbModal) {
    const current = new Date();
    this.minDate = { year: current.getFullYear(), month: current.getMonth() + 1, day: current.getDate() };
  }
  
  time_slot = false;
  new_div = true;
  booking = false;
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
  isThirdSelectDisabled = false;
  isThirdSelectDisabled1 = false;
  dltt = true;
  from :any
  to :any
  restt = false;
  isInvalid = false;
  numberr:any;
  emaill:any;
  namee:any;
  modal_div = true;
  searches: any;
  count2:any;
  cricket_update:any = FormGroup;
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
  new_div2 = true;
  nextPage = false;
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
   hours = ['Select hours','12', '1', '2','3','4','5','6','7','8','9', '10','11'];
   hours1 = ['Select hours','12', '1', '2','3','4','5','6','7','8','9', '10','11'];
   minute = ['Select Minute','00','15', '30','45'];
   minute1 = ['Select Minute','00','15', '30','45'];
   selectedOption1: any = this.hours[0];
  selectedOption2: any = this.minute[0];
  selectedOption3: any ;
   selectedOption4: any = this.hours1[0];
  selectedOption5: any = this.minute1[0];
  selectedOption6: any;
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
  //  seats = [
  //   {
  //     name: 'Slot 1',
  //     label: 'slot-1',
  //     checked: false,
  //     value: 'Available',
  //     id: 0,
  //   },
  //   {
  //     name: 'Slot 2',
  //     label: 'slot-2',
  //     checked: false,
  //     value: 'Available',
  //     id: 1,
  //   },
  //   {
  //     name: 'Slot 3',
  //     label: 'slot-3',
  //     checked: false,
  //     value: 'Available',
  //     id: 2,
  //   },
  //   {
  //     name: 'Slot 4',
  //     label: 'slot-4',
  //     checked: false,
  //     value: 'Available',
  //     id: 3,
  //   },
  //   {
  //     name: 'Slot 5',
  //     label: 'slot-5',
  //     checked: false,
  //     value: 'Available',
  //     id: 4,
  //   },
  //   {
  //     name: 'Slot 6',
  //     label: 'slot-6',
  //     checked: false,
  //     value: 'Available',
  //     id: 5,
  //   },
  //   {
  //     name: 'Slot 7',
  //     label: 'slot-7',
  //     checked: false,
  //     value: 'Available',
  //     id: 6,
  //   },
  //   {
  //     name: 'Slot 8',
  //     label: 'slot-8',
  //     checked: false,
  //     value: 'Available',
  //     id: 7,
  //   },
  //   {
  //     name: 'Slot 9',
  //     label: 'slot-9',
  //     checked: false,
  //     value: 'Available',
  //     id: 8,
  //   },
  //   {
  //     name: 'Slot 10',
  //     label: 'slot-10',
  //     checked: false,
  //     value: 'Available',
  //     id: 9,
  //   },
  //   {
  //     name: 'Slot 11',
  //     label: 'slot-11',
  //     checked: false,
  //     value: 'Available',
  //     id: 10,
  //   },
  //   {
  //     name: 'Slot 12',
  //     label: 'slot-12',
  //     checked: false,
  //     value: 'Available',
  //     id: 11,
  //   },
  //   {
  //     name: 'Slot 13',
  //     label: 'slot-13',
  //     checked: false,
  //     value: 'Available',
  //     id: 12,
  //   },
  //   {
  //     name: 'Slot 14',
  //     label: 'slot-14',
  //     checked: false,
  //     value: 'Available',
  //     id: 13,
  //   },
  //   {
  //     name: 'Slot 15',
  //     label: 'slot-15',
  //     checked: false,
  //     value: 'Available',
  //     id: 14,
  //   },
  //   {
  //     name: 'Slot 16',
  //     label: 'slot-16',
  //     checked: false,
  //     value: 'Available',
  //     id: 15,
  //   },
  // ];

 
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
    // this.paintball_update = new FormGroup({
    //  payment_status: new FormControl('',[Validators.required]),
    //   status: new FormControl('',[Validators.required]),
    //    no_of_player: new FormControl('',[Validators.required]),
    //    total_price: new FormControl('',[Validators.required]),
    //    id: new FormControl('',[Validators.required]),
    //  });
 
    //  this.booking_data = new FormGroup({
    //    payment: new FormControl('',[Validators.required]),
    //    status: new FormControl('',[Validators.required]),
    //    name: new FormControl('',[Validators.required]),
    //    number: new FormControl('',[Validators.required]),
    //    email: new FormControl('',[Validators.required]),
    //    exclusive: new FormControl(0),
    //    });
   }
  search() {
    this.div = true;
    this.divs = false;
    this.new_div = false;
      this.new_div2 = false;
    this.Api.post('api/cricket/booking_search/date',{ data: this.searches },false).subscribe((response: any) => {
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
      this.cricket_update.patchValue({ no_of_player:this.count , total_price:this.ex_val, id:this.user_detail.id });
      });
        
  };
  onDateSelect(event:any,form: NgForm) {
    // console.log(this.selectedDate)
    if(this.inputNumber  <=  0 || this.inputNumber > 4){
      this.member_error2 = false;
      this.member_error = true;

      return;
    }else if(form.invalid){
      this.member_error2 = true;
      this.member_error = false;


      return;
    }
    
    this.isDateSelected = true;
    this.selected_date = (this.selectedDate['day']+'-'+this.selectedDate['month']+'-'+this.selectedDate['year']);
  
    // this.Api.post('api/slot/slot_check',{ date: this.selected_date },false).subscribe((response: any) => {
    //   this.time_btn = response;
      

    // });
    console.log(this.selected_date)
    console.log(this.inputNumber)
    this.booking = true;
    this.time_slot = true;
  }
  onBack() {
    this.nextPage = false;
    this.time_slot = true
  }
  onBack1() {
    this.time_slot = false
    this.isDateSelected = false
  }
  onFront(){
    this.time_slot = false;
    this.nextPage = true
  }
  boxes(){
    this.nextPage = false
    this.time_slot = true;
    }
  boxes1(){
    this.div = false
    this.new_div = true;
    }
  
}
