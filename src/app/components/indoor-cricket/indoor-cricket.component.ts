import { Component, ViewChild, ElementRef } from "@angular/core";
import { RequestService } from "../../Services/request.service";
import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  NgForm,
} from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { flip } from "@popperjs/core";
import * as $ from "jquery";
import { Alert } from "bootstrap";

@Component({
  selector: "app-indoor-cricket",
  templateUrl: "./indoor-cricket.component.html",
  styleUrls: ["./indoor-cricket.component.css"],
})
export class IndoorCricketComponent {
  minDate: any;
  closeResult = "";
  formControlValue = "";
  constructor(private Api: RequestService, private modalService: NgbModal) {
    const current = new Date();
    this.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate(),
    };
  }

  resuilt = false;
  new_div = true;
  booking = false;
  @ViewChild("printArea", { static: false })
  printArea!: ElementRef;
  inputNumber: any;
  itemDeleted = false;
  errr = false;
  datee: any;
  slot_number: any;
  submittedd = false;
  submitted = false;
  member_error = false;
  member_error2 = false;
  isThirdSelectDisabled = false;
  isThirdSelectDisabled1 = false;
  dltt = true;
  from: any;
  to: any;
  restt = false;
  isInvalid = false;
  numberr: any;
  emaill: any;
  namee: any;
  modal_div = true;
  searches: any;
  count2: any;
  cricket_update: any = FormGroup;
  booking_data: any = FormGroup;
  search_item: any = [];
  responseData: any;
  player_response: any;
  user_detail: any;
  user_detail2: any;
  divs = false;
  players: any = [];
  players2: any = [];
  count: any;
  amount: any;
  ex_val: any;
  ex_val2: any;
  div = false;
  new_div2 = true;
  error_msg = false;
  isloading = false;
  isEditing = false;
  submited = false;
  selectedDate: any;
  isDateSelected = false;
  preloaderr = false;
  time_btn: any = [];
  selected_date: any;
  pu: any;
  dataService: any;
  toggle = false;
  slot_id: any;
  slot_name: any;
  hours = [
    "Select hours",
    "12",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
  ];
  hours1 = [
    "Select hours",
    "12",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
  ];
  am = ["PM", "AM"];
  am1 = ["PM", "AM"];
  minute = ["Select Minute", "00", "15", "30", "45"];
  minute1 = ["Select Minute", "00", "15", "30", "45"];
  selectedOption1: any = this.hours[0];
  selectedOption2: any = this.minute[0];
  selectedOption3: any = this.am[0];
  selectedOption4: any = this.hours1[0];
  selectedOption5: any = this.minute1[0];
  selectedOption6: any = this.am1[0];
  arrySlotIndex: any = [];
  ms = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  isChecked: boolean = false;

  addedPlayersArr: any = [];

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
  showLimitError = false;
  matchNumberArray: any = [];
  numberMatched = false;
  exclusive: any;
  exclusiveCheck: any;
  getexclusive: any;
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
  checkboxValue: any = [];
  arryData: any = [];
  arrynumbers: any = [];

  ngOnInit() {
    // this.paintball_update = new FormGroup({
    //  payment_status: new FormControl('',[Validators.required]),
    //   status: new FormControl('',[Validators.required]),
    //    no_of_player: new FormControl('',[Validators.required]),
    //    total_price: new FormControl('',[Validators.required]),
    //    id: new FormControl('',[Validators.required]),
    //  });

    this.booking_data = new FormGroup({
      payment: new FormControl("", [Validators.required]),
      status: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      number: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      exclusive: new FormControl(0),
    });
  }
  search() {
    this.div = true;
    this.divs = false;
    this.new_div = false;
    this.new_div2 = false;
    this.Api.post(
      "api/cricket/booking_search/date",
      { data: this.searches },
      false
    ).subscribe((response: any) => {
      this.responseData = response;
      this.user_detail = this.responseData[0];
      this.players = this.responseData[0].player;
      let i = 0;
      this.players.forEach((element: any) => {
        if (element.status == 1) {
          i++;
        }
      });
      this.count = i;
      let ex = this.user_detail.exclusivity == "Exclusive" ? 1000 : 0;
      this.ex_val = this.count * this.user_detail.each_amount + ex;
      this.cricket_update.patchValue({
        no_of_player: this.count,
        total_price: this.ex_val,
        id: this.user_detail.id,
      });
    });
  }
  onDateSelect(event: any, form: NgForm) {
    // console.log(this.selectedDate)
    if (this.inputNumber <= 0) {
      this.member_error2 = false;
      this.member_error = true;

      return;
    } else if (form.invalid) {
      this.member_error2 = true;
      this.member_error = false;

      return;
    }

    this.isDateSelected = true;
    this.selected_date =
      this.selectedDate["day"] +
      "-" +
      this.selectedDate["month"] +
      "-" +
      this.selectedDate["year"];

    // this.Api.post('api/slot/slot_check',{ date: this.selected_date },false).subscribe((response: any) => {
    //   this.time_btn = response;

    // });
    console.log(this.selected_date);
    console.log(this.inputNumber);
    this.booking = true;
  }
  onSubmitt() {
    this.submittedd = true;
    if (this.booking_data.valid) {
      alert("Booking Confirmed");
      console.log(this.booking_data);
    }
  }
  onPreviousClick() {
    this.isDateSelected = false;
    this.booking = false;
  }
  onBack() {
    this.resuilt = false;
    this.booking = true;
  }
  submitForm(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.from =
        this.selectedOption1 +
        "-" +
        this.selectedOption2 +
        "-" +
        this.selectedOption3;
      this.to =
        this.selectedOption4 +
        "-" +
        this.selectedOption5 +
        "-" +
        this.selectedOption6;
      console.log(
        "From " + this.selected_date,
        this.selectedOption1 +
          "-" +
          this.selectedOption2 +
          "-" +
          this.selectedOption3
      );
      console.log(
        "To " + this.selected_date,
        this.selectedOption4 +
          "-" +
          this.selectedOption5 +
          "-" +
          this.selectedOption6
      );
      this.booking = false;
      this.resuilt = true;
      console.log(form.value);
    }
  }
  boxes() {
    this.resuilt = false;
    this.booking = true;
    // this.new_div2 = true;
    // this.divs = false;
  }
  onChanges(value: string) {
    this.selectedOption1 = value;
    this.isThirdSelectDisabled = true;
  }
  onChangess(value: string) {
    this.selectedOption4 = value;
    this.isThirdSelectDisabled1 = true;
  }

  boxes1() {
    this.div = false;
    this.new_div = true;
  }
}
