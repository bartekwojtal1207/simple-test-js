// function AppViewModel() {// this is vievmodel
//
//     this.firstName =  ko.observable("Bartek");
//     this.lastName =  ko.observable("Wojtal");
//
//     this.fullName = ko.computed(function() {
//         return this.firstName() + " " + this.lastName();
//     }, this);
//
//     this.capitalizeLastName = function() {
//         var currentVal = this.lastName();        // Read the current value
//         this.lastName(currentVal.toUpperCase()); // Write back a modified value
//     };
// };
// ko.applyBindings(new AppViewModel());
//
//
// function SeatReservation(name, initialMeal) {
//     var self = this;
//     self.name = name;
//     self.meal = ko.observable(initialMeal);
// }
//
// // Overall viewmodel for this screen, along with initial state
// function ReservationsViewModel() {
//     var self = this;
//
//     // Non-editable catalog data - would come from the server
//     self.availableMeals = [
//         { mealName: "Standard (sandwich)", price: 10 },
//         { mealName: "Premium (lobster)", price: 34.95 },
//         { mealName: "Ultimate (whole zebra)", price: 290 }
//     ];
//
//     // Editable data
//     self.seats = ko.observableArray([
//         new SeatReservation("Steve", self.availableMeals[0]),
//         new SeatReservation("Bert", self.availableMeals[1]),
//         new SeatReservation("Bartek", self.availableMeals[2])
//     ]);
//
//     self.addSeat = function() {
//         self.seats.push(new SeatReservation("", self.availableMeals[0]));
//     }
//
//     self.removeSeat = function(seat) { self.seats.remove(seat) }
//
//     self.totalSurcharge = ko.computed(function() {
//         var total = 0;
//         for (var i = 0; i < self.seats().length; i++)
//             total += self.seats()[i].meal().price;
//         return total;
//     });
//
// }
//
// ko.applyBindings(new ReservationsViewModel());
//
// function WebmailViewModel() {
//     // Data
//     var self = this;
//
//     self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
//     self.chosenFolderId = ko.observable();
//     self.chosenFolderData = ko.observable();
//        self.chosenMailData = ko.observable();
//
//     // // Behaviours
//     self.goToFolder = function(folder) {
//         // self.goToFolder('Inbox');
//         self.chosenFolderId(folder);
//         $.get('/mail', { folder: folder }, self.chosenFolderData);
//     };
//
// };

// ko.applyBindings(new WebmailViewModel());
// // document.addEventListener('DOMContentLoaded',function (e) {
//    console.log(e);
var  liTest = $('.ul-test .li-test');
$(liTest).css('opacity','.5');
liTest.each(function( index ) {



    $(this).hover(function () {

        $(this).toggleClass('hover');
        // $(this).fadeToggle( "slow", "linear" );
        $(this).css('opacity','.9');
    });



});


var checkbox = $('.checkkBoxId');
$(checkbox).attr('checked', false);

$(checkbox).click(function() {

    $(this).parent().toggleClass('active');

});
// checkbox.each(function (index) {
//
//     if($().is(':checked')){
//         $(this).addClass('hover');
//
//     }else {
//         $(this).removeClass('hover');
//     };
//
//     if($(this).attr('checked')) {
//         console.log('asdaas')
//         // something when checked
//     } else {
//         // something else when not
//     }
//
//
// });

console.log(liTest);


//
// });


