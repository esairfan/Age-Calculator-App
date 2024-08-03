const dateinput = document.getElementById("date");
const contain = document.getElementById("container");
function CalculateAge() {
  const date = new Date();
  const target_date = new Date(dateinput.value);
  const years = date.getFullYear() - target_date.getFullYear();
  const months = date.getMonth() - target_date.getMonth();
  const days = date.getDate() - target_date.getDate();
  if (months < 0) {
    years--;
    months += 12;
  }
  if (days < 0) {
    months--;
    days += new Date(date.getFullYear, date.getMonth, 0).getDate;
  }
  const previousAgeElement = document.getElementById("age-element");
  if (previousAgeElement) {
    contain.removeChild(previousAgeElement);
  }
  const AgeElement = document.createElement("p");
  AgeElement.id = "age-element";
  AgeElement.innerHTML = `Current Age: ${years} years, ${months} months, ${days} days`;
  AgeElement.style.fontSize = "20px";
  AgeElement.style.textAlign = "center";
  AgeElement .style.margin = "20px auto";
  AgeElement.style.width = "100%";

  contain.appendChild(AgeElement); 
}
