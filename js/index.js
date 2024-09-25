const donateButton = document.getElementById('donate-now');
donateButton.addEventListener('click', function(){
    let donationAmount =parseFloat(document.getElementById('donation-amount').value); 
    if(donationAmount > 0){
        const amount = parseFloat(document.getElementById('amount').innerText);
        let fixedAmount = amount - donationAmount;
        document.getElementById('amount').innerText =fixedAmount;
        const bdtSection =parseFloat(document.getElementById('bdt-section').innerText);
        let section= bdtSection + donationAmount; 
        document.getElementById('bdt-section').innerText = section;
    }
    else{
        alert('Invaild to the button')
    }

//  expensive button
const historyItem  =document.createElement('div');
historyItem.classList ='bg-white p-3 rounded-md border border-gray-500 mt-4';
historyItem.innerHTML =`
<p class=text-xl>${donationAmount.toFixed()}  Taka is Donated for famine-2024 at  Noakhali, Bangladesh</p>
<p class="text-xl text-gray-500">${new Date().toLocaleDateString()}</p>
`;
let historyContainer =document.getElementById('history-item');
historyContainer.insertBefore(historyItem, historyContainer.firstChild);
})

// Donate for Flood Relief in Feni button
const donateNow =document.getElementById('donate-button');
donateNow.addEventListener('click', function(){
    let selectAmount =parseFloat(document.getElementById('input-donation-amount').value);
    if(selectAmount > 0){
        const amount = parseFloat(document.getElementById('amount').innerText);
        let allAmount = amount - selectAmount;
        document.getElementById('amount').innerText =allAmount;
        const coinSection =parseFloat(document.getElementById('coin-section').innerText);
        let fixedSection = coinSection + selectAmount;
        document.getElementById('coin-section').innerText = fixedSection;

    }
    else{
        alert('invaild to the button');
    }


//  expensive button
const historyItem  =document.createElement('div');
historyItem.classList ='bg-white p-3 rounded-md border border-gray-500 mt-4';
historyItem.innerHTML =`
<p class=text-xl>${selectAmount.toFixed()} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
<p class="text-xl text-gray-500">${new Date().toLocaleDateString()}</p>
`;
let historyContainer =document.getElementById('history-item');
historyContainer.insertBefore(historyItem, historyContainer.firstChild);

})

// Aid for Injured in the Quota Movement donate button
const btnDonate =document.getElementById('btn-donate');
btnDonate.addEventListener('click', function(){
    let amountDonation =parseFloat(document.getElementById('amount-donation').value);
    if(amountDonation > 0){
        const amount = parseFloat(document.getElementById('amount').innerText);
        let fixedAmount = amount - amountDonation;
        document.getElementById('amount').innerText =fixedAmount;
        const countSection = parseFloat(document.getElementById('count-section').innerText);
        let fixedCount = countSection + amountDonation;
        document.getElementById('count-section').innerText = fixedCount;


    }
    else{
        alert('invaild to the button');
    }

    //  expensive button
const historyItem  =document.createElement('div');
historyItem.classList ='bg-white p-3 rounded-md border border-gray-500 mt-4';
historyItem.innerHTML =`
<p class=text-xl>${amountDonation.toFixed()}  Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
<p class="text-xl text-gray-500">${new Date().toLocaleDateString()}</p>
`;
let historyContainer =document.getElementById('history-item');
historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});



// --------------
const historyTab =document.getElementById('history-tab');
const assistantTab =document.getElementById('donation-tab');
historyTab.addEventListener('click', function(){

    historyTab.classList.add('bg-lime-500');
   assistantTab.classList.remove('bg-lime-500');
    
   document.getElementById('history-section').classList.add('hidden');
   document.getElementById('history-item').classList.remove('hidden');
   document.getElementById('footer button').classList.add('hidden');
})
 // ---------------------
assistantTab.addEventListener('click', function(){

    assistantTab.classList.add('bg-lime-500');

    historyTab.classList.remove('bg-lime-500');

    
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('history-item').classList.add('hidden');
    document.getElementById('footer button').classList.remove('hidden');
})

// ---------****-------



 