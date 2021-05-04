const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const price = document.getElementById('price');

const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;
var a=new Array(50);
const populateUI = () => {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        a[index]=1;
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  const selectedMoviePrice = localStorage.getItem('selectedMoviePrice');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }

  if (selectedMoviePrice !== null) {
    count.innerText = selectedSeats.length;
    price.innerText = selectedSeats.length * +selectedMoviePrice;
  }
};

populateUI();

selectedMovie = (movieIndex, moviePrice) => {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  if(movieIndex ==0)
        document.getElementById('moviename').value='Godzilla vs Kong';
        if(movieIndex ==1)
        document.getElementById('moviename').value='Master';
        if(movieIndex ==2)
        document.getElementById('moviename').value='KGF';
        if(movieIndex ==3)
        document.getElementById('moviename').value='Drishyam 2';
        if(movieIndex ==4)
        document.getElemntById('moviename').value='War';
  localStorage.setItem('selectedMoviePrice', moviePrice);
};
var tcount=document.querySelectorAll('.row .selected').length;
console.log(tcount);
const updateSelectedSeatsCount = () => {
    const selectedSeats = document.querySelectorAll('.row .selected');
    const selectedSeatsCount = selectedSeats.length;
  console.log(tcount);
    console.log(selectedSeats.length);
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
  count.innerText = selectedSeatsCount;
  document.getElementById('tot').value=(selectedSeatsCount-tcount);
  price.innerText = (selectedSeatsCount-tcount) * ticketPrice;
  document.getElementById('tamt').value=(selectedSeatsCount-tcount) * ticketPrice;
  if((selectedSeatsCount-tcount)==4)
  {
      alert("You can't book exceed 4 tickets");
      if(confirm("Are you ready to buy 4 tickets"))
      {
         return 0;
      }
  }
};

// Seat select event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedSeatsCount();
  }
});

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  selectedMovie(e.target.selectedIndex, e.target.value);
  updateSelectedSeatsCount();
});
var count1=0;
var s="";
for(var i=0;i<50;i++)
{
  if(a[i]>-1){
    s+=i.toString()+",";
  seats[i].classList.add('occupied');
  count1++;
  }
}
console.log(count1);
