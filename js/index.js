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

    //  expenses button
const historyItem  =document.createElement('div');
historyItem.classList ='bg-white p-3 rounded-md border border-gray-500';
historyItem.innerHTML =`
<p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
`;
let historyContainer =document.getElementById('history-item');
historyContainer.insertBefore(historyItem, historyContainer.firstChild);
})

// Donate for Flood Relief in Feni button
const donateBtn =document.getElementById('donate-button');
donateBtn.addEventListener('click', function(){
    let donatAmount =parseFloat(document.getElementById('donation-amount').value); 
    if(donatAmount > 0){
        const amount = parseFloat(document.getElementById('amount').innerText);
        let fixedAmount = amount - donatAmount;
        document.getElementById('amount').innerText =fixedAmount;
        const bdtSection =parseFloat(document.getElementById('bdt-section').innerText);
        let section= bdtSection + donatAmount; 
        document.getElementById('bdt-section').innerText = section;
    }
    else{
        alert('Invaild to the button')
    }
})



// --------------
const historyTab =document.getElementById('history-tab');
const assistantTab =document.getElementById('assistant-tab');
historyTab.addEventListener('click', function(){

    historyTab.classList.add('bg-lime-500');
   assistantTab.classList.remove('bg-lime-500');
    
   document.getElementById('history-section').classList.add('hidden');
   document.getElementById('history-item').classList.remove('hidden');
})
- // ---------------------
assistantTab.addEventListener('click', function(){

    assistantTab.classList.add('bg-lime-500');

    historyTab.classList.remove('bg-lime-500');

    
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('history-item').classList.add('hidden');
})



 